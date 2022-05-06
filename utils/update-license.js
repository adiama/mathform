import fs from 'fs';
import license from './license.js';

fs.writeFileSync(new URL('../LICENSE.md', import.meta.url), license, 'utf8');
