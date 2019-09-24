let char = '|/-\\|/-\\|';
let delay = 100;

for (let i of (char)) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, delay);
  delay += 200;
};

setTimeout(() => {
  process.stdout.write('\n');
}, delay);