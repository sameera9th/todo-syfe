import { Item, State, Action } from '../types';

enum DESC_CONST {
    TEST_DESCRIPTION = "test description 1",
    UPDATED_TEST_DESCRIPTION = "updated test description 1",
    TEST_DESCRIPTION_2 = "test 2",
    TEST_DESCRIPTION_3 = "test 3",
}

export const sampleItemOne: Item = {
    id: 1,
    description: "test 1",
    timestamp: "1643555201001"
}

export const updatedTestItemOne: Item = {
    ...sampleItemOne,
    description: DESC_CONST.UPDATED_TEST_DESCRIPTION,
};

export const testItemTwo: Item = {
    id: 2,
    description: DESC_CONST.TEST_DESCRIPTION_2,
    timestamp: "1643555201001"
};

export const testItemThree: Item = {
    id: 3,
    description: DESC_CONST.TEST_DESCRIPTION_3,
    timestamp: "1643555201001"
};

export const sampleItemTwo: Item = {
    id: 2,
    description: "test 2",
    timestamp: "1643555201001"
}

export const sampleItemThree: Item = {
    id: 3,
    description: "test 3",
    timestamp: "1643555201001"
}

export const sampleStateWithOneItem: State = {
    todos: [sampleItemOne]
}

export const sampleStateWithTwoItems: State = {
    todos: [sampleItemOne, sampleItemTwo]
}

export const sampleStateWithThreeItems: State = {
    todos: [sampleItemOne, sampleItemTwo, sampleItemThree]
}

export const updatedStateWithTwoItems: State = {
    todos: [updatedTestItemOne, testItemTwo],
};

export const editFirstItemAction: Action = {
    type: "EDIT",
    data: updatedTestItemOne,
};

export const deleteSecondItemAction: Action = {
    type: "DELETE",
    data: sampleItemTwo.id,
};