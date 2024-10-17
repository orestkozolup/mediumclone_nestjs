import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone_user',
  password: '123',
  database: 'mediumclone'
}

export default config;
