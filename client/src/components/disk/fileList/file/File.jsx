import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir-logo.svg'
import fileLogo from '../../../../assets/img/file-logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentDir} from "../../../../reducers/fileReducer";

const File = ({file}) => {
	const dispatch = useDispatch()
	// const currentDir = useSelector(state => state.files.currentDir)

	function openDirHandler() {
		// console.log("currentDir = ", currentDir)
		dispatch(setCurrentDir(file._id))
	}

	// console.log("hello! file.date here = ", file.date)
	return (
		<div className='file' onClick={file.type === 'dir' ? () => openDirHandler() : ''}>
			<img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
			<div className="file__name">{file.name}</div>
			<div className="file__date">{file.date.slice(0, 10)}</div>
			<div className="file__size">{file.size}</div>
		</div>
	);
};

export default File;