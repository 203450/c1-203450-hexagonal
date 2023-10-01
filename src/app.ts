import { db } from './database/db';

async function main() {
  try {
    await db.connect();
    console.log('Conexión a la base de datos establecida correctamente.');

    await db.$pool.end();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

main();