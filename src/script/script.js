

const urlParams = new URLSearchParams(window.location.search);

// Variável que seleciona para o parametro da url ser o mesmo do digimon selecionado, caso nenhum digimon =1
var selectedDigimon = urlParams.get('id');
if(!selectedDigimon){
    selectedDigimon = 1
}

// Chamando API e retornar ela em json
async function getDigimonAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");
    
    return await response.json();
}
// Filtro de busca digimon e conferencia 
async function filtroDigimon(digimonId){

    const digimonList = await getDigimonAPI();
    /*retorna digimonList ,
    aplica um find para buscar a lista de digimon um por um e guarda ela no monster,
    verifica se id do monster é igual id da digmonId(id da API)*/
    return digimonList.find((monster) => monster.id === digimonId)
}

/*  Renderizador (para renderizar as informações no html)
digimonId = 1 seta o 1º da lista para sempre aparecer*/
async function renderDigimon(){
    //O resultado do filtroDigimon / converte id para inteiro
    const digimon = await filtroDigimon(parseInt(selectedDigimon));
    if(digimon == null) return
    
    //Requisições para renderizar imagen,nome,atributos(HP,ATK e DEF) dos digimons na API
    document.getElementById("imgDigimon").src = digimon.image;
    document.getElementById("t-nomeDigimon").textContent = digimon.name;
    document.querySelector('.atbHP p').textContent = digimon.HP;
    document.querySelector('.atbATK p').textContent = digimon.ATK;
    document.querySelector('.atbDEF p').textContent = digimon.DEF;

    //selecionado os atributos internos(HP,ATK e DEF)
    const hpDigimonElement = document.getElementById("hp_interna");
    const atkDigimonElement = document.getElementById("atk_interna");
    const defDigimonElement = document.getElementById("def_interna");
    //Transformando os atributos internos(HP,ATK e DEF) em % estilizado
    hpDigimonElement.style.width = digimon.HP + '%';
    atkDigimonElement.style.width = digimon.ATK + '%';
    defDigimonElement.style.width = digimon.DEF + '%';
}

async function buscaDigimon() {
    var inputValue = document.getElementById("inputBusca").value;
    //Mensagem caso não digite número entre 1 e 16
    if(inputValue < 1 || inputValue > 17)
        window.alert("Por favor, insira um valor entre 1 e 16");
    else
    selectedDigimon = inputValue
    renderDigimon()
    document.getElementById("inputBusca").value = "";
}

//Botão PROXIMO
async function buttonProximo() {
    selectedDigimon++
   //Recomeçar a contegem quando chega em 16 ++
    if(selectedDigimon > 16)
        selectedDigimon=1;

    renderDigimon(selectedDigimon);
}

//Botão ANTERIOR
async function buttonAnterior() {
    selectedDigimon--
    //Voltar para 16 se retroceder do 1 --
    if(selectedDigimon < 1)
        selectedDigimon=16;

    renderDigimon(selectedDigimon);
}

//Função main
async function main(){
    await renderDigimon();
    
    //cria evento do botão ver listagem de dimons
    document.getElementById('botaoLista').addEventListener('click', function() {
        window.location.href = 'telaInicial.html';
    });
    
}

main();