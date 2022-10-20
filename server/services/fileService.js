const fs = require("fs")
const path = require("path")
const File = require("../models/File")
const config = require("config")

class FileService {

	createDir(file) {
		const filePath = `${config.get("filePath")}/${file.user}/${file.path}`
		// console.log("file path in FileService = ", filePath)
		return new Promise(((resolve, reject) => {
			try {
				console.log("fs log here: ", fs.existsSync(filePath))
				if (!fs.existsSync(filePath)) {
					fs.mkdirSync(filePath)
					return resolve({message: 'File was created'})
				} else {
					return reject({message: 'File already exist'})
				}

			} catch (e) {
				console.log("errorn here! = ", e)
				return reject({message: 'File error'})
			}
		}))
	}

	deleteFile(file) {
		const path = this.getPath(file)
		if (file.type === 'dir') {
			fs.rmdirSync(path)
		} else {
			fs.unlinkSync(path)
		}
	}

	getPath(file) {
		return config.get('filePath') + '/' + file.user + '/' + file.path;
	}
}

module.exports = new FileService()