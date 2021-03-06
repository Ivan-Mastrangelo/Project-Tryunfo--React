import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome:
          <input
            type="text"
            name="cardName"
            id="nomeDaCarta"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        Descrição:
        <label htmlFor="descrição">
          <input
            type="textarea"
            name="cardDescription"
            id="descrição"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="primeiroAtributo">
          Atributo 01
          <input
            type="number"
            name="cardAttr1"
            id="primeiroAtributo"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="segundoAtributo">
          Atributo 02
          <input
            type="number"
            name="cardAttr2"
            id="segundoAtributo"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="terceiroAtributo">
          Atributo 03
          <input
            type="number"
            name="cardAttr3"
            id="terceiroAtributo"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="urlImagem">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="urlImagem"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          Classificação:
          <select
            name="cardRare"
            id="normal"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {hasTrunfo
          ? (<h4>Você já tem um Super Trunfo em seu baralho</h4>
          ) : (
            <label htmlFor="superTrunfo">
              SuperTrunfo?
              <input
                type="checkbox"
                name="cardTrunfo"
                id="superTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>)}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
