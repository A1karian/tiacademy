window.onload = function(){

	//alert("olá mundo")

var url = 

	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const cxCep = document.querySelector(".cxCep")

	const dadosCep = async function(cepUrl){
	
		var url = `https://viacep.com.br/ws/${cep}/json/`;
		var consultaCep = await fetch(url);
		var dadosCep    = await consuntaCep.json();

		//console.log(dadosCep)
		for( var campos in dadosCep ){
			console.log(campos);
			if(document.querySelector("#"+campos)){
			document.querySelector("#"+campos).value = dadosCep[campos]
			}
		}
	}

	btnBuscaCep.addEventListener('click',()=>{

		let cep = cxCep.value;
		dadosCep(cep);

})



}