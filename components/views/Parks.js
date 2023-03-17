import html from "html-literal";

export default state => html`
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
          <td>${entry.name}</td>
          <td><img src=${entry.image} /></td>
          <td>${entry.location.display_address}</td>
          <td>${entry.display_phone}</td>
        `;
      })
      .join("")}
  </table>
`;
