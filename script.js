function selecionaPrato(botaoClicado){
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');
    const checkAnterior = document.querySelector('.selecionadoComida ion-icon');

    if(botaoClicadoAnteriormenteP!==null){
  
        botaoClicadoAnteriormenteP.classList.remove('selecionadoComida');
        checkAnterior.classList.add('escondido');
    }
    
    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoComida');
    const check = document.querySelector('.selecionadoComida .escondido');
    check.classList.remove('escondido');
    
    fecharPedido();
}

function selecionaBebida(botaoClicado){
    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');
    const checkAnterior = document.querySelector('.selecionadoBebida ion-icon');

    if(botaoClicadoAnteriormenteB!==null){
        botaoClicadoAnteriormenteB.classList.remove('selecionadoBebida');
        checkAnterior.classList.add('escondido');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoBebida');
    const check = document.querySelector('.selecionadoBebida .escondido');
    check.classList.remove('escondido');

    fecharPedido();

}

function selecionaSobremesa(botaoClicado){
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    const checkAnterior = document.querySelector('.selecionadoSobremesa ion-icon');

    if(botaoClicadoAnteriormenteS!==null){
        botaoClicadoAnteriormenteS.classList.remove('selecionadoSobremesa');
        checkAnterior.classList.add('escondido');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoSobremesa');
    const check = document.querySelector('.selecionadoSobremesa .escondido');
    check.classList.remove('escondido');

    fecharPedido();
}
//função chamada quando todos os elementos forem selecionados
function fecharPedido(){
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');
    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    if(botaoClicadoAnteriormenteP!==null && botaoClicadoAnteriormenteB!==null && botaoClicadoAnteriormenteS!==null)
    {
        const botao = document.querySelector('button');
        botao.disabled = false; //habilita o botão
        botao.classList.add('liberarPedido');
        botao.innerHTML= "Fechar pedido";
        return true;
    }
}
//funcao a ser usada para fechar o pedido e chamar o wpp
function fecharPedidoDefinitivo(botao){

    if(fecharPedido()===true)
    {
        const prato = document.querySelector('.selecionadoComida h3');
        const bebida = document.querySelector('.selecionadoBebida h3');
        const sobremesa = document.querySelector('.selecionadoSobremesa h3');
        const valorPrato = document.querySelector('.selecionadoComida .valor');
        const valorBebida = document.querySelector('.selecionadoBebida .valor');
        const valorSobremesa = document.querySelector('.selecionadoSobremesa .valor');

        const total = Number(valorPrato.innerHTML.replace(",", ".")) + Number(valorBebida.innerHTML.replace(",", ".")) + Number(valorSobremesa.innerHTML.replace(",", "."));
        

        let numero = "5531999999999";
        let texto = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato.innerHTML + "\n- Bebida: " + bebida.innerHTML + "\n- Sobremesa: " + sobremesa.innerHTML + "\nTotal: R$ " + total.toFixed(2);;
        texto = window.encodeURIComponent(texto);
        window.open("https://api.whatsapp.com/send?phone=" + numero + "&text=" + texto, "_blank");
        
    }
}