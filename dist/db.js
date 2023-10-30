"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Godiva11**',
    port: 5432,
    database: 'aoki',
    entities: [],
    logging: true
});
exports.default = AppDataSource;
