
/*

	var / let const

*/

/*var nome="bruno"; //var global
let sobreNome="Brodbeck"

if (true) {
	console.log("Var nome= "+ nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+ sobreNome);
	let sn = "Nogueira"
	console.log(sobreNome);
}

console.log("Meu nome é "+nm+" "+sobreNome+ " "+sn);
console.log("Var nome= "+ nm);*/


var Pessoa = {
	nome: "Bruno",
	rua : "Rua sim",
	ncasa: "123",
	dados: function(){
		document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>"
			)
	}
}

Pessoa.dados();


/*console.log("Nome "+Pessoa.nome+
			" Endereço "+Pessoa.rua+" N. "+Pessoa.ncasa);*/


