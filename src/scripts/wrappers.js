const body = document.querySelector('body');

class Creator {
  constructor(parent) {
    this.parent = parent;
  }

  createField() {
    if (this.parent === body) {
      this.createElement('keyboard');
    } else if (this.parent.className === 'keyboard') {
      for (let i = 0; i <= 5; i += 1) {
        this.createElement('keyboard__wrapper', i);
      }
    }
  }

  createElement(className, num) {
    const element = document.createElement('div');
    element.classList.add(className);
    if (num || num === 0) {
      element.classList.add(`keyboard__${num}-block`);
    }
    this.parent.append(element);
  }
}

new Creator(body).createField();

const keyboard = document.querySelector('.keyboard');

new Creator(keyboard).createField();

export default Creator;
