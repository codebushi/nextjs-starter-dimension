import { useState } from "react";
const MailForm = () => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form method="post" action="#">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input onChange={handleInputChange} type="text" name="name" id="name" required />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input onChange={handleInputChange} type="text" name="email" id="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea onChange={handleInputChange} name="message" id="message" rows="4" required></textarea>
      </div>
      <ul className="actions">
        <li>
          <input onClick={handleSubmit} type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
  );
};

export default MailForm;
