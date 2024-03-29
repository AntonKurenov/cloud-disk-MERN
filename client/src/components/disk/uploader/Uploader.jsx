import React from 'react';
import './uploader.css'
import UploadFile from "./UploadFile";
import {useDispatch, useSelector} from "react-redux";

const Uploader = () => {
	const files = [{id: 1, name: "file", progress: 50}, {id: 2, name: "file", progress: 10}]
	const isVisible = useSelector(state => state.upload.isVisible)
	const dispatch = useDispatch()

	return ( isVisible &&
		<div className="uploader">
			<div className="uploader__header">
				<div className="uploader__title">Загрузки</div>
				<button className="uploader__close" onClick={() => dispatch(hideUploader())}>X</button>
			</div>
			{files.map(file =>
				<UploadFile key={file.id} file={file}/>
			)}
		</div>
	);
};

export default Uploader;