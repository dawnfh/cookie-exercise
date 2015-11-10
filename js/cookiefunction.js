// Cookies.set('webpage', 'Dawn').set('key', 'value');

$(document).ready(function(){
	if(location.search){
		params = location.search.split("?")[1];
		split1 = params.split("=")[1];
		name1 = split1.split("&")[0];
		Cookies.set("name_submitted", name1);
	}
	if(Cookies.get("name_submitted")){
		$("#submission").html(Cookies.get("name_submitted"));
	}
});

