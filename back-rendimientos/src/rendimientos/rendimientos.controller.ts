import { Controller, Get } from '@nestjs/common';
import { RendimientoService } from './rendimientos.service';
import { Rendimiento } from './rendimiento.entity';
import { RendimientoAnual } from './rendimiento-anual.entity'; // Importar la entidad

@Controller('rendimientos')
export class RendimientosController {
  constructor(private readonly rendimientosService: RendimientoService) {}

  @Get()
  findAllRendimientos(): Promise<Rendimiento[]> {
    return this.rendimientosService.findAllRendimientos();
  }

  @Get('anual')
  findAllRendimientoAnual(): Promise<RendimientoAnual[]> { // Nueva ruta para rendimiento_anual
    return this.rendimientosService.findAllRendimientoAnual();
  }
}
