const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('message.txt', 'utf8');
    console.log("Read file:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

readFile();

