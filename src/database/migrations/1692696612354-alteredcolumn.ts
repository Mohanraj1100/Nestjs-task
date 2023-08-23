import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692696612354 implements MigrationInterface {
    name = 'Alteredcolumn1692696612354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "createdAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "createdAt" SET NOT NULL`);
    }

}
