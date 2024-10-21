import { Repository } from 'typeorm';
import { Rendimiento } from './rendimiento.entity';
import { RendimientoAnual } from './rendimiento-anual.entity';
export declare class RendimientoService {
    private readonly rendimientoRepository;
    private readonly rendimientoAnualRepository;
    constructor(rendimientoRepository: Repository<Rendimiento>, rendimientoAnualRepository: Repository<RendimientoAnual>);
    findAllRendimientos(): Promise<Rendimiento[]>;
    findAllRendimientoAnual(): Promise<RendimientoAnual[]>;
}
