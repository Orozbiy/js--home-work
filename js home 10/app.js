function chec() {
  let name1 = prompt('Атыныз ким?');
  let wess = Number(prompt('Салмагыныз канча '));
  let heightInput = Number(prompt('Боюнуздун узундугу '));
  if (heightInput > 3) {
    heightM = heightInput / 100;
  } else {
    heightM = heightInput;
  }
  let bli = wess / (heightM * heightM);
  alert(name1 + ', таанышканыма кубанычтамын');
  if (heightM >= 1.95&&heightM <= 2.45) {
    alert('Боюнуз узун экен!');
  }
   if (heightM >= 1.15&&heightM <= 1.45) {
    alert('Боюнуз кыска  экен!');
  }
   if (heightM >= 1.55&&heightM <= 1.85) {
    alert('Боюнуз идеалдуу экен!');
  }
  if (bli <= 18.9) {
    alert('Салмагыныз аз. Тамактанууну кучотунуз.');
  } 
  else if (bli >= 18.5 && bli <= 24.9) {
    alert('Салмагыныз идеалдуу. ');
  } 
  else if (bli >= 25 && bli <= 29.9) {
    alert('Салмагыныз бир аз оор.');
  }
    else if ( bli <= 30) {
    alert('Салмагыныз оор.');
  }else{
    alert('туура эмес киргизуу')
  }
}
chec();

