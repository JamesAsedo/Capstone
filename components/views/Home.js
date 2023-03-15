import html from "html-literal";

export default state => html`
  <main>
    <div class="main-content"></div>
  </main>

  <h3>Today's Weather</h3>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelslike}F.
  </h3>
  <div>
    <form>
      <label for="zip-code">Zip Code:</label>
      <input type="text" id="zipInput" name="zipInput" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <div>${JSON.stringify(state.tableData)}</div>
`;
