bloco_externo:{

  bloco_interno:{
    console.log ('1');
    break bloco_externo;      // encerra bloco_interno e bloco_externok
    console.log (':-(');    // não é executado
  }

  console.log ('2');        // não é executado
}
