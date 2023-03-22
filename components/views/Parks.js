import html from "html-literal";

export default state => html`
  <div>
    <form>
      <label for="zip-code">Zip Code:</label>
      <input type="text" id="zipInput" name="zipInput" />
      <button type="submit">Submit</button>
    </form>
  </div>

  <main>
    Woof
  </main>
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
`;
