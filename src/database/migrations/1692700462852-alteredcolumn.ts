import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692700462852 implements MigrationInterface {
    name = 'Alteredcolumn1692700462852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "post_order_number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "post_order_number" SET NOT NULL`);
    }

}
