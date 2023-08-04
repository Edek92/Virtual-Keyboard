// import { firstRowButtons, secondRowButtons, thirdRowButtons,
// fourthRowButtons, fifthRowButtons, firstRowKeyCodes, secondRawKeyCodes, thirdRawKeyCodes,
// fourthRowKeyCodes, fifthRowKeyCodes, } from database;
import WhatSpecialBtns from './specialButtons';
import LangToggler from './languages';

const btn = document.querySelectorAll('.button');
const textarea = document.querySelector('.textarea');

const languageToggler = new LangToggler();
const specialButtonsAction = new WhatSpecialBtns();

languageToggler.toggler();
specialButtonsAction.toggler();

class ButtonAction {
  constructor(shift = false, capsLock = false, capsLockShift = false, english = true) {
    this.shift = shift;
    this.capsLock = capsLock;
    this.capsLockShift = capsLockShift;
    this.english = english;
  }

  pressKey() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.actualizeLanguage();
      if (!this.shift && !this.capsLock && !this.capsLockShift) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.setRangeText(event.code.slice(-1), start, end, 'end');
      }

      // eslint-disable-next-line no-console
      console.log(`english = ${this.english}, shift = ${this.shift}, capsLock = ${this.capsLock}, capsLockShift = ${this.capsLockShift}`);
    });

    btn.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.setRangeText('МЫШ', start, end, 'end');
      });
    });
  }

  actualizeLanguage() {
    this.shift = specialButtonsAction.shift;
    this.capsLock = specialButtonsAction.capsLock;
    this.capsLockShift = specialButtonsAction.capsLockShift;
    this.english = languageToggler.english;
  }
}

new ButtonAction().pressKey();

export default ButtonAction;
