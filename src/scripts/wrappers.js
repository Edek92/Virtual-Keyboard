const body = document.querySelector('body');

class Creator {
  constructor(parent) {
    this.parent = parent;
  }

  createField() {
    if (this.parent === body) {
      this.addClass('keyboard');
    } else if (this.parent.className === 'keyboard') {
      for (let i = 0; i <= 5; i += 1) {
        this.addClass('wrapper', i);
      }
    }
  }

  addClass(className, num) {
    if (num === undefined) {
      this.createElem('div', className);
    } else if (num === 0) {
      this.createElem('h1', className, 'title', 'VIRTUAL KEYBOARD');
    } else if (num === 1) {
      this.createElem('textarea', className, 'textarea');
    } else if (num === 2) {
      this.createElem('div', className, 'buttons-area');
      const workField = document.querySelector('.buttons-area');
      for (let i = 0; i < 5; i += 1) {
        const row = document.createElement('div');
        row.classList.add('row', `${i + 1}-row`);
        workField.append(row);
      }
    } else if (num === 3) {
      this.createElem('div', className, 'footer', 'The keyboard was created in the MacOS operating system');
    } else if (num === 4) {
      this.createElem('div', className, 'footer', 'To switch the language combination: control + option');
    }
  }

  createElem(selector, className1, className2, content) {
    const element = document.createElement(selector);
    element.classList.add(className1);
    if (className2) { element.classList.add(className2); }
    if (content) { element.textContent = content; }
    this.parent.append(element);
  }
}

new Creator(body).createField();

const keyboard = document.querySelector('.keyboard');

new Creator(keyboard).createField();

export default Creator;
