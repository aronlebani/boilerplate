import fs from 'fs';

export class Fs {

  fs: Any;

  constructor() {
    this.fs = fs;
  }

  writeFileToDisk(body: Number, name: String): Promise<Void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(name, body, (err, written) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  readfileFromDisk(name: String): Promise<Void> {
    return new Promise((resolve, reject) => {
      fs.readFile(name, (err, body) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(body);
        }
      });
    });
  }
}
