import { mkdir, access, writeFile } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const targetDir = path.join(projectRoot, 'node_modules', 'es-abstract', '2024');

const shims = {
  'AddEntriesFromIterable.js': "module.exports = require('../2022/AddEntriesFromIterable');\n",
  'CreateDataPropertyOrThrow.js': "module.exports = require('../2022/CreateDataPropertyOrThrow');\n",
  'ToPropertyKey.js': "module.exports = require('../2022/ToPropertyKey');\n",
};

const ensureShim = async (fileName, contents) => {
  const targetFile = path.join(targetDir, fileName);
  try {
    await access(targetFile);
  } catch {
    await writeFile(targetFile, contents, 'utf8');
  }
};

await mkdir(targetDir, { recursive: true });
await Promise.all(
  Object.entries(shims).map(([fileName, contents]) => ensureShim(fileName, contents))
);
