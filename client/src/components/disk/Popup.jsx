import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../reducers/fileReducer";

const Popup = () => {
	const [dirName, setDirName] = useState('')
	const popupDisplay = useSelector(state => state.files.popupDisplay)
	const dispatch = useDispatch()

	return (
		<div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
			<div className="popup__content" onClick={(event => event.stopPropagation())}>
				<div className="popup__header">
					<div className="popup__title">Создать новую папку</div>
					<button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
				</div>
				<input type="text" placeholder="Enter directory name..." value={dirName} setValue={setDirName}/>
				<button className="popup__create">Создать</button>
			</div>
		</div>
	);
};

export default Popup;