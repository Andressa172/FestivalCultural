function validarRA(input)
{
    var ra = input.value.replace(/\D/g, "");
    
    if (ra.length > 9){
        ra = ra.substring(0, 9);
    }
    
    input.value = ra;
    
    if (ra.length !== 9){
        input.setCustomValidity("O RA deve conter exatamente 9 números.");
    }
    else{
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

function validarCPF()
{
   var cpf = event.target.value;
   var ok = 1;
   var add;
   if (cpf != "") {
      cpf = cpf.replace(/[^\d]+/g, '');
      if (cpf.length != 11 ||
         cpf == "00000000000" ||
         cpf == "11111111111" ||
         cpf == "22222222222" ||
         cpf == "33333333333" ||
         cpf == "44444444444" ||
         cpf == "55555555555" ||
         cpf == "66666666666" ||
         cpf == "77777777777" ||
         cpf == "88888888888" ||
         cpf == "99999999999")
             ok = 0;
      if (ok == 1) {
         add = 0;
         for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
               rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
               ok = 0;
            if (ok == 1) {
               add = 0;
               for (i = 0; i < 10; i++)
                  add += parseInt(cpf.charAt(i)) * (11 - i);
               rev = 11 - (add % 11);
               if (rev == 10 || rev == 11)
                  rev = 0;
               if (rev != parseInt(cpf.charAt(10)))
                  ok = 0;
            }
        }
        if (ok == 0) {
           alert("Ops... Ocorreu um problema... CPF inválido!");
           //event.target.focus();
        }
    }
 }

 function mCEP()
 {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, ""); 
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2");
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2");
    event.target.value = cep;
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

function validarEmail(input)
{
   var valida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!valida.test(input.value))
   {
       alert("Erro, email invalido!!!");
   }
}

function validarNomeCompleto(nome)
{
   var nomeCompleto = nome.value.trim();
   var mensagemErro = "";
   var mensagem = document.getElementById("mensagemErro");
   var partes = nomeCompleto.split(" ");
   var numExp = /\d/;

   nome.classList.remove("erro");
   mensagem.innerHTML = "";

   //verifica se tem espaços e verifica se tem duas partes no nome
   if(!nomeCompleto.includes(" ") || partes[0].trim().length >= 0 || partes[1]?.trim().length === 0)
   {
       mensagemErro += "Nome inválido! Precisa inserir o nome completo.<br>";
       nome.classList.add("erro");
   }

   //verifica se não tem numero
   if(numExp.test(nomeCompleto))
   {
      mensagemErro += "Nome inválido! Não pode conter números.<br>";
      nome.classList.add("erro");
   }

   //tudo ok
   if(partes[0].trim().length > 0 && partes[1]?.trim().length > 0 && !numExp.test(nomeCompleto)) 
   {
      alert("Nome inserido com sucesso!!!");
      mensagemErro = "";
      mensagem.innerHTML = mensagemErro;
   }

   // Exibe mensagem de erro, se houver
   if(mensagemErro)
       mensagem.innerHTML = mensagemErro;
}
 
 