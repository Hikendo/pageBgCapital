import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rendimiento } from './rendimiento.entity';
import { RendimientoAnual } from './rendimiento-anual.entity';

@Injectable()
export class RendimientoService {
  constructor(
    @InjectRepository(Rendimiento)
    private readonly rendimientoRepository: Repository<Rendimiento>,
    
    @InjectRepository(RendimientoAnual) // Inyectar el repositorio
    private readonly rendimientoAnualRepository: Repository<RendimientoAnual>,
  ) {}

  findAllRendimientos(): Promise<Rendimiento[]> {
    return this.rendimientoRepository.find();
  }

  findAllRendimientoAnual(): Promise<RendimientoAnual[]> { 
    return this.rendimientoAnualRepository.find();
  }
}
