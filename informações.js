const url = 'https://raw.githubusercontent.com/XxAndressaxX/graficos/refs/heads/main/informacoes.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
 
    const quantidade_estudantes = (dados.total_estudantes)
    const quantidade_alunos_interessados= (dados.quantidade_querem_faculdade)
    const porcentagem_querem_faculdade = ((quantidade_alunos_interessados / quantidade_estudantes)* 100).toFixed(0)
    const alunos_querem_saude = (dados.total_alunos_saude)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que em uma pesquisa <span>realizada pelo IBGE</span> feita com <span>${quantidade_estudantes} jovens </span> apenas <span>${porcentagem_querem_faculdade}% </span> querem ingressar na faculdade? <br> Isso representa <span> ${quantidade_alunos_interessados} adolescentes </span>. Além disso, dentre os cursos disponíveis, os da <span>área da saúde</span> são desejados por <span>${alunos_querem_saude} jovens. </span>`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()