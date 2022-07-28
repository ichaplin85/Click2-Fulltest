const fileService = require('../services/file.service');
const User = require('../models/User');
const File = require('../models/File');
const fs = require('fs');
const { log } = require('console');
const pathFiles = process.env.FILE_PATH;




class FileController {

  async createDir(req, res) {
    try {
      const { name, type } = req.body;

      const file = new File({ name, type, user: req.user.id })

      file.path = name
      await fileService.createDir(file)

      await file.save()
      return res.json(file)

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error })
    }
  }

  async fetchFiles(req, res) {
    try {
      const files = await File.find({ user: req.user.id })
      return res.json(files)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Cannot get files' })

    }
  }

  async uploadFile(req, res) {
    try {
      console.log(req.files.file);
      // console.log(req.user);

      const file = req.files.file;

      // const parent = await File.findOne({ user: req.user.id });
      const user = await User.findOne({ _id: req.user.id })

      // let path = `${pathFiles}/${user._id}/${file.name}`;

      // if (fs.existsSync(path)) {
      //   return res.status(400).json({ message: 'File already exist' })
      // }

      // file.mv(path)

      // const type = file.name.split(".").pop();
      // const dbFile = new File({
      //   name: file.name,
      //   type,
      //   path,
      //   user: user._id
      // })

      // await dbFile.save()
      // await user.save() //?

      // return res.json(dbFile)


    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Upload error" })
    }
  }

}



module.exports = new FileController();
