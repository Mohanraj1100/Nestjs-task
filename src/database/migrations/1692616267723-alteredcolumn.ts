import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692616267723 implements MigrationInterface {
    name = 'Alteredcolumn1692616267723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "UpdatedAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "UpdatedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date NOT NULL`);
    }

}
