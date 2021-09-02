import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

const Galeria = () => {
  return (
    <Layout>
      <Seo title="Galeria" description="Fotos de Clara." />
      <h1>Galeria</h1>
      <section className="card">
        <main className="galeria">
          <StaticImage
            src="../assets/images/Escurinha-quem.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/Escurinha-acupuntura.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/Escurinha-pilates.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/EscurinhaB1.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/EscurinhaB2.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/EscurinhaB3.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/EscurinhaB4.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/EscurinhaB5.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/images/EscurinhaB6.jpeg"
            alt="Foto de Clara"
            placeholder="blurred"
            layout="constrained"
          />
        </main>
      </section>
    </Layout>
  );
};

export default Galeria;
