import styled from "styled-components"
import GlobalStyles from "../../../constants/styles"

interface IOption {
    id: string
    name: string
}
interface ISelect {
    options: IOption[]
    onChange: (e:any) => void
    value: string | number
    id?: string
    defaultValue: string | number | undefined
}

export default function Select ({options, onChange, value, id, defaultValue}: ISelect) {
    return <StyledSelect 
        id={id} onChange={onChange} defaultValue={defaultValue} value={value}
        >
        {options.map(option => {
            return <option 
                key={option.id} value={option.id}
                label={option.name}
            >
                {option.name}
            </option>
        })}
    </StyledSelect>
}

const StyledSelect = styled.select`
    outline-color: ${GlobalStyles.colors.secondary600};
    height: 25px;
    border-color: lightgrey;
    border-radius: 2px;
    padding: 0 2px;
`