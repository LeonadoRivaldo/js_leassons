var Notify = function() {
	this.notification;
	var send = function() {
		if( Notification.permission === "granted" ) {
			if( typeof this.notification === 'undefined' ){
				return;
			}
			return new Notification( this.notification.title, this.notification.options );
		}
	}
	var create = function(body,icon,title) {
	  var options = {body, icon};
	  this.notification = {title , options}
	}
	return{
		enviar: send,
		criar: create
	}
};