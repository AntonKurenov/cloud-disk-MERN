import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles} from "../../actions/file";
import FileList from "./fileList/FileList";
import "./disk.css"
import Popup from "./Popup";
import {setPopupDisplay} from "../../reducers/fileReducer";

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)

	useEffect(() => {
		dispatch(getFiles(currentDir))
	}, [currentDir])

	function showPopupHandler() {
		// dispatch(createDir(currentDir, 'heehhh'))
		dispatch(setPopupDisplay('flex'))
	}

	function backClickHandler() {

	}

	return (
		<div className="disk">
			<div className="btns">
				<button className="btns__back" onClick={() => backClickHandler()}>назад</button>
				<button className="btns__create" onClick={() => showPopupHandler()}>cоздать папку</button>
			</div>
			<FileList/>
			<Popup/>
		</div>
	);
};

export default Disk;