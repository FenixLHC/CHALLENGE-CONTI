"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamById = exports.updateTeamById = exports.getUnderAgePlayersByTeam = exports.getTeamById = exports.getTeams = exports.createTeam = void 0;
const Team_1 = __importDefault(require("../entities/Team"));
const Player_1 = __importDefault(require("../entities/Player"));
const db_1 = __importDefault(require("../db"));
const createTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, city, country } = req.body;
        const team = new Team_1.default();
        team.name = name;
        team.city = city;
        team.country = country;
        yield team.save();
        return res.send(team);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
});
exports.createTeam = createTeam;
const getTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teams = yield Team_1.default.find();
    return res.send(teams);
});
exports.getTeams = getTeams;
const getTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const team = yield Team_1.default.findOneBy({ id });
        return res.send(team);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getTeamById = getTeamById;
const getUnderAgePlayersByTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const n = (_a = req.query.n) !== null && _a !== void 0 ? _a : 5;
        const queryBuilder = db_1.default.createQueryBuilder()
            .from(Team_1.default, 'team')
            .select(['team.name', 'COUNT(player.id) AS count'])
            .innerJoin(Player_1.default, 'player', 'player.teamId = team.id')
            .where('player.age < 18')
            .groupBy('team.name')
            .orderBy('count', 'DESC')
            .limit(parseInt(n));
        const result = yield queryBuilder.getRawMany();
        return res.send(result);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getUnderAgePlayersByTeam = getUnderAgePlayersByTeam;
const updateTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const team = yield Team_1.default.update({ id }, req.body);
        return res.send(team);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.updateTeamById = updateTeamById;
const deleteTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const team = yield Team_1.default.delete({ id });
        return res.status(204).send(team);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.deleteTeamById = deleteTeamById;
