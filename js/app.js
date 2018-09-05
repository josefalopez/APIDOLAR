$(document).ready(function(){


$.ajax({
	url: 'https://mindicador.cl/api/',
	method: 'GET'
}).then(function(data){
	console.log(data);

	var dolar = data.dolar.valor;

	$('#dolaractual').text('$' + dolar.toLocaleString('es-CL'));
	$('#euroactual').text('€' + data.euro.valor.toLocaleString('es-CL'));
	$('#ufactual').text(data.uf.valor.toLocaleString('es-CL'));
	$('#utmactual').text(data.utm.valor.toLocaleString('es-CL'));

$('#convertir').click(function(){
	var pesos = $('#pesos').val();
	var dolares = (pesos / dolar);
	$('#dolares').val(dolares);
})

});

});

