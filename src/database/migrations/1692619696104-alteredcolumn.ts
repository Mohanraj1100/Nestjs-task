import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692619696104 implements MigrationInterface {
    name = 'Alteredcolumn1692619696104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "deletedAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "deletedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
