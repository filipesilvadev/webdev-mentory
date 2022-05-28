<?php

  $contasCorrentes = [
    39090063889 => [
      'titular' => 'Filipe',
      'saldo' => 20000
    ],
    12345678910 => [
      'titular' => 'Rebeca',
      'saldo' => 500
    ],
    78945612300 => [
      'titular' => 'Eloã',
      'saldo' => 1500
    ],
  ];

  foreach ($contasCorrentes as $cpf => $conta) {
    echo $cpf . PHP_EOL;
    echo $conta['titular'] . PHP_EOL;
  }