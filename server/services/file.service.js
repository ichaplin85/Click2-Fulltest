const fs = require('fs');
const File = require('../models/File');
const path = process.env.FILE_PATH;

class FileService {

  createDir(file) {

    const filePath = `${path}/${file.user}/${file.path}`
    console.log(filePath);
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath)
          return resolve({ message: 'File has created' })
        } else {
          return reject({ message: 'File already exist' })
        }

      } catch (error) {
        retun
      }
    })
  }

}

module.exports = new FileService();

