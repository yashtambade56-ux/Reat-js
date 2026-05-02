const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/tamba/Downloads/Dev_Terms_Collection-React-Mini-Project-main/Dev_Terms_Collection-React-Mini-Project-main/src/data/terms.json', 'utf8'));

const seen = new Set();
const unique = [];
const duplicates = [];

data.forEach(item => {
  if (seen.has(item.term)) {
    duplicates.push(item.term);
  } else {
    seen.add(item.term);
    unique.push(item);
  }
});

console.log('Duplicates found:', duplicates);
fs.writeFileSync('c:/Users/tamba/Downloads/Dev_Terms_Collection-React-Mini-Project-main/Dev_Terms_Collection-React-Mini-Project-main/src/data/terms.json', JSON.stringify(unique, null, 2));
console.log('Deduplicated file saved.');
