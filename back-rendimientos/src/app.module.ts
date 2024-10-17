import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rendimiento } from './rendimientos/rendimiento.entity';
import { RendimientoAnual } from './rendimientos/rendimiento-anual.entity';
import { RendimientosModule } from './rendimientos/rendimientos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '187.188.112.12',
      port: 3881,
      username: 'development',         // Asegúrate de que esto sea correcto
      password: 'Kj2xFqP0Zvk05',      // Asegúrate de que esto sea correcto
      database: 'aafm_crm_dev',  // Asegúrate de que esto sea correcto
      entities: [Rendimiento, RendimientoAnual],
      synchronize: true,              // Solo para desarrollo, no usar en producción
    }),
    RendimientosModule,               // Importa el módulo que contiene el servicio
  ],
})
export class AppModule {}

