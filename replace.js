const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let files = [];
    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            files = files.concat(walkDir(fullPath));
        } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.vue')) {
            files.push(fullPath);
        }
    }
    return files;
}

const files = walkDir('site/src');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Fix double replacement
    content = content.replace(/text-\[var\(--text-\[var\(--text-muted\)]\)]/g, 'text-[var(--text-muted)]');

    fs.writeFileSync(file, content);
}
console.log('Done fix');
