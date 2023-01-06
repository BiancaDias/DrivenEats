function selecionaPrato(botaoClicado){
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');

    if(botaoClicadoAnteriormenteP!==null){
        botaoClicadoAnteriormenteP.classList.remove('selecionadoComida');
    }
    
    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoComida');

    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    const comida = document.querySelector('.selecionadoComida');
    if(botaoClicadoAnteriormenteS!==null && botaoClicadoAnteriormenteB!==null && comida!==null)
    {
        fecharPedido();
    }
}

function selecionaBebida(botaoClicado){
    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');

    if(botaoClicadoAnteriormenteB!==null){
        botaoClicadoAnteriormenteB.classList.remove('selecionadoBebida');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoBebida');

    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');
    const bebida = document.querySelector('.selecionadoBebida');

    if(botaoClicadoAnteriormenteS!==null && bebida!==null && botaoClicadoAnteriormenteP!==null)
    {
        fecharPedido();
    }
}

function selecionaSobremesa(botaoClicado){
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    

    if(botaoClicadoAnteriormenteS!==null){
        botaoClicadoAnteriormenteS.classList.remove('selecionadoSobremesa');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoSobremesa');

    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');
    const sobremesa = document.querySelector('.selecionadoSobremesa');
    if(botaoClicadoAnteriormenteP!==null && botaoClicadoAnteriormenteB!==null && sobremesa!==null)
    {
        fecharPedido();
    }
}
//função chamada quando todos os elementos forem selecionados
function fecharPedido(){
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');
    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    if(botaoClicadoAnteriormenteP!==null && botaoClicadoAnteriormenteB!==null && botaoClicadoAnteriormenteS!==null)
    {
        const botao = document.querySelector('button');
        botao.disabled = false;
        botao.classList.add('liberarPedido');
        botao.innerHTML= "Fechar pedido";
    }
}
//funcao a ser usada para fechar o pedido e chamar o wpp
function fecharPedidoDefinitivo(botao){
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');
    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');
    if(botaoClicadoAnteriormenteP!==null && botaoClicadoAnteriormenteB!==null && botaoClicadoAnteriormenteS!==null)
    {
        alert("Bora fechar");
        
    }
}