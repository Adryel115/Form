function Coletar() {
    let input = document.querySelector('#cep').value
    console.log(input)
    Dados(input)
}

async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
   
    ExibirDados(dados)
    console.log(dados)
}

function ExibirDados(dados) {
    
    document.querySelector('#cidade').value = dados.localidade
    document.querySelector('#endereco').value = dados.logradouro
    document.querySelector('#bairro').value = dados.bairro
    
}