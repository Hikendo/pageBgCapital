import { RendimientoService } from './rendimientos.service';
import { Rendimiento } from './rendimiento.entity';
import { RendimientoAnual } from './rendimiento-anual.entity';
export declare class RendimientosController {
    private readonly rendimientosService;
    constructor(rendimientosService: RendimientoService);
    findAllRendimientos(): Promise<Rendimiento[]>;
    findAllRendimientoAnual(): Promise<RendimientoAnual[]>;
}
