import html from "html-literal";
import kobePic3 from "/assets/Kobe bee.jpeg";

export default state => html`
  <main class="pageHeader">
    Woof!
  </main>

  <div>
  <form class="pageForm">
      <label for="zip-code">Zip Code or City:</label>
      <input type="text" id="zipInput" name="zipInput" />
      <button type="submit">Submit</button>
    </form>
  </div>

  <div id="results-container">
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
            <td><img class="resultsImg" src="${entry.image_url}" /></td>
            <td>${entry.name}</td>
            <td>${entry.location.display_address}</td>
            <td>${entry.display_phone}</td>
          `;
        })
        .join("")}
    </table>
    <div id="no-service-results" alt="No results"></div>
  </div>
`;
