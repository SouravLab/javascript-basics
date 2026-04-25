// Beginner-friendly program to find duplicate characters and count one character

const text = 'programming';
const letterToCount = 'g';

const counts = {};
for (let i = 0; i < text.length; i++) {
  const ch = text[i];
  counts[ch] = counts[ch] ? counts[ch] + 1 : 1;
}

const duplicates = {};
for (const ch in counts) {
  if (counts[ch] > 1) {
    duplicates[ch] = counts[ch];
  }
}

let targetCount = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === letterToCount) {
    targetCount = targetCount + 1;
  }
}

console.log('Text:', text);
console.log('Duplicate characters:', duplicates);
console.log("Count of '" + letterToCount + "':", targetCount);
