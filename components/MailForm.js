import { ToastContainer, toast, Zoom, cssTransition } from "react-toastify";
import Select from "./Select";
import PhoneNumber from "./Phone";
import PaymentForm from "./Payment";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const bounce = cssTransition({
  enter: "animate__animated animate__rubberBand",
  exit: "animate__animated animate__zoomOut",
});

const errorStyle = {
  color: "orangered",
};
const successStyle = {
  color: "rgb(156 205 247)",
};
const successBorder = {
  border: "5px solid rgb(156 205 247)",
  background: "#E8F0F0",
  color: "black",
};

const errorBorder = {
  border: "solid orangered",
};

const nameLength = 5;
const msgLength = 40;

const InitialData = {
  // currentStep: 1,
  categories:[],
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
    this.toastId = React.createRef();
  }

  setToast = (status) => {
    console.log("setToast called with status = ", status);
    switch (status) {
      case "warning":
        toast.warn(
          `${status}: form fields not valid, please fill out all fields correctly`
        );
        break;
      case "pending":
        console.log("reached pending");
        this.toastId.current = toast(
          `${status}: sending your details, please wait`,
          { autoClose: false }
        );
        break;
      case "success":
        console.log("reached success");
        toast.update(this.toastId.current, {
          type: toast.TYPE.INFO,
          render: `${status}: recieved your details, please check your email or spambox if youve not recieved anything`,
          autoClose: 5000,
        });
        break;
      case "error":
        console.log("reached error");
        toast.error(`${status}: please try again`);
        break;
      default:
        console.log("reached default");
        break;
    }
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.setToast("pending");
    const theHosting = "http://localhost:4000";
    const { name, email, message } = this.state.values;
    fetch(
      `${theHosting}/send-email?sender=${email}&topic=${name}&text=${message}`
    )
      .then((msg) => msg.json())
      // .then(() => new Promise((resolve) => setTimeout(resolve, 2000)))
      .then((data) => {
        console.log(data);
        this.setToast(data.status);
        this.setState(InitialData);
      })
      .then(() => console.log("resolved everything"))
      .catch((err) => {
        console.error("err", err);
        this.setToast("error");
      });
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
    console.log(this.state.currentStep,"the currentStep")
    // const { name, email, message } = this.state.values;
    let currentStep=this.state.currentStep
    if(currentStep===1){
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          name: '',
          email:''
        },
      }));
    }
    if(currentStep===2){
      this.setState({categories:[]})
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          message: '',
        },
      }));
    }

    
    // this.setState(InitialData);
    // this.textInput.current.focus();
  };

  handleInvalid = (e) => {
    e.preventDefault();
    this.setToast("warning");
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

  // componentDidUpdate(prevProps, nextState) {
  //   if (!this.props.FormIsOpen && this.state.FormIsOpen) {
  //     this.setState({ FormIsOpen: false });
  //   }
  //   if (
  //     prevProps.FormIsOpen === true &&
  //     prevProps.FormIsOpen !== nextState.FormIsOpen
  //   ) {
  //     this.setState({ FormIsOpen: true });
  //     this.textInput.current.focus();
  //   }
  //   return null;
  // }
  focusHandler = (e) => {
    console.log(e.target);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <li>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this._prev}
          >
            Previous
          </button>
        </li>
      );
    }
    return null;
  }
  runStepProp(step) {
    let { name, email, message } = this.state.values;
    if (step === 1) {
      if (name.length === 0 || email.length === 0) {
        return true;
      }
      {
        let { name, email } = this.state.fieldErrors;
        if (name.length > 0 || email.length > 0) {
          return true;
        }
      }
      return false;
    }
   if(step===2){
    if (message.length === 0) {
      return true;
    }
    {
      let { message } = this.state.fieldErrors;
      if (message.length > 0) {
        return true;
      }
    }
    return false;
   }   
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <li>
          <button
            className="btn btn-primary float-right"
            type="button"
            onClick={this._next}
            // disabled
            disabled={this.runStepProp(currentStep)}
          >
            Next
          </button>
        </li>
      );
    }
    return null;
  }

  componentDidMount() {
    let first={ value: 'front end development', label: 'Front End' }
    let second={ value: 'full stack development', label: 'Full Stack' }


    this.setState({currentStep: 1 });
    this.setState({categories:[first, second]})
  }

  render() {
    // const theStep = this.state.currentStep;
    const { name, email, message } = this.state.values;
    const { fieldErrors } = this.state;
    return (
      <>
        <ToastContainer transition={Zoom} />

        <div className="wizard_horizontal">
          <ul className="wizard_steps">
            <li>
              <a className="step_bubbles" href="#step-1">
                <span className="step_no">1</span>
                <span className="step_descr">
                  Step 1<br />
                </span>
              </a>
            </li>
            <li>
              <a className="step_bubbles" href="#step-2">
                <span className="step_no">2</span>
                <span className="step_descr">
                  Step 2<br />
                </span>
              </a>
            </li>
            <li>
              <a className="step_bubbles" href="#step-3">
                <span className="step_no">3</span>
                <span className="step_descr">
                  Step 3<br />
                </span>
              </a>
            </li>
            <li>
              <a className="step_bubbles" href="#step-4">
                <span className="step_no">4</span>
                <span className="step_descr">
                  Step 4<br />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form noValidate method="post" action="#">
          <div className="form-steps">
            <Step1
              email={email}
              name={name}
              fieldErrors={fieldErrors}
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              values={this.state.values}
              handleBlur={this.handleBlur}
              // email={this.state.email}
            />
            <Step2
              categories={this.state.categories}
              currentStep={this.state.currentStep}
              // handleChange={this.handleChange}
              // username={this.state.username}
              fieldErrors={fieldErrors}
              handleChange={this.handleChange}
              values={this.state.values}
              handleBlur={this.handleBlur}
              message={message}
            />
            <Step3
              currentStep={this.state.currentStep}
              // handleChange={this.handleChange}
              // password={this.state.password}
            />
          </div>
          <div className="action buttons">
            <ul className="actions">
              <li>
                {this.checkIsValid() ? (
                  <input
                    onClick={this.handleSubmission}
                    type="submit"
                    value={"Submit"}
                    className="submit"
                  />
                ) : (
                  <div
                    onClick={() =>
                      console.log("he tried to submit a disabled form")
                    }
                  >
                    <input
                      disabled
                      type="submit"
                      value={"Submit"}
                      className="submit"
                    />
                  </div>
                )}
              </li>
              <li>
                <input onClick={this.reset} type="reset" value="Reset" />
              </li>
              {this.previousButton()}
              {this.nextButton()}
            </ul>
          </div>
        </form>
      </>
    );
  }
}

