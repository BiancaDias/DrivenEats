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
        botao.disabled = false; //habilita o botão
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
        const prato = document.querySelector('.selecionadoComida h2');
        const bebida = document.querySelector('.selecionadoBebida h2');
        const sobremesa = document.querySelector('.selecionadoSobremesa h2');
        const valorPrato = document.querySelector('.selecionadoComida .valor');
        const valorBebida = document.querySelector('.selecionadoBebida .valor');
        const valorSobremesa = document.querySelector('.selecionadoSobremesa .valor');

        const total = Number(valorPrato.innerHTML.replace(",", ".")) + Number(valorBebida.innerHTML.replace(",", ".")) + Number(valorSobremesa.innerHTML.replace(",", "."));
        

        let numero = "5531971144866";
        let texto = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato.innerHTML + "\n- Bebida: " + bebida.innerHTML + "\n- Sobremesa: " + sobremesa.innerHTML + "\nTotal: R$ " + total.toFixed(2);;
        texto = window.encodeURIComponent(texto);
        window.open("https://api.whatsapp.com/send?phone=" + numero + "&text=" + texto, "_blank");
        
    }
}