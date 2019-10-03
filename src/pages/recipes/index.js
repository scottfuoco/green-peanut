import React from 'react';

import Layout from '../../components/Layout';
import RecipeRoll from '../../components/RecipeRoll';

const RecipePage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <RecipeRoll />
        </div>
      </div>
    </section>
  </Layout>
);

export default RecipePage;
