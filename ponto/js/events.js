var arrivalEvent =  new Event("arrival", {"bubbles":true, "cancelable":false});
var departureEvent =  new Event("departure", {"bubbles":true, "cancelable":false});
var lunchArrivalEvent =  new Event("lunchArrival", {"bubbles":true, "cancelable":false});
var lunchDepartureEvent =  new Event("lunchDeparture", {"bubbles":true, "cancelable":false});



//evento de chegada
document.addEventListener('arrival', function functionName(event) {
	var saidaEstimativa;
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