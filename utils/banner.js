import fs from 'fs';
import LICENSE from './license.js';

const { name, description, author, version } = JSON.parse(
    fs.readFileSync(new URL('../package.json', import.meta.url))
);

export default `/*!
@fileoverview ${name} - ${description}
@author ${author}
@version ${version}

${LICENSE}
*/`;
