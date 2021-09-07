/*click Ao clicar em algum elemento HTML
mousemove Ao mover o cursor do mouse acessa (entra) o elemento
mouseover Ao mover o cursor do mouse dentro do elemento
dblclick Ao efetuar do duplo click (rápido) sobre o elemento
blur Ao perder o foco do elemento, geralmente associado ao elemento HTML
*/
window.onload = function(){

	//alert("alerta");

	const btn1 = document.querySelector(".btn-click");
	const legP = document.querySelector(".legenda");
	const cxTexto = document.querySelector("#texto");

	/*click Ao clicar em algum elemento HTML*/

	btn1.addEventListener('click', ()=>{

		//escrever no elemento
		legP.innerHTML += cxTexto.value;

	} );

	legP.addEventListener('click', ()=>{

		legP.innerHTML ='';
	})

/*mousemove Ao mover o cursor do mouse acessa (entra) o elemento*/
/*legP.addEventListener('mouseover',()=>{

	alert("Teste")
})
*/

/* TROCAR TIPO DO ELEMENTO */

 const trocaSenha = document.querySelector("#verSenha");
 const cxSenha	  = document.querySelector("#senha");

 trocaSenha.addEventListener('click',()=>{
 	// getAttribute()
 	// setAttribute()
 	if(cxSenha.getAttribute('type') =='password'){
 		cxSenha.setAttribute('type','text')
 	} else {
 		cxSenha.setAttribute('type','password')
 	}

 });

 // alterar background

 const cxTrocaBg = document.querySelector("#cxTbg");

 	cxTrocaBg.addEventListener('blur',()=>{

 		cxTrocaBg.setAttribute('class','corBg');
 	})

// somar valores cx input text

 const valor1 = document.querySelector("#v1");
 const valor2 = document.querySelector("#v2");
 const btnSomar = document.querySelector("#soma");
 const spResultado = document.querySelector("#resultado");

 	btnSomar.addEventListener('click',()=>{

 		var cx1 = valor1,value;
 		var cx2 = valor2.value;
 		var r   = Number(cx1) + Number(cx2);

 		spResultado.innerHTML = r;
 	})

 	//evento modal
 	const btnModal = document.querySelector("#chamarModal");
 	const janelaM = document.querySelector("#janModal");
 	
 	btnModal.addEventListener('click',()=>{

 		janelaM.setAttribute('class','modal');

 	})

 	closeMod.addEventListener('click',()=>{

 		janelaM.classList.remove('modal');

 	})


}
