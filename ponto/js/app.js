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
		aviso.chegada(data);
	}

	var elemento = document.querySelector(query);
	elemento.innerHTML = data.toString(); 
}