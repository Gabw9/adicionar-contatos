const contatos = [];

function salvarContato(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const contato = document.getElementById('contato').value;
    const email = document.getElementById('email').value;
    const index = document.getElementById('index').value;

    if (index) {
        contatos[index] = { nome, contato, email };
    } else {
        contatos.push({ nome, contato, email });
    }

    document.querySelector('form').reset();
    document.getElementById('index').value = '';
    exibirContatos();
}

function exibirContatos() {
    const lista = document.getElementById('listaContatos');
    lista.innerHTML = '';

    contatos.forEach((contato, index) => {
        const li = document.createElement('li');
        li.textContent = `${contato.nome} - ${contato.contato} - ${contato.email}`;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttons';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit-button';
        editButton.addEventListener('click', () => editarContato(index));

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            contatos.splice(index, 1);
            exibirContatos();
        });

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(removeButton);
        li.appendChild(buttonContainer);
        lista.appendChild(li);
    });
}

function editarContato(index) {
    const contato = contatos[index];
    document.getElementById('name').value = contato.nome;
    document.getElementById('contato').value = contato.contato;
    document.getElementById('email').value = contato.email;
    document.getElementById('index').value = index;
}

document.getElementById('contactForm').addEventListener('submit', salvarContato);
