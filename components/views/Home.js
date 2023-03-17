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
      <label for="searchCategory"></label>
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
  <!-- <div>${JSON.stringify(state.tableData)}</div> -->
  <table id="results">
    ${state.yelpArray
      .map(entry => {
        return html`
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <td>${entry.name}</td>
          <td><img src=${entry.image} /></td>
          <td>${entry.location.display_address}</td>
          <td>${entry.display_phone}</td>
        `;
      })
      .join("")}
  </table>
`;
