import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { colourOptions } from '../data';
// import { useState } from "react";

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted aqua',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


export default class AnimatedMulti extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   multiValue: props.multiValue,
    //   filterOptions: [
    //     { value: "marketing", label: "Marketing" },
    //     { value: "design", label: "Design" },
    //     { value: "seo", label: "SEO" },
    //     { value: "php", label: "PHP" },
    //     { value: "node js", label: "Node Js" },
    //   ],
    // };
  }

  // handleMultiChange=(option)=> {
  //   this.setState((state) => {
  //     return {
  //       multiValue: option,
  //     };
  //   });
  // }

  render() {
    // console.log(this.state.multiValue,"multival")
    return (
      <Select
        autoFocus
        styles={customStyles}
        name="Categories"
        placeholder="Project Categories"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={this.props.filterOptions}
        onChange={this.props.handleMultiChange}
        // value={this.state.multiValue}
        value={this.props.multiValue}
      />
    );
  }
}

// const animatedComponents = makeAnimated();

// export default function AnimatedMulti(props) {
//   const onChange=(e)=>{
//     console.log('changed :',e)
//   }
//   console.log('initial onchange ',props.initial)
//   return (
//     <Select
//       onChange={e=>onChange(e)}
//       closeMenuOnSelect={false}
//       components={animatedComponents}
//       // defaultValue={[props.categories[0], props.categories[1]]}
//       isMulti
//       options={props.categories.slice(2)}
//       // value={[props.categories[0],props.categories[1]]}
//       // selectedValue={[props.initial[0],props.initial[1]]}
//       // options={props.categories}
//       value={[props.initial[0][0],props.initial[0][1]]}
//     />
//   );
// }