import { metresToPx } from './conversions'

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
    })
})