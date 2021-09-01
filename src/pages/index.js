// 27.08.2021 reescrevendo o site de Escurinha em Gatsby

import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
      </main>
    </div>
  </Layout>
);

export default IndexPage;
