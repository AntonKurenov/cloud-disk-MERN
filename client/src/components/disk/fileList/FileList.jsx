import React from 'react';
import "./fileList.css"
import {useSelector} from "react-redux";

const FileList = () => {

	const files = useSelector(state => state.files.files)

	return (
		<div className="filelist">
			<div className="filelist__header">
				<div className="filelist__name">Название</div>
				<div className="filelist__date">Дата</div>
				<div className="filelist__size">Размер</div>
			</div>
		</div>
	);
};

export default FileList;