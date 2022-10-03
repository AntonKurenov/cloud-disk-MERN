import React from 'react';
import "./fileList.css"
import {useSelector} from "react-redux";
import File from "./file/File";

const FileList = () => {

	const files = useSelector(state => state.files.files)
		.map(file => <File key={file._id} file={file}/>)
	// const files = [{_id: 1, name: "Directory1", type: 'dir', size: '100Mb', date: '8.07.2022'},
	// 	{_id: 2, name: "Directory2", type: 'mp3', size: '100Mb', date: '8.08.2022'}]
	// 	.map(file => <File file={file} key={file._id}/>)

	return (
		<div className="filelist">
			<div className="filelist__header">
				<div className="filelist__name">Название</div>
				<div className="filelist__date">Дата</div>
				<div className="filelist__size">Размер</div>
			</div>
			{files}
		</div>
	);
};

export default FileList;