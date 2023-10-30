import History from "../entities/History";

const getMostTeamsPlayer = (histories:History[]):Object => {
    const playerHistories = histories.map(h => {
        const fullname = `${h.player.name} ${h.player.lastname}`
        const team = h.team.name
        
        return {fullname,team}
    })
    
    const playerTeamsCount = new Map<string, Set<string>>();
    
    playerHistories.forEach((history) => {
        const { fullname, team } = history;
        if (!playerTeamsCount.has(fullname)) {
            playerTeamsCount.set(fullname, new Set());
        }
        playerTeamsCount.get(fullname)!.add(team);
    });
    
    const playerClubCounts: Record<string, number> = {};
    
    playerTeamsCount.forEach((teams, fullname) => {
        playerClubCounts[fullname] = teams.size;
    })
    
    let playerWithMostTeams = '';
    let mostTeamsCount = 0;

    for (const player in playerClubCounts) {
        if (playerClubCounts[player] > mostTeamsCount) {
            mostTeamsCount = playerClubCounts[player];
            playerWithMostTeams = player;
        }
    }

const result = {
[playerWithMostTeams]: mostTeamsCount,
}
return result
}

export default getMostTeamsPlayer