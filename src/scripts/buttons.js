const rows = document.querySelectorAll('.row');

const firstRowButtons = [['`', '~', ']', '['], ['1', '!', '1', '!'], ['2', '@', '2', '"'], ['3', '#', '3', '№'], ['4', '$', '4', '%'],
  ['5', '%', '5', ':'], ['6', '^', '6', ','], ['7', '&', '7', '.'], ['8', '*', '8', ';'], ['9', '(', '9', '('], ['0', ')', '0', ')'],
  ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['delete', 'delete', 'delete', 'delete']];

const secondRowButtons = [['tab', 'tab', 'tab', 'tab'], ['q', 'Q', 'й', 'Й'], ['w', 'W', 'ц', 'Ц'], ['e', 'E', 'у', 'У'], ['r', 'R', 'к', 'К'],
  ['t', 'T', 'е', 'Е'], ['y', 'Y', 'н', 'Н'], ['u', 'U', 'г', 'Г'], ['i', 'I', 'ш', 'Ш'], ['o', 'O', 'ў', 'Ў'], ['p', 'P', 'з', 'З'],
  ['[', '{', 'х', 'Х'], [']', '}', '\'', '\''], ['\\', '|', 'ё', 'Ё']];

const thirdRowButtons = [['caps lock', 'caps lock', 'caps lock', 'caps lock'], ['a', 'A', 'ф', 'Ф'], ['s', 'S', 'ы', 'Ы'], ['d', 'D', 'в', 'В'],
  ['f', 'F', 'а', 'А'], ['g', 'G', 'п', 'П'], ['h', 'H', 'р', 'Р'], ['j', 'J', 'о', 'О'], ['k', 'K', 'л', 'Л'], ['l', 'L', 'д', 'Д'],
  [';', ':', 'ж', 'Ж'], ['\'', '"', 'э', 'Э'], ['return', 'return', 'return', 'return']];

const fourthRowButtons = [['shift', 'shift', 'shift', 'shift'], ['z', 'Z', 'я', 'Я'], ['x', 'X', 'ч', 'Ч'], ['c', 'C', 'с', 'С'], ['v', 'V', 'м', 'М'],
  ['b', 'B', 'i', 'I'], ['n', 'N', 'т', 'Т'], ['m', 'M', 'ь', 'Ь'], [',', '<', 'б', 'Б'], ['.', '>', 'ю', 'Ю'], ['/', '?', '/', '?'], ['▲', '▲', '▲', '▲'],
  ['shift', 'shift', 'shift', 'shift']];

const fifthRowButtons = [['fn', 'fn', 'fn', 'fn'], ['control', 'control', 'control', 'control'], ['option', 'option', 'option', 'option'],
  ['command', 'command', 'command', 'command'], ['space', 'space', 'space', 'space'], ['command', 'command', 'command', 'command'],
  ['option', 'option', 'option', 'option'], ['◄', '◄', '◄', '◄'], ['▼', '▼', '▼', '▼'], ['►', '►', '►', '►']];

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
