import React from "react";

function Form() {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Full name" className="input" />
      <input type="email" placeholder="Email address" className="input" />
      <input type="text" placeholder="Phone number" className="input" />
      <textarea placeholder="Your message" className="textarea mb-2" />
      <button className="btn self-start" type="submit">
        Send message
      </button>
    </form>
  );
}

export default Form;
