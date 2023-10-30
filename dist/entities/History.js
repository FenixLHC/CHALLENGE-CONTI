"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Team_1 = __importDefault(require("./Team"));
const Player_1 = __importDefault(require("./Player"));
let History = class History extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], History.prototype, "startAge", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], History.prototype, "endAge", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Team_1.default, team => team.histories),
    (0, typeorm_1.JoinColumn)({ name: 'teamId' }),
    __metadata("design:type", Team_1.default)
], History.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Player_1.default, player => player.histories),
    (0, typeorm_1.JoinColumn)({ name: 'playerId' }),
    __metadata("design:type", Player_1.default)
], History.prototype, "player", void 0);
History = __decorate([
    (0, typeorm_1.Entity)()
], History);
exports.default = History;
