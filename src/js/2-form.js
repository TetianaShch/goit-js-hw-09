
const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');


const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    const parsed = JSON.parse(saved);

    form.elements.email.value = parsed.email || '';
    form.elements.message.value = parsed.message || '';
    formData.email = parsed.email || '';
    formData.message = parsed.message || '';
  } catch {
   
  }
}

form.addEventListener('input', (evt) => {
  const { name, value } = evt.target;
  if (!(name in formData)) return; 
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData); 

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});

