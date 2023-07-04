import {
  firstRowButtons, secondRowButtons, thirdRowButtons, fourthRowButtons, fifthRowButtons,
} from './database';

const rows = document.querySelectorAll('.row');

class CreatorOfButtons {
  constructor(parent, symbolsList, iterator) {
    this.parent = parent;
    this.symbolsList = symbolsList;
    this.iterator = iterator;
    this.symbolInList = 0;
    this.lang = 'en';
    this.languages = ['en', 'blr'];
    this.case = 'nothing';
    this.cases = ['nothing', 'shift', 'capsLock', 'capsLockShift'];
  }

  buttonCreator() {
    const elem = document.createElement('div');
    const children = this.parent.childNodes;
    elem.classList.add('button', `button-${this.symbolsList[this.iterator][0]}`.replace(/ /ig, '-'));
    children.forEach((e) => {
      if (e.className === `button button-${this.symbolsList[this.iterator][0]}`) {
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

for (let i = 0; i < 14; i += 1) {
  new CreatorOfButtons(rows[0], firstRowButtons, i).buttonCreator();
}

for (let i = 0; i < 14; i += 1) {
  new CreatorOfButtons(rows[1], secondRowButtons, i).buttonCreator();
}

for (let i = 0; i < 13; i += 1) {
  new CreatorOfButtons(rows[2], thirdRowButtons, i).buttonCreator();
}

for (let i = 0; i < 13; i += 1) {
  new CreatorOfButtons(rows[3], fourthRowButtons, i).buttonCreator();
}

for (let i = 0; i < 10; i += 1) {
  new CreatorOfButtons(rows[4], fifthRowButtons, i).buttonCreator();
}

export default CreatorOfButtons;
