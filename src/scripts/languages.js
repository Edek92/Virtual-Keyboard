const fn = document.querySelector('.button-fn');
const en = document.querySelectorAll('.en');
const blr = document.querySelectorAll('.blr');

class LangToggler {
  constructor(eng = true) {
    this.english = eng;
  }

  toggler() {
    fn.addEventListener('click', () => {
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
    });
  }
}

new LangToggler().toggler();

export default LangToggler;
