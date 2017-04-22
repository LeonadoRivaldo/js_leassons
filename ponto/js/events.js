var $interval = function(fn, delay){
	var funcao = fn;
	var tempo = delay;
	var intervaloID;
	this.start = function( callback ) {
		intervaloID = setInterval(function() {
			callback( funcao() );
		}, tempo);
	}
	this.stop = function() {
		clearInterval(intervaloID);
	}
	return this;
}


var arrivalEvent =  new Event("arrival", {"bubbles":true, "cancelable":false});
var departureEvent =  new Event("departure", {"bubbles":true, "cancelable":false});
var lunchArrivalEvent =  new Event("lunchArrival", {"bubbles":true, "cancelable":false});
var lunchDepartureEvent =  new Event("lunchDeparture", {"bubbles":true, "cancelable":false});

//needed vars
var saidaEstimativa, voltaDoAlmoco, timer, interval;



//evento de chegada
document.addEventListener('arrival', function functionName(event) {
	saidaEstimativa = new MyDate( event.data );
	saidaEstimativa.acrescenta(8, 'hour');
	saidaEstimativa.acrescenta(48, 'minute');
	document.querySelector('#saida .estimativa').textContent = saidaEstimativa.toString();
	timer = new Timer( event.ht );
	interval = new $interval( timer.contador, 1000);
	interval.start(function(retorno){
		document.querySelector('#countdown .time').textContent = retorno;
	});
});
//evento de saida para o almoço
document.addEventListener('lunchDeparture', function functionName(event) {
	saidaEstimativa.acrescenta(1, 'hour');
	voltaDoAlmoco = new MyDate( event.data );
	voltaDoAlmoco.acrescenta(1, 'hour');
	document.querySelector('#saida .estimativa').textContent = saidaEstimativa.toString();
	document.querySelector('#chegadaAlmoco .estimativa').textContent = voltaDoAlmoco.toString();
});
//evento de chegada do almoço
document.addEventListener('lunchArrival', function functionName(event) {
	var vDate = new MyDate( event.data );
	var vhoras = parseInt( vDate.toString().split(':')[0]);
	var vminutos = parseInt( vDate.toString().split(':')[1] ) ;
	var ehoras =  parseInt( voltaDoAlmoco.toString().split(':')[0]);
	var eminutos = parseInt( voltaDoAlmoco.toString().split(':')[1] );
	var thoras = (vhoras - ehoras) <= 0 ? 0 : (vhoras - ehoras);
	var tminutos = (eminutos - vminutos);
	if( thoras < 0 ){
		tminutos = tminutos > 0 ? (tminutos * -1) : tminutos;
	}
	saidaEstimativa.acrescenta(thoras, 'hour');
	saidaEstimativa.acrescenta(tminutos, 'minute');
	document.querySelector('#saida .estimativa').textContent = saidaEstimativa.toString();
	document.querySelector('#almoco .time').textContent = `${thoras} horas e ${tminutos<0?(tminutos*-1):tminutos} minutos`;
	
	//todo calculo de diferença para diminuir ou aumentar a hora da saida
});
//evento de saida
document.addEventListener('departure', function functionName(event) {
	console.log("saida");
})