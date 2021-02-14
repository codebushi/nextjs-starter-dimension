import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();


//You have to fix custom styles later because 
// passed arguments not exist
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted purple',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';
  //   return { ...provided, opacity, transition };
  // }
}


const AnimatedMulti =({filterOptions, handleMultiChange, multiValue, setSelectError})=> {
  const onBlur=()=>{
    if(multiValue.length===0){
      setSelectError()
    }
  }
    return (
      <Select
        autoFocus
        styles={customStyles}
        name="Categories"
        placeholder="Select a project category"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={filterOptions}
        onChange={handleMultiChange}
        value={multiValue}
        onBlur={onBlur}
      />
    );
}

export default AnimatedMulti