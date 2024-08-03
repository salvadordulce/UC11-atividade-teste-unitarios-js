const {criarContato, removerContato, listarContato} = require('./functions');

test('Deve retornar lista vazia', function(){
    listarContato('')
})

test('deve verificar se a lista de contatos estiver vazia', function() {
    const contato = listarContato();
    expect(contato).toBe('Lista está vazia');
});

test('deve criar um contato', function() {
    const contato = criarContato('dulce', 'dulce@gmail.com', '12345');
    expect(contato.nome).toBe('dulce');
    expect(contato.email).toBe('dulce@gmail.com');
    expect(contato.telefone).toBe('12345');
});

test('deve retornar um erro se o nome estiver vazio', function() {
    const contato = criarContato('', 'dulce@gmail.com', '12345');
    expect(contato).toBe('Nome é obrigatório');
});

test('deve retornar um erro se o e-mail estiver vazio', function() {
    const contato = criarContato('dulce', '', '12345');
    expect(contato).toBe('E-mail é obrigatório');
});

 test('deve retornar um erro se o telefone estiver vazio', function() {
    const contato = criarContato('dulce', 'dulce@gmail.com', '');
    expect(contato).toBe('Telefone é obrigatório');
});

test('Deve remover um contato', function(){
    var contato = criarContato('Nome', 'Email', 'Contato');

    removerContato(contato.id)

    var contato = listarContato();

    expect(contato).not.toContain(contato);
});

test('Verificar usuario antes de remover', function(){
    removerContato('')
});

test('Deve listar os contatos', function(){
    var contato01 = criarContato('nome', 'email', 'telefone');

    var contato = listarContato();

    expect(contato).toContain(contato01);
});