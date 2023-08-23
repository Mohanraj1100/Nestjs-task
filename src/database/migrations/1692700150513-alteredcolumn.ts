import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692700150513 implements MigrationInterface {
    name = 'Alteredcolumn1692700150513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "post_order_number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_order_number"`);
    }

}
