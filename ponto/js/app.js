function registrar(query) {
	var data = new MyDate( new Date() );
	var aviso = new Notify();
	if( query.split(" ")[0] == "#chegada" ){
		aviso.chegada(data);
	}
	var elemento = document.querySelector(query);
	elemento.innerHTML = data.toString(); 
}