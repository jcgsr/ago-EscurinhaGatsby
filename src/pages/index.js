// 27.08.2021 reescrevendo o site de Escurinha em Gatsby

import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Contatos from "../components/contatos";
//import Local from "../components/local";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Site de Clara Azevedo" />
    <div className="container">
      <section id="marca">
        <StaticImage
          src="../assets/images/Marca.png"
          alt="Logotipo"
          placeholder="blurred"
          layout="constrained"
        />
      </section>
      <main id="sobre">
        <h1>Quem sou eu</h1>
        <StaticImage
          src="../assets/images/Escurinha-quem.jpeg"
          alt="Clara Azevedo"
          placeholder="blurred"
          layout="constrained"
        />
        <section className="card">
          {" "}
          <p>
            Me chamo Clara, sou pisciana e filha do meio, adoro ficar em casa
            mas topo qualquer passeio ao ar livre! Gosto de ouvir música ( de
            todo tipo) , sou bem humorada mas bem conservadora. Não gosto de
            desorganização e sou um pouco apressadinha, quero tudo pra ontem
            rsrs.{" "}
          </p>
          <p>
            Minha missão é ser aquela pessoa que leva alegria e tranquilidade
            onde chega. Na minha profissão procuro sempre oferecer acolhimento ,
            escuta e compreensão.{" "}
          </p>
          <p>
            Para a maioria das pessoas a fisioterapia se resume a “choquinhos”,
            massagens ou até mesmo respirar fundo. Porém a fisioterapia é muito
            mais do que isso, somos excepcionais em usar nosso conhecimento para
            dar uma nova oportunidade para as pessoas, devolvendo função e
            independência durante a reabilitação e prevenção de saúde.
          </p>
          <span>
            <strong>‘Mens sana in corpore sano’</strong>
          </span>
          <p>
            Para o poeta romano Juvenal, “mente sã num corpo são” é o que as
            pessoas deveriam desejar na vida. Para mim, corpo, mente e espírito
            estiveram sempre interligados. Viver uma vida plena, livre dos
            ansiolíticos, anti-inflamatórios e analgésicos é o que todos querem,
            e algumas pessoas até acham que nunca mais vão poder realizar
            atividades do dia-a-dia após passarem por algum problema de saúde.
          </p>
          <p>
            É impressionante como o nosso corpo pode demonstrar um estado
            emocional desequilibrado. Pessoas que sofrem com depressão e
            ansiedade, por exemplo, podem sofrer com dor em partes específicas
            do corpo. Daí começam a tomar diversos remédios mas, no entanto, não
            cuidam do que está causando tudo isso: as emoções. Por isso decidi
            estudar o ser humano por completo de forma íntegral, através do
            Método Pilates e da Técnica Milenar Chinesa Acupuntura.{" "}
          </p>
          <p>
            Desde a minha graduação, busquei aprender com os melhores
            profissionais para me tornar uma fisioterapeuta qualificada e
            humanizada, prática que continuo até hoje pois sei da importância do
            estudo.
          </p>
          <p>
            COM A FISIOTERAPIA EU APRENDI que o corpo é a nossa casa, e é
            preciso cuidar do seu templo para ser uma pessoa melhor.
          </p>
          <p>
            COM O PILATES EU ENTENDI que o exercício físico feito de forma
            consciente pode ajudar a te manter em equilíbrio durante as
            adversidades do dia a dia, e que respirar é um ato de profunda
            conexão com o que é verdadeiramente essencial.
          </p>
          <p>
            COM A ACUPUNTURA COMPREENDI o por que os chineses vivem mais, e como
            o estilo de vida e o conhecimento milenar oriental pode mudar de
            forma positiva a sua saúde, proporcionando longevidade e qualidade
            de vida.{" "}
          </p>
          <p>
            Deixo abaixo um mini currículo com cursos e vivências que tive
            durante esse caminho:
          </p>
          <p>
            <ul id="cv">
              <li>Fisioterapeuta pela Universidade Tiradentes</li>
              <li>
                Pós- graduanda em Medicina Chinesa - Acupuntura pelo Instituto
                HIB
              </li>
              <li>Instrutora de Pilates pela Active Pilates Brasil</li>
              <li>Cursos de atualização em Pilates Internacional - Canadá</li>
              <li>
                Curso de Programa de alta performance na abordagem da dor lombar
                pela Active Curso
              </li>
              <li>
                Curso de Dry needling e síndrome dolorosa miofascial pela SBF
              </li>
              <li>
                Participação em cursos e congressos regionais e internacionais
              </li>
              <li>Curso de Atualização em Pilates Online</li>
              <li>Curso de Laserpuntura , direto ao ponto</li>
              <li>
                Curso de Emoções como causa de adoecimento na Medicina
                Tradicional Chinesa
              </li>
            </ul>
          </p>
        </section>
      </main>
      <section className="fotos">
        <div className="links">
          <Link to="/fisioterapia">
            <StaticImage
              src="../assets/images/Escurinha-fisio.jpeg"
              alt="Clara Azevedo - Fisioterpia"
              placeholder="blurred"
              layout="constrained"
            />
          </Link>
          <p>Quando devo procurar um fisioterapeuta?</p>
        </div>
        <div className="links">
          <Link to="/pilates">
            <StaticImage
              src="../assets/images/Escurinha-pilates.jpeg"
              alt="Clara Azevedo - Pilates"
              placeholder="blurred"
              layout="constrained"
            />
          </Link>
          <p>Por que devo fazer pilates?</p>
        </div>
        <div className="links">
          <Link to="/acupuntura">
            <StaticImage
              src="../assets/images/Escurinha-acupuntura.jpeg"
              alt="Clara Azevedo - Acupuntura"
              placeholder="blurred"
              layout="constrained"
            />
          </Link>
          <p>Como funciona a acupuntura?</p>
        </div>
      </section>
      <Contatos />
    </div>
  </Layout>
);

export default IndexPage;
