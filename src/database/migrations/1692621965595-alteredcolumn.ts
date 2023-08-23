import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692621965595 implements MigrationInterface {
    name = 'Alteredcolumn1692621965595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "PK_a12ec5edcee2d94eb1ccdedeb37"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "PK_4d093caee4d33b2745c7d05a41d" PRIMARY KEY ("post_id")`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "postOrderNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "postOrderNumber" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "PK_4d093caee4d33b2745c7d05a41d"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "PK_a12ec5edcee2d94eb1ccdedeb37" PRIMARY KEY ("post_id", "postOrderNumber")`);
    }

}
