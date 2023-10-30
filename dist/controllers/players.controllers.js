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
exports.deletePlayerById = exports.updatePlayerById = exports.getPlayersByPositionAndTeamCountry = exports.getPlayersByPosition = exports.getPlayersByTeam = exports.getPlayerById = exports.getPlayers = exports.createPlayer = void 0;
const Player_1 = __importDefault(require("../entities/Player"));
const createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastname, age, position, teamId } = req.body;
        const player = new Player_1.default();
        player.name = name;
        player.lastname = lastname;
        player.age = age;
        player.position = position;
        player.team = teamId;
        yield player.save();
        return res.send(player);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
});
exports.createPlayer = createPlayer;
const getPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield Player_1.default.find();
    return res.send(players);
});
exports.getPlayers = getPlayers;
const getPlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const player = yield Player_1.default.findOneBy({ id });
        return res.send(player);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getPlayerById = getPlayerById;
const getPlayersByTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const players = yield Player_1.default.find({
            relations: { team: true },
            where: { team: { id } }
        });
        return res.send(players);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getPlayersByTeam = getPlayersByTeam;
const getPlayersByPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('entramo');
        const { position } = req.params;
        const players = yield Player_1.default.find({
            where: { position }
        });
        return res.send(players);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getPlayersByPosition = getPlayersByPosition;
const getPlayersByPositionAndTeamCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { position, country } = req.params;
        const players = yield Player_1.default.find({
            select: {
                name: true,
                lastname: true,
                age: true
            },
            relations: {
                team: true
            },
            where: {
                team: { country },
                position
            }
        });
        return res.send(players);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getPlayersByPositionAndTeamCountry = getPlayersByPositionAndTeamCountry;
const updatePlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const player = yield Player_1.default.update({ id }, req.body);
        return res.send(player);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.updatePlayerById = updatePlayerById;
const deletePlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const player = yield Player_1.default.delete({ id });
        return res.status(204).send(player);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.deletePlayerById = deletePlayerById;
