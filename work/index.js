/**
 * Created by Administrator on 2017/1/10.
 */
function boxHeadList() {
    var _item=$("#box_head .item").get();
    for(var i=0;i<_item.length;i++){
        _item[i].onmouseover=function () {

            this.children[1].style.display="block";
            this.style.background="#fff";
            $(this.children[0].children[0]).css({"background": "url(bgimg/header_v3.png) no-repeat -25px -12px"
            });
            // console.log(this.children[1]);

        }
        _item[i].onmouseleave=function () {
            this.children[1].style.display="none";
            this.style.background="#f8f8f8";

                $(this.children[0].children[0]).css({"background": "url(bgimg/header_v3.png) no-repeat -8px -4px",
                });


        }
    }
}
function boxHeadColor() {
    $("#box_head .mid a").not($(".fontc")).hover(function () {
        $(this).css("color","#fd9683");

    },function () {
        $(this).css("color","#000");
    });
}
function boxNavList() {
    var _flag=null;
    $("#box_nav .item li").not($("#box_nav .item li:first-child")).on("mouseenter",function () {

        $(this.children[1]).css({"display":"block",
            "width":$("body").width(),
            "left":-(this.offsetLeft)
        });
        $(this).css({"background":"#f0f1f3 url(images/tuniu_03.gif) no-repeat center 27px",
        });
        $(this.children[1]).html($(this).index());
/*v型符号变化*/
       $(this.children[0].children[0]).animate({"width":"6px","height":"7px"},100,null,function () {

            $(this).css({"background":"url(bgimg/nav_bg.png) no-repeat -34px -440px"});
        }).animate({"width":"6px","height":"3px"},100,null,function () {

            $(this).css({"background":"url(bgimg/nav_bg.png) no-repeat -17px -440px"});
        });


    });
    $("#box_nav .item li").not($("#box_nav .item li:first-child")).on("mouseleave",function () {
        $(this).css("background","#ffffff");

        $(this.children[0].children[0]).animate({"width":"5px","height":"3px"},10,null,function () {

            $(this).css({"background":"url(bgimg/nav_bg.png) no-repeat -32px -440px"});
        });
        $(this.children[1]).css("display","none");
    });

}
var _count=0;
function searchDrop() {
    $("#box_nav .supsearch").on("click",function () {
        _count++;

        $("#box_nav .drop_search").css("display","block");
        if(_count>1){
            _count=0;
            $("#box_nav .drop_search").css("display","none");
        }
    });
    $("#box_nav .dis").on("click",function () {
        $("#box_nav .drop_search").css("display","none");
        _count=0;
    });

}

function bannerLeftList() {
    var _arrposition1=["0px -24px","-40px -24px","-60px -24px","-20px -24px","-80px -24px","-100px -24px","-120px -24px"];
    var _arrposition2=["0px 0","-40px 0","-60px 0","-20px 0","-80px 0","-100px 0","-120px 0"];
    var _index=0;
    $($("#box_banner .leftselect")[0].children[_index]).css("display","block");
    $("#box_banner .left li").on("click",function () {
        _index=$(this).index();
        for(var i=0;i<this.parentNode.children.length;i++){
            if(this.parentNode.children[i]===this){
                $(this).css({"background-color":"#fff","color":"#34a53c","border-top-color":"#fff"});
                $(this.children[0]).css({"background-position":_arrposition1[$(this).index()]});
                $($("#box_banner .leftselect")[0].children[_index]).css("display","block");
             //   console.log($("#box_banner .leftselect")[0].children[_index]);
            }
            else{
                $(this.parentNode.children[i]).css({"background-color": "#38414c", "color": "#fff", "border-top-color": "#000"});
                $($("#box_banner .leftselect")[0].children[i]).css("display","none");

                $(this.parentNode.children[i].children[0]).css({"background-position": _arrposition2[$(this.parentNode.children[i]).index()]});
            }

        }
    });
    $("#box_banner .left li").on("mouseenter",function () {
        if($(this).index()!=_index){
            $(this).css({"background-color":"#fff","color":"#34a53c","border-top-color":"#fff"});
            $(this.children[0]).css({"background-position":_arrposition1[$(this).index()]});
        }

    }).on("mouseleave",function () {
        if($(this).index()!=_index){
            $(this).css({"background-color": "#38414c", "color": "#fff", "border-top-color": "#000"});

            $(this.children[0]).css({"background-position": _arrposition2[$(this).index()]});
        }


    });

$("#box_banner .leftselect_b .x_flag").on("click",function () {
    $(this.parentNode).css("display","none");
    $("#box_banner .list_a").css({"background-color":"#fff","color":"#34a53c","border-top-color":"#fff"});
    $("#box_banner .list_a .pic").css({"background-position":_arrposition1[0]});

    $("#box_banner .leftselect_a").css("display","block");
    for(var i=1;i<$("#box_banner .left li").length-1;i++){
        $($("#box_banner .left li")[i]).css({"background-color": "#38414c", "color": "#fff", "border-top-color": "#000"});
        $($("#box_banner .left li .pic")[i]).css({"background-position": _arrposition2[i]});

    }

});
}

