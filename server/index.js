const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const fileUpload = require("express-fileupload")
const authRouter = require("./routes/auth.routes")
const app = express()
const PORT = config.get("serverPort")
const url = config.get("dbUrl")
const fileRouter = require("./routes/file.routers")
const cors = require("cors")
const corsMiddleware = require("./middleware/cors.middleware")

app.options('*', cors())
app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

const start = async () => {
	console.log("here")
	try {
		await mongoose.connect(url)

		console.log("hello world !")
		app.listen(PORT, () => {
			console.log("Server started on port ", PORT)
		})
	} catch (e) {
		console.log(e)
	}
}

start()