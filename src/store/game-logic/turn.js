export const turn = (state, turns = 1) => {
    for (let i = 0; i < turns; i++) {
        state.turn++;
        if (state.turn%10===0){
            changeStat(state, 'player', 'satiety', -1)
        }
    }
    return state
}
export const tire = (state, effort = 5) => {
    return changeStat(state, 'player', 'energy', -effort)
}
export const getEntity = (state, id) => {
    return state.entities.find(el => el.id === id);
}
export const changeStat = (state, id, statName, delta) => {
    const entity = getEntity(state, id);
    const stat = entity.stats[statName]
    stat[0] += delta;
    if (stat[0] < 0) stat[0] = 0;
    if (stat[0] > stat[1]) stat[0] = stat[1];
    return state;
}