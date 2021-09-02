import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { IoSendSharp, IoArrowBackOutline } from "react-icons/io5";
const WhatsappLink = props => {
	return (
		<section className="whats">
			<a
				href="https://api.whatsapp.com/send?phone=5579999652202&text=Oi, Clara!"
				className="btnW"
			>
				<button>quero {props.terapia}</button>
			</a>
			<div className="page mt-4 mb-4">
				<div className="marvel-device nexus5">
					<div className="screen">
						<div className="chat">
							<div className="chat-container">
								<div className="user-bar">
									<div className="back">
										<IoArrowBackOutline />
									</div>
									<div className="avatar">
										<StaticImage src="../assets/images/Escurinha-fisio.jpeg" />
									</div>
									<div className="name">
										<span>Clara Azevedo</span>
										<span className="status">Fisioterapeuta</span>
									</div>
								</div>
								<div className="conversation">
									<div className="conversation-container">
										<div className="message received">
											Olá! Como posso ajudar?
											<span className="metadata">
												<span className="time"></span>
											</span>
										</div>
									</div>
									<form className="conversation-compose">
										<div className="emoji">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												id="smiley"
												x="3147"
												y="3209"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
													fill="#7d8489"
												/>
											</svg>
											Quero {props.terapia}
										</div>
										<button className="send">
											<a href="https://api.whatsapp.com/send?phone=5579999652202&text=Oi, Clara! Quero marca uma consulta">
												<div className="circle">
													<i className="zmdi zmdi-mail-send">
														<IoSendSharp />
													</i>
												</div>
											</a>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatsappLink;
