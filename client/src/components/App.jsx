import React, {useEffect} from "react";
import Navbar from "./navbar/Navbar";
import "./app.css"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login"
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../reducers/userReducer";
import {auth} from "../actions/user";
import Disk from "./disk/Disk";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(auth())
		}
	}, [])
	console.log("isAuth = ", isAuth)

	return (
		<BrowserRouter>
			<div className="app">
				<Navbar/>
				{!isAuth ?
					<Routes>
						<Route path="/registration" element={<Registration/>}/>
						<Route path="/login" element={<Login/>}/>
						<Route path="*" element={<Navigate to="/login"/>}/>
					</Routes>
					:
					<Routes>
						<Route path="/" element={<Disk/>}/>
						<Route path="*" element={<Navigate to="/"/>}/>
					</Routes>
				}
			</div>
		</BrowserRouter>
	);
}

export default App;
