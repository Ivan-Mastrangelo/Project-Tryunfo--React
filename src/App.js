import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.enableDisableBtn = this.enableDisableBtn.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    // this.statusTrunfoSwitch = this.statusTrunfoSwitch.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deckOfCards: [],
      hasTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.enableDisableBtn(); });
  }

  // statusTrunfoSwitch() {
  //   deckOfCards.some((card) => {
  //     card.checked === card.checked
  //   })
  // }

  onSaveButtonClick(event) {
    event.preventDefault();
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
    } = this.state;

    const createdCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prevState) => ({
      deckOfCards: [...prevState.deckOfCards, createdCard],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
    }));
  }

  enableDisableBtn() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const sumMax = 210;
    const indMax = 90;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && attr1 + attr2 + attr3 <= sumMax
      && attr1 + attr2 + attr3 >= 0
      && attr1 <= indMax && attr1 >= 0
      && attr2 <= indMax && attr2 >= 0
      && attr3 <= indMax && attr3 >= 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
        hasTrunfo,
      },
      onInputChange,
      onSaveButtonClick,
    } = this;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          onInputChange={ onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
        />

      </div>
    );
  }
}

export default App;
