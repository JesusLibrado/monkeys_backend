import * as child from 'child_process';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from '../environments';
import * as dayjs from 'dayjs';

const now = dayjs(new Date()).format('DD-MM-YY');
const filePath = `./src/dump/backups/${now}`;
const command = `mysqldump -h ${DB_HOST} -P ${DB_PORT} -u ${DB_USER} -p${DB_PASS} ${DB_NAME} > ${filePath}.sql`;

export const dump: child.ChildProcess = child.exec(command, () => {
  console.log(`Saved.`);
});
