import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class PersonCard extends Component {
  render() {
    const { person: {imagem, nome, email, idade} } = this.props;
    return (
      <div>
        <p> { nome } </p>
        <p> { email } </p>
        <p> { idade } </p>
        <img alt={ nome } src={ imagem } />
      </div>
    )
  }
}

PersonCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
