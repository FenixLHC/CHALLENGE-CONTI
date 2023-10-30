"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMostTeamsPlayer = (histories) => {
    const playerHistories = histories.map(h => {
        const fullname = `${h.player.name} ${h.player.lastname}`;
        const team = h.team.name;
        return { fullname, team };
    });
    const playerTeamsCount = new Map();
    playerHistories.forEach((history) => {
        const { fullname, team } = history;
        if (!playerTeamsCount.has(fullname)) {
            playerTeamsCount.set(fullname, new Set());
        }
        playerTeamsCount.get(fullname).add(team);
    });
    const playerClubCounts = {};
    playerTeamsCount.forEach((teams, fullname) => {
        playerClubCounts[fullname] = teams.size;
    });
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
    };
    return result;
};
exports.default = getMostTeamsPlayer;
