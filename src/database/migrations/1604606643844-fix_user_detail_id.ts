import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUserDetailId1604606643844 implements MigrationInterface {
    name = 'fixUserDetailId1604606643844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "detail_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_673613c95633d9058a44041794d" UNIQUE ("detail_id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_673613c95633d9058a44041794d" FOREIGN KEY ("detail_id") REFERENCES "user_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_673613c95633d9058a44041794d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_673613c95633d9058a44041794d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "detail_id"`);
    }

}
