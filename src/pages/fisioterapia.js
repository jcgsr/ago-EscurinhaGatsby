import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";
import WhatsappLink from "../components/whatsapp-link.js";
const Fisioterapia = () => (
	<Layout>
		<Seo title="Fisioterapia" description="Página sobre fisioterapia.js" />
		<main className="terapias">
			<h1>SOBRE FISIOTERAPIA</h1>
			<StaticImage
				src="../assets/images/Escurinha-fisio.jpeg"
				alt="Clara Azevedo - Fisioterpia"
				placeholder="blurred"
				layout="constrained"
			/>
			<section className="card">
				<p>
					Reabilitar, prevenir e tratar os distúrbios cinético-funcionais
					decorrentes de alterações no movimento do corpo humano é a minha
					missão como Fisioterapeuta.
				</p>
				<p>
					Utilizo técnicas, métodos e todo o meu conhecimento para resolver o
					seu problema. Como cada indivíduo é único e o raciocínio clínico é
					fundamental para o tratamento, início com uma avaliação precisa que me
					direciona para a estratégia de tratamento ideal para você. Sente
					alguma alteração no seu corpo que te resultou em dor ou desconforto
					físico?{" "}
					<strong>
						Se você teve COVID-19 ou conhece alguém que teve e está com sequelas
					</strong>
					, este é o momento para me procurar!
				</p>
				<p>
					O modelo de Teleatendimento é regularizado, seguro e possível nesse
					momento de pandemia, ofereço o atendimento virtual para os pacientes
					que não podem realizar a consulta domiciliar ou na clínica por algum
					motivo. Tem interesse em ter uma consulta? É só clicar no link abaixo!
				</p>
			</section>
			<WhatsappLink terapia="marcar uma consulta fisioterapêutica" />
		</main>
	</Layout>
);

export default Fisioterapia;
