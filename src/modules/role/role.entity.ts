import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "varchar", length: 20, nullable: false})
    name: string;

    @Column({type: "text", nullable: false})
    description: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;

    @ManyToMany(type=>User, user => user.roles)
    @JoinTable()
    users: User[];

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}
