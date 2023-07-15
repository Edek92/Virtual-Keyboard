// import { firstRowButtons, secondRowButtons, thirdRowButtons,
// fourthRowButtons, fifthRowButtons } from database;

// const btn = document.querySelectorAll('.button');
// const textarea = document.querySelector('.textarea');

class ButtonAction {
  constructor(shift = false, capsLock = false) {
    this.shift = shift;
    this.capsLock = capsLock;
  }

  pressKey() {
    if (!this.shift && !this.capsLock) {

      // textarea.addEventListener('keydown', (event) => {
      //   event.preventDefault();
      //   textarea.textContent += event.code;
      // });

      // btn.forEach((elem) => {
      //   elem.addEventListener('click', (event) => {
      //     event.preventDefault();
      //     textarea.textContent += event.code;
      //   });
      // });
    }
  }
}

new ButtonAction().pressKey();

export default ButtonAction;
