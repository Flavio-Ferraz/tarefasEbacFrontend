
let linhas = '';

$('form').on("submit", function(e){
    e.preventDefault();

    const inputTarefa = document.getElementById('inclusao-atividade');

    let linha = '<ul style = "list-style-type: disc">';
    linha += `<li>${inputTarefa.value}</li>`;
    linha += '</ul>'

    linhas += linha;
    
    const corpoTabela = document.querySelector('ul');
    corpoTabela.innerHTML = linhas;  
        
    inputTarefa.value = '';    

    $('li').click(function () {
        $(this).addClass('riscado');
    });
})