function Step1(props) {
  let fieldErrors = props.fieldErrors;
  let name = props.name;
  let email = props.email;
  let values = props.values;
  let handleBlur = props.handleBlur;
  let handleChange = props.handleChange;
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <>
      <div className="field half first">
        <label
          // style={fieldErrors.name.length > 0 ? errorStyle : {}}
          style={
            fieldErrors.name.length > 0 || values.name.length < 1
              ? {}
              : successStyle
          }
          htmlFor="name"
        >
          Full Name
          {name !== "" && fieldErrors.name.length < 1 ? (
            <span style={successStyle}>✔</span>
          ) : null}
        </label>
        <input
          //will need to fix this later
          // ref={this.textInput}
          // autoFocus
          // onFocus={(e) => this.focusHandler(e)}
          onBlur={handleBlur}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          style={
            fieldErrors.name.length > 0 || values.name.length < 1
              ? {}
              : successBorder
          }
        />
        <div className="error-msg">
          {fieldErrors.name.length > 0 ? fieldErrors.name : "full name"}
        </div>
      </div>
      <div className="field half">
        <label
          style={
            fieldErrors.email.length > 0 || values.email.length < 1
              ? {}
              : successStyle
          }
          htmlFor="email"
        >
          Email
          {email !== "" && fieldErrors.email.length < 1 ? (
            <span style={successStyle}>✔</span>
          ) : null}
        </label>
        <input
          // onFocus={(e) => this.focusHandler(e)}
          onBlur={handleBlur}
          value={email}
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          style={
            fieldErrors.email.length > 0 || values.email.length < 1
              ? {}
              : successBorder
          }
        />
        <div className="error-msg">
          {fieldErrors.email.length > 0 ? fieldErrors.email : "valid email"}
        </div>
      </div>
    </>
  );
}

function Step2(props) {
  let fieldErrors = props.fieldErrors;
  let message = props.message;
  let values = props.values;
  let handleBlur = props.handleBlur;
  let handleChange = props.handleChange;
  let categories = props.categories;

  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <>
      <div className="field">
        <label
          style={
            fieldErrors.message.length > 0 || values.message.length < 1
              ? {}
              : successStyle
          }
          htmlFor="message"
        >
          Project Categories
          {message !== "" && fieldErrors.message.length < 1 ? (
            <span style={successStyle}>✔</span>
          ) : null}
        </label>
        <Select categories={props.categories}/>
      </div>
      <div className="field">
        <label
          style={
            fieldErrors.message.length > 0 || values.message.length < 1
              ? {}
              : successStyle
          }
          htmlFor="message"
        >
          Message
          {message !== "" && fieldErrors.message.length < 1 ? (
            <span style={successStyle}>✔</span>
          ) : null}
        </label>
        <textarea
          // onFocus={(e) => this.focusHandler(e)}
          onBlur={handleBlur}
          value={message}
          onChange={handleChange}
          name="message"
          id="message"
          rows="4"
          style={
            fieldErrors.message.length > 0 || values.message.length < 1
              ? {}
              : successBorder
          }
        ></textarea>
        <div className={"error-msg"}>
          {fieldErrors.message.length > 0
            ? fieldErrors.message
            : "project description"}
        </div>
      </div>
    </>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      {/* <PhoneNumber/> */}
      <PaymentForm />
    </React.Fragment>
  );
}

export default MailForm;
