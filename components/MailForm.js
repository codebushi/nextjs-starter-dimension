import { ToastContainer, toast, Zoom, cssTransition } from "react-toastify";
import Select from "./Select";
var TheNumber = require( 'awesome-phonenumber' );
import PhoneNumber from "./Phone";
import PaymentForm from "./Payment";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const bounce = cssTransition({
  enter: "animate__animated animate__rubberBand",
  exit: "animate__animated animate__zoomOut",
});

const successStyle = {
  color: "rgb(156 205 247)",
};
const successBorder = {
  border: "5px solid rgb(156 205 247)",
  background: "#E8F0F0",
  color: "black",
};

const nameLength = 3;
const msgLength = 40;

const InitialData = {
  // currentStep: 1,
  // categories: [],
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
              name: `${nameLength-value.length} left`,
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
              email: "is not valid!",
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
              message: `The description is too short, add another  ${
                msgLength - value.length
              } characters`,
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
    // console.log(this.state.currentStep, "the currentStep");
    // const { name, email, message } = this.state.values;
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          name: "",
          email: "",
        },
      }));
    }
    if (currentStep === 2) {
      // console.log("step is 2");
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          message: "",
        },
      }));
      this.setState({ multiValue: [] });
      this.setState({ selectBoxError: true });
    }

    if(currentStep ===3){
      this.setState({phone:''})
      this.setState({isPossiblePhone:false})
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

  componentDidUpdate(prevProps, nextState) {
    if (!this.props.FormIsOpen && this.state.FormIsOpen) {
      this.setState({ FormIsOpen: false });
    }
    if (
      prevProps.FormIsOpen === true &&
      prevProps.FormIsOpen !== nextState.FormIsOpen
    ) {
      this.setState({ FormIsOpen: true });
      // this.textInput.current.focus();
    }
    return null;
  }



  focusHandler = (e) => {
    console.log(e.target);
  };

  _next = () => {
    let currentStep = this.state.currentStep+1;
    // currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep-1;
    // currentStep = currentStep <= 1 ? 1 : currentStep - 1;
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
            className=""
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
    let {phone, isPossiblePhone} = this.state
    //console.log('phone= ', phone)
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
    if (step === 2) {
      if (
        message.length === 0 ||
        this.state.selectBoxError ||
        this.state.multiValue.length < 1
      ) {
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
    if (step === 3) {
      if (
        !phone || phone.length === 0 || !isPossiblePhone
      ) {
        return true;
      }
      return false;
    }
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    //console.log('next run with currentStep: ', currentStep)
    if (currentStep < 4) {
      return (
        <li>
          <button
            className=""
            type="button"
            onClick={this._next}
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
    this.setState({ currentStep: 1 });
    let filterOptions = [
      { value: "marketing", label: "Marketing" },
      { value: "design", label: "Design" },
      { value: "seo", label: "SEO" },
      { value: "php", label: "PHP" },
      { value: "node js", label: "Node Js" },
    ];
    this.setState({ filterOptions });
    this.setState({ multiValue: [] });
  }

  checkMulti = () => {
    if (this.state.multiValue.length < 1) {
      this.setSelectError();
    } else {
      this.setState({ selectBoxError: false });
    }
  };

  handleMultiChange = (option) => {
    this.setState((state) => {
      return {
        multiValue: option,
      };
    }, this.checkMulti);
    // console.log('handleMultiCalled')
    // console.log(this.state.multiValue)
  };

  setSelectError = () => {
    this.setState({ selectBoxError: true });
  };


  handleOnPhoneChange = (value, countryData) => {
    //console.log(countryData.countryCode, 'countryData')
    let pn= new TheNumber( '+'+value, countryData.countryCode );
    //console.log(value, 'value')
    let isPossiblePhone=pn.isPossible()
    this.setState({ phone: value, isPossiblePhone});
  };

  setCreditValue = (e) => {
    console.log(e.target)
  }

  render() {
    // console.log(this.state.categories,"cats")
    // const theStep = this.state.currentStep;
    const { name, email, message } = this.state.values;
    const { fieldErrors } = this.state;
    return (
      <>
        <ToastContainer transition={Zoom} />
        <div className="wizard_horizontal">
          <ul className="wizard_steps">
            <li>
              <a className={`step_bubbles`} href="#step-1">
                <span
                  className={`step_no ${this.state.currentStep ? "done" : ""}`}
                >
                  1
                </span>
                <span
                  style={
                    this.state.currentStep === 1 ? { color: "white" } : null
                  }
                  className="step_descr"
                >
                  Name
                  <br />
                </span>
              </a>
            </li>
            <li>
              <a className={`step_bubbles`} href="#step-2">
                <span
                  className={`step_no ${
                    this.state.currentStep > 1 ? "done" : ""
                  }`}
                >
                  2
                </span>
                <span
                  style={
                    this.state.currentStep === 2 ? { color: "white" } : null
                  }
                  className="step_descr"
                >
                  Details
                  <br />
                </span>
              </a>
            </li>
            <li>
              <a className={`step_bubbles`} href="#step-3">
                <span
                  className={`step_no ${
                    this.state.currentStep > 2 ? "done" : ""
                  }`}
                >
                  3
                </span>
                <span
                  style={
                    this.state.currentStep === 3 ? { color: "white" } : null
                  }
                  className="step_descr"
                >
                  Phone
                  <br />
                </span>
              </a>
            </li>
            <li>
              <a className={`step_bubbles`} href="#step-4">
                <span
                  className={`step_no ${
                    this.state.currentStep > 3 ? "done" : ""
                  }`}
                >
                  4
                </span>
                <span
                  style={
                    this.state.currentStep === 4 ? { color: "white" } : null
                  }
                  className="step_descr"
                >
                  Finish
                  <br />
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
            />
            <Step2
              selectBoxError={this.state.selectBoxError}
              setSelectError={this.setSelectError}
              currentStep={this.state.currentStep}
              handleMultiChange={this.handleMultiChange}
              filterOptions={this.state.filterOptions}
              multiValue={this.state.multiValue}
              fieldErrors={fieldErrors}
              handleChange={this.handleChange}
              values={this.state.values}
              handleBlur={this.handleBlur}
              message={message}
            />
            <Step3
              isPossiblePhone={this.state.isPossiblePhone}
              phoneNumber={this.state.phone}
              handleOnPhoneChange={this.handleOnPhoneChange}
              currentStep={this.state.currentStep}
            />

            <Step4
              setCreditValue={this.setCreditValue}
              currentStep={this.state.currentStep}
            />
          </div>
          <div className="action-buttons">
            <ul className="actions">
            {this.state.currentStep <4 && (
              <li>
                {/* <input onClick={this.reset} type="reset" value="Reset" /> */}
                <button tabIndex={1} className="" type="button" onClick={this.reset}>
                  Reset
                </button>
              </li> ) }
              {this.previousButton()}
              {this.nextButton()}
              {this.state.currentStep === 4 && (
                <li>
                  <button
                    onClick={this.handleSubmission}
                    type="submit"
                    className="submit"
                  >Submit</button>
                </li>
              )}
              {/* 
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
            
             */}
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
      <div className="field half first first-page">
        <label
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
          ) : null}{" "}
          -{" "}
          <span className="error-msg">
            {name !== "" && fieldErrors.name.length > 0
              ? fieldErrors.name
              : "full name"}
          </span>
        </label>
        <div className="field-wrap">
        <input
          //will need to fix this later
          // ref={this.textInput}
          // autoFocus
          // onFocus={(e) => this.focusHandler(e)}
          // className="field__input"
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
        <span className="field__counter">{name.length}</span>
        </div>
      </div>
      <div className="field half first-page">
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
          ) : null}{" "}
          -{" "}
          <span className="error-msg">
            {email !== "" && fieldErrors.email.length > 0
              ? fieldErrors.email
              : "valid email"}
          </span>
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
      </div>
    </>
  );
}

function Step2(props) {
  // let fieldErrors = props.fieldErrors;
  // let message = props.message;
  // let values = props.values;
  // let handleBlur = props.handleBlur;
  // let handleChange = props.handleChange;
  // let selectBoxError = props.selectBoxError
  // let multiValue = props.multiValue
  let {
    multiValue,
    selectBoxError,
    handleChange,
    handleBlur,
    values,
    message,
    fieldErrors,
    setSelectError,
    handleMultiChange,
    filterOptions,
  } = props;
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <div className="field">
        <label
          style={selectBoxError || multiValue.length < 1 ? {} : successStyle}
          htmlFor="categories"
        >
          Project Categories
          {/* <span className={"error-msg"}> */}
          <span className={""}>
            {selectBoxError == undefined ? (
              "- choose a category"
            ) : selectBoxError && multiValue.length < 1 ? (
              "- pick at least one project category"
            ) : (
              <span
                style={successStyle}
              >{`- ${multiValue.length} selected ✔`}</span>
            )}
          </span>
        </label>    
        <Select
          setSelectError={setSelectError}
          handleMultiChange={handleMultiChange}
          filterOptions={filterOptions}
          multiValue={multiValue}
        />
      </div>
      <div className="field">
        <label
          style={
            fieldErrors.message.length > 0 || values.message.length < 1
              ? {}
              : successStyle
          }
          htmlFor="project description"
        >
          Project description
          {message !== "" && fieldErrors.message.length < 1 ? (
            <span style={successStyle}>✔</span>
          ) : null}{" "}
          -{" "}
          {/* <span className={"error-msg"}> */}
          <span className={""}>
            {message !== "" && fieldErrors.message.length > 0
              ? fieldErrors.message
              : "project description"}
          </span>
        </label>
        <div className="field-wrap">
        <span className="field__counter message_counter">{message.length}</span>
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
    <div className="field">
    <label
          style={!props.isPossiblePhone || props.phoneNumber.length < 1 ? {} : successStyle}
          htmlFor="categories"
          htmlFor="phone number"
        >
          Phone number {props.isPossiblePhone?'is good ✔':'- enter a valid number'}
        </label>
    <PhoneNumber phone={props.phoneNumber} handleOnPhoneChange={props.handleOnPhoneChange}/>
    </div>
  );
}


function Step4(props) {
  let {currentStep, setCreditValue} = props
  if (currentStep !== 4) {
    return null;
  }
  return (
    <div className="field">
    <PaymentForm setCreditValue={setCreditValue}/>
    </div>
  );
}

export default MailForm;
