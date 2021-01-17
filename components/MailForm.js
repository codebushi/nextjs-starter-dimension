// import { useState, useEffect, useRef } from "react";
class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange=(e)=>{
    e.preventDefault
    const name=e.target.name
    const val=e.target.value
    console.log(name)
    console.log(val)

  }
  render() {
    return (
      <form method="post" action="#">
        <div className="field half first">
          <div id="name-error"></div>
          <label htmlFor="name">Name</label>
          <input
            // ref={}
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            onChange={this.handleChange}
            name="message"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>
        <ul className="actions">
          <li>
            <input
              onClick={null}
              type="submit"
              value="Send Message"
              className="special"
            />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
    );
  }
}
export default MailForm;
