import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

export const serverDistFolder = dirname(fileURLToPath(import.meta.url));
export const browserDistFolder = resolve(serverDistFolder, '../browser');
export const dbPath = join(serverDistFolder, '../../../db');
