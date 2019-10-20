import { turn, tire, changeStat } from './game-logic/turn'
export default (state, action) => {
    switch (action.type) {
        case 'TURN':
            return { ...turn(state, action.payload) }
        case 'TIRE_PLAYER':
            return { ...tire(state, action.payload) }
        case 'EAT':
            return {...changeStat(state,'player','satiety',25)}
        default:
            return state;
    }
}