import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const CURRENT_VALUE = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(e =>{
    formData[e.target.name] = e.target.value; onInputFormValue();
}, 500));

function onInputFormValue() {
    const inputValue = JSON.stringify(formData);
    localStorage.setItem(CURRENT_VALUE, inputValue);
};

saveForm();
function saveForm() {
  const complectedForm = JSON.parse(localStorage.getItem(CURRENT_VALUE));
  if (complectedForm) {
    form.email.value = complectedForm.email || "";
    form.message.value = complectedForm.message || "";
  }
}

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(formData)
    event.currentTarget.reset();
    localStorage.removeItem(CURRENT_VALUE);
    Object.keys(formData).forEach(el => delete formData[el]);
});
