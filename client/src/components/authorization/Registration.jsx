import React, {useState} from 'react';
import "./authorization.css"
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";

const Registration = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div className="authorization">
			<div className="authorization__header">Регистрация</div>
			<Input value={email} setValue={setEmail} type="text" placeholder="Введите свой email..."/>
			<Input value={password} setValue={setPassword} type="text" placeholder="Придумайте пароль..."/>
			<button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
		</div>
	);
};

export default Registration;
