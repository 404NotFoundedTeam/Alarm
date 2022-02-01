import FooterWrapper from "./FooterWrapper";
import {Link} from "react-router-dom";
import React, { useState } from 'react';


const Footer = () => {
	let [active, setActive] = useState();
	
	let lastActive = (e) => {
		if(active) active.classList.remove('active');
		else document.querySelector('.active').classList.remove('active');
		e.target.parentElement.classList.add('active');
		setActive(e.target.parentElement);
	}
	return (
		<FooterWrapper>
			<div className="container">
				<div className="row w-100 text-center">
					<div className="col-4 active" id="home">
						<Link to={"/"} onClick={(e)=> {lastActive(e)}}>Alarm</Link>
					</div>
					<div className="col-4">
						<Link to={"/secondomer"} onClick={(e)=> {lastActive(e)}}>Stopwatch</Link>
					</div>
					<div className="col-4">
						<Link to={"/"} onClick={(e)=> {lastActive(e)}}>Countdown</Link>
					</div>
				</div>
			</div>
		</FooterWrapper>
	)
}

export default Footer;