function Bannerbgmove() {
        this.arr=["url(bgmove/Cii-T1hkwQWIAketAAHu3td4LhsAAGJmQIXp4QAAe7208.jpeg) no-repeat center top","url(bgmove/Cii-T1hmHnmIeg3oAAL21WZyVLYAAGMOgHyk3gAAvbt72.jpeg) no-repeat center top","url(bgmove/Cii-TFhtu1KIQ9yyAAHBWZFYuRQAAGWpAG0P4UAAcFx58.jpeg) no-repeat center top","url(bgmove/Cii-Tlhl6nGIUQwCAAHW8uRVm-8AAGLkwDDsV8AAdcK51.jpeg) no-repeat center top","url(bgmove/Cii-TlhvMcqIS_RwAAL1C0ANqoMAAGZzgBDF4cAAvUj89.jpeg) no-repeat center top","url(bgmove/Cii-TlhvNeuIMvmaAAHlSdqtA5kAAGZ4wGnnNsAAeVh25.jpeg) no-repeat center top"];
        this.timercount=0;

    var _self=this;
    this.address=["www.baidu.com","www.qq.com","www.baidu.com","www.qq.com","www.baidu.com","www.qq.com"];
      this.count=-1;
        this.createEle=function (_value) {
            return document.createElement(_value);
        }
        this.init=function () {

            this.ad=document.getElementById("ad");
            this.sprite1=this.createEle("div");

            this.sprite1.className="leftmove";
            this.ad.appendChild(this.sprite1);
            this.sprite2=this.createEle("div");
            this.sprite2.className="rightmove";
            this.ad.appendChild(this.sprite2);
            this.body=document.getElementById("box_banner");
            this.slipbar=document.getElementById("slipbar");
           // console.log(this.slipbar.children);
             this.timer();
            this.slipmouse(this.slipbar);
            this.dispay();
            this.adhref();
            return this;
        }
        this.adhref=function () {
            _self.ad.href=_self.address[_self.count];
        }
        this.dispay=function () {
            this.ad.onmouseover=function () {
                _self.sprite1.style.display="block";
                _self.sprite2.style.display="block";
                   window.clearTimeout(_self.timercount);
                _self.sprite1.onclick=function (e) {
                    _self.count--;
                    if(_self.count<0){
                        _self.count=_self.arr.length-1;
                    }
                    _self.adhref();
                    _self.body.style.background = _self.arr[_self.count];
                }
                _self.sprite2.onclick=function (e) {
                    _self.count++;
                    if (_self.count>_self.arr.length-1) {
                        _self.count =0;
                    }
                    _self.body.style.background = _self.arr[_self.count];
                    _self.adhref();
                }
            }
            this.ad.onmouseleave=function () {
                _self.sprite1.style.display="none";
                _self.sprite2.style.display="none";
                _self.timercount=window.setTimeout(_self.timer,3000)
            }
        }
        this.timer=function () {
                window.clearTimeout(_self.timercount);
                    _self.count++;
                    if (_self.count > _self.arr.length - 1) {
                       _self.count = 0;
                    }
                    _self.body.style.background = _self.arr[_self.count];
               _self.adhref();
                _self.timercount = window.setTimeout(_self.timer, 3000);
        }
        this.slipmouse=function (_that) {
            for(var i=0;i<_that.children.length;i++){
               (function(x){
                    _that.children[x].onmouseover=function () {
                        _self.body.style.background = _self.arr[x];
                        _self.count=x;
                        _self.adhref();
                        window.clearTimeout(_self.timercount);
                    }
                    _that.children[x].onmouseleave=function () {
                        _self.timercount = window.setTimeout(_self.timer, 3000);
                    }
                })(i);
            }
        }
}
function jumpAnimate() {
    $("#box_banner .right .bottom ul li span").on("mouseenter",function () {
        $(this.children[0]).stop();
        $(this.children[0]).animate({"top":"5px"},300);
    }).on("mouseleave",function () {
        $(this.children[0]).stop();
        $(this.children[0]).animate({"top":"8px"});
    })
}
function adMove() {
    var _arr=["images/nrzx2.jpg","images/island1.jpg","images/Temai2.jpg","images/youlun1.jpg","images/yingshi.jpg","images/zijia0419.jpg","images/sfcf_0407.jpg"]
    for(var i=0;i<$("#box_banner .middle .addown .item").length;i++){
        $("#box_banner .middle .addown .item")[i].innerHTML="<img src=\""+_arr[i]+"\">";
    }
    $("#box_banner .middle .addown .item").on("mouseenter",function () {
        $(this.children[0]).stop();
        $(this.children[0]).animate({"left":"-102px"},500);
    }).on("mouseleave",function () {
        $(this.children[0]).stop();
        $(this.children[0]).animate({"left":"0px"},500);
    })
}
function Createtitle(){
    this.arrdata=[];

    this.init=function (_number,_data,_under) {
            //需要创建几个  创建的内容  创建在哪个下面
        this.content(_data);

        this.body=document.getElementById(_under);
        this.ul=this.createlist("ul");
       var _li=null;
        for(var i=0;i<_number;i++){
           _li=this.createlist("li");
           _li.innerHTML=this.arrdata[i];
            this.ul.appendChild(_li);
        }
        this.body.appendChild(this.ul);
        return this;
    }

    this.createlist=function (_name) {
        return document.createElement(_name);
    }

    this.content=function (_data){
        var _self=this;
        for(var x=0;x<_data.length;x++){
            _self.arrdata.push(_data[x]);
        }
    }
}

