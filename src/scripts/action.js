import {
  firstRowButtons, secondRowButtons, thirdRowButtons,
  fourthRowButtons, fifthRowButtons, firstRowKeyCodes, secondRawKeyCodes, thirdRawKeyCodes,
  fourthRowKeyCodes, fifthRowKeyCodes,
} from './database';

import WhatSpecialBtns from './specialButtons';
import LangToggler from './languages';

const btn = document.querySelectorAll('.button');
const textarea = document.querySelector('.textarea');
const wrapper = document.querySelector('.buttons-area');

const languageToggler = new LangToggler();
const specialButtonsAction = new WhatSpecialBtns();

languageToggler.toggler();
specialButtonsAction.toggler();

class ButtonAction {
  constructor(shift = false, capsLock = false, capsLockShift = false, english = true) {
    this.buttonsDataBase = [
      firstRowButtons, secondRowButtons, thirdRowButtons, fourthRowButtons, fifthRowButtons,
    ];
    this.keyCodesDataBase = [
      firstRowKeyCodes, secondRawKeyCodes, thirdRawKeyCodes, fourthRowKeyCodes, fifthRowKeyCodes,
    ];
    this.shift = shift;
    this.capsLock = capsLock;
    this.capsLockShift = capsLockShift;
    this.english = english;
    this.whatLetter = 0;
    this.cursorStart = 0;
    this.cursorEnd = 0;
  }

