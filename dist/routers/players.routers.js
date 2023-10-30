"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controllers_1 = require("../controllers/players.controllers");
const router = (0, express_1.Router)();
router.get('/:id', players_controllers_1.getPlayerById);
router.get('/team/:id', players_controllers_1.getPlayersByTeam);
router.get('/position/:position', players_controllers_1.getPlayersByPosition);
router.get('/positionAndCountry/:position/:country', players_controllers_1.getPlayersByPositionAndTeamCountry);
router.get('/', players_controllers_1.getPlayers);
router.post('/', players_controllers_1.createPlayer);
router.put('/:id', players_controllers_1.updatePlayerById);
router.delete('/:id', players_controllers_1.deletePlayerById);
exports.default = router;