Date.prototype.countDown=function(_settime,_name){
    var _timer=0;

    var _setdate=new Date(_settime);

    (function settimer(){
        var _nowdate=new Date();
        var _milli=_setdate.getTime()-_nowdate.getTime();//获取到所定时的时间的毫秒
        var _date=new Date(_milli);
        _name.innerHTML="<span>"+_date.getDate()+"</span>天 <span>"+_date.getHours()+"</span>时 <span>"+_date.getMinutes()+"</span>分";
        if(_milli>0){
            _timer=window.setTimeout(settimer,10);

        }
    })();
};
function createContent() {
    var first=[];
   var arrcontent=[];
   var boxlist=["list","itemtwolist","itemthreelist","itemfourlist","itemfivelist","itemsixlist","itemsevenlist","itemeightlist","itemninelist","itemtenlist","itemelevenlist","itemtwelvelist","itemthirteenlist","itemfourteenlist"];
   var boxpic=["datail","itemtwopic","itemthreepic","itemfourpic","itemfivepic","itemsixpic","itemsevenpic","itemeightpic","itemninepic","itemtenpic","itemelevenpic","itemtwelvepic","itemthirteenpic","itemfourteenpic"];
    var ajax=function(){
        ajaxRequest("post","briefpic.json",true,null,function (data) {
            data=JSON.parse(data);
            for(var k in data){
               arrcontent.push(data[k]);
            }
            for(var key in arrcontent[0]){
               first.push(arrcontent[0][key]);
            }
            briefitem("list",first,"datail");
            for(var z=1;z<arrcontent.length-1;z++){
                briefTwoItem(boxlist[z],arrcontent[z],boxpic[z]);
            }
            lastbriefitem(boxlist[boxlist.length-1],arrcontent[arrcontent.length-1],boxpic[boxpic.length-1]);
        })
    }();
}
var lastbriefitem=function (_under,_jsondata,idname) {
    var _li=document.getElementById(_under).children[0];
    var _datail=document.getElementById(idname);
    var _arr=null;
    var _data=[];
    for(var k in _jsondata){
        _data.push(_jsondata[k]);
    }
    for(var i=0;i<_li.children.length;i++){
        (function(x){
            _li.children[x].onmouseover=function () {
                _arr=_data[x];
                _datail.innerHTML=null;
                for(var g=0;g<this.parentNode.children.length;g++){
                    if(this.parentNode.children[g]===this){
                        this.style.color="#fff";
                        this.style.background="#2e9900";
                    }
                    else{
                        this.parentNode.children[g].style.color="#000";
                        this.parentNode.children[g].style.background="none";

                    }
                }
                for(var z=0;z<_arr.length;z++){
                    _datail.innerHTML+="<a href=\"#\" class=\"fourteen"+(z+1)+"\"><img src=\"briefimg/"+_arr[z][0]+".jpg\"> <div class=\"persondata\"><div class=\"time\">"+_arr[z][1]+"</div><div class=\"name\">"+_arr[z][2]+"</div><em class=\"price\">"+_arr[z][3]+"</em></div></a>"
                }
                _a=_datail.getElementsByTagName("a");
                lastItemAnimate(_a);
            }
        })(i);
    }
    _li.children[0].onmouseover();
}
function lastItemAnimate(_colle){
    //console.log(_colle);
    var _bottom=null;
    $(_colle).on("mouseenter",function(){
        $(this.children[1]).stop();
        _bottom=this.offsetHeight-this.children[1].offsetHeight-this.children[1].offsetTop;
       // console.log(_bottom);
        $(this.children[1]).animate({"bottom":"0px"},200)
    }).on("mouseleave",function(){
        $(this.children[1]).stop();
        $(this.children[1]).animate({"bottom":_bottom},200)
        _bottom=null;
    });
}
var briefTwoItem=function (_under,_jsondata,idname) {
    var _li=document.getElementById(_under).children[0];
    var _datail=document.getElementById(idname);
    var _arr=null;
    var _a=null;
    var _timer=null;
    var _data=[];
    for(var k in _jsondata){
        _data.push(_jsondata[k]);
    }
    for(var i=0;i<_li.children.length;i++){
        (function(x){
            _li.children[x].onmouseover=function () {
                _arr=_data[x];
                _datail.innerHTML=null;
                for(var g=0;g<this.parentNode.children.length;g++){
                    if(this.parentNode.children[g]===this){
                        this.style.color="#d74568";
                    }
                    else{
                        this.parentNode.children[g].style.color="#000";
                    }
                }
                for(var z=0;z<_arr.length;z++){
                    _datail.innerHTML+="<a href=\"#\"><img src=\"briefimg/"+_arr[z][0]+".jpg\"> <div class=\"persondata\"><div class=\"time\">"+_arr[z][1]+"</div><div class=\"name\">"+_arr[z][2]+"</div><em class=\"price\">"+_arr[z][3]+"</em><i>起</i></div></a>"
                }


            }
        })(i);
    }
    _li.children[0].onmouseover();
}


