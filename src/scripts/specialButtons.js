const nothingBtns = document.querySelectorAll('.nothing');
const shiftBtns = document.querySelectorAll('.shift');
const capsLockBtns = document.querySelectorAll('.capsLock');
const capsLockShiftBtns = document.querySelectorAll('.capsLockShift');

const btn = document.querySelectorAll('.button');

export default class WhatSpecialBtns {
  constructor(nothing = true, shift = false, capsLock = false, capsLockShift = false) {
    this.nothing = nothing;
    this.shift = shift;
    this.capsLock = capsLock;
    this.capsLockShift = capsLockShift;
    this.counter = 0;
  }

  toggler() {
    // Add effects on keyboard with special keys (eventListener - KEYDOWN)
    // METHOD (event.code, isFalseFlag, isTrueFlag, showButtonsArray, hideButtonsArray, activeClass)

    this.addEffectsWithKey('CapsLock', 'capsLock', 'nothing', capsLockBtns, nothingBtns, 'button button-caps-lock CapsLock');
    this.addEffectsWithKey('ShiftLeft', 'shift', 'nothing', shiftBtns, nothingBtns, 'button button-shift ShiftLeft');
    this.addEffectsWithKey('ShiftLeft', 'capsLockShift', 'capsLock', capsLockShiftBtns, capsLockBtns, 'button button-shift ShiftLeft');
    this.addEffectsWithKey('ShiftRight', 'shift', 'nothing', shiftBtns, nothingBtns, 'button button-shift ShiftRight button-shift_right');
    this.addEffectsWithKey('ShiftRight', 'capsLockShift', 'capsLock', capsLockShiftBtns, capsLockBtns, 'button button-shift ShiftRight button-shift_right');

    // Remove effects from keyboard with special keys (eventListener - KEYUP)
    // METHOD (event.code, isFalseFlag1, isTrueFlag, showButtonsArray,
    // hideButtonsArray, disActiveClass, isFalseFlag2 = false)

    this.removeEffectsWithKey('CapsLock', 'nothing', 'capsLock', nothingBtns, capsLockBtns, 'button button-caps-lock CapsLock active');
    this.removeEffectsWithKey('ShiftLeft', 'nothing', 'shift', nothingBtns, shiftBtns, 'button button-shift ShiftLeft active', 'button button-shift ShiftRight button-shift_right active');
    this.removeEffectsWithKey('ShiftLeft', 'capsLock', 'capsLockShift', capsLockBtns, capsLockShiftBtns, 'button button-shift ShiftLeft active', 'button button-shift ShiftRight button-shift_right active');
    this.removeEffectsWithKey('ShiftRight', 'nothing', 'shift', nothingBtns, shiftBtns, 'button button-shift ShiftRight button-shift_right active', 'button button-shift ShiftLeft active');
    this.removeEffectsWithKey('ShiftRight', 'capsLock', 'capsLockShift', capsLockBtns, capsLockShiftBtns, 'button button-shift ShiftRight button-shift_right active', 'button button-shift ShiftLeft active');

    // Toggle effects with mouse click (eventListener - click)
    // addEffectWithMouse(nameOfClass, showButtonsArray, hideButtonsArray, toTrueFlag, toFalseFlag)

    this.toggleMouse('button button-caps-lock CapsLock', capsLockBtns, nothingBtns, 'capsLock', 'nothing');
    this.toggleMouse('button button-shift', shiftBtns, nothingBtns, 'shift', 'nothing');
    this.toggleMouse('button button-shift', capsLockShiftBtns, capsLockBtns, 'capsLockShift', 'capsLock');
  }

  toggleMouse(
    nameOfClass,
    showButtonsArray,
    hideButtonsArray,
    toTrueFlag,
    toFalseFlag,
  ) {
    btn.forEach((elem) => {
      elem.addEventListener('click', () => {
        if ((elem.className === nameOfClass || elem.className === `${nameOfClass} ShiftLeft` || elem.className === `${nameOfClass} ShiftRight button-shift_right`) && !this[toTrueFlag] && this[toFalseFlag]) {
          elem.classList.add('active');
          this.show(showButtonsArray);
          this.hide(hideButtonsArray);
          this[toTrueFlag] = true;
          this[toFalseFlag] = false;
        } else if ((elem.className === `${nameOfClass} active` || elem.className === `${nameOfClass} ShiftLeft active` || elem.className === `${nameOfClass} ShiftRight button-shift_right active`) && this[toTrueFlag] && !this[toFalseFlag]) {
          elem.classList.remove('active');
          this.show(hideButtonsArray);
          this.hide(showButtonsArray);
          this[toFalseFlag] = true;
          this[toTrueFlag] = false;
        }
      });
    });
  }

  addEffectsWithKey(
    eventCode,
    isFalseFlag,
    isTrueFlag,
    showButtonsArray,
    hideButtonsArray,
    activeClass,
  ) {
    document.addEventListener('keydown', (event) => {
      if (event.code === eventCode) {
        if (!this[isFalseFlag] && this[isTrueFlag]) {
          this.show(showButtonsArray);
          this.hide(hideButtonsArray);
          this.active(activeClass);
          this[isFalseFlag] = true;
          this[isTrueFlag] = false;
        }
      }
    });
  }

  removeEffectsWithKey(
    eventCode,
    isFalseFlag1,
    isTrueFlag,
    showButtonsArray,
    hideButtonsArray,
    disActiveClass,
    disActiveClass2 = false,
  ) {
    document.addEventListener('keyup', (event) => {
      if (event.code === eventCode) {
        if (this[isTrueFlag] && !this[isFalseFlag1]) {
          this.show(showButtonsArray);
          this.hide(hideButtonsArray);
          this.disActive(disActiveClass);
          if (disActiveClass2) {
            this.disActive(disActiveClass2);
          }
          this[isFalseFlag1] = true;
          this[isTrueFlag] = false;
        }
      }
    });
  }

  hide(elems) {
    elems.forEach((elem) => {
      elem.classList.add('hidden');
    });
    this.counter += 1;
  }

  show(elems) {
    elems.forEach((elem) => {
      elem.classList.remove('hidden');
    });
    this.counter -= 1;
  }

  active(buttonName) {
    btn.forEach((elem) => {
      if (elem.className === buttonName) {
        elem.classList.add('active');
      }
    });
    this.counter += 1;
  }

  disActive(buttonName) {
    btn.forEach((elem) => {
      if (elem.className === buttonName) {
        elem.classList.remove('active');
      }
    });
    this.counter -= 1;
  }
}
