//加载页面
$(function(){
    var img_url='';
    var resources = [
        img_url+'images/loading.gif',
        img_url+'images/icon_music.png',
        img_url+'images/bg_yun.png',
        img_url+'images/index_bottom_bg.png',
        img_url+'images/logo.png',
        img_url+'images/logo_text.png',
        img_url+'images/small_ym.png',
        img_url+'images/btn_open.png',
        img_url+'images/yyjs_bottom_bg.png',
        img_url+'images/small_ym01.png',
        img_url+'images/icon_yyjs.png',
        img_url+'images/icon_yun.png',
        img_url+'images/btn_up.png',
        img_url+'images/ymjs_bottom_bg.png',
        img_url+'images/small_ym01.png',
        img_url+'images/icon_walk_all.png',
        img_url+'images/yyjs_text.png',
        img_url+'images/btn_up.png',
        img_url+'images/statr_logo.png',
        img_url+'images/small_ym.png',
        img_url+'images/btn_go.png',
        img_url+'images/welcome_bottom_bg.png',
        img_url+'images/welcome_logo.png',
        img_url+'images/hd_bottom_bg.png',
        img_url+'images/hd_bottom_bg1.png',
        img_url+'images/duihua01.png',
        img_url+'images/duihua02.png',
        img_url+'images/hd_text01.png',
        img_url+'images/hd_text02.png',
        img_url+'images/hd_text03.png',
        img_url+'images/hd_text04.png',
        img_url+'images/hd_text05.png',
        img_url+'images/hd_text06.png',
        img_url+'images/hd_text07.png',
        img_url+'images/hd_text08.png',
        img_url+'images/hd_text09.png',
        img_url+'images/hd_text10.png',
        img_url+'images/wenzi.png',
        img_url+'images/huoche.png'
    ];
    var loadCount=0;
    function loaded(){
        loadCount++;
        var percent = parseInt(loadCount/resources.length*100);
        if(resources.length==loadCount){
            //百分比进度
            $("#lo_pr_bg").css("width",percent+'%');
            $('.current').text(percent+'%');
            startView();//开始页面
        }else{
            $("#lo_pr_bg").css("width",percent+'%');
            $('.current').text(percent+'%');
        }
    }
    function loadImg(src){
        var image = new Image();
        image.onload = loaded;
        image.onerror = loaded;
        image.src = src;
    }
    for(var i in resources){
        loadImg(resources[i]);
    }
});
function  startView() {
    $(".loading_page").fadeOut(300);
    $(".page_index").show().addClass("index_animation");
}

$(function(){
    function removeWalk(){
        $("#text_con").get(0).className="";
        $(".text_con_ul").find("li").hide()
    };
    $(".text_con_ul").find("li").eq(0).fadeIn(300);
    $(".btn_open").bind('touchstart',function(){
       $(".page_index").fadeOut(300);
        $("#fullpage").show().fullpage({
            afterLoad: function(anchorLink, index){
                if(index == 2){
                  $(".yyjs_text").fadeIn(500)
                }
                if(index == 3){
                    $('.section3').find('p').delay(500).animate({
                        bottom: '0'
                    }, 1500, 'easeOutExpo');
                }
            }
        });
        setTimeout(function(){
            $(".js_box").fadeIn(800);
        },500)
    });
    $("#btn_next").bind('touchstart',function(){
       $(".page_hd_box").fadeOut(300);
       $(".page_welcome").fadeIn(300);
        var w=$("body").width();
        $(".dongche").animate({
            left:w+"px"
        },4000)
        setInterval(function(){
            $(".dongche").css("left","-890px");
            $(".dongche").animate({
                left:w+"px"
            },5000)
        },6000)
    });
    $(".btn_ready").bind('touchstart',function(){
        $("#fullpage").fadeOut(300);
        $(".page_hd_box").fadeIn(300);
    });

    touch.on('.page_hd_box', 'touchstart', function(ev){
        ev.preventDefault();
    });
    var goNum=0;
    touch.on('.page_hd_box', ' swipeup', function(ev){
        var num=130;
        var bodyWidth=$("body").width();
        if(bodyWidth>=320&&bodyWidth<374){

             num=90;
        }

        var imgheight=$(".hd_bottom_bg1").height();
        var hd_top=$(".page_hd").offset().top;
        hd_top-=num;
        var chazi=imgheight-$("body").height();
        if(Math.abs(hd_top)>chazi){
            $(".page_hd").animate({
                marginTop:"-"+chazi+"px"
            },500)
        }else{
            $(".page_hd").animate({
                marginTop:hd_top+"px"
            },500)
        }
        goNum++;
        if(goNum>9){
            goNum--;
            return ;
        }
        removeWalk();
        $("#text_con").addClass("walking"+goNum);

    });
    touch.on('.page_hd_box', ' swipedown', function(ev){
        var num=130;
        var bodyWidth=$("body").width();
        if(bodyWidth>=320&&bodyWidth<374){
            num=90;
        }
        var imgheight=$(".hd_bottom_bg1").height();
        var hd_top=$(".page_hd").offset().top;
        hd_top+=num;
        var chazi=imgheight-$("body").height();
        if(hd_top>0){
            $(".page_hd").animate({
                marginTop:"0px"
            },500)
        }else{
            $(".page_hd").animate({
                marginTop:hd_top+"px"
            },500)
        }
        goNum--;
        if(goNum<0){
            goNum++;
            return ;
        }
        removeWalk();
        $("#text_con").addClass("walking"+goNum);
    });

    //开关音乐
    $(".btn_music").click(function () {
        //if ($(this).hasClass('rotate')){
        //    $(this).find("audio").get(0).pause();
        //    $(this).removeClass("rotate");
        //}else{
        //    $(this).find("audio").get(0).play();
        //    $(this).addClass("rotate");
        //
        //}
        if($(this).find("audio").get(0).paused){
            $(this).find("audio").get(0).play();
            $(this).addClass("rotate");
        }else{
            $(this).find("audio").get(0).pause();
            $(this).removeClass("rotate");
        }

    });
});