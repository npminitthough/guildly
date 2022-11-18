import Input from './Input';

export default {
  title: "Input",
  component: Input,
};

export const MyInput = () => {
  return <Input 
    label="Max spread (m)" 
    type="number" 
    color="green"
    borderColor="blue"
    width="50px"
  />
}