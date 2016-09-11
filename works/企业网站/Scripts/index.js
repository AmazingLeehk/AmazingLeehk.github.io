// JavaScript Document



$(function(){
	
	
	//tab
	var img=$("#tab .tab_content ul li").find("img");
	var liLength = img.length; 
	
	
	for(var i = 0; i < liLength; i++){    
		$("#tab .tab_content ul li:eq("+i+")").find("img").attr("src","images/tab/"+(i+1)+"/tab_0"+(i+1)+".png");  
	}  
	
	$("#tab .tab_nav ul li").hover(function(){
		var val=$(this).val();
		for(var i = 0; i < liLength; i++){    
			$("#tab .tab_content ul li:eq("+i+")").find("img").attr("src","images/tab/"+val+"/tab_0"+(i+1)+".png");  
		} 		
	
	
	
	},function(){})
	
	
	
	//banner
	$('#banner_pic').kxbdSuperMarquee({
			distance:250,
			time:2,
			btnGo:{left:'#goL',right:'#goR'},
			direction:'left'
	})
	
	
	
			//加盟动态 上下滚动效果
	$('#news').kxbdSuperMarquee({
		isMarquee:true,
		isEqual:false,
		scrollDelay:30,
		direction:'up'
	});	
			

			
			
	$("#jdms").kxbdSuperMarquee({
		isMarquee:true,
		direction:'left'
			});
	$("#hbdp").kxbdSuperMarquee({
		isMarquee:true,
		direction:"left",
	
	});

//————————————————————————————————————————————以下为sidebar效果；
	$("#sidebar .box .btn a").hover(function(){
		$(this).css("background-image","url(images/sidebar_btn.png)");
		flag="a";
		},function(){
		$(this).css("background-image","url(images/sidebar_btn2.png)");
		flag=0;
	})

	$(window).scroll(function(){
		var top=$(this).scrollTop();
			$("#sidebar").css("top",top);						
	});
		
	
	var t = setInterval(star,300);
	flag=1;
	function star(){
		num=flag%2;
		if(num==1){
			$("#sidebar .box .btn a").css("background-image","url(images/sidebar_btn.png)");
			
			$("#sidebar .box .hotline").hide();
		}
		
		if(num==0){
			$("#sidebar .box .btn a").css("background-image","url(images/sidebar_btn2.png)");
			$("#sidebar .box .hotline").show();
		}
		flag++;	
	}

	$("#sidebar .box .hotline").hover(function(){
		flag="a";
	
	},function(){
		flag=0;
	})



})
























