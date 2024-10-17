import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rendimientos')
export class Rendimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serie: string;

  @Column('decimal', { precision: 10, scale: 4 })
  rendimiento_anual: number;

  @Column('decimal', { precision: 10, scale: 4 })
  rendimiento_acumulado: number;

  @Column('decimal', { precision: 10, scale: 4 })
  rendimiento_bimestral: number;

  @Column('decimal', { precision: 10, scale: 4 })
  ultimo_precio_accion: number;

  @Column() 
  fecha_registro: string | null;

  @Column() // Permitir valores nulos
  ultima_modificacion: string | null;
}
