const _path = require('path');
const packageJson = require(_path.join(process.cwd (), '../../../package.json')); // Take root package.json
const fs = require('fs');
const deps = Object.assign({}, packageJson['firebase-functions-dependencies'] || {}, packageJson["dependencies"]);

// Template of package.json for Firebase Functions
const firebaseFunctionsPackageJson = {
  engines: { node: '16' },
  main: 'main.js',

  // filter only dependencies we need for Firebase Functions
  dependencies: deps
};

// Only for demo purpose:
//console.log(
//  'Firebase Functions package.json:\n',
//  JSON.stringify(firebaseFunctionsPackageJson, null, 2)
//);

const path = './package.json'; // Where to save generated package.json file

fs.writeFileSync(path, JSON.stringify(firebaseFunctionsPackageJson));
console.log(`${path} written successfully.`);