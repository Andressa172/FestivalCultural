function validarRA(input) {
    var ra = input.value.replace(/\D/g, "");
    
    if (ra.length > 9) {
        ra = ra.substring(0, 9);
    }
    
    input.value = ra;
    
    if (ra.length !== 9) {
        input.setCustomValidity("O RA deve conter exatamente 9 números.");
    } else {
        input.setCustomValidity("");
    }
}


function validarCPF() {
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
          for (var i = 0; i < 9; i++)
             add += parseInt(cpf.charAt(i)) * (10 - i);
          var rev = 11 - (add % 11);
          if (rev == 10 || rev == 11)
             rev = 0;
          if (rev != parseInt(cpf.charAt(9)))
             ok = 0;
 
          if (ok == 1) {
             add = 0;
             for (var i = 0; i < 10; i++)
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
          event.target.focus();
       }
    }
 }

 function mCEP() {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, ""); 
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2");
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2");
    event.target.value = cep;
 }
 
 