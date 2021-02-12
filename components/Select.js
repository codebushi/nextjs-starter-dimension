import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';
 


const devOptions = [
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' },
    { value: 'seo', label: 'SEO' },
    { value: 'php', label: 'PHP' },
    { value: 'node js', label: 'Node Js' }
  ]
const animatedComponents = makeAnimated();

export default function AnimatedMulti(props) {
  console.log(props, 'select props')

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[props.categories[0], props.categories[1]]}
      isMulti
      options={devOptions}
    />
  );
}