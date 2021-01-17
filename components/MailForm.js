// import { useState, useEffect, useRef } from "react";
class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        email: "",
        message: "",
      },
    };
  }
  componentDidMount() {
    this.name.focus();
  }
  handleBlur = (e) => {
    console.log(e.target);
    console.log("was blurred");
  };

  handleChange = (e) => {
    e.preventDefault;
    const { name, value } = e.target;
    // const val = e.target.value;
    // let values = this.state.values
    // console.log(val);
    switch (name) {
      case "name":
        console.log("name", name);
        break;
      case "email":
        console.log("name", name);
        break;
      case "message":
        console.log("name", name);
        break;
      default:
        break;
    }
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };
  render() {
    const { name, email, message } = this.state.values;
    return (
      <form method="post" action="#">
        <div className="field half first">
          <div id="name-error"></div>
          <label htmlFor="name">Name</label>
          <input
            ref={(input) => {
              this.name = input;
              console.log(input, "the name")
            }}
            // autoFocus
            onBlur={this.handleBlur}
            value={name}
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
            onBlur={this.handleBlur}
            value={email}
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
            onBlur={this.handleBlur}
            value={message}
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
              value="Submit"
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
