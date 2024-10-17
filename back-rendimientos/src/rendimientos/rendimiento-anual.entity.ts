import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rendimiento_anual')
export class RendimientoAnual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serie: string;

  @Column('decimal', { precision: 10, scale: 2 })
  rendimiento: number;

  @Column({ type: 'datetime', nullable: true }) // Permitir valores nulos
  fecha_registro: Date | null;

  @Column({ type: 'datetime', nullable: true }) // Permitir valores nulos
  ultima_modificacion: Date | null;
}
