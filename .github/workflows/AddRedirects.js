const fs = require('fs');
const path = require('path');

const baseDir = 'dist';

function addMetaTag(filePath) {
const html = fs.readFileSync(filePath, 'utf8');
const urlPath = filePath.replace(baseDir, '').replace(/\\/g, '/');
const redirectTag = `<meta http-equiv="refresh" content="0; URL=https://lastsunrise.art${urlPath}">`;
const updatedHtml = html.replace(/<\/head>/, `${redirectTag}</head>`);
fs.writeFileSync(filePath, updatedHtml, 'utf8');
}

function walkDir(currentPath) {
const files = fs.readdirSync(currentPath);
for (const file of files) {
    const filePath = path.join(currentPath, file);
    if (fs.statSync(filePath).isDirectory()) {
    walkDir(filePath);
    } else if (path.extname(file) === '.html') {
    addMetaTag(filePath);
    }
}
}

walkDir(baseDir);
