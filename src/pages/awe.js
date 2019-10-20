import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Awe = () => (
  <Layout>
    <SEO title="hola" />
    <h1>We awesome</h1>
    <p>blossom</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Awe;
