const themeToggle = document.getElementById('theme-toggle');
const leadForm = document.getElementById('lead-form');
const formMessage = document.getElementById('form-message');
const submitButton = document.getElementById('submit-button');

const savedTheme = localStorage.getItem('aevo-theme');

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('aevo-theme', isLight ? 'light' : 'dark');
});

leadForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  formMessage.textContent = '';
  formMessage.className = 'form-message';

  const formData = new FormData(leadForm);
  const data = Object.fromEntries(formData.entries());

  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  try {
    const response = await fetch('https://finance-leads-backend.onrender.com/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    let result;

    try {
      result = await response.json();
    } catch {
      result = {};
    }

    if (!response.ok) {
      throw new Error(result.error || 'Não foi possível enviar o formulário.');
    }

    formMessage.textContent = 'Mensagem enviada com sucesso. Nossa equipe entrará em contato.';
    formMessage.classList.add('success');
    leadForm.reset();

    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.className = 'form-message';
    }, 5000);
  } catch (error) {
    formMessage.textContent = error.message || 'Erro ao enviar formulário.';
    formMessage.classList.add('error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar mensagem';
  }
});