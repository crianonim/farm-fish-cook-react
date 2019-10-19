export default (state, action) => {
    switch (action.type) {
        case 'TURN':
            return {
                ...state, turn: state.turn + 1
            }
            default:
                return state;
    }
}