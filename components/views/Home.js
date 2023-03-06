import html from "html-literal";

export default state => html`
  <main>
    <div class="main-content">
      <img id="dog-picture" src=""/>
    </div>
  </main>

  <h3>Today's Weather</h3>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelslike}F.
  </h3>
`;
