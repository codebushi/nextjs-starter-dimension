import { ToastContainer, toast, Zoom, cssTransition } from 'react-toastify';


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const bounce = cssTransition({
  enter: "animate__animated animate__rubberBand",
  exit: "animate__animated animate__zoomOut"
});

const errorStyle = {
  color: "orangered",
};
const successStyle = {
  color: "rgb(156 205 247)"
}
const successBorder ={
  border: "5px solid rgb(156 205 247)",
  background: "#E8F0F0",
  color: "black"
}

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
    this.toastId = React.createRef();

  }

  setToast=(status)=>{
    console.log('setToast called with status = ', status)
    switch (status) {
      case 'warning':
        toast.warn(`${status}: form fields not valid, please fill out all fields correctly`)
        break;
      case 'pending':
        console.log('reached pending')
        this.toastId.current = toast(`${status}: sending your details, please wait`, { autoClose: false });       
        break;
      case 'success':
        console.log('reached success')
        toast.update(this.toastId.current, { type: toast.TYPE.INFO, render: `${status}: recieved your details, please check your email or spambox if youve not recieved anything`, autoClose: 5000
      });
        break;
      case 'error':
        console.log('reached error')
        toast.error(`${status}: please try again`);
        break;
      default:
        console.log('reached default')
        break;
    }    
  }

  handleSubmission = (e) => {
    e.preventDefault();
    this.setToast('pending')
    const theHosting='http://localhost:4000'
    const {name, email, message}=this.state.values
    fetch(`${theHosting}/send-email?sender=${email}&topic=${name}&text=${message}`)
    .then(msg =>msg.json())
    // .then(() => new Promise((resolve) => setTimeout(resolve, 2000)))
    .then((data)=>{
      console.log(data);
      this.setToast(data.status);
      this.setState(InitialData);
    })
    .then(()=>console.log('resolved everything'))
    .catch(err => {
      console.error('err',err)
      this.setToast('error')
    })
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
    this.textInput.current.focus();
  };
  
  handleInvalid = (e) => {
    e.preventDefault();
    this.setToast('warning')
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
    if(!this.props.FormIsOpen&&this.state.FormIsOpen){
      this.setState({FormIsOpen:false})
    }
    if (
      prevProps.FormIsOpen === true &&
      prevProps.FormIsOpen !== nextState.FormIsOpen
    ) {
      this.setState({ FormIsOpen: true });
      this.textInput.current.focus();
    }
    return null;
  }

  render() {

    const { name, email, message } = this.state.values;
    const { fieldErrors } = this.state;
    return (
    <>
      <ToastContainer transition={Zoom}/>
      <form noValidate method="post" action="#">
        <div className="field half first">
          <label
            // style={fieldErrors.name.length > 0 ? errorStyle : {}}
            style={
              (fieldErrors.name.length > 0)||(this.state.values.name.length < 1)
               ? {} 
               : successStyle}
            htmlFor="name"
          >
            Full Name 
            {(name!==""&& fieldErrors.name.length < 1)?<span style={successStyle}>✔</span>:null}
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
            style={
              (fieldErrors.name.length > 0)||(this.state.values.name.length < 1)
               ? {} 
               : successBorder}           
          />
          <div
            className="error-msg"
          >
            {fieldErrors.name.length > 0 ? fieldErrors.name : "full name"}
          </div>
        </div>
        <div className="field half">
          <label
            style={
              (fieldErrors.email.length > 0)||(this.state.values.email.length < 1)
               ? {} 
               : successStyle}
            htmlFor="email"
          >
            Email 
            {(email!==""&& fieldErrors.email.length < 1)?<span style={successStyle}>✔</span>:null}
          </label>
          <input
            onBlur={this.handleBlur}
            value={email}
            onChange={this.handleChange}
            type="text"
            name="email"
            id="email"
            style={
              (fieldErrors.email.length > 0)||(this.state.values.email.length < 1)
               ? {} 
               : successBorder} 
          />
          <div
            className="error-msg"
          >
            {fieldErrors.email.length > 0 ? fieldErrors.email : "valid email"}
          </div>
        </div>
        <div className="field">
          <label
            style={
              (fieldErrors.message.length > 0)||(this.state.values.message.length < 1)
               ? {} 
               : successStyle}
            htmlFor="message"
          >
            Message 
            {(message!==""&& fieldErrors.message.length < 1)?<span style={successStyle}>✔</span>:null}
          </label>
          <textarea
            onBlur={this.handleBlur}
            value={message}
            onChange={this.handleChange}
            name="message"
            id="message"
            rows="4"
            style={
              (fieldErrors.message.length > 0)||(this.state.values.message.length < 1)
               ? {} 
               : successBorder}   
          ></textarea>
          <div
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
                value={"Submit"}
                className="submit"
              />
            ) : (
              <div onClick={()=>console.log('he tried to submit a disabled form')}>
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
        </ul>
      </form>
    </>
    );
  }
}
export default MailForm;
