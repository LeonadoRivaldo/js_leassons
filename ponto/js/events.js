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
var saidaEstimativa, voltaDoAlmoço, timer, interval;



//evento de chegada
document.addEventListener('arrival', function functionName(event) {
	saidaEstimativa = new MyDate( event.data );
	saidaEstimativa.acrescenta(8, 'hour');
	saidaEstimativa.acrescenta(48, 'minute');
	document.querySelector('#saida .estimativa').textContent = saidaEstimativa.toString();
	timer = new Timer( event.ht );
	interval = new $interval( timer.contador, 10);
	interval.start(function(retorno){
		document.querySelector('#countdown .time').textContent = retorno;
	});
});
//evento de saida para o almoço
document.addEventListener('lunchDeparture', function functionName(event) {
	console.log("saida para o almoço");
});
//evento de chegada do almoço
document.addEventListener('lunchArrival', function functionName(event) {
	console.log("chegada do almoço");
});
//evento de saida
document.addEventListener('departure', function functionName(event) {
	console.log("saida");
})