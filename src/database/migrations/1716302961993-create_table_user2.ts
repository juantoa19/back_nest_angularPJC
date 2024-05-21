import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser21716302961993 implements MigrationInterface {
    name = 'CreateTableUser21716302961993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "telefono" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telefono"`);
    }

}
