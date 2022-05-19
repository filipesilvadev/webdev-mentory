<?php

$idade = 19;
$numeroDePessoas = 1;

echo "Você só pode entrar se tiver mais do que 18 anos..." . PHP_EOL;

if($idade >= 18) {
  echo "Você tem $idade anos, pode entrar";
 
}else if($idade >= 16 && $numeroDePessoas > 1){
    echo "Você tem $idade mas está acompanhado, pode entrar.";    

  }else{
    echo "Deu ruim pra você meu parceiro.";
}

// wp-form-simposio
// wp-form-simposio-btn

