function mascara(i) {
    var cpf = i.value;

    // Não permite receber outro caractere que não seja um número
    if (isNaN(cpf[cpf.length-1])) { 
       i.value = cpf.substring(0, cpf.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (cpf.length == 3 || cpf.length == 7) i.value += ".";
    if (cpf.length == 11) i.value += "-";
 
 }