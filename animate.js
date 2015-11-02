	$("img").mouseover(function() {    	
			$(this).animate({width:"300px", height:"300px"},500);
		});
		$("img").mouseout(function() {    	
			$(this).removeAttr('style');
		});
		
