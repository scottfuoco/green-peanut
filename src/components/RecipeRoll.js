import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const RecipeRoll = ({ data }) => {
  const { edges: recipes } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      <h1>Single Recipe</h1>
      {recipes &&
        recipes.map(({ node: recipe }) => (
          <div>{recipe.frontmatter.title}</div>
        ))}
    </div>
  );
};

RecipeRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default () => (
  <StaticQuery
    query={graphql`
      query RecipeRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecipeRoll data={data} count={count} />}
  />
);