var briefitem=function (_under,_data,idname) {
    var _li=document.getElementById(_under).children[0];
    var _datail=document.getElementById(idname);
    var _arr=null;
    var _a=null;
    var _timer=null;
    for(var i=0;i<_li.children.length;i++){
        (function(x){
            _li.children[x].onmouseover=function () {
                _arr=_data[x];
                _datail.innerHTML=null;
                for(var g=0;g<this.parentNode.children.length;g++){
                    if(this.parentNode.children[g]===this){
                        this.style.color="#22c231";
                        this.style.fontSize="20px";
                        this.style.borderBottom="2px solid #22c231";
                    }
                    else{
                        this.parentNode.children[g].style.color="#000";
                        this.parentNode.children[g].style.fontSize="16px";
                        this.parentNode.children[g].style.borderBottom="none";
                    }
                }
                for(var z=0;z<_arr.length;z++){
                    _datail.innerHTML+="<a href=\"#\"><img src=\"briefimg/"+_arr[z][0]+".jpg\"> <div class=\"persondata\"><div class=\"time\">"+_arr[z][1]+"</div><div class=\"name\">"+_arr[z][2]+"</div><em class=\"price\">"+_arr[z][3]+"</em><i>起</i></div></a>"
                }
                _a=_datail.getElementsByTagName("a");
                // console.log(_datail.getElementsByTagName("a"));
                var _zz=_datail.getElementsByClassName("time");
                if(x==0){
                    for(var mm=0;mm<_arr.length;mm++){
                        _timer=new Date()
                        _timer.countDown(_arr[mm][1],_zz[mm]);
                    }
                }
                for(var m=0;m<_a.length;m++){
                    _a[m].style.left=m*242+"px";
                }
            }
        })(i);
    }
    _li.children[0].onmouseover();
}
function briefItem() {
    var _arr=[["超值特卖","超级自由行","旅游分期","特价机票","特价酒店","特价签证","银行立减"],["出境长线","出境短线","出境自助","海岛/游轮","国内跟团","国内自助","周边自驾"],["精选","三亚","云南","福建","广西","华东/东北","四川/湖南"],["精选","日韩","泰国","海岛","东南亚","越柬南亚","港澳台"],["精选","欧洲","美洲","中东非","澳新","马代","海岛"],["精选","周末游","古镇","当地参团","人文山西","温泉/滑雪","牛人专线"],["日韩","泰国","海岛","欧美澳新","港澳台","国内","新马越柬"],["海岛","周末游","亲子","蜜月","免签","旅拍","爸妈游"],["爆款热销","热销签证","包船专享","畅游欧洲","特惠签证","国内游轮","风情美洲"],["当即特卖","古北水镇","温泉","滑雪","城市观光","亲子乐园","山水"],["北京","三亚","上海","天津","厦门","杭州","港澳"],["精选","亲子","假日胜地"],["东南亚","海岛","日本","韩国","欧洲","美国"],["度假美人记","异国风情","达人视界","敢玩不同","带娃去哪儿"]];
    var _abb=["list","itemtwolist","itemthreelist","itemfourlist","itemfivelist","itemsixlist","itemsevenlist","itemeightlist","itemninelist","itemtenlist","itemelevenlist","itemtwelvelist","itemthirteenlist","itemfourteenlist"];
    for(var i=0;i<_arr.length;i++){
        new Createtitle().init(_arr[i].length,_arr[i],_abb[i]);
    }
}
function footerCompany() {
    var _company=document.getElementById("company");
    var _str="<ul>";
    $.post("footerpic.json",null,function (data) {

      //  console.log(data);
       for(var k in data){
            _str+="<li><div><a href=\""+data[k][0]+"\"><img src=\"footerimg/"+data[k][1]+".jpg\"></a></div><p><a href=\""+data[k][0]+"\">"+data[k][2]+"</a></p></li>"
        }
        _str+="<div class=\"clear\"></div></ul>";
        _company.innerHTML=_str;
        fterCompanyMove(_company);

    });
}
function fterCompanyMove(_arr) {
    var _timer=0;
    var _top=-(_arr.children[0].offsetHeight-_arr.children[0].children[0].offsetHeight*2);
    var _stopflag=0;
    var _count=0;
    var flag=0;
    var _length=0;
    (function timer(){
            window.clearTimeout(_timer);
            if(!flag){
                _count++;
                if(_count>=23){
                    _count=0;
                    _stopflag+=1;
                    if(_stopflag<=_top){
                        flag=1;
                    }
                    _arr.children[0].style.top=_stopflag+"px";
                    _timer=window.setTimeout(timer,2000);
                }else{
                    _stopflag-=5;
                    _arr.children[0].style.top=_stopflag+"px";
                    _timer=window.setTimeout(timer,50);
                }
            }else{
                _stopflag+=10;
                _arr.children[0].style.top=_stopflag+"px";
                if(_stopflag>=0){
                    _stopflag=0;
                    _count=0;
                    flag=0;
                    _timer=window.setTimeout(timer,2000);
                }else{
                    _timer=window.setTimeout(timer,20);
                }
            }
        })();
}
function briefLeftTitle(){
    var _listid=["left_list_third","left_list_fourth","left_list_fifth","left_list_sixth","left_list_seventh","left_list_eighth","left_list_nineth","left_list_tenth","left_list_eleventh","left_list_twelveth","left_list_thirteenth"];
    var _left=null;
    var _arr=[];
    var _match=null;
    var _str="";
    var data={
        "first":[{"name":"热门景点玩法",
                "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]},
                {"name":"热门景点玩法",
                "title":["#|蜈wef岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]
                },"#|Cii-Tlht4aSIeaRKAAAzzdTzPoIAAGXAAMwqRgAADPl86.jpeg"],
        "second":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]}, "#|Cii-TFht4PmIKIaMAABxJULB4tcAAGW_gNAqbgAAHE978.jpeg"],
        "third":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]}, "#|C17.jpeg"],
        "fourth":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]}, "#|Z23.jpg"],
        "fifth":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]}, "#|Cii-TFhmHdOIW0QTAAA6Zn-H7zMAAGMNwPx3u0AADp-69.jpeg"],
        "sixth":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山","#|北海","#|上海迪士尼"]}, "#|ZZ2.jpg"],
        "seventh":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山"]}, "#|Y9.jpg"],
        "eighth":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山"]}, "#|zj_disney.jpg"],
        "nineth":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山"]}, "#|Cii-Tlh4MzWIIC2mAAArCHvRBHYAAGufQK5rQkAACsg93.jpeg"],
        "tenth":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山"]}, "#|M3.png"],
        "eleven":[{"name":"热门景点玩法",
            "title":["#|蜈支洲岛","#|西双版纳","#|鼓浪屿","#|长白山"]}, "#|Cii-TlhHpF6IcpQ8AAAkmh0KQBkAAFQmgM9YZwAACSy87.jpeg"]


    }
    for(var k in data){
       _arr.push(data[k]);
    }
    for(var x=0;x<_arr.length;x++){
        _str="";
        _left=document.getElementById(_listid[x]);
        for(var y=0;y<_arr[x].length-1;y++){
                _str+="<dl class=\"listcoll"+y+"\"><dt>";
            for(var key in _arr[x][y]){
                if("string"===typeof _arr[x][y][key]){
                   _str=_str+_arr[x][y][key]+"</dt>";
                }
                else{

                    for(var z=0;z<_arr[x][y][key].length;z++){
                            _match=_arr[x][y][key][z].split("|");
                        _str+="<dd><a href=\""+_match[0]+"\">"+_match[1]+"</a></dd>"
                    }
                }
            }
            _str+="<div class=\"clear\"></div></dl>";
        }
        _match=_arr[x][_arr[x].length-1].split("|");
        _str+="<div class=\"picsign\"><a href=\""+_match[0]+"\"><img src=\"briefimg/"+_match[1]+"\"></a></div>"
        _left.innerHTML=_str;
    }
}
function bannerSubtitle(){
    var _str="";
    var _bannersubtitle=document.getElementById("banner_subtitle");
    var _arr=[];

    var _match=null;
    var _value=null;
    var _data={
        "first":["#|瓜果亲子游,#|海岛",["#|按天数算","#|名山胜水","#|滑雪"],{
            "maintitle":["#|酒店+门票"],
            "one":["#|按天数分1",["#|一日游","#|二日游","#|三日游","#|三日以上"]],
            "two":["#|按天数分2",["#|一日游","#|二日游","#|三日游","#|三日以上"]],
            "pic":"|#?C17.jpeg|#?Cii-T1fH-n6IKeUVAAWhpHLMEgYAAB8kQMcjn4ABaG8101_w400_h300_c0_t0.jpg"
        }],
        "second":["#|北京周边旅游",["#|按天数","#|名山胜水","#|滑雪"],{
                     "maintitle":["#|酒店+门票"],
                    "one":["#|按天数分3",["#|一日游","#|二日游","#|三日游","#|三日以上"]],
                    "two":["#|按天数分4",["#|一日游","#|二日游","#|三日游","#|三日以上"]],
            "pic":"|#?C17.jpeg|#?Cii-T1fH-n6IKeUVAAWhpHLMEgYAAB8kQMcjn4ABaG8101_w400_h300_c0_t0.jpg"
                }]
    }
    for(var k in _data){
        _arr.push(_data[k]);
    }
    for(var i=0;i<_arr.length;i++){
        _str="";
        _str+="<dl><dt>"
        _value=_arr[i][0].split(",");
        for(var x=0;x<_value.length;x++){
            _match=_value[x].split("|");
          _str+="<a href=\""+_match[0]+"\">"+_match[1]+"</a>";
        }
        _str+="</dt><dd>";

        for(var y=0;y<_arr[i][1].length;y++){
            _match=_arr[i][1][y].split("|");
            _str+="<a href=\""+_match[0]+"\">"+_match[1]+"</a>";
        }
        _str+="</dd><div class='clear'></div></dl>";
        _bannersubtitle.children[i].innerHTML=_str;
        listUnderList(_arr[i][2],i);
    }

}
function listUnderList(_data,_i) {
    var _list = document.getElementById("list_under_list").children[_i];
    var _arr = [];
    var _str = "";
    var _pic=null;
    var _value = null;
    var _match = null;
    var _link=null;
    var _abb = [];
    for (var k in _data) {
        _abb.push(_data[k]);
    }
    _str += "<div class=\"maintitle\">";
    for (var m = 0; m < _abb[0].length; m++) {
        _match = _abb[0][m].split("|");
        _str += "<a href=\"" + _match[0] + "\">" + _match[1] + "</a>";
    }
    _str += "</div>";
    for (var n = 1; n < _abb.length; n++) {
      //  console.log(typeof _abb[n]);
        if("object"=== typeof _abb[n]) {
            _str += "<dl><dt>";
            for (var x = 0; x < _abb[n].length; x++) {
                if (typeof _abb[n][x] === "string") {
                    _value = _abb[n][x].split(",");
                    for (var y = 0; y < _value.length; y++) {
                        _match = _value[y].split("|");
                        _str += "<a href=\"" + _match[0] + "\">" + _match[1] + "</a>";
                    }
                    _str += "</dt>";
                } else {
                    for (var z = 0; z < _abb[n][x].length; z++) {
                        _match = _abb[n][x][z].split("|");
                        _str += "<dd><a href=\"" + _match[0] + "\">" + _match[1] + "</a></dd>";
                    }
                }

            }
            _str += "<div class='clear'></div></dl>";
        }else{
            _str+="<div class=\"rightpic\">";
            _pic=_abb[n].split("|");
            _link=_abb[n].match(/^|(\d+\D+)?$/g);
            console.log(_link);
           // console.log(_pic);
            for(var j=0;j<_pic.length;j++){
               // _str+="<a href=\""++"\"><img src=\"briefimg/"+_pic[j]+"\"></a>";
            }
            _str+="</div>";

        }

    }
    _list.innerHTML=_str;
}

$(function () {
    boxHeadColor();
    boxHeadList();
    boxNavList();
    searchDrop();
    bannerLeftList();
    bannerSubtitle();
   new Bannerbgmove().init();
    jumpAnimate();
    adMove();
   briefItem();
    createContent();
   footerCompany();
   briefLeftTitle();


});