import {IMeasurementDisplay} from '../ts/interfaces'

export function metresToPx(metres: number): number {
    return metres * 100;
}

export function metresToCm(metres: number): number {
    return metres * 100;
}

export function getDisplayValue(metres: number): IMeasurementDisplay {
    const isLessThanAMeter = metres < 1;

    return {
        value: isLessThanAMeter ? metresToCm(metres) : metres,
        units: isLessThanAMeter ? 'cm' : 'm'
    }
}