  pressKey() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.addEventWithKey(event.code);
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.removeEventWithKey(event.code);
    });

    document.addEventListener('click', () => {
      this.cursorStart = textarea.selectionStart;
      this.cursorEnd = textarea.selectionEnd;
    });
    this.addEventWithMouse();
  }

  addEventWithMouse() {
    wrapper.addEventListener('mousedown', (event) => {
      event.preventDefault();
      this.actualizeLanguage();
      this.cursorStart = textarea.selectionStart;
      this.cursorEnd = textarea.selectionEnd;

      this.keyCodesDataBase.forEach((elem, i) => {
        elem.forEach((e, j) => {
          if (event.target && event.target.parentNode.parentNode.classList.contains(e) && !event.target.parentNode.parentNode.classList.contains('Tab')
          && !event.target.parentNode.parentNode.classList.contains('CapsLock') && !event.target.parentNode.parentNode.classList.contains('ShiftLeft')
          && !event.target.parentNode.parentNode.classList.contains('ControlLeft') && !event.target.parentNode.parentNode.classList.contains('AltLeft')
          && !event.target.parentNode.parentNode.classList.contains('MetaLeft') && !event.target.parentNode.parentNode.classList.contains('Space')
          && !event.target.parentNode.parentNode.classList.contains('MetaRight') && !event.target.parentNode.parentNode.classList.contains('AltRight')
          && !event.target.parentNode.parentNode.classList.contains('ShiftRight') && !event.target.parentNode.parentNode.classList.contains('Enter')
          && !event.target.parentNode.parentNode.classList.contains('Backspace') && !event.target.parentNode.parentNode.classList.contains('Fn')) {
            textarea.setRangeText(this.buttonsDataBase[i][j][this.whatLetter], this.cursorStart, this.cursorEnd, 'end');
          } else if (event.target && event.target.parentNode.parentNode.classList.contains('Tab')) {
            textarea.setRangeText('   ', this.cursorStart, this.cursorEnd, 'end');
          } else if (event.target && event.target.parentNode.parentNode.classList.contains('Space')) {
            textarea.setRangeText(' ', this.cursorStart, this.cursorEnd, 'end');
          } else if (event.target && event.target.parentNode.parentNode.classList.contains('Enter')) {
            textarea.setRangeText('\n', this.cursorStart, this.cursorEnd, 'end');
          } else if (event.target && event.target.parentNode.parentNode.classList.contains('Backspace')) {
            if (this.cursorStart > 0 && this.cursorStart === this.cursorEnd) {
              textarea.setRangeText('', this.cursorStart - 1, this.cursorEnd, 'end');
            } else if (this.cursorStart >= 0 && this.cursorStart !== this.cursorEnd) {
              textarea.setRangeText('', this.cursorStart, this.cursorEnd, 'end');
            }
          }
        });
      });
    });
  }

  removeEventWithKey(eventCode) {
    this.actualizeLanguage();
    if (eventCode !== 'CapsLock' || eventCode !== 'ShiftLeft' || eventCode !== 'ControlLeft' || eventCode !== 'AltLeft'
      || eventCode !== 'AltRight' || eventCode !== 'ShiftRight') {
      btn.forEach((button) => {
        if (button.classList.contains(eventCode)) {
          button.classList.remove('active');
        }
      });
    }
  }

  addEventWithKey(eventCode) {
    this.actualizeLanguage();
    this.cursorStart = textarea.selectionStart;
    this.cursorEnd = textarea.selectionEnd;

    this.keyCodesDataBase.forEach((elem, i) => {
      elem.forEach((e, j) => {
        if (eventCode === e) {
          if (eventCode !== 'Tab' && eventCode !== 'CapsLock' && eventCode !== 'ShiftLeft' && eventCode !== 'ControlLeft' && eventCode !== 'AltLeft'
            && eventCode !== 'MetaLeft' && eventCode !== 'Space' && eventCode !== 'MetaRight' && eventCode !== 'AltRight' && eventCode !== 'ShiftRight'
            && eventCode !== 'Enter' && eventCode !== 'Backspace') {
            textarea.setRangeText(this.buttonsDataBase[i][j][this.whatLetter], this.cursorStart, this.cursorEnd, 'end');
          } else if (eventCode === 'Tab') {
            textarea.setRangeText('   ', this.cursorStart, this.cursorEnd, 'end');
          } else if (eventCode === 'Space') {
            textarea.setRangeText(' ', this.cursorStart, this.cursorEnd, 'end');
          } else if (eventCode === 'Enter') {
            textarea.setRangeText('\n', this.cursorStart, this.cursorEnd, 'end');
          } else if (eventCode === 'Backspace') {
            if (this.cursorStart > 0 && this.cursorStart === this.cursorEnd) {
              textarea.setRangeText('', this.cursorStart - 1, this.cursorEnd, 'end');
            } else if (this.cursorStart >= 0 && this.cursorStart !== this.cursorEnd) {
              textarea.setRangeText('', this.cursorStart, this.cursorEnd, 'end');
            }
          }
        }
      });
      if (eventCode !== 'CapsLock' || eventCode !== 'ShiftLeft' || eventCode !== 'ControlLeft' || eventCode !== 'AltLeft'
      || eventCode !== 'AltRight' || eventCode !== 'ShiftRight') {
        btn.forEach((button) => {
          if (button.classList.contains(eventCode)) {
            button.classList.add('active');
          }
        });
      }
    });
  }

  actualizeLanguage() {
    this.shift = specialButtonsAction.shift;
    this.capsLock = specialButtonsAction.capsLock;
    this.capsLockShift = specialButtonsAction.capsLockShift;
    this.english = languageToggler.english;

    if (this.english && !this.shift && !this.capsLock && !this.capsLockShift) {
      this.whatLetter = 0;
    } else if (this.english && this.shift && !this.capsLock && !this.capsLockShift) {
      this.whatLetter = 1;
    } else if (this.english && !this.shift && this.capsLock && !this.capsLockShift) {
      this.whatLetter = 2;
    } else if (this.english && !this.shift && !this.capsLock && this.capsLockShift) {
      this.whatLetter = 3;
    } else if (!this.english && !this.shift && !this.capsLock && !this.capsLockShift) {
      this.whatLetter = 4;
    } else if (!this.english && this.shift && !this.capsLock && !this.capsLockShift) {
      this.whatLetter = 5;
    } else if (!this.english && !this.shift && this.capsLock && !this.capsLockShift) {
      this.whatLetter = 6;
    } else if (!this.english && !this.shift && !this.capsLock && this.capsLockShift) {
      this.whatLetter = 7;
    }
  }
}

new ButtonAction().pressKey();

export default ButtonAction;
