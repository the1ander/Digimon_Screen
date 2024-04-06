// 1 função : CALL API


// 2 função: fFILTRO DE BUSCA


// 3 função: RENDERIZADOR

// 4 função: FUNÇÃO MAIN




// 1 function to CALL API:

async function getDigimonAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

    return await response.json();

}


// 2 função: FILTRO DE BUSCA
//
async function filtroDigimon(digimonId) {

    /*
    const digimon = await digimonList.find((monster) => monster.id === digimonId);
    return digimon;
    */
    //simplificando:

    const digimonList = await getDigimonAPI();
    return digimonList.find((monster) => monster.id === digimonId);

}
async function buscaDigimon() {
    var inputValue = document.getElementById("inputBusca").value;
    if(inputValue < 0 || inputValue > 17)
        window.alert("Por favor, insira um valor entre 1 e 16");
    else
        renderDigimon(parseInt(inputValue))
}



// 3 função: RENDERIZADOR


//setado id=== 1 como parametro caso de busca sem definir nada
async function renderDigimon(digimonId = 1) {
    //realocado aqui para dentro pois so chama 1 vez no main
    const digimon = await filtroDigimon(digimonId);
    //para evitar que de erro caso seje vazio
    if(digimon == null) return

    const imgDigimonElement = document.getElementById("imgDigimon");
    imgDigimonElement.src = digimon.image;

    const txtDigimonElement = document.getElementById("t-nomeDigimon");
    txtDigimonElement.textContent = digimon.name;

    const hpDigimonElement = document.getElementById("hp_interna");
    const atkDigimonElement = document.getElementById("atk_interna");
    const defDigimonElement = document.getElementById("def_interna");

    hpDigimonElement.style.width = digimon.HP + '%';
    atkDigimonElement.style.width = digimon.ATK + '%';
    defDigimonElement.style.width = digimon.DEF + '%';

    document.querySelector('.atbHP p').textContent = digimon.HP;
    document.querySelector('.atbATK p').textContent = digimon.ATK;
    document.querySelector('.atbDEF p').textContent = digimon.DEF;
}

// 4 função: FUNÇÃO MAIN
async function main() {
    await renderDigimon();
}


// "buscarDigimon"
main()



// //Função para Buscar os IDs de 1 a 16 na API na pesquisa
// async function buscarDadosPorID() {
//     const imputValor = document.getElementById('imputBusca').value;
//     const id = parseInt(inputValor, 10); //10 para setar número como inteiro

//     //verificar se o ID "NÃO ESTÁ DENTRO DO PADRÃO" invertendo saida
//     If(id < 0 || id > 17 || isNAN(id)) {
//         alert("Por favor, insira um valor entre 1 e 16")
//     }

//     const url = `https://digitalinnovationone.github.io/api-digimon/api/digimon.json`

//     fetch(url)
//         .then(response => {
//             if
//     })







