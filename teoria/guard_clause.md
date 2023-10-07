# Guard clauses
-- versão em PT-BR

# -- conceito :

As "guard clauses" são "early funcions" aonde uma condicional vai retornar um valor imediatamente assim que a condição do processo não for satisfeita. As "guard clauses" (claúsulas de guarda) são usadas especialmente para evitar/refatorar callback hell, para facilitar leitura do código e também optmizar o uso de memória e melhorar a perfomance do programa. 

# -- vantagens :

* Com guard clauses nested conditionals se tornam menores e mais rápidas;
* Assim que a condição não for satisfeita, a função retorna algum valor (ex: um erro);
* Pode ser usada com o operador "void" como = return void (fied.type = 'text');


# -- exemplos práticos :

No primeiro exemplo, temos a Firsconditional(), que passa por uma verificação de passo-a-passo que pode ser melhorada com uma guard clause;

 ```js

const user = {name : "undefined", age : "undefined"};

function Firsconditional() {
    if(user.name == "Maria"){
            console.log("Nome encontrado");
    } else if(user.name == "undefined") {
        console.log("nome não foi incluído")
        } else if(user.age == "18") {
            console.log("permitido entrar")
    } else {
        console.log("idade ilegal / não fornecida")
    }
}

function secondConditional() {
    if(!user.name == "undefined" || !user.age == "undefined"){
        return(console.log("nome encontrado!"));
    } return(console.log("nome não encontrado"));
    
}

console.log("primeira condicional");
Firsconditional();
console.log("segunda condicional!");
secondConditional();

// as duas funções tem o mesmo retorno;
// porém a segunda função é mais rápida!

```

E assim que se faz uma guard clause! Outros exemplos incluem :
Exemplo criado por Chris Ferdinandi, @cferdinandi 

 ```js

function toggleVisibility (field) {

	// Se o campo estiver "hidden", mostre-o
	// Senão, esconda-o
	if (field.type === 'password') {
		field.type = 'text';
	} else {
		field.type = 'password';	
	}

}

// versão com guard clause :

if (field.type === 'password') {       //imediatamente quando a condição é satisfeita a função acaba
		return (field.type = 'text');  //poupando tempo de execução pois a condição foi satisfeita
	}
	                                    // Se a condição não for satisfeita, esconda-o
	field.type = 'password';

```

# -- agradecimentos

Obrigada por ler até aqui, se houverem mais exemplos entre em contato para fazer uma nova sugestão. Espero que este artigo rápido tenha sido de grande ajuda, se estiveres interessado em ler mais sobre o assunto eu recomendo fortemente pesquisar mais sobre as "guard clauses" e "early return patterns" com e sem "void". É um assunto interessante, apesar que de início pode ser um pouco confuso de sair da rotina de "Programar em passo-a-passo"