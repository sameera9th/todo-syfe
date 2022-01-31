export type Item = {
    id: number;
    description: string;
    timestamp: string;
}

export type State = {
    todos: Item[],
}

type AddAction = {
    type: 'ADD',
    data: {
        description: string;
        timestamp: string
    };
}

type EditAction = {
    type: 'EDIT',
    data: Item;
}

type DeleteAction = {
    type: 'DELETE',
    data: number;
}

type ResetAction = {
    type: 'RESET',
}

type DefaultAction = { type: "DEFAULT" };

export type Action = AddAction | EditAction | DeleteAction | ResetAction | DefaultAction;