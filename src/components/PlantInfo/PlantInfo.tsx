import {ReactNode} from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../constants/styles'

interface IPlantInfo {
    id: string;
    children?: ReactNode[];
}

interface IProps {
    label: string;
    value: string | number;
}

export function PlantInfoItem({label, value}: IProps) {
    return (
        <div>
            <p>{label}:</p>
            <p>{value}</p>
        </div>
    )
}

export default function PlantInfo({id, children}: IPlantInfo) {
    return (
        <PlantInfoContainer id={id}>
            {children}
        </PlantInfoContainer>
    )
}

const PlantInfoContainer = styled.div`
    display: none;
    position: absolute;
    width: 200px;
    min-height: 40px;
    padding: 0px 20px;
    color:  ${GlobalStyles.colors.primary600};
    background-color: white;
    text-align: left;
    z-index: 2;
`
