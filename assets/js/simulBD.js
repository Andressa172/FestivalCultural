const dados = [
    { id: 1, nome: 'Andressa' },
    { id: 2, nome: 'Ruan' },
    { id: 3, nome: 'Guilherme' },
    { id: 4, nome: 'Thamires' },
];

function montarTabela() {
    let vTab = document.querySelector('#tb-body');
    let html = '';
    for(let obj of dados){
        /* DATA ATTRIBUTE - data-? */
        html+=`<tr>
                 <th class="coluna"><input type="checkbox" data-id="${obj.id}"></th>
                 <td class="coluna">${obj.nome}</td>
                 <th class="coluna"><a onclick="excluirItem(${obj.id})">&#9746;</a></th>
               </tr> `
    }
    vTab.innerHTML = html;
}

function adicionarItem() {
    let nomeInput = document.querySelector('#txt-texto');
    let novoObj = {id:new Date().getTime(),nome:nomeInput.value}
    dados.push(novoObj);
    montarTabela();
    nomeInput.value='';
    nomeInput.focus();
}

function excluirItem(id) {
    let listaAux = []
    for (let i=0; i<dados.length;i++){
        if (idDel != dados[i].id)
            listaAux.push(dados[i])
    }
    dados = listaAux;
    montarTabela();
}

function selecionarTodos() {
    let cbPai = document.querySelector('#ckTodos');
   // pegar todos os checkbox que foram criados com data-id
   let vetCB = document.querySelectorAll('[data-id]');
   for (let objCb of vetCB){
       objCb.checked = cbPai.checked;              
   }
}

function excluirSelecionados() {
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