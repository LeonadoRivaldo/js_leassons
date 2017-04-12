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
	var horas = horasDeTrabalho.split(':')[0]; 
	var minutos = horasDeTrabalho.split(':')[0]; 
	var segundos = 0;

}