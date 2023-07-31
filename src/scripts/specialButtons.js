const nothingBtns = document.querySelectorAll('.nothing');
const shiftBtns = document.querySelectorAll('.shift');
const capsLockBtns = document.querySelectorAll('.capsLock');
const capsLockShiftBtns = document.querySelectorAll('.capsLockShift');

const btn = document.querySelectorAll('.button');

class WhatSpesialBtns {
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

    this.addEffectsWithKey('CapsLock', 'capsLock', 'nothing', capsLockBtns, nothingBtns, 'button button-caps-lock');
    this.addEffectsWithKey('ShiftLeft', 'shift', 'nothing', shiftBtns, nothingBtns, 'button button-shift');
    this.addEffectsWithKey('ShiftLeft', 'capsLockShift', 'capsLock', capsLockShiftBtns, capsLockBtns, 'button button-shift');
    this.addEffectsWithKey('ShiftRight', 'shift', 'nothing', shiftBtns, nothingBtns, 'button button-shift button-shift_right');
    this.addEffectsWithKey('ShiftRight', 'capsLockShift', 'capsLock', capsLockShiftBtns, capsLockBtns, 'button button-shift button-shift_right');

    // Remove effects from keyboard with special keys (eventListener - KEYUP)
    // METHOD (event.code, isFalseFlag1, isTrueFlag, showButtonsArray,
    // hideButtonsArray, disActiveClass, isFalseFlag2 = false)

    this.removeEffectsWithKey('CapsLock', 'nothing', 'capsLock', nothingBtns, capsLockBtns, 'button button-caps-lock active');
    this.removeEffectsWithKey('ShiftLeft', 'nothing', 'shift', nothingBtns, shiftBtns, 'button button-shift active', 'capsLock');
    this.removeEffectsWithKey('ShiftLeft', 'capsLock', 'capsLockShift', capsLockBtns, capsLockShiftBtns, 'button button-shift active');
    this.removeEffectsWithKey('ShiftRight', 'nothing', 'shift', nothingBtns, shiftBtns, 'button button-shift button-shift_right active', 'capsLock');
    this.removeEffectsWithKey('ShiftRight', 'capsLock', 'capsLockShift', capsLockBtns, capsLockShiftBtns, 'button button-shift button-shift_right active');

    // Add effects with mouse click (eventListener - MOUSEDOWN)
    // addEffectWithMouse(nameOfClass, showButtonsArray, hideButtonsArray, toTrueFlag, toFalseFlag)

    this.addEffectWithMouse('button button-caps-lock', capsLockBtns, nothingBtns, 'capsLock', 'nothing');
    this.addEffectWithMouse('button button-shift', shiftBtns, nothingBtns, 'shift', 'nothing');
    this.addEffectWithMouse('button button-shift button-shift_right', shiftBtns, nothingBtns, 'shift', 'nothing');

    // Remove effects with mouse click (eventListener - MOUSEDOWN)
    // addEffectWithMouse(nameOfClass, showButtonsArray, hideButtonsArray, toTrueFlag, toFalseFlag)

    this.removeEffectWithMouse('button button-caps-lock active', nothingBtns, capsLockBtns, 'nothing', 'capsLock');
    this.removeEffectWithMouse('button button-shift active', nothingBtns, shiftBtns, 'nothing', 'shift');
    this.removeEffectWithMouse('button button-shift button-shift_right active', nothingBtns, shiftBtns, 'nothing', 'shift');
  }

  addEffectWithMouse(nameOfClass, showButtonsArray, hideButtonsArray, toTrueFlag, toFalseFlag) {
    btn.forEach((elem) => {
      elem.addEventListener('mousedown', () => {
        if (elem.className === nameOfClass && this[toFalseFlag]) {
          elem.classList.add('active');
          this.show(showButtonsArray);
          this.hide(hideButtonsArray);
          this[toTrueFlag] = true;
          this[toFalseFlag] = false;
          // eslint-disable-next-line no-console
          console.log('Add click');
          // eslint-disable-next-line no-console
          console.log(`CLICK: nothing = ${this.nothing}, shift = ${this.shift}, capsLock = ${this.capsLock}, capsLockShift = ${this.capsLockShift}`);
          // eslint-disable-next-line no-console
          console.log(`Elem.className: ${elem.className}, this.toFalseFlag: ${this[toFalseFlag]}`);
        }
      });
    });
  }

  removeEffectWithMouse(nameOfClass, showButtonsArray, hideButtonsArray, toTrueFlag, toFalseFlag) {
    btn.forEach((elem) => {
      elem.addEventListener('mouseup', () => {
        if (elem.className === nameOfClass && !this.nothing) {
          elem.classList.remove('active');
          this.show(showButtonsArray);
          this.hide(hideButtonsArray);
          this[toTrueFlag] = true;
          this[toFalseFlag] = false;
          // eslint-disable-next-line no-console
          console.log('Remove click');
          // eslint-disable-next-line no-console
          console.log(`CLICK: nothing = ${this.nothing}, shift = ${this.shift}, capsLock = ${this.capsLock}, capsLockShift = ${this.capsLockShift}`);
          // eslint-disable-next-line no-console
          console.log(`Elem.className: ${elem.className}, this.toFalseFlag: ${this[toFalseFlag]}`);
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
          // eslint-disable-next-line no-console
          console.log(`KEYDOWN: nothing = ${this.nothing}, shift = ${this.shift}, capsLock = ${this.capsLock}, capsLockShift = ${this.capsLockShift}`);
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
    isFalseFlag2 = false,
  ) {
    document.addEventListener('keyup', (event) => {
      if (event.code === eventCode) {
        if (this[isTrueFlag] && !this[isFalseFlag1] && !this[isFalseFlag2]) {
          this.show(showButtonsArray);
          this.hide(hideButtonsArray);
          this.disActive(disActiveClass);
          this[isFalseFlag1] = true;
          this[isTrueFlag] = false;
          // eslint-disable-next-line no-console
          console.log(`KEYUP: nothing = ${this.nothing}, shift = ${this.shift}, capsLock = ${this.capsLock}, capsLockShift = ${this.capsLockShift}`);
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

new WhatSpesialBtns().toggler();

export default WhatSpesialBtns;
