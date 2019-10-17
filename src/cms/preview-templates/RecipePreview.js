import React from 'react';
import PropTypes from 'prop-types';
import RecipeTemplate from '../../templates/recipe';

const RecipePreview = ({ entry, widgetFor }) => (
  <RecipeTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

RecipePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RecipePreview;
