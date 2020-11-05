import { EntityRepository, Repository } from 'typeorm';
import { Role } from './role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
    findByName(clientName: string) {
        return this.findOne({ where: {clientName} });
    }
}
