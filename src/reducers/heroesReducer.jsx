export const initialState = {
    heroes: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'LIST_HEROES':
            return {
                ...state,
                heroes: action.data
            }
    }

    return state
}
