import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const Recipe = ({ data }) => {
  const { markdownRemark: recipe } = data;

  return (
    <Layout>
      <div>{JSON.stringify(recipe.frontmatter.ingredients)}</div>
    </Layout>
  );
};

Recipe.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default Recipe;

export const pageQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        ingredients {
          ingrendient
          measurement
          units
        }
        tags
      }
    }
  }
`;
