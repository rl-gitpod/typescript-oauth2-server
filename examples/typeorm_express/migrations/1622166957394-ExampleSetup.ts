import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1622166957394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO oauth_clients VALUES('ed883c20-bf58-11eb-8529-0242ac130003', 'not-a-secret', 'client example', '[http://localhost:76543]', 'authorization_code');");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
