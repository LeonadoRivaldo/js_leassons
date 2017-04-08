var MyDate = function( date ){
	this.date = new Date( date );
	var timeString = function() {
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	};
	return{
		data: this.date,
		toString: timeString
	}
}