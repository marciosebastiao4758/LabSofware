<?php
$peso = 90;
$altura = 1.89;
$imc = $peso / ($altura * $altura);

$imc =round($imc, 2);

echo $imc;