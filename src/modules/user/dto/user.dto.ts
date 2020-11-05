import {IsNotEmpty} from 'class-validator'
import { RoleType } from '../../role/roletype.enun';
import { UserDetails } from '../user_details.entity';

export class UserDto{
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    roles: RoleType[]

    @IsNotEmpty()
    details: UserDetails;
}