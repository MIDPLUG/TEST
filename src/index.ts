// index.ts
import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';

export class AcceloroDiscord {
  static create(numFolders: number): void {
    const desktopPath = path.join(require('os').homedir(), 'Desktop');

    for (let i = 1; i <= numFolders; i++) {
      const folderName = `quepe_${i}`;
      const folderPath = path.join(desktopPath, folderName);

      if (!fs.existsSync(folderPath)) {
        mkdirp.sync(folderPath);
        console.log(`Created folder: ${folderPath}`);
      } else {
        console.log(`Folder already exists: ${folderPath}`);
      }
    }
  }
}

// Eksportuj klasy bezpośrednio
module.exports = { AcceloroDiscord };
