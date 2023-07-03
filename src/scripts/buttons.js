import {
  firstRowButtons, secondRowButtons, thirdRowButtons, fourthRowButtons, fifthRowButtons,
} from './database';

const rows = document.querySelectorAll('.row');

class CreatorOfFirstRowButtons {
  constructor(parent, symbolsList, iterator, whatCase = 'lower', language = 'en') {
    this.parent = parent;
    this.symbolsList = symbolsList;
    this.iterator = iterator;
    this.whatCase = whatCase;
    this.language = language;
    this.symbolInList = 0;
    this.searchSymbol();
  }

  buttonCreator() {
    const elem = document.createElement('div');
    const children = this.parent.childNodes;
    elem.classList.add('button', `button__${this.symbolsList[this.iterator][this.symbolInList]}`.replace(/ /ig, '-'));
    children.forEach((e) => {
      if (e.className === `button button__${this.symbolsList[this.iterator][this.symbolInList]}`) {
        elem.classList.add(`button__${this.symbolsList[this.iterator][this.symbolInList]}_right`);
      }
    });
    if (this.symbolsList[this.iterator][this.symbolInList] !== 'space') {
      elem.textContent = this.symbolsList[this.iterator][this.symbolInList];
    }
    this.parent.append(elem);
  }

  searchSymbol() {
    if (this.whatCase === 'lower' && this.language === 'en') {
      this.symbolInList = 0;
    } if (this.whatCase === 'upper' && this.language === 'en') {
      this.symbolInList = 1;
    } if (this.whatCase === 'lower' && this.language === 'bel') {
      this.symbolInList = 2;
    } if (this.whatCase === 'upper' && this.language === 'bel') {
      this.symbolInList = 3;
    }
  }
}

for (let i = 0; i < 14; i += 1) {
  new CreatorOfFirstRowButtons(rows[0], firstRowButtons, i, 'lower').buttonCreator();
}

for (let i = 0; i < 14; i += 1) {
  new CreatorOfFirstRowButtons(rows[1], secondRowButtons, i, 'lower').buttonCreator();
}

for (let i = 0; i < 13; i += 1) {
  new CreatorOfFirstRowButtons(rows[2], thirdRowButtons, i, 'lower').buttonCreator();
}

for (let i = 0; i < 13; i += 1) {
  new CreatorOfFirstRowButtons(rows[3], fourthRowButtons, i, 'lower').buttonCreator();
}

for (let i = 0; i < 10; i += 1) {
  new CreatorOfFirstRowButtons(rows[4], fifthRowButtons, i, 'lower').buttonCreator();
}

export default CreatorOfFirstRowButtons;
