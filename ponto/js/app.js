var chegada, saida, saidaAlmoco, chegadaAlmoco;
var horasDeTrabalho = "08:48:00";
function registrar(query, elem) {
	var me = elem;
	var meChild = me.firstElementChild;
	me.removeAttribute("onClick");
	me.setAttribute('tip', "Ponto já registrado!")
	me.className = me.className + " default-pointer"
	meChild.textContent = "done"; 
	var data = new MyDate( new Date() );
	var aviso = new Notify();
	if( query.split(" ")[0] == "#chegada" ){
		chegada = data;
		aviso.chegada(data);
		arrivalEvent.data = data;
		document.dispatchEvent(arrivalEvent);
	}	
	if( query.split(" ")[0] == "#saidaAlmoco" ){
		//TODO
	}	
	if( query.split(" ")[0] == "#chegadaAlmoco" ){
		//TODO
	}	
	if( query.split(" ")[0] == "#saida" ){
		//TODO
	}

	var elemento = document.querySelector(query);
	elemento.innerHTML = data.toString(); 
}


function load() {
	//seta total de horas default
	document.querySelector('#horas .time').textContent = "asdasd";

}


function customizarHoras() {
	console.debug( !document.querySelector('#horasCustom').checked );
}