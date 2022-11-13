import arrowKeyShift from './arrowKeyShift'
import {ArrowKeys} from '../ts/enums'

describe('arrowKeyShift', () => {
    it('arrow up shift is 1', () => {
        expect(arrowKeyShift[ArrowKeys.up]).toEqual(-1)
    })

    it('arrow right shift is 1', () => {
        expect(arrowKeyShift[ArrowKeys.right]).toEqual(1)
    })

    it('arrow down shift is -1', () => {
        expect(arrowKeyShift[ArrowKeys.down]).toEqual(1)
    })

    it('arrow left shift is -1', () => {
        expect(arrowKeyShift[ArrowKeys.left]).toEqual(-1)
    })
})