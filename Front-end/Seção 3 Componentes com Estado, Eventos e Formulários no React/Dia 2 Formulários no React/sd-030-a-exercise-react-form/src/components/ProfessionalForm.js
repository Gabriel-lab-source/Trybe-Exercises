import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfessionalForm extends Component {
  render() {
    const { handleChange, resume, handleMouseEnter } = this.props;
    const { curriculo, cargo, descricaoDoCargo } = resume;

    return (
      <fieldset>
        <legend>
          Insira os dados de seu último emprego
        </legend>
        <label
          htmlFor="resume"
        >
          Resumo do currículo:
        </label>
        <textarea
          id="resume"
          name="curriculo"
          value={ curriculo }
          onChange={ handleChange }
          maxLength={ 1000 }
        />
        <br />
        <br />
        <label
          htmlFor="role"
        >
          Cargo:
        </label>
        <input
          type="text"
          id="role"
          name="cargo"
          maxLength={ 40 }
          value={ cargo }
          onChange={ handleChange }
          onMouseEnter={ handleMouseEnter }
        />
        <br />
        <br />
        <label
          htmlFor="roleDescription"
        >
          Descrição do cargo:
        </label>
        <textarea
          id="roleDescription"
          name="descricaoDoCargo"
          value={ descricaoDoCargo }
          onChange={ handleChange }
          maxLength={ 500 }
        />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  curriculo: PropTypes.string,
  cargo: PropTypes.string,
  descricaoDoCargo: PropTypes.string,
  handleChange: PropTypes.func,
  handleMouseEnter: PropTypes.func,
}.isRequired;
