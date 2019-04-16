# NodeJs
<b>O que é?</b>

Resumidamente, o Node.js é um ambiente de execução para JavaScript, assíncrono e orientado a eventos de código aberto.Foi construída sobre o motor JavaScript do Google Chrome, permitindo construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que deixa ele leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.

<b>Sua Origem</b>

Bem, tudo começou em 2009 quando um jovem programador chamado Ryan Dahl, apresentou um projeto em que estava trabalhando. Este projeto era uma plataforma que combinava a máquina virtual JavaScript V8 da Google e um laço de eventos. O projeto apontava para uma direção diferente das outras plataformas em JavaScript que rodam no servidor: todos I/O primitivos são orientado a evento. Aproveitando o poder e a simplicidade do Javascript, isso tornou tarefas difíceis de escrever aplicações assíncronas em tarefas fáceis. 

<b>Que problema o Node pode resolver?</b>

Node estabeleceu o objetivo número um que é: “fornecer uma maneira fácil para construir programas de rede escaláveis”. Qual é o problema com os programas servidores atuais? Em linguagens como Java™ e PHP, cada conexão cria uma nova thread.Quando o número de usuários aumenta, se você quer que sua aplicação web suporte mais usuários, você tem que adicionar mais e mais servidores. Somado a estes custos também podem haver possíveis problemas técnicos: um usuário pode usar diferentes servidores para cada requisição, então cada recurso compartilhado deve ser compartilhado para todos os servidores. 

Node resolve esta questão trocando a maneira como a conexão é tratada no servidor. No NodeJs, ao invés de criar uma nova thread a cada conexão (e alocar a memória anexa a ela), cada conexão dispara um evento executado dentro da engine de processos do Node. Node afirma que nunca vai dar deadlock, já que não há bloqueios permitidos, e ele não bloqueia diretamente para chamadas de I/O. Node também alega que um servidor rodando ele pode suportar dezenas de milhares de conexões simultâneas.

<b>O que Node definitivamente não é?</b>

Sim, Node é um servidor de programas. 
Entretanto o produto base do O Node definitivamente não é como o Apache ou o Tomcat. Estes servidores são basicamente que estão prontos para instalar aplicativos instantâneamente. Você pode subir e rodar um servidor em um minuto com estes produtos. Node definitivamente não é isso. Parecido com como o Apache pode adicionar um módulo PHP para permitir desenvolvedores criarem páginas da web dinâmicas, e um módulo SSL para conexões seguras, Node tem o conceito de módulos que podem ser adicionados no núcleo do Node. Há literalmente centenas de módulos para rodarem com o Node, e a comunidade é bastante ativa em produzir, publicar e atualizar dezenas de módulos por dia.

<b>Como o Node funciona?</b>

O Node roda no motor JavaScript V8 que é o motor que a Google usa com seu navegador Chrome. Poucas pessoas pensam sobre o que realmente acontece com o JavaScript no lado do cliente. Bem, a engine JavaScript realmente interpreta o código e o executa. Com o V8 a Google criou um ultra-rápido interpretador escrito em C++, com um outro aspecto único: você pode baixar a engine e incorporá-la em qualquer aplicação desejada. Isso não está restrito em rodar em um navegador. Então Node atualmente usa o motor JavaScript V8 escrito pela Google e propõe que seja usado no servidor. 

<b>Programação orientada a Evento</b>

Node utiliza o que é chamado modelo de programação orientada a evento. O lado do servidor na verdade não é diferente do lado do cliente. Claro que não há botões sendo pressionados e não há campos de texto sendo escritos, mas em um nível mais alto, os eventos estão ocorrendo. Por que é que este tipo de configuração é ideal para o Node? JavaScript é uma excelente linguagem para programação orientada a evento, porque ela permite funções anônimas e encerramentos, e o mais importante, a sintaxe é familiar para quase todos que já programaram na vida. 

As funções de callback que são chamadas quando um evento ocorre podem ser escritas no mesmo lugar onde você captura o evento. 
Fácil para desenvolver, fácil para manter. Sem frameworks complicados de Orientação a Objeto, sem interfaces, nenhum potencial para o excesso de arquitetura de qualquer coisa. Basta escutar um evento, escrever uma função de callback, e o Node toma conta de tudo.


<b>Tudo isso e muito mais!</b>

Repositório criado para a aplicação desenvolvida para o trabalho de Laboratório de Engenharia de Sofware do curso de ADS - Fatec Zona Leste

<b>Referências</b>

<ul>
  <li>Curso Web Moderno com JavaScript 2019! COMPLETO + Projetos, <b><a href="https://www.udemy.com/curso-web/">COD3R, Udemy</a></b></li>
  <li>“O que é Node.js?”, <b>www.nodebr.com</b></li>
  <li>Introdução ao Node.js, <b><a href="https://www.devmedia.com.br/nodejs/">devmedia</a></b></li>
  <li>Primeiros passos com Node.js, <b><a href="https://www.youtube.com/watch?v=gq9uGdZCKxI">Umbler, youtube</a></b></li>
  <li>Node.js – O que é, como funciona e quais as vantagens, <b><a href="https://www.opus-software.com.br/node-js/">Opus Software</a></b></li>
</ul>
