import html from "html-literal";
import kobePic from "/assets/Kobe Pic.jpeg";

export default state => html`
  <!-- <h3>Today's Weather</h3>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelslike}F.
  </h3> -->
  <div>
    <form>
      <label for="searchCategory">What are you looking for?</label>
      <select name="category" id="category">
        <option value="">--Please choose a category--</option>
        <option value="Restaurants">Restaurants</option>
        <option value="Parks">Parks</option>
        <option value="Services">Services</option>
      </select>
      <label for="zip-code">Zip Code:</label>
      <input type="text" id="zipInput" name="zipInput" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <div class="background"></div>
`;
