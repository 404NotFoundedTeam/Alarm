import * as PropTypes from "prop-types";
import {Button, IconButton} from "@mui/material";
import {useState} from "react";
import ModalWrapper from "./MoalWrapper";

const Modal = ({item, stop}) => {
	const [isModal, setIsModal] = useState(true)
	const stopFunction = () => {
		stop();
		console.log("stopi")
		setIsModal(false)
	}
	return (
		<ModalWrapper className={!isModal && "d-none" || ""}>
			<div className="row">
				<div className="col-md-8 col-lg-6 col-xxl-5 p-3">
					<div className="box-modal w-100">
						<h2 className={"title"}>Budilnik</h2>
						<img src="https://i.gifer.com/origin/87/879bd0d106546144547d01f8edfc1657.gif" alt="budilsnik"/>
						<p className={"vaqt"}>{item.hours + " : " + item.minutes}</p>
						<IconButton className="times" onClick={stopFunction}><i className={"fas fa-times"}/></IconButton>
					</div>
				</div>
			</div>
		</ModalWrapper>
	)
}
export default Modal;