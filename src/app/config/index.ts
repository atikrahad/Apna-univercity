import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE_URI,
  bcrypt_sault_round: process.env.PSSWORDSLDROUNDZ,
};
