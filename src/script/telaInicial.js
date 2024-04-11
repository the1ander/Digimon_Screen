// Chamando API e retornar ela em json
/*async function getDigimonAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");
    
    return await response.json();
}*/

var selectedDigimon;

async function getDigimonAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");
    
    return await response.json();
}

async function filtroDigimon(digimonId){
    const digimonStart = await criarItens();
    /*retorna digimonList ,
    aplica um find para buscar a lista de digimon um por um e guarda ela no monster,
    verifica se id do monster é igual id da digmonId(id da API)*/
    return digimonList.find((monster) => monster.id === digimonId)
    
}


console.log("olá")


    const listCountainer = document.querySelector("#list");
    const header = document.querySelector("#header");
    const searchImput = document.querySelector("#searchImput");


async function criarItens() {
    const digimonData = await getDigimonAPI();

    // Clear the previous content of the list element
    const container = document.getElementById('container-itens');
    list.innerHTML = '';

        // Create a <div> for each Digimon and append it to the list element
        digimonData.forEach(digimon => {

            //Inserir um novo componente do grid layout
            const div = document.createElement('div');
            div.classList.add('item'); // para adicionar um elemento para estilização
            const img = document.createElement('img');
            
            const name = document.createElement('p');
            name.textContent = digimon.name;
            div.appendChild(name);

            img.src = digimon.image;
            img.alt = `Imagem de ${digimon.name}`; //Prática de acessibilidade
            div.appendChild(img);


            
            //RETORNO PARA TELA Diginons Search
            div.addEventListener('click', () => {
                window.location.href = `/index.html?id=${digimon.id}`;
        });
        container.appendChild(div);
    });
}

async function main(){
    await filtroDigimon();
}
  
main();
 