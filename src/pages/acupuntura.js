import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";
import WhatsappLink from "../components/whatsapp-link.js";
const Acupuntura = () => (
	<Layout>
		<Seo title="Acupuntura" description="Página sobre acupuntura" />
		<main className="terapias">
			<h1>COMO FUNCIONA A ACUPUNTURA?</h1>
			<StaticImage
				src="../assets/images/Escurinha-acupuntura.jpeg"
				alt="Clara Azevedo - Acupuntura"
				placeholder="blurred"
				layout="constrained"
			/>
			<section className="card">
				<p>
					É uma técnica milenar chinesa, que tem como objetivo principal
					equilibrar energias do indivíduo, tratando e prevenindo doenças,
					promovendo assim saúde e bem estar.
				</p>
				<p>
					De acordo com os meridianos, que são canais de energia mapeados por
					todo o seu corpo, eu utilizo a aplicação de agulhas em pontos
					específicos, com grande concentração de terminações nervosas
					sensoriais, para estimular o sistema nervoso central, possibilitando
					assim o reequilíbrio energético de todo o corpo.
				</p>
				<p>
					Além das agulhas, o uso de ventosaterapia, auriculoterapia, stiper e
					moxabustão fazem parte da Medicina Oriental, a qual é estudado por
					muitos anos, técnicas para promover saúde vital e próspera.
				</p>
			</section>
			<WhatsappLink
				terapia="fazer uma sessão de acupuntura

"
			/>
		</main>
	</Layout>
);

export default Acupuntura;
