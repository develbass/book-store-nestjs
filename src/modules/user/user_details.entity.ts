import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserDetails extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique:true, length: 25, nullable: true})
    name: string;

    @Column({type: "varchar", nullable: true})
    lastname: string;

    @Column({type: 'varchar', default: 'ACTIVE', length: 8})
    status: string

    @CreateDateColumn({type: 'timestamp', name:'created_at', nullable: true})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name:'updated_at', nullable: true})
    updatedAt: Date;
}
