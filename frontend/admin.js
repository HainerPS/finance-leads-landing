const leadsList = document.getElementById('leads-list');
const totalLeads = document.getElementById('total-leads');
const statusMessage = document.getElementById('status-message');
const reloadButton = document.getElementById('reload-button');

async function loadLeads() {
  statusMessage.textContent = 'Carregando leads...';
  leadsList.innerHTML = '';

  try {
    const response = await fetch('http://localhost:3000/leads');
    const leads = await response.json();

    if (!response.ok) {
      throw new Error('Não foi possível carregar os leads.');
    }

    totalLeads.textContent = leads.length;
    statusMessage.textContent = '';

    if (leads.length === 0) {
      leadsList.innerHTML = `
        <div class="empty-state">
          Nenhum lead foi enviado ainda.
        </div>
      `;
      return;
    }

    leadsList.innerHTML = leads.map((lead) => `
      <article class="lead-card">
        <h2>${lead.nome}</h2>

        <div class="lead-meta">
          <p><strong>E-mail:</strong> ${lead.email || '-'}</p>
          <p><strong>Telefone:</strong> ${lead.telefone || '-'}</p>
          <p><strong>Empresa:</strong> ${lead.empresa || '-'}</p>
          <p><strong>ID:</strong> ${lead.id}</p>
        </div>

        <p class="lead-message">
          <strong>Mensagem:</strong> ${lead.mensagem || '-'}
        </p>

        <p class="lead-date">
          <strong>Recebido em:</strong> ${lead.created_at}
        </p>
      </article>
    `).join('');
  } catch (error) {
    totalLeads.textContent = '0';
    statusMessage.textContent = error.message || 'Erro ao carregar leads.';
  }
}

reloadButton.addEventListener('click', loadLeads);

loadLeads();