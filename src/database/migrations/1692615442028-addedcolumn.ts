import { MigrationInterface, QueryRunner } from "typeorm";

export class Addedcolumn1692615442028 implements MigrationInterface {
    name = 'Addedcolumn1692615442028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phonenumber" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "CreatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "UpdatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "postOrderNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createdAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "deletedAt" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "postOrderNumber"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "UpdatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "CreatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phonenumber"`);
    }

}
