const en = document.querySelectorAll('.en');
const blr = document.querySelectorAll('.blr');
const ctrl = document.querySelector('.button-control');
const altLeft = document.querySelector('.button-option');
const altRight = document.querySelector('.button-option_right');

class LangToggler {
  constructor() {
    this.control = false;
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
        } else if (target === altRight || event.code === 'AltRight') {
          altRight.classList.add('active');
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
        } else if (target === altRight || event.code === 'AltRight') {
          altRight.classList.remove('active');
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

new LangToggler().toggler();

export default LangToggler;
