const en = document.querySelectorAll('.en');
const blr = document.querySelectorAll('.blr');
const ctrl = document.querySelector('.button-control');
const altLeft = document.querySelector('.button-option');
const altRight = document.querySelector('.button-option_right');

export default class LangToggler {
  constructor() {
    this.control = false;
    this.alt = false;
    this.english = true;
  }

  toggler() {
    this.isControl('keydown', 'keyup', document, 'ControlLeft');
    this.isControl('mousedown', 'mouseup', ctrl, 'ControlLeft');
    this.langToggler('keydown', 'keyup', document, 'AltLeft');
    this.langToggler('mousedown', 'mouseup', altLeft, 'AltLeft');
    this.langToggler('keydown', 'keyup', document, 'AltRight');
    this.langToggler('mousedown', 'mouseup', altRight, 'AltRight');
  }

  isControl(down, up, target, eventCode) {
    target.addEventListener(down, (event) => {
      if (event.code === eventCode || target === ctrl) {
        this.control = true;
        ctrl.classList.add('active');
      }
      if (this.alt && (event.code === eventCode || target === ctrl)) {
        this.func();
      }
    });
    target.addEventListener(up, (event) => {
      if (event.code === eventCode || target === ctrl) {
        this.control = false;
        ctrl.classList.remove('active');
      }
    });
  }

  langToggler(down, up, target, eventCode) {
    target.addEventListener(down, (event) => {
      if (event.code === eventCode || target === altLeft || target === altRight) {
        if (target === altLeft || event.code === 'AltLeft') {
          altLeft.classList.add('active');
          this.alt = true;
        } else if (target === altRight || event.code === 'AltRight') {
          altRight.classList.add('active');
          this.alt = true;
        }
      }
      if (this.control && (event.code === eventCode || target === altLeft || target === altRight)) {
        this.func();
      }
    });
    target.addEventListener(up, (event) => {
      if (event.code === eventCode || target === altLeft || target === altRight) {
        if (target === altLeft || event.code === 'AltLeft') {
          altLeft.classList.remove('active');
          this.alt = false;
        } else if (target === altRight || event.code === 'AltRight') {
          altRight.classList.remove('active');
          this.alt = false;
        }
      }
    });
  }

  func() {
    if (this.english) {
      en.forEach((elem) => {
        elem.classList.add('hidden');
      });
      blr.forEach((elem) => {
        elem.classList.remove('hidden');
      });
      this.english = false;
    } else {
      en.forEach((elem) => {
        elem.classList.remove('hidden');
      });
      blr.forEach((elem) => {
        elem.classList.add('hidden');
      });
      this.english = true;
    }
  }
}
