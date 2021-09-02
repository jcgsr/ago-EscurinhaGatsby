import React from "react";
import { ImWhatsapp } from "react-icons/im";
const Whatsapp = () => {
	return (
		<div className="zap">
			<div className="zap-content">
				<a href="https://api.whatsapp.com/send?phone=5579999652202&text=Oi, Clara!">
					<ImWhatsapp />
				</a>
			</div>
		</div>
	);
};

export default Whatsapp;
