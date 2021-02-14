import ReactPhoneInput from "react-phone-input-2";
// var TheNumber = require( 'awesome-phonenumber' );
// import { isPossiblePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'

export default class PhoneNumber extends React.Component {
  // state = { phone: "" };

  // handleOnPhoneChange = (value, countryData) => {
  //   // console.log(countryData.countryCode, 'countryData')
  //   let pn= new TheNumber( '+'+value, countryData.countryCode );
  //   console.log(value, 'value')
  //   console.log(pn.isPossible())

  //   this.setState({ phone: value }, () => {
  //   });
  //   // console.log(isPossiblePhoneNumber('+'+value))

  // };
  render() {
    return (
      <div>
        <ReactPhoneInput
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          international
          country={'us'}
          enableSearch={true}
        //   style={{color:'black'}}
          // defaultCountry={'us'}
          searchStyle={{color:'black'}}
          dropdownStyle={{color:'black'}}
          value={this.props.phone}
          onChange={this.props.handleOnPhoneChange}
        />
      </div>
    );
  }
}