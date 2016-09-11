// JavaScript Document
$(function(){
	$(".header_bottom_content_center input").focus(function(){
		$(this).css("color","#000");
		$(this).val("");
		
		$(".xialaliebiao").show();	
	})	
	
	$(".header_bottom_content_center input").blur(function(){
			$(".xialaliebiao").hide();
	})
	
	
	/* 方法一 $(".xialaliebiao li").hover(function(){
		$(this).addClass("focus").siblings().removeClass("focus");
	})*/
	$(".xialaliebiao li").mouseover(function(){
		$(this).css("background","#e3e3e3").siblings().css("background","#fff");
	})	
	
	$(".nav7").hover(function(){
		$(".nav7pic").attr("src","pic/index/nave/base_13.gif");
		$(".gouwuche").show();
		},function(){			
		$(".nav7pic").attr("src","pic/index/nave/base_12.gif");
		$(".gouwuche").hide();
	})
	

	
	
	
	
	/* 方法1
	$(".bannerlink li").mouseover(function(){
		$(this).css("background-color","#33beff").siblings().css("background-color","#c1c1c1");
		var scrIndex=$(this).val();
		$(".bannerpic").stop().fadeOut(100,function(){
			$(this).attr("src","pic/index/banner/"+scrIndex+".jpg");
		}).fadeIn(300);
	})*/
	
	t=setInterval(star,3000);
	$(".bannerlink li").hover(function(){
		clearInterval(t);
		var num=$(this).val();
		$(".bannerpic").stop().fadeOut(100,function(){
			$(this).attr("src","pic/index/banner/"+num+".jpg");
		}).fadeIn(500);
		$(this).css("background-color","#33beff").siblings().css("background-color","#c1c1c1");
		},function(){
		t=setInterval(star,3000);	
	})
	
	var num=1;
	$(".bannerlink li:eq(0)").css("background","#33beff");
	function star (){
		$(".bannerpic").stop().fadeOut(300,function(){
			$(".bannerlink li:eq("+(num-1)+")").addClass("select").siblings().removeClass("select");
			$(".select").css("background","#33beff").siblings().css("background","#c1c1c1");	 
			$(this).attr("src","pic/index/banner/"+num+".jpg");
		}).fadeIn(1000);
	
		
		num++;
		num=num==8?1:num;
	}
	
	

	
	$(".content_top ul li").hover(function(){
		$(this).children().animate({left:"-14px"},200);
	},function(){
		$(this).children().animate({left:"0px"},200);
	})
	
	$(".xinpinshoufa ul li").hover(function(){
		$(this).children().animate({left:"-11px"},200);
	},function(){
		$(this).children().animate({left:"0px"},200);
	})
	
	$(".gexingdingzhi ul li").hover(function(){
		$(this).children().animate({left:"-11px"},200);
	},function(){
		$(this).children().animate({left:"0px"},200);
	})
	
	
	
})