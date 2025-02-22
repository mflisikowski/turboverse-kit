import path from 'node:path';

import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const typescript = {
  outputFile: path.resolve(dirname, '../types.ts'),
};
