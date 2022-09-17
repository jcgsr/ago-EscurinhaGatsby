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
          direciona para a estratégia de tratamento ideal para você.{" "}
        </p>
        <p>Motivos para me procurar:</p>
        <ul className="motivos">
          <li>Sente dor ou desconforto no seu corpo;</li>
          <li>Teve COVID-19 e ainda tem sequelas;</li>
          <li>
            Sente cansaço físico ou tem dificuldade de respirar ao esforço;
          </li>
          <li>Sente cansaço na musculatura da coluna;</li>
          <li>Não consegue manter a postura sem sentir dor;</li>
          <li>Tem dificuldade de equilíbrio;</li>
          <li>Tem mais de 60 anos;</li>
          <li>Possui torcicolo com frequência;</li>
          <li>Sofre com tendinite, bursite ou esporão;</li>
          <li>Torceu alguma articulação do corpo;</li>
          <li>Tem dificuldade de cicatrizar;</li>
          <li>Está com insônia, ansiedade ou depressão.</li>
        </ul>
        <p>Tem interesse em ter uma consulta? É só clicar no link abaixo!</p>
      </section>
      <WhatsappLink terapia="marcar uma consulta fisioterapêutica" />
    </main>
  </Layout>
);

export default Fisioterapia;
