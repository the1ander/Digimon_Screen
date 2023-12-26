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
async function filtroDigimon(digimonList, digimonId) {

    /*
    const digimon = await digimonList.find((monster) => monster.id === digimonId);
    return digimon;
    */
    //simplificando:
    return await digimonList.find((monster) => monster.id === digimonId);

}



// 3 função: RENDERIZADOR

async function renderDigimon(digimon) {


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

}


// 4 função: FUNÇÃO MAIN
async function main() {
    console.log("ola")
    const digimons = await getDigimonAPI();

    const chooseDigimon = await filtroDigimon(digimons, 3);

    await renderDigimon(chooseDigimon);

}

main()

