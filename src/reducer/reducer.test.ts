import { initalState, reducer } from './index';
import { 
    sampleStateWithOneItem, 
    sampleStateWithTwoItems, 
    editFirstItemAction, 
    deleteSecondItemAction, 
    updatedStateWithTwoItems 
} from '../mock/todos';


describe('reducer', () => {
    it("returns inital state", () => {
        const nextState = reducer(initalState, { type: 'RESET' });
        expect(nextState).toStrictEqual(initalState);
    });
    it('returns state with one item after adding', () => {
        const item = {
            description: 'test 1',
            timestamp: '1643555201001'
        }
        const nextState = reducer(initalState, { type: "ADD", data: item });
        expect(nextState).toStrictEqual(sampleStateWithOneItem);
    });
    it('add items to mature state', () => {
        const item = {
            description: 'test 2',
            timestamp: '1643555201001'
        }
        const nextState = reducer(sampleStateWithOneItem, { type: "ADD", data: item });
        expect(nextState).toStrictEqual(sampleStateWithTwoItems);
    });
    it("edits an item in state", () => {
        const nextState = reducer(sampleStateWithTwoItems, editFirstItemAction);
        expect(nextState).toStrictEqual(
            updatedStateWithTwoItems
        );
    });
    it("deletes an item in state", () => {
        expect(reducer(sampleStateWithTwoItems, deleteSecondItemAction)).toStrictEqual(
            sampleStateWithOneItem
        );
    });
});