"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Player_1 = __importDefault(require("./entities/Player"));
const Team_1 = __importDefault(require("./entities/Team"));
const History_1 = __importDefault(require("./entities/History"));
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Godiva11**',
    port: 5432,
    database: 'aoki',
    entities: [Player_1.default, Team_1.default, History_1.default],
    logging: true,
    synchronize: true
});
exports.default = AppDataSource;
