import { metresToPx, getDisplayValue } from './conversions'

describe('#metresToPx', () => {
    it('multiplies metres by 100' , () => {
        const expected = 150;
        const value = 1.5;
        const actual = metresToPx(value)

        expect(actual).toEqual(expected)
    });

    it('accepts values less than 1', () => {
        const expected = 50;
        const value = 0.5;
        const actual = metresToPx(value)

        expect(actual).toEqual(expected)
    });
});

describe('#getDisplayValue', () => {
    it('returns data in metres if value is greater than 1', () => {
        const expected = {value: 5.2, units: 'm'};
        const value = 5.2;
        const actual = getDisplayValue(value)

        expect(actual).toEqual(expected);
    });

    it('returns data in metres if value is equal 1', () => {
        const expected = {value: 1, units: 'm'};
        const value = 1;
        const actual = getDisplayValue(value)

        expect(actual).toEqual(expected);
    });

    it('returns data in metres if value is less than 1', () => {
        const expected = {value: 40, units: 'cm'};
        const value = 0.4;
        const actual = getDisplayValue(value)

        expect(actual).toEqual(expected);
    });
});