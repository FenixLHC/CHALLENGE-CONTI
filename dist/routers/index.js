"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_routers_1 = __importDefault(require("./players.routers"));
const teams_routers_1 = __importDefault(require("./teams.routers"));
const histories_routers_1 = __importDefault(require("./histories.routers"));
const router = (0, express_1.Router)();
router.use('/players', players_routers_1.default);
router.use('/teams', teams_routers_1.default);
router.use('/histories', histories_routers_1.default);
exports.default = router;
