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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RendimientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rendimiento_entity_1 = require("./rendimiento.entity");
const rendimiento_anual_entity_1 = require("./rendimiento-anual.entity");
let RendimientoService = class RendimientoService {
    constructor(rendimientoRepository, rendimientoAnualRepository) {
        this.rendimientoRepository = rendimientoRepository;
        this.rendimientoAnualRepository = rendimientoAnualRepository;
    }
    findAllRendimientos() {
        return this.rendimientoRepository.find();
    }
    findAllRendimientoAnual() {
        return this.rendimientoAnualRepository.find();
    }
};
exports.RendimientoService = RendimientoService;
exports.RendimientoService = RendimientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rendimiento_entity_1.Rendimiento)),
    __param(1, (0, typeorm_1.InjectRepository)(rendimiento_anual_entity_1.RendimientoAnual)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RendimientoService);
//# sourceMappingURL=rendimientos.service.js.map