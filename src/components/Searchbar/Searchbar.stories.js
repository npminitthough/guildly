import { useState } from 'react';
import Searchbar from './Searchbar';

export default {
  title: "Searchbar",
  component: Searchbar,
};

export const MySearchbar = () => {
  const [value, setValue] = useState("")
  function updateValue(value) {
    setValue(value)
  }
  return <Searchbar value={value} updateValue={updateValue}/>
}