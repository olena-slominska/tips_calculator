// code using jQuery
$(document).on('click check',"#cont1", function() {
  tips = eval(bill.value*percent.value/100/pplnmbr.value);
  document.getElementById('tipresult').innerHTML = " $" + Math.round(tips).toFixed(2); 
  total = eval(bill.value/pplnmbr.value + tips);
  document.getElementById('totalresult').innerHTML = " $" + Number(total).toFixed(2);
  if (pplnmbr.value > 1) {
    $( "<style>#tipresult:after {content: '  per person'; font-size: 14px; color:#837c7c;} </style>" ).appendTo( "#tipresult" );
    $( "<style>#totalresult:after {content: '  per person'; font-size: 14px; color:#837c7c;} </style>" ).appendTo( "#totalresult" );
  }
});
// pure JS code
document.addEventListener('click',function() {
  tips2 = eval(bill2.value*percent2.value/100/pplnmbr2.value);
  document.getElementById('tipresult2').innerHTML = " $" + Math.round(tips2).toFixed(2); 
  total2 = eval(bill2.value/pplnmbr2.value + tips2);
  document.getElementById('totalresult2').innerHTML = " $" + Number(total2).toFixed(2);
  if (pplnmbr2.value > 1) {
   document.getElementById('hidden').innerHTML = "per person",
   document.getElementById('hidden2').innerHTML = "per person"
    ;
  }
});




  