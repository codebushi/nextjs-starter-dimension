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
const msgLength = 20;

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
  FormIsOpen: false,
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
    console.log("check validity");
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
    console.log(e.target);
    console.log("was blurred");
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let { fieldErrors } = this.state;
    switch (name) {
      case "name":
        fieldErrors.name =
          value.length < nameLength
            ? `name must be ${nameLength} chars long!`
            : "";
        break;
      case "email":
        fieldErrors.email = !validEmailRegex.test(value)
          ? "email is not valid!"
          : "";
        break;
      case "message":
        fieldErrors.message =
          value.length < msgLength
            ? `project description must be ${msgLength} chars long!`
            : "";

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
  handleInvalid=(e)=>{
    e.preventDefault()
    alert('the form is invalid, please try again to fill out the form, all fields must be valid')}
  // componentDidUpdate(prevProps, state) {
  //      if(this.props.FormIsOpen){
  //     this.textInput.current.focus();
  //   }
  // }
  render() {
    // if(this.props.FormIsOpen){
    //   console.log('focus the input ref')
    //   this.textInput.current.focus();
    // }
    const { name, email, message } = this.state.values;
    const { fieldErrors } = this.state;
    return (
      <form
        // onClick={this.focusTextInput}
        noValidate
        method="post"
        action="#"
      >
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
                style={{background:'red'}}
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
