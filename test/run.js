// Draait de zelftest uit index.html in Node: `node test/run.js [aantal]`
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const db = html.match(/<script type="application\/json" id="trick-db">([\s\S]*?)<\/script>/)[1];
const core = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];

const sandbox = {};
vm.runInNewContext(core + '\nthis.LineCore = LineCore;', sandbox);
const { LineCore } = sandbox;
const tricks = JSON.parse(db).tricks;

const count = Number(process.argv[2]) || 1000;
const result = LineCore.runSelfTest(tricks, count);
console.log(`${tricks.length} trucs in de database`);
console.log(`lengtes: ${JSON.stringify(result.lengths)}, volledige opbouw gehaald: ${Math.round(result.strictShare * 100)}%, rerolls: ${result.rerolls}`);
if (result.passed) {
  console.log(`OK: ${result.count} lijnen, geen fouten`);
} else {
  console.error(`FOUT: ${result.failureCount} problemen`);
  result.failures.forEach((f) => console.error('  - ' + f));
  process.exit(1);
}
