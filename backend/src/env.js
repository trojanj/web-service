import * as dotenv from 'dotenv';
import { getOsEnv } from './helpers/pathHelper';

dotenv.config();

export const env = {
  app: {
    port: getOsEnv('PORT'),
    clientUrl: getOsEnv('APP_CLIENT_URL'),
    secret: getOsEnv('SECRET_KEY')
  },
  mongoDbUrl: getOsEnv('MONGODB_URL')
};
