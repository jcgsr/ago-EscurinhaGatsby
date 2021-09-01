import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiFacebook, FiInstagram } from "react-icons/fi";

const Contatos = () => {
	return (
		<section className="contatos">
			<h1>Contatos</h1>
			<div className="contato">
				<a href="mailto:pilatescomclara@gmail.com" target="new">
					<FiMail />
				</a>
				<a href="https://api.whatsapp.com/send?phone=5579999652202&text=Oi, Clara!">
					<FaWhatsapp />
				</a>
				<a href="https://www.facebook.com/clara.azevedo.52687506">
					<FiFacebook />
				</a>
				<a href="https://www.instagram.com/pilatescomclara/">
					<FiInstagram />
				</a>
			</div>
		</section>
	);
};

export default Contatos;
