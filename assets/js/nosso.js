function validarRA(input){
   var ra = input.value.replace(/\D/g, ""); 
   var mensagemErro = input.nextElementSibling;

   if(ra.length>9){
       ra = ra.substring(0, 9); 
   }
   input.value = ra;
   if (ra.length !== 9){
       mensagemErro.textContent = "O RA deve conter exatamente 9 números.";
       input.setCustomValidity("O RA deve conter exatamente 9 números.");
   }else{
       mensagemErro.textContent = "";
       input.setCustomValidity("");
   }
}


function mCpf()
{
   var cpf = event.target.value;
   cpf = cpf.replace(/\D/g, "")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
   event.target.value = cpf;
}

function validarCPF(cpf) {
   var cpfValue = cpf.value;
   var mensagemErro = "";
   var mensagem = document.getElementById("mensagemErro-cpf");
   var cpfNumerico = cpfValue.replace(/[^\d]+/g, "");

   mensagem.innerHTML = "";

   if (cpfNumerico.length !== 11 || 
       /^(\d)\1{10}$/.test(cpfNumerico)) {
      mensagemErro = "O CPF deve ter 11 dígitos.";
      cpf.classList.add("erro");
   } else {
      var ok = 1;
      var add, rev;
      add = 0;
      for (var i = 0; i < 9; i++) {
         add += parseInt(cpfNumerico.charAt(i)) * (10 - i);
      }
      rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) rev = 0;
      if (rev !== parseInt(cpfNumerico.charAt(9))) ok = 0;

      if (ok === 1) {
         add = 0;
         for (var i = 0; i < 10; i++) {
            add += parseInt(cpfNumerico.charAt(i)) * (11 - i);
         }
         rev = 11 - (add % 11);
         if (rev === 10 || rev === 11) rev = 0;
         if (rev !== parseInt(cpfNumerico.charAt(10))) ok = 0;
      }

      if (ok === 0) {
         mensagemErro = "O CPF não passou na inválido.";
         cpf.classList.add("erro");
      } else {
         cpf.classList.remove("erro");
      }
   }

   mensagem.innerHTML = mensagemErro;
}



 function mCEP()
 {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, ""); 
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2");
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2");
    event.target.value = cep;
 }

 function validarCEP(cep)
 {
   var cepValue = cep.value;
   var mensagemErro = "";
   var mensagem = document.getElementById("mensagemErro-cep");
   var cepNumerico = cepValue.replace(/\D/g, "");

   mensagem.innerHTML = "";

   if(cepNumerico.length !== 8)
   { 
      mensagemErro = "O CEP deve ter exatamente 8 dígitos.";
      cep.classList.add("erro");
   }
   else
      cep.classList.remove("erro");

   if (mensagemErro)
      mensagem.innerHTML = mensagemErro;
   else
      mensagem.innerHTML = "";
}

 function mTel ()
 {
   var tel = event.target.value;
   tel = tel.replace(/\D/g, "")
   tel = tel.replace(/^(\d)/, "($1")
   tel = tel.replace(/(.{3})(\d)/, "$1)$2")
   if (tel.length == 9)
      tel = tel.replace(/(.{1})$/, "-$1")
   else
   if (tel.length == 10)
      tel = tel.replace(/(.{2})$/, "-$1")
   else
   if (tel.length == 11) 
      tel = tel.replace(/(.{3})$/, "-$1")
   else
   if (tel.length == 12)
      tel = tel.replace(/(.{4})$/, "-$1")
   else
   if (tel.length > 12)
      tel = tel.replace(/(.{4})$/, "-$1")
   event.target.value = tel;
}

function validarTelefone(telefone)
{
   var tel = telefone.value;
   var mensagemErro = "";
   var mensagem = document.getElementById("mensagemErro-telefone");
   var telNumerico = tel.replace(/\D/g, "");

   mensagem.innerHTML = "";

   if(telNumerico.length < 11)
   { 
      mensagemErro = "O telefone deve ter pelo menos 10 dígitos.";
      telefone.classList.add("erro");
   }
   else
      telefone.classList.remove("erro");

   if(mensagemErro)
      mensagem.innerHTML = mensagemErro;
   else
      mensagem.innerHTML = "";
}

function validarEmail(email)
{
   var valida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   var mensagemErro = "";
   var mensagem = document.getElementById("mensagemErro-email");

   mensagem.innerHTML = "";

   if(!valida.test(email.value)) 
   {
      mensagemErro = "Email inválido!";
      email.classList.add("erro");
   }

   if(mensagemErro) 
      mensagem.innerHTML = mensagemErro;
   else 
   {
      email.classList.remove("erro");
      mensagem.innerHTML = "";
   }
}

function validarNomeCompleto(nome)
{
   var nomeCompleto = nome.value.trim();
   var mensagemErro = "";
   var mensagem = document.getElementById("mensagemErro-nome");
   var partes = nomeCompleto.split(" ");
   var numExp = /\d/;

   nome.classList.remove("erro");
   mensagem.innerHTML = "";

   //verifica se tem espaços e verifica se tem duas partes no nome
   if(!nomeCompleto.includes(" ") || partes[0].trim().length >= 0 || partes[1]?.trim().length === 0)
   {
       mensagemErro += "Insira o nome completo.<br>";
       nome.classList.add("erro");
   }

   //verifica se não tem numero
   if(numExp.test(nomeCompleto))
   {
      mensagemErro += "Não pode conter números.<br>";
      nome.classList.add("erro");
   }

   //tudo ok
   if(partes[0].trim().length > 0 && partes[1]?.trim().length > 0 && !numExp.test(nomeCompleto)) 
   {
      mensagemErro = "";
      mensagem.innerHTML = mensagemErro;
   }

   // Exibe mensagem de erro, se houver
   if(mensagemErro)
       mensagem.innerHTML = mensagemErro;
}
 
 