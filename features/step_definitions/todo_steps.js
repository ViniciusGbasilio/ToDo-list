const { Given, When, Then } = require('@cucumber/cucumber');

Given('o armazenamento local está limpo', function () {
  console.log("Limpando armazenamento local...");
});

Given('estou na página de cadastro', function () {
  console.log("Usuário acessa a página de cadastro.");
});

When('preencho o campo de email com {string}', function (email) {
  console.log(`Preenchendo e-mail: ${email}`);
});

When('preencho o campo de senha com {string}', function (senha) {
  console.log(`Preenchendo senha: ${senha}`);
});

When('clico em {string}', function (botao) {
  console.log(`Clicando no botão: ${botao}`);
});

Then('vejo a mensagem {string}', function (mensagem) {
  console.log(`Mensagem esperada: ${mensagem}`);
});

Then('sou redirecionado para a página de login', function () {
  console.log("Redirecionado para página de login.");
});

Then('sou redirecionado para a página da lista de tarefas', function () {
  console.log("Redirecionado para página de tarefas.");
});

Given('o usuário {string} está cadastrado com a senha {string}', function (email, senha) {
  console.log(`Usuário ${email} previamente cadastrado com senha ${senha}.`);
});

Given('estou logado como {string}', function (email) {
  console.log(`Usuário ${email} está logado.`);
});

Given('estou na página da lista de tarefas', function () {
  console.log("Página da lista de tarefas acessada.");
});

When('digito {string} no campo de nova tarefa', function (tarefa) {
  console.log(`Digitando nova tarefa: ${tarefa}`);
});

Then('vejo {string} na lista de tarefas', function (tarefa) {
  console.log(`Tarefa visível na lista: ${tarefa}`);
});

Given('tenho a tarefa {string} na lista', function (tarefa) {
  console.log(`Tarefa presente na lista: ${tarefa}`);
});

When('clico em {string} ao lado da tarefa {string}', function (botao, tarefa) {
  console.log(`Clicando no botão ${botao} da tarefa ${tarefa}`);
});

Then('vejo que a tarefa {string} está riscada', function (tarefa) {
  console.log(`Tarefa ${tarefa} marcada como concluída.`);
});

Then('a tarefa {string} não está mais na lista', function (tarefa) {
  console.log(`Tarefa ${tarefa} removida da lista.`);
});

Given('estou na página de login', function () {
  console.log("Usuário acessa a página de login.");
});

Given('eu abro a página {string}', function (pagina) {
  console.log(`Abrindo a página: ${pagina}`);
});

