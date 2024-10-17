import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rendimiento } from './rendimiento.entity';
import { RendimientoAnual } from './rendimiento-anual.entity';
import { RendimientoService } from './rendimientos.service';
import { RendimientosController } from './rendimientos.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rendimiento, RendimientoAnual]), // Importa las entidades
  ],
  providers: [RendimientoService],
  controllers: [RendimientosController], // Agrega el controlador aquí

  exports: [RendimientoService], // Exporta el servicio si es necesario
})
export class RendimientosModule {}
