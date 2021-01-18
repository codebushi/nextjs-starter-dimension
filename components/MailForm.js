const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const errorStyle = {
  color: "orangered",
};
const errorBorder = {
  border: "solid orangered",
};
const nameLength = 5;
const msgLength = 40;

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
    this.textInput = React.createRef();
  }
  handleSubmission = (e) => {
    e.preventDefault();
    console.log("send to server");
  };

  checkIsValid = () => {
    let { name, email, message } = this.state.values;
    if (name.length === 0 || email.length === 0 || message.length == 0) {
      return false;
    }
    {
      let { name, email, message } = this.state.fieldErrors;
      if (name.length > 0 || email.length > 0 || message.length > 0) {
        return false;
      }
    }
    return true;
  };

  handleBlur = (e) => {
    // console.log("was blurred");
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let { fieldErrors } = this.state;
    switch (name) {
      case "name":
        if (value.length < nameLength) {
          this.setState((prevState) => ({
            fieldErrors: {
              ...prevState.fieldErrors,
              name: `name must be ${nameLength} chars long! ${
                value.length - nameLength
              } left`,
            },
          }));
        } else {
          this.setState((prevState) => ({
            fieldErrors: {
              ...prevState.fieldErrors,
              name: "",
            },
          }));
        }
        break;
      case "email":
        if ((fieldErrors.email = !validEmailRegex.test(value))) {
          this.setState((prevState) => ({
            fieldErrors: {
              ...prevState.fieldErrors,
              email: "email is not valid!",
            },
          }));
        } else {
          this.setState((prevState) => ({
            fieldErrors: {
              ...prevState.fieldErrors,
              email: "",
            },
          }));
        }
        break;
      case "message":
        if (value.length < msgLength) {
          this.setState((prevState) => ({
            fieldErrors: {
              ...prevState.fieldErrors,
              message: `project description must be ${msgLength} chars long!  ${
                value.length - msgLength
              } left`,
            },
          }));
        } else {
          this.setState((prevState) => ({
            fieldErrors: {
              ...prevState.fieldErrors,
              message: "",
            },
          }));
        }
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
  handleInvalid = (e) => {
    e.preventDefault();
    alert(
      "the form is invalid, please try again to fill out the form, all fields must be valid"
    );
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //     if (
  //       nextProps.FormIsOpen === true &&
  //       nextProps.FormIsOpen !== prevState.FormIsOpen
  //     ) {
  //       // this.textInput.current.focus();
  //       return {FormIsOpen: true}
  //     } else return {FormIsOpen: false}
  // }

  componentDidUpdate(prevProps, nextState) {
    console.log("component did updata called");
    // console.log("did update nextPrps", prevProps.FormIsOpen);
    // console.log("did update nextState", nextState);
    if (
      prevProps.FormIsOpen === true &&
      prevProps.FormIsOpen !== nextState.FormIsOpen
    ) {
      this.setState({ FormIsOpen: true });
      this.textInput.current.focus();
    }
    // return null;
  }

  render() {

    const { name, email, message } = this.state.values;
    const { fieldErrors } = this.state;
    return (
      <form noValidate method="post" action="#">
        <div className="field half first">
          <label
            style={fieldErrors.name.length > 0 ? errorStyle : {}}
            htmlFor="name"
          >
            Name
          </label>
          <input
            ref={this.textInput}
            // autoFocus
            onBlur={this.handleBlur}
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            style={fieldErrors.name.length > 0 ? errorBorder : {}}
          />
          <div
            style={fieldErrors.name.length > 0 ? errorStyle : {}}
            className="error-msg"
          >
            {fieldErrors.name.length > 0 ? fieldErrors.name : "full name"}
          </div>
        </div>
        <div className="field half">
          <label
            style={fieldErrors.email.length > 0 ? errorStyle : {}}
            htmlFor="email"
          >
            Email
          </label>
          <input
            onBlur={this.handleBlur}
            value={email}
            onChange={this.handleChange}
            type="text"
            name="email"
            id="email"
            style={fieldErrors.email.length > 0 ? errorBorder : {}}
          />
          <div
            style={fieldErrors.email.length > 0 ? errorStyle : {}}
            className="error-msg"
          >
            {fieldErrors.email.length > 0 ? fieldErrors.email : "valid email"}
          </div>
        </div>
        <div className="field">
          <label
            style={fieldErrors.message.length > 0 ? errorStyle : {}}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            onBlur={this.handleBlur}
            value={message}
            onChange={this.handleChange}
            name="message"
            id="message"
            rows="4"
            style={fieldErrors.message.length > 0 ? errorBorder : {}}
          ></textarea>
          <div
            style={fieldErrors.message.length > 0 ? errorStyle : {}}
            className={"error-msg"}
          >
            {fieldErrors.message.length > 0
              ? fieldErrors.message
              : "project description"}
          </div>
        </div>
        <ul className="actions">
          <li>
            {this.checkIsValid() ? (
              <input
                onClick={this.handleSubmission}
                type="submit"
                value={"Submit ✔"}
                className="special"
              />
            ) : (
              <input
                style={{ background: "red" }}
                onClick={this.handleInvalid}
                type="submit"
                value={"Invalid ✘"}
                className="special"
              />
            )}
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
