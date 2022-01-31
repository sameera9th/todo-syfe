import { findNextId } from './helpers';
import { sampleStateWithOneItem, sampleStateWithTwoItems, sampleStateWithThreeItems } from '../mock/todos';

describe('findNextId', () => {
    it('should return 1 with empty todos', () => {
        expect(findNextId([])).toEqual(1);
    });
    it('should return 2 with 1 todo', () => {
        expect(findNextId(sampleStateWithOneItem.todos)).toEqual(2);
    });
    it('should return 3 with 2 todo', () => {
        expect(findNextId(sampleStateWithTwoItems.todos)).toEqual(3);
    });
    it('should return 4 with 3 todo', () => {
        expect(findNextId(sampleStateWithThreeItems.todos)).toEqual(4);
    });
});