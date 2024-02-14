import styled from "styled-components"
import SearchIcon from './search_icon.svg'
import GlobalStyles from "../../constants/styles"
import { useRef } from "react"

interface ISearchbar {
    value: string
    updateValue: (e: any) => void
}

export default function Searchbar(props: ISearchbar) {
    const {value, updateValue} = props
    const searchInputComponent = useRef<HTMLInputElement>(null)

    function onInputChange(e: any) {
        updateValue(e.target.value)
    }

    function onIconClick() {
        searchInputComponent.current?.focus()
    }

    return <Container>
        <SearchInput 
            ref={searchInputComponent}
            value={value}
            placeholder={`search`}
            onChange={onInputChange}
        />
        <Icon src={SearchIcon} onClick={onIconClick}/>
    </Container>
}

const Container = styled.div`
    background-color: ${GlobalStyles.colors.primary600};
    width: 293px;
    height: 30px;
    padding: 7px 0;
`

const SearchInput = styled.input`
    height: inherit;
    background-color: ${GlobalStyles.colors.primary600};
    color: white;
    font-size: 16px;
    width: calc(100% - 40px);
    border: none;
    margin-left: 5px;

    &:focus {
            outline-width: 0;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
      font-size: 16px;
    }
    :-ms-input-placeholder {
       color: white;
    }
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
    float: right;
    margin: 5px 5px 0;
`