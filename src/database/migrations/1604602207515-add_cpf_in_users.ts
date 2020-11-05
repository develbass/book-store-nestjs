import {MigrationInterface, QueryRunner} from "typeorm";

export class addCpfInUsers1604602207515 implements MigrationInterface {
    name = 'addCpfInUsers1604602207515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
    }

}
