import html from "html-literal";
import kobePic from "/assets/Kobe Pic.jpeg";

export default state => html`
  <main class="grid">
    <div class="background"></div>
    <div class="homePage">
      <form>
      <div class="label">
          <label for="searchCategory">What are you looking for?</label>
          <select name="category" id="category">
            <option value="">--Please choose a category--</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Parks">Parks</option>
            <option value="Services">Services</option>
          </select>
        </div>
        <div class="label">
          <label for="zip-code">City or Zip Code:</label>
          <input type="text" id="zipInput" name="zipInput" />
          <button type="submit">Submit</button></div>
        </div>
        <div></div>
      </form>
    </div>
  </main>
`;
