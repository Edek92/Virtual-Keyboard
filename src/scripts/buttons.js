import {
  firstRowButtons, secondRowButtons, thirdRowButtons, fourthRowButtons, fifthRowButtons,
  firstRowKeyCodes, secondRawKeyCodes, thirdRawKeyCodes, fourthRowKeyCodes, fifthRowKeyCodes,
} from './database';

import Creator from './wrappers';

const wrapperCreator = new Creator();
wrapperCreator.createField();

const buttonCreator = new Creator();
buttonCreator.createField();

const rows = document.querySelectorAll('.row');

export default class CreatorOfButtons {
  constructor() {
    this.symbolInList = 0;
    this.lang = 'en';
    this.languages = ['en', 'blr'];
    this.case = 'nothing';
    this.cases = ['nothing', 'shift', 'capsLock', 'capsLockShift'];
  }

  starter() {
    for (let i = 0; i < 14; i += 1) {
      this.buttonCreator(rows[0], firstRowButtons, firstRowKeyCodes, i);
    }

    for (let i = 0; i < 14; i += 1) {
      this.buttonCreator(rows[1], secondRowButtons, secondRawKeyCodes, i);
    }

    for (let i = 0; i < 13; i += 1) {
      this.buttonCreator(rows[2], thirdRowButtons, thirdRawKeyCodes, i);
    }

    for (let i = 0; i < 13; i += 1) {
      this.buttonCreator(rows[3], fourthRowButtons, fourthRowKeyCodes, i);
    }

    for (let i = 0; i < 10; i += 1) {
      this.buttonCreator(rows[4], fifthRowButtons, fifthRowKeyCodes, i);
    }
  }

  buttonCreator(parent, symbolsList, keyCodeList, iterator) {
    this.parent = parent;
    this.symbolsList = symbolsList;
    this.keyCodeList = keyCodeList;
    this.iterator = iterator;
    const elem = document.createElement('div');
    const children = this.parent.childNodes;
    elem.classList.add('button', `button-${this.symbolsList[this.iterator][0]}`.replace(/ /ig, '-'), `${this.keyCodeList[this.iterator]}`);
    children.forEach((e) => {
      if (e.className === `button button-${this.symbolsList[this.iterator][0]} ShiftLeft`
      || e.className === `button button-${this.symbolsList[this.iterator][0]} AltLeft`
      || e.className === `button button-${this.symbolsList[this.iterator][0]} MetaLeft`) {
        elem.classList.add(`button-${this.symbolsList[this.iterator][0]}_right`);
      }
    });
    this.contentWrapperCreator(elem);
    this.parent.append(elem);
  }

  contentWrapperCreator(parent) {
    const elemENG = document.createElement('div');
    const elemBLR = document.createElement('div');
    if (this.lang === this.languages[0]) {
      elemENG.classList.add(`${this.languages[0]}`);
      elemBLR.classList.add(`${this.languages[1]}`, 'hidden');
    } else {
      elemENG.classList.add(`${this.languages[0]}`, 'hidden');
      elemBLR.classList.add(`${this.languages[1]}`);
    }

    this.contentButtonCreator(elemENG);
    this.contentButtonCreator(elemBLR, 4);

    parent.append(elemENG, elemBLR);
  }

  contentButtonCreator(parent, num = 0) {
    for (let i = 0; i < 4; i += 1) {
      const elem = document.createElement('div');
      if (this.case === this.cases[i]) {
        elem.classList.add(`${this.cases[i]}`);
        if (`${this.symbolsList[this.iterator][i + num]}` !== 'space') {
          elem.textContent = `${this.symbolsList[this.iterator][i + num]}`;
        }
        parent.append(elem);
      } else {
        elem.classList.add(`${this.cases[i]}`, 'hidden');
        if (`${this.symbolsList[this.iterator][i + num]}` !== 'space') {
          elem.textContent = `${this.symbolsList[this.iterator][i + num]}`;
        }
        parent.append(elem);
      }
    }
  }
}
