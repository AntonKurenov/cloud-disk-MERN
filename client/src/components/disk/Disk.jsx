import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/FileList";
import "./disk.css"
import Popup from "./Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer";

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const dirStack = useSelector(state => state.files.dirStack)

	useEffect(() => {
		dispatch(getFiles(currentDir))
	}, [currentDir])

	function showPopupHandler() {
		// dispatch(createDir(currentDir, 'heehhh'))
		dispatch(setPopupDisplay('flex'))
	}

	function backClickHandler() {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}

	function fileUploadHandler(event) {
		const files = [...event.target.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
	}

	return (
		<div className="disk">
			<div className="btns">
				<button className="btns__back" onClick={() => backClickHandler()}>назад</button>
				<button className="btns__create" onClick={() => showPopupHandler()}>cоздать папку</button>
				<div className="btns__upload">
					<label htmlFor="upload-input" className="disk__upload-label">Загрузить файл</label>
					<input multiple={true} onChange={(event) => fileUploadHandler(event)} type="File" id="upload-input" className="disk__upload-input"/>
				</div>
			</div>
			<FileList/>
			<Popup/>
		</div>
	);
};

export default Disk;