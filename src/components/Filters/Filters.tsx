import styled from "styled-components";
import { useState } from "react";

import { IFilters } from "../../ts/interfaces";

import Checkbox from "../common/Checkbox/Checkbox";
import Select from "../common/Select/Select";
import GlobalStyles from "../../constants/styles";

interface IProps {
  updateFilters: (appliedFilters: IFilters) => void;
  categories: {[key: string]: string}
}

export default function Filters({ updateFilters, categories }: IProps) {
const initialFilterState = {
  nitrogenFixer: false,
  insectAttractor: false,
  nutrientAccumulator: false,
  categoryId: null
}
const [appliedFilters, setAppliedFilters] = useState(initialFilterState);

const [open, setOpen] = useState(false);

function setMenuOpenStatus() {
  setOpen(!open)
}

function onReset() {
  setAppliedFilters(initialFilterState)
  updateFilters(initialFilterState)
}

function onCheckboxChange(e: any) {
  const key = e.target.getAttribute("data-id");
  const value = !appliedFilters[key as keyof IFilters];

  const newFilters = {
    ...appliedFilters,
    [key]: value,
  };

  setAppliedFilters(newFilters);
  updateFilters(newFilters);
}

function onCategoryChange(e: any) {
  const key = e.target.value;

  const newFilters = {
    ...appliedFilters,
    categoryId: key === 'all' ? undefined : key,
  };

  setAppliedFilters(newFilters);
  updateFilters(newFilters);
}

const categoryArr = [{
  id: 'all',
  name: 'all'
}]

for (const [key, value] of Object.entries(categories)) {
  categoryArr.push({
    id: key,
    name: value
  });
}

return (
<Container>
  <Buttons>
    <Button onClick={setMenuOpenStatus}>{`Filters ${open ? '-' : '+'}`}</Button>
    <Reset onClick={onReset}>reset filters</Reset>
  </Buttons>

  { open && 
    <Content>
      <label htmlFor="filters-category" style={{color:'black'}}>category: </label>
      <Select 
        value={appliedFilters.categoryId ?? 'any'} 
        options={categoryArr} 
        onChange={onCategoryChange}
        id="filters-category"
        defaultValue={undefined}
      />
      <CheckboxGroup>
        <CheckboxContainer style={{ marginBottom: "5px" }}>
          <Checkbox
            label="nitrogen fixer"
            checked={appliedFilters.nitrogenFixer}
            id="filters-nitrogen-fixer"
            dataId="nitrogenFixer"
            onChange={onCheckboxChange}
          />
        </CheckboxContainer>
        <CheckboxContainer style={{ marginBottom: "5px" }}>
          <Checkbox
            label="insect attractor"
            checked={appliedFilters.insectAttractor}
            id="filters-insect-attractor"
            dataId="insectAttractor"
            onChange={onCheckboxChange}
          />
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox
            label="nutrient accumulator"
            checked={appliedFilters.nutrientAccumulator}
            id="filters-nutrient-accumulator"
            dataId="nutrientAccumulator"
            onChange={onCheckboxChange}
          />
        </CheckboxContainer>
      </CheckboxGroup>
    </Content>
  }
  </Container>
     
  );
}

const CheckboxGroup = styled.div`
  display: block;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

const Reset = styled.p`
  text-decoration: underline;
  color: white;
  margin-bottom: 5px;
  cursor: pointer;
  float: right;
`
const Content = styled.div`
  padding: 10px 10px;
  background-color: ${GlobalStyles.colors.primary500};
  position: absolute;
  width: 275px;
  left: 0;
`;

const Button = styled.h3`
  color: white;
  border-radius: 10px;
  background-color: #3c8b67;
  padding: 10px;
  font-size: 1em;
  display: inline-block;
  margin: 0;
`;

const Container = styled.div`
  display: inline-block;
  align-items: center;
  height: 40px;
  cursor: pointer;
  width: 100%;
`;

const Buttons = styled.div`
  margin: 0 10px;
`