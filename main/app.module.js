"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rendimiento_entity_1 = require("./rendimientos/rendimiento.entity");
const rendimiento_anual_entity_1 = require("./rendimientos/rendimiento-anual.entity");
const rendimientos_module_1 = require("./rendimientos/rendimientos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '187.188.112.12',
                port: 3881,
                username: 'development',
                password: 'Kj2xFqP0Zvk05',
                database: 'aafm_crm_dev',
                entities: [rendimiento_entity_1.Rendimiento, rendimiento_anual_entity_1.RendimientoAnual],
                synchronize: true,
            }),
            rendimientos_module_1.RendimientosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map