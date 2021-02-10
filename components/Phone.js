import ReactPhoneInput from "react-phone-input-2";

export default class PhoneNumber extends React.Component {
  state = { phone: "" };

  handleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };

  render() {
    return (
      <div>
        <ReactPhoneInput
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          country={'us'}
        //   enableSearch={true}
        //   style={{color:'black'}}
        //   defaultCountry={'us'}
          value={this.state.phone}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}