<?php
  $conta1 = [
    'titular' => 'Filipe',
    'saldo' => 20000
  ];

  $conta2 = [
    'titular' => 'Rebeca',
    'saldo' => 500
  ];

  $conta3 = [
    'titular' => 'Eloã',
    'saldo' => 1500
  ];

  $contasCorrentes = [$conta1, $conta2, $conta3];

  for ($i=0; $i < count($contasCorrentes); $i++) { 
    echo $contasCorrentes[$i]['titular'] . PHP_EOL;
  }