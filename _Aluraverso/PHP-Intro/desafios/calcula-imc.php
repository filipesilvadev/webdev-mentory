<?php
  $peso = 80;
  $altura = 1.71;

  $imc = $peso / pow($altura,2);

  echo "Seu IMC é de $imc. Você está com o IMC ";

  if($imc < 18){
    echo "abaixo do ideal.";
  }elseif($imc < 25){
    echo "dentro do ideal.";
  }else {
    echo "acima do ideal.";
  }


