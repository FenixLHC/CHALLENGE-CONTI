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
exports.deleteHistoryById = exports.updateHistoryById = exports.getMostTeamChanges = exports.getHistoryById = exports.getHistories = exports.createHistory = void 0;
const History_1 = __importDefault(require("../entities/History"));
const getMostTeamsPlayer_1 = __importDefault(require("../utils/getMostTeamsPlayer"));
const createHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startAge, endAge, playerId, teamId } = req.body;
        const history = new History_1.default();
        history.startAge = startAge;
        history.endAge = endAge;
        history.player = playerId;
        history.team = teamId;
        yield history.save();
        return res.send(history);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
});
exports.createHistory = createHistory;
const getHistories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const historys = yield History_1.default.find({
        relations: { team: true, player: true },
        select: { team: { name: true }, player: { name: true, lastname: true } }
    });
    return res.send(historys);
});
exports.getHistories = getHistories;
const getHistoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const history = yield History_1.default.find({
            relations: { team: true, player: true },
            select: { team: { name: true }, player: { name: true, lastname: true } },
            where: { id }
        });
        return res.send(history);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getHistoryById = getHistoryById;
const getMostTeamChanges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const histories = yield History_1.default.find({
            relations: { team: true, player: true },
            select: { team: { name: true }, player: { name: true, lastname: true, id: true }, id: true }
        });
        const result = (0, getMostTeamsPlayer_1.default)(histories);
        return res.json(result);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.getMostTeamChanges = getMostTeamChanges;
const updateHistoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const history = yield History_1.default.update({ id }, req.body);
        return res.send(history);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.updateHistoryById = updateHistoryById;
const deleteHistoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const history = yield History_1.default.delete({ id });
        return res.status(204).send(history);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ message: error.message });
    }
});
exports.deleteHistoryById = deleteHistoryById;
