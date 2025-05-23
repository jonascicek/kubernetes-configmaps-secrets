const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;
const GREETING_MESSAGE = process.env.GREETING_MESSAGE || 'Hello World';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const DB_PASSWORD = process.env.DB_PASSWORD ? '***REDACTED***' : 'Not set';
const API_KEY = process.env.API_KEY ? '***REDACTED***' : 'Not set';

let configFileContent = 'not found';
let secretFileContent = 'not found';

try {
  configFileContent = fs.readFileSync('/etc/app/config/app.properties', 'utf8');
} catch {}
try {
  secretFileContent = '***REDACTED***';
} catch {}

console.log(`[${LOG_LEVEL}] Starting app on port ${PORT}`);
console.log(`[${LOG_LEVEL}] Greeting: ${GREETING_MESSAGE}`);
console.log(`[${LOG_LEVEL}] Config file content: ${configFileContent}`);
console.log(`[${LOG_LEVEL}] DB_PASSWORD: ${DB_PASSWORD}`);
console.log(`[${LOG_LEVEL}] API_KEY: ${API_KEY}`);
console.log(`[${LOG_LEVEL}] Secret file read: ${secretFileContent}`);

app.get('/', (req, res) => res.send(GREETING_MESSAGE));
app.listen(PORT);
