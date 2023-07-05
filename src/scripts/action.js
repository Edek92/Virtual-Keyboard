// const buttons = document.querySelectorAll('.button');
const fn = document.querySelector('.button-fn');
const en = document.querySelectorAll('.en');
const blr = document.querySelectorAll('.blr');

function toggler() {
  fn.addEventListener('click', () => {
    en.forEach((elem) => {
      elem.classList.toggle('hidden');
    });
    blr.forEach((elem) => {
      elem.classList.toggle('hidden');
    });
  });
}

toggler();

export default toggler;
