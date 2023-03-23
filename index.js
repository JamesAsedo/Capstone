import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Home") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      console.log(event.target);
      const category = event.target.elements.category.value;
      const zipCode = event.target.elements.zipInput.value;
      console.log("category", category);
      console.log("zip code", zipCode);
      // const url = `http://localhost:4040/yelp?location=${zipCode}&attributes=dogs_allowed&term=${category}+dog`;
      const url = `https://james-a-fs-web-development-capstone.onrender.com/yelp?location=${zipCode}&attributes=dogs_allowed&term=${category}+dog`;
      axios.get(url).then(response => {
        store[category].yelpArray = response.data;
        // let yelpArray = [];
        // console.log(yelpArray);
        // console.log(response.data);

        router.navigate(`/${category}`);
      });
    });
  }
  // if (state.view === "Parks") {
  //   document.querySelector("form").addEventListener("submit", event => {
  //     event.preventDefault();
  //     const zipCode = event.target.elements.zipInput.value;
  //     console.log("zip code", zipCode);
  //     const url = `http://localhost:4040/yelp?location=${zipCode}&attributes=dogs_allowed&term=parks+dogs`;
  //     axios.get(url).then(response => {
  //       store.Parks.yelpArray = response.data;
  //       let yelpArray = [];
  //       console.log(yelpArray);
  //       // console.log(response.data);
  //       router.navigate("/Parks");
  //     });
  //   });
  // }
  // if (state.view === "Restaurants") {
  //   document.querySelector("form").addEventListener("submit", event => {
  //     event.preventDefault();
  //     const zipCode = event.target.elements.zipInput.value;
  //     console.log("zip code", zipCode);
  //     const url = `http://localhost:4040/yelp?location=${zipCode}&attributes=dogs_allowed&term=restaurants+dog-friendly`;
  //     axios.get(url).then(response => {
  //       store.Restaurants.yelpArray = response.data;
  //       let yelpArray = [];
  //       console.log(yelpArray);
  //       // console.log(response.data);
  //       router.navigate("/Restaurants");
  //     });
  //   });
  // }
  // if (state.view === "Services") {
  //   document.querySelector("form").addEventListener("submit", event => {
  //     event.preventDefault();
  //     const zipCode = event.target.elements.zipInput.value;
  //     console.log("zip code", zipCode);
  //     const url = `http://localhost:4040/yelp?location=${zipCode}&attributes=dogs_allowed&term=dog+grooming+training+clinic+supplies`;
  //     axios.get(url).then(response => {
  //       store.Services.yelpArray = response.data;
  //       let yelpArray = [];
  //       console.log(yelpArray);
  //       // console.log(response.data);
  //       router.navigate("/Services");
  //     });
  //   });
  // }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
