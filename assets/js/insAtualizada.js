var dados = [
    {id:1,nome:'Andressa',cpf:"111.111.111-11", telefone: "(18)11111-1111"},
    {id:2,nome:'Ruan',cpf:"222.222.222-22", telefone: "(18)22222-2222"},
    {id:3,nome:'Guilherme',cpf:"333.333.333-33", telefone: "(18)33333-3333"},
    {id:3,nome:'Cassia',cpf:"444.444.444-44", telefone: "(18)44444-4444"},
]

function montarTabela(){
    let vTab = document.querySelector('#tb-body');
    let html = '';
    for(let obj of dados){
        /* DATA ATTRIBUTE - data-? */
        html+=`<tr>
                 <th class="coluna"><input type="checkbox" data-id="${obj.id}"></th>
                 <td class="coluna">${obj.nome}</td>
                 <td class="coluna">${obj.cpf}</td>
                 <td class="coluna">${obj.telefone}</td>
                 <th class="coluna"><a onclick="excluirItem(${obj.id})">&#9746;</a></th>
               </tr> `
    }
    vTab.innerHTML = html;
}
function adicionarItem()
{
    let nomeInput = document.querySelector('#name-field');
    let cpfInput = document.querySelector('#cpf-field');
    let telefoneInput = document.querySelector('#telefone-field');

    let novoObj = {id:new Date().getTime(),nome:nomeInput.value,cpf:cpfInput.value,telefone:telefoneInput.value}

    dados.push(novoObj);
    montarTabela();
    nomeInput.value='';
    nomeInput.focus();
}

function excluirItem(idDel)
{
    let listaAux = []
    for (let i=0; i<dados.length;i++){
        if (idDel != dados[i].id)
            listaAux.push(dados[i])
    }
    dados = listaAux;
    montarTabela();
}

function selecionarTodos(){
   let cbPai = document.querySelector('#ckTodos');
   // pegar todos os checkbox que foram criados com data-id
   let vetCB = document.querySelectorAll('[data-id]');
   for (let objCb of vetCB){
       objCb.checked = cbPai.checked;              
   }
}

function excluirSelecionados(){
   let vetCB = document.querySelectorAll('[data-id]');
   for (let objCb of vetCB){
      if (objCb.checked) 
          excluirItem(objCb.dataset.id);
   }
}


document.addEventListener('DOMContentLoaded',
    function(){
        montarTabela();

        let vBAdd = document.querySelector('#btn-add');
        vBAdd.addEventListener('click',adicionarItem);

        let cbPai = document.querySelector('#ckTodos');
        cbPai.addEventListener('click',selecionarTodos);

        let vBExcl = document.querySelector('#btnExcluirSelecionados');
        vBExcl.addEventListener('click',excluirSelecionados);

    },false);