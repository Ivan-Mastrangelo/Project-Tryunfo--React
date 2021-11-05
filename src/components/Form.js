import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome:
          <input
            type="text"
            name="nomeDaCarta"
            id="nomeDaCarta"
            data-testid="name-input"
          />
        </label>
        Descrição:
        <label htmlFor="descrição">
          <input
            type="textarea"
            name="descrição"
            id="descrição"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="primeiroAtributo">
          Atributo 01
          <input
            type="number"
            name="primeiroAtributo"
            id="primeiroAtributo"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="segundoAtributo">
          Atributo 02
          <input
            type="number"
            name="segundoAtributo"
            id="segundoAtributo"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="terceiroAtributo">
          Atributo 03
          <input
            type="number"
            name="terceiroAtributo"
            id="terceiroAtributo"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="urlImagem">
          Imagem
          <input
            type="text"
            name="urlImagem"
            id="urlImagem"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="raridade">
          Classificação:
          <select name="raridade" id="normal" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          SuperTrunfo?
          <input
            type="checkbox"
            name="superTrunfo"
            id="superTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
