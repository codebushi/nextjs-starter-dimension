import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();


//You have to fix custom styles later because 
// passed arguments not exist
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted aqua',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  }
}


const AnimatedMulti =({filterOptions, handleMultiChange, multiValue})=> {
    return (
      <Select
        autoFocus
        styles={customStyles}
        name="Categories"
        placeholder="Project Categories"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={filterOptions}
        onChange={handleMultiChange}
        value={multiValue}
      />
    );
}

export default AnimatedMulti