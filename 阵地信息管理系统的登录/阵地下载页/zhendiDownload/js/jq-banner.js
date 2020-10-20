

	function banner(js1,js2,next,prev,tim){
		
		var m=$("#"+js1+" .aa").size();
		$('#'+js1+'>.aa').eq(0).show();

		$("#"+js2+" .trigger").eq(0).addClass('xz');
		var curr = 0;
		var ma=m*30;
		$("#"+js2+" .trigger").each(function(i){
			$(this).click(function(){
					
								   if($(this).hasClass("xz")){
					
					}
					else{
					curr = i;
					$("#"+js1+" .aa").fadeOut("slow");
					$("#"+js1+" .aa").eq(i).fadeIn("slow");
					$("#"+js2+" a").removeClass("xz");
					$("#"+js2+" a").eq(i).addClass("xz");
					}
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true表示前翻， false表示后翻
			if (flag) {
				if (curr == 0) {
					todo = m-1;
				} else {
					todo = (curr - 1) % m;
				}
			} else {
				todo = (curr + 1) % m;
			}
			$("#"+js2+" .trigger").eq(todo).click();
		};
		
		//前翻
		$("#"+prev).click(function(){
			pg(true);
			return false;
		});
		
		//后翻
		$("#"+next).click(function(){
			pg(false);
			return false;
		});
		
		//自动翻
		var timer = setInterval(function(){
			todo = (curr + 1) % m;
			$("#"+js2+" .trigger").eq(todo).click();
		},tim);
		
		//鼠标悬停在触发器上时停止自动翻
		$("#"+js2).hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % m;
					$("#"+js2+" .trigger").eq(todo).click();
				},tim);			
			}
		);
		$("#"+js1).hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % m;
					$("#"+js2+" .trigger").eq(todo).click();
				},tim);			
			}
		);
	}
	


