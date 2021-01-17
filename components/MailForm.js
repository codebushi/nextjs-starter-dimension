// import { useState, useEffect, useRef } from "react";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const InitialData = {
  values: {
    name: "",
    email: "",
    message: "",
  },
  fieldErrors: {
    name: "",
    email: "",
    message: "",
  },
};
class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = InitialData;
  }
  componentDidMount() {
    this.name.focus();
    console.log("mounted form");
  }

  handleBlur = (e) => {
    console.log(e.target);
    console.log("was blurred");
  };

  handleChange = (e) => {
    e.preventDefault;
    const { name, value } = e.target;
    let { fieldErrors } = this.state;
    switch (name) {
      case "name":
        fieldErrors.name = value.length < 5 ? "name must be 5 chars long!" : "";
        break;
      case "email":
        fieldErrors.email = !validEmailRegex.test(value)
          ? "email is not valid!"
          : "";
        break;
      case "message":
        fieldErrors.message =
          value.length < 10 ? "project description must be 10 chars long!" : "";

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
  reset = () => {
    this.setState(InitialData);
  };
  render() {
    const { name, email, message } = this.state.values;
    const { fieldErrors } = this.state;
    return (
      <form noValidate method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input
            ref={(input) => {
              this.name = input;
              console.log(input, "the name");
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
          <div style={{ fontSize: "70%" }} className="error">
            {fieldErrors.name.length > 0 ? fieldErrors.name : "Your full name"}
          </div>
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
          <div style={{ fontSize: "70%" }} className="error">
            {fieldErrors.email.length > 0
              ? fieldErrors.email
              : "enter a valid email"}
          </div>
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
          <div style={{ fontSize: "70%" }} className="error">
            {fieldErrors.message.length > 0
              ? fieldErrors.message
              : "describe your project"}
          </div>
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
            <input onClick={this.reset} type="reset" value="Reset" />
          </li>
        </ul>
      </form>
    );
  }
}
export default MailForm;
