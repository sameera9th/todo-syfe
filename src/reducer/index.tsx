import {
    State,
    Action
} from '../types';
import { findNextId } from '../utils/helpers';

export const initalState: State = {
    todos: []
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        ...action.data,
                        id: findNextId(state.todos),
                    }
                ]
            }
        case "EDIT": {
            const { id, description, timestamp } = action.data;
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            description,
                            timestamp
                        };
                    }
                    return item;
                }),
            };
        }
        case "DELETE": {
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.data),
            };
        }
        case "DEFAULT": {
            return initalState;
        }
        default:
            return state;
    }
}