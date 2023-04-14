# Alura Midi


![midi](https://user-images.githubusercontent.com/104650333/232125961-14a5ba36-ca80-4e71-9066-7243edaf515e.gif)

Criei este projto atravéz do curso Alura, mas como sou aquariana raiz, lógico que mudei algumas coisas e deixei com minha face! 😊

Abaixo deixarei anotações importntes, como busco fazer em meus útimo projetos...

### Aperte o play e Divirta-se! 
<a href="https://bruleonel.github.io/aluramidi/">Clique aqui para ver o código</a>

## querySelector()
Usado para selecionar um elemento do HTML(document).

Como usar:
```ruby
    document.querySelector('.nomeClasse');
```

Uma coisa muito linda, e educada, do Js é o bloqueio de funcionalidades antes do usuário interagir com a página, então nãopodemos esqucer que caso isso ocorra, seu código retornará o seguinte erro:

- documento.js:3 Uncaught TypeError: Cannot read properties of null

O código usado para criar a lógica do nosso midi foi: 

```ruby
    function tocaSom(idSom) {
        document.querySelector(idSom).play();
    }

    const listaTeclas = document.querySelectorAll('.tecla'); 

    for (let i = 0; i < listaTeclas.length; i++) {

        const tecla = listaTeclas[i];
        const teclaClicada = tecla.classList[1];
        const idAudio = `#som_${teclaClicada}`;

        tecla.onclick = function () {
            
            tocaSom(idAudio);
        }
    }
```

Pulando a função tocaSom(), a variável listaTeclas está recebendo todas as teclas buuton do nosso HTML, ou seja, uma lista de teclas, para identificá-las essa lista deve ser percorrida e para isso usei a estrutura de repetição "for". Dentro do for a variável tecla recebe a posição da listaTeclas, depois teclaClicada recebe tecla com a função classList, a qual retorna seu 2° elemento (índice 1), veja o HTML:

```ruby
    <!--
    <button class="tecla tecla_pom">Pom</button>
    <button class="elemento 1 elemento 2">Pom</button>
    -->
```

Depois a variável idAudio recebe o parâmetro necessário para ser usado na função tocaSom().

Mas ainda há um problema no códico, o estilo CSS da página não funciona corretamente com "ENTER" e "ESPAÇO", para corrigir isso usei a classe no CSS com JS:

```ruby
    tecla.onkeydow = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
```
