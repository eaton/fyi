---
id: page.contact
name: Contact
description: Getting in touch
permalink: /contact/

eleventyNavigation:
  order: 100
  key: Contact
---
<form id="contact-form" name="eatonfyi-contact" class="contact-form" method="POST" action="/" data-netlify="true" netlify-honeypot="Notes">
	<input type="hidden" name="form-name" value="eatonfyi-contact" />

  <p>
    <label for="Name">Your name (required):</label>
    <input type="text" id="Name" name="Name" required>
  </p>

  <p>
    <label for="Email">Your email address (required):</label>
    <input type="email" id="Email" name="Email" placeholder="name@example.com" required>
  </p>

  <p>
    <label for="Subject">What do you need?</label>
    <select id="Subject" name="Subject" required>
    <option>Commiseration</option>
    <option>Speaking or Presenting</option>
    <option>Coaching or Consulting</option>
    <option>A Mess Untangled</option>
    </select>
  </p>

  <p>
    <label for="message">How can I help?</label>
    <textarea id="message" name="message" rows="10"></textarea>
  </p>

  <button type="submit">Send</button>
</form>
