var MyDate = function( date ){

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


	this.date = new Date( date );
	var timeString = function() {
		return tag`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	};
	return{
		data: this.date,
		toString: timeString
	}
}