import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";
import WhatsappLink from "../components/whatsapp-link.js";
const Pilates = () => (
	<Layout>
		<Seo title="Pilates" description="Página sobre pilates" />
		<main className="terapias">
			<h1>POR QUE PRATICAR PILATES ONLINE?</h1>
			<StaticImage
				src="../assets/images/Escurinha-pilates.jpeg"
				alt="Clara Azevedo - Pilates"
				placeholder="blurred"
				layout="constrained"
			/>
			<section className="card">
				<p>
					Porque é um método de atividade física desenvolvido para trabalhar o
					ser humano como um todo, como filosofia de vida, onde corpo, mente e
					espírito estão conectados.
				</p>
				<p>
					Possibilita o fortalecimento de músculos importantes, desenvolve a
					flexibilidade e mobilidade para realizar movimentos do dia a dia sem
					desconforto, proporcionando autocontrole, consciência e concentração.
				</p>
				<p>
					A modalidade feita de forma Online te permite cuidar do seu corpo de
					forma segura sem se expor ao vírus. Como o pilates foi desenvolvido
					inicialmente com exercícios físicos feitos com o peso do próprio
					corpo, o fato de não estar em um studio não é um problema, além disso
					as aulas podem ser diversificadas com auxílio de alguns acessórios
					sendo eles bolinhas e faixas elásticas, mas se você não tiver nenhum
					desses dispositivos, é possível fazer uma adapatação dos exercícios
					com cadeira, cabo de vassoura e ate mesmo uma toalha, objetos que se
					tem com facilidade em casa. Aulas são ministradas por mim, tem duração
					de 50 minutos e é feita por vídeo chamada.
				</p>
			</section>
			<WhatsappLink terapia="praticar pilates" />
		</main>
	</Layout>
);

export default Pilates;
