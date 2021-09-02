import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" description="Página de Erro" />
    <main className="error-page">
      <section>
        <h1>404: Página não encontrada</h1>
        <button>
          <Link to="/">Início</Link>
        </button>
      </section>
    </main>
  </Layout>
);

export default NotFoundPage;
