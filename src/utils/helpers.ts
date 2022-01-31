import { Item } from '../types/index';

export const findNextId = (todos: Item[]): number => {
    if (todos.length === 0) {
        return 1;
    }
    const mappedTodoIds = todos.map(({ id }) => id);
    return Math.max(...mappedTodoIds) + 1;
}