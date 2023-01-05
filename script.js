function selecionaPrato(botaoClicado){
    const botaoClicadoAnteriormenteP = document.querySelector('.selecionadoComida');

    if(botaoClicadoAnteriormenteP!==null){
        botaoClicadoAnteriormenteP.classList.remove('selecionadoComida');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoComida');
}

function selecionaBebida(botaoClicado){
    const botaoClicadoAnteriormenteB = document.querySelector('.selecionadoBebida');

    if(botaoClicadoAnteriormenteB!==null){
        botaoClicadoAnteriormenteB.classList.remove('selecionadoBebida');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoBebida');
}

function selecionaSobremesa(botaoClicado){
    const botaoClicadoAnteriormenteS = document.querySelector('.selecionadoSobremesa');

    if(botaoClicadoAnteriormenteS!==null){
        botaoClicadoAnteriormenteS.classList.remove('selecionadoSobremesa');
    }

    const elemento = document.querySelector(botaoClicado);
    elemento.classList.add('selecionadoSobremesa');
}

function fecharPedido(){
    if(botaoClicadoAnteriormenteP!==null && botaoClicadoAnteriormenteB!==null && botaoClicadoAnteriormenteS!==null)
    {
        console.log("ta indo");
    }
}