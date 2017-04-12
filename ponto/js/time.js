function tag(strings, ...values){
	if( values[0] < 10 ){
		values[0] = "0"+values[0]; 
	}
	if( values[1] < 10 ){
		values[1] = "0"+values[1]; 
	}
	if( values[2] < 10 ){
		values[2] = "0"+values[2]; 
	}
	return `${values[0]}:${values[1]}:${values[2]}`;
}


var MyDate = function( date ){
	this.date = new Date( date );
	var timeString = function() {
		return tag`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	};

	var addDate = function(units, interval) {
			  var ret = new Date(date); //don't change original date
			  var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
			  switch(interval.toLowerCase()) {
			    case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
			    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
			    case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
			    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
			    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
			    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
			    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
			    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
			    default       :  ret = undefined;  break;
			  }
			  date = ret;
	};


	return{
		data: this.date,
		toString: timeString,
		acrescenta: addDate
	}
}

var timer = function( horasDeTrabalho ){
	this.aviso = new Notify();
	this.horas = horasDeTrabalho.split(':')[0]; 
	this.minutos = horasDeTrabalho.split(':')[1]; 
	this.segundos = 0;
	this.countdown = {horas,minutos,segundos};


	var timeString = function() {
		return tag`${countdown.horas}:${countdown.minutos}:${countdown.segundos}`;
	};

	var countdown = function(){
		if( countdown.segundos == 0 ){
			countdown.segundos = 60;
			countdown.minutos--;
		}else{
			countdown.segundos--;
		}


		if( countdown.minutos = 0 ){
			countdown.minutos = 60;
			countdown.horas--;
			var corpo = "Já se passaram" + horas - countdown.horas + " horas!";
			var titulo = "DING DONG!";
			var icone = "img/ic_alarm_on_black_48dp_2x.png";
			aviso.create( corpo, icone, titulo );
			aviso.send();
		}


	}

}