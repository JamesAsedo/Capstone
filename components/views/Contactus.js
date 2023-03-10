import html from "html-literal";

export default () => html`
  <main>
    <form method="POST" action="https://formspree.io/f/mpzerkyd">
      <h2>Contact Us</h2>
      <div>
        <label for="customer">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
      </div>
      <div>
        <label for="msg">Enter your message:</label>
        <textarea name="msg" id="msg" cols="30" rows="15"></textarea>
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </main>
`;
