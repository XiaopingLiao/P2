

var isArmstrong = function(n){
	"use strict";
	var sum = 0;
	//convert to String
	n = String(n);

	for(var i = 0; i < n.length; ++i){
		sum = sum + Math.pow(n[i], n.length);

	};
	if (n == sum){
		return true;
		
		} else {
		return false;
	};


	};


	var allArmstrongs = function(n){
    "use strict"

    var result = " 1";

    n = String(n);

    for (var i = 2; i <= 99999; ++i){

    	if (isArmstrong(i)){
    	result = result + "," + " " + i;

    };

  }

    	return result;

};



var allSubstrings1 = function(n){
"use strict"
var result = "";

n = String(n);

	for(var i = 0; i< n.length; i++) {
	
		for(var j = 1; j <= n.length-i ;j++) {
		
			result = result + n.substring(i,i+j);
				if (i < n.length-1 || (i == n.length-1 && j < n.length-i)){
					result = result + ","
				}

		};
	};

	return result;
};




var allSubstrings2 = function(n){
"use strict"
var result = [];

	for(var i = 0; i< n.length; i++) {
	
		for(var j = 1; j <= n.length-i ;j++) {
		
			var str=  n.substring(i,i+j);
				result.push(str);
				}

		};

	return result;
};

var maxWord = function(n){

	var n =[];
	var res = n.split("");
	var s = n[0];
	
	var position = 0;
	
	for(var i = 0; i < n.length; i++) {
	
		if(s.length < n[i].length) {
			s = n[i];
			position = i;
		}

	}	

	return s = n[i];
};



