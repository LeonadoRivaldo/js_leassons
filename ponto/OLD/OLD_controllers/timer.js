(function(){
var timer = angular.module('timer',[]);
timer.service('Timer', ['$log','$rootScope', function($log,$rootScope){
	var timerD = {
	    minute: 48,
	    seconds: 60,
	    hours: 8,
	};
	var service = {
		addDate: function(date, interval, units) {
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
			  return ret;
		},
		countDown: function(){	  
			  if( timerD.seconds == 0 ){
			  	timerD.minute--;
			    timerD.seconds = 60;
			  }else{
			  	timerD.seconds--;
			  }

			  if( timerD.minute == 0 ){
			    timerD.minute = 60
			    timerD.hours--;
			  }

			  if( timerD.hours == 0 ){
			  	stoptimer();
			  	return;
			  }
			  return `${timerD.hours}:${timerD.minute}:${timerD.seconds}`;
		}
	};
	return service;

}])



})();