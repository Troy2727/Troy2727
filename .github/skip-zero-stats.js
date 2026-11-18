// Drop summary slides whose all-time total is 0 (e.g. stars, PRs reviewed).
const fs = require('fs');
const f = process.argv[2];
const re = /(total: m\.stars\.allTime \},\r?\n  \])(;)/;
const s = fs.readFileSync(f, 'utf8');
if (!re.test(s)) { console.error('patch target not found'); process.exit(1); }
fs.writeFileSync(f, s.replace(re, '$1.filter((s) => s.total > 0)$2'));
