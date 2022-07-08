const fileService = require('../services/fileService')
const User = require('../models/User')
const File = require('../models/File')

class FileController {
	async createDir(req, res) {
		// console.log("req = ", req)
		try {
			const {name, type, parent} = req.body
			const file = new File({name, type, parent, user: req.user.id})
			const parentFile = await File.findOne({_id: parent})
			if (!parentFile) {
				file.path = name
				console.log("file path 1 = ", file.path)
				await fileService.createDir(file)
			} else {
				file.path = `${parentFile.path}/${file.name}`
				console.log("file path 2 = ", file.path)
				await fileService.createDir(file)
				parentFile.children.push(file._id)
				await parentFile.save()
			}
			await file.save()
			return res.json(file)
		} catch (e) {
			console.log(e)
			return res.status(400).json(e)
		}
	}
	
	async getFiles(req, res) {
		try {
			const files = await File.find({user: req.user.id, parent: req.query.parent})
			return res.json(files)
		} catch (e) {
			console.log("catch error in getFiles = ", e)
			return res.status(500).json({message: "Can't get files"})
		}
	}
}

module.exports = new FileController()