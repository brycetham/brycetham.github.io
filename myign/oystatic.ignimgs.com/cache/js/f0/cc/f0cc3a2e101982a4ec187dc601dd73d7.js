/* 3:01:39 14/12/2017 [http://oystatic.ignimgs.com/src/core/js/social/loggedout/addtomyign.js]*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");jQuery(".statusBttnContainer .statusBttn").live("click",function(){_gaq.push(["_trackEvent","Post","Status","from header"])});
ign.social.addtomyign={persistentKey:"IGNFollowValues",IGNpersistentValue:"",IGNpersistentValueArray:[],userState:"unknown",getCookie:function(a){a+="=";for(var b=a.length,c=document.cookie.length,d=0;d<c;){var e=d+b;if(document.cookie.substring(d,e)==a)return ign.social.addtomyign.getCookieVal(e);d=document.cookie.indexOf(" ",d)+1;if(0==d)break}return null},getCookieVal:function(a){var b=document.cookie.indexOf(";",a);-1==b&&(b=document.cookie.length);return unescape(document.cookie.substring(a,
b))},expires:18144E5,persistentLoad:function(a){ign.social.generic.error("loading values from cookie: "+ign.social.addtomyign.getCookie(a));return ign.social.addtomyign.getCookie(a)},persistentSave:function(a,b){today=new Date;var c=new Date(today.getTime()+ign.social.addtomyign.expires);ign.social.generic.error("let us add a new value to "+a+" which is "+b);document.cookie=a+"="+escape(b)+"; expires="+c.toGMTString()+"; path=/; domain=ign.com;"},persistentRemove:function(a){ign.social.generic.error("removing cookie: "+
a);if(ign.social.addtomyign.getCookie(a)){today=new Date;var b=new Date(today.getTime()-ign.social.addtomyign.expires);ign.social.generic.error();document.cookie=a+"=; expires="+b.toGMTString()+"; path=/; domain=ign.com;"}},buttonHTML:'<div class="addToIGNContainer"><div class="addToIGN"></div><div class="addToIGNControls"><ul></ul></div></div>',currentButtonState:"unknown",getCookieData:function(a){var b=a.length,c=document.cookie;if(c){var d=document.cookie.length;if(0<d&&(a=c.indexOf(a+"="),-1<
a)){var e=c.indexOf(";",a);return unescape(c.substring(a+b+1,-1==e?d:e))}}return""},myIgnAlphaAccess:function(){return 1==ign.social.addtomyign.getCookieData("MyIGNAlpha")?!0:!1},getUsernameFromIgnLogin:function(){var a=void 0;if(1<=jQuery("#userTools .tools").length||1<=jQuery("#ignHeader .userInfo").length){var b=1<=jQuery("#ignHeader .userInfo").length?jQuery("#ignHeader .userInfo").attr("js-data"):jQuery("#userTools .tools").attr("js-data");""!==b&&(b=JSON.parse(b),a=b.nickname)}return a},post_method:function(a,
b){jQuery("#proxy_frame");var c=document.createElement("IFRAME");c.id="proxy_frame";c.style.display="none";jQuery("body").append(c);c=c.contentWindow.document;c.open();c.write('<form method="POST" action="'+a+'">');c.write("<input type='text' name='data' value='");c.write(b.data);c.write("' />");c.write("</form>");c.write("<script>window.onload = function(){document.forms[0].submit(); }\x3c/script>");c.close()},init:function(){ignNickName=ign.social.addtomyign.getUsernameFromIgnLogin();"undefined"===
typeof ignNickName&&(ignNickName=window.currentUserName);void 0!==ignNickName&&(ign.social.addtomyign.userState="known");null==ign.social.addtomyign.persistentLoad(ign.social.addtomyign.persistentKey)?(ign.social.generic.error("key not set, do not create array"),ign.social.addtomyign.IGNpersistentValue=""):(ign.social.generic.error("from cookie: "+ign.social.addtomyign.persistentLoad(ign.social.addtomyign.persistentKey).toString()),ign.social.addtomyign.IGNpersistentValueArray=ign.social.addtomyign.persistentLoad(ign.social.addtomyign.persistentKey).toString().split(","));
mediaItemObj=function(){};mediaItemObj.prototype.id=0;mediaItemObj.prototype.showInNewsFeed="true";if(void 0!==ignNickName&&-1<document.domain.toString().indexOf("my.ign.com")){ign.social.generic.error("you are logged in now, logged out follow array="+ign.social.addtomyign.IGNpersistentValueArray.length);for(i=0;i<ign.social.addtomyign.IGNpersistentValueArray.length;i++)mediaItem=new mediaItemObj,ign.social.generic.error("setup new insertion object"),ign.social.generic.error("first item is: "+ign.social.addtomyign.IGNpersistentValueArray[i]),
-1<ign.social.addtomyign.IGNpersistentValueArray[i].toString().indexOf("Person")&&(mediaItem.id=ign.social.addtomyign.IGNpersistentValueArray[i].toString().replace(/Person/g,""),mediaItem.preferences=["show_in_newsfeed"],dataString=JSON.stringify(mediaItem),jQuery.post("/proxy?method=POST&dest="+endpointBase+"people/nickname."+ignNickName+"/@friends",{data:dataString})),-1<ign.social.addtomyign.IGNpersistentValueArray[i].toString().indexOf("Game")&&(mediaItem.id=ign.social.addtomyign.IGNpersistentValueArray[i].toString().replace(/Game/g,
""),mediaItem.showInNewsFeed="true",dataString=JSON.stringify(mediaItem),jQuery.post("/proxy?method=POST&dest="+endpointBase+"mediaItems/nickname."+ignNickName+"/@self/@collection",{data:dataString}));ign.social.generic.error("clearing: "+ign.social.addtomyign.persistentKey);ign.social.addtomyign.persistentRemove(ign.social.addtomyign.persistentKey)}jQuery("div.myIgnFollowInstance").html(ign.social.addtomyign.buttonHTML);targetElementCount=jQuery("div.myIgnFollowInstance").size();gameIdsArray=[];
personIdsArray=[];targetCounter=0;ign.social.generic.error("count: "+targetElementCount);jQuery("div.myIgnFollowInstance").each(function(a){ign.social.addtomyign.currentButtonState="undefined";"undefined"!==jQuery(this).attr("state")&&(ign.social.addtomyign.currentButtonState=jQuery(this).attr("state"));if("unknown"==ign.social.addtomyign.userState){-1<jQuery(this).attr("id").indexOf("Person")&&(newPersistentValue="person"+jQuery(this).attr("id").replace(/myIgnFollowPerson/g,""));-1<jQuery(this).attr("id").indexOf("myIgnFollowGame")&&
(newPersistentValue="game"+jQuery(this).attr("id").replace(/myIgnFollowGame/g,""));if(""!=ign.social.addtomyign.IGNpersistentValue)for(i=0;i<ign.social.addtomyign.IGNpersistentValueArray.length;i++)ign.social.addtomyign.IGNpersistentValueArray[i]==newPersistentValue&&(ign.social.generic.error("newPersistentValue: "+newPersistentValue),ign.social.generic.error("ign.social.addtomyign.IGNpersistentValueArray i: "+ign.social.addtomyign.IGNpersistentValueArray[i]),ign.social.addtomyign.currentButtonState=
"known",ign.social.generic.error("found a friend when logged out"));"known"==ign.social.addtomyign.currentButtonState?(jQuery(this).children().children().filter(".addToIGN").css("background","url(http://media.ignimgs.com/media/ign/stp/img/add-to-my-ign_button/following_btn.png) no-repeat"),jQuery(this).children().children().filter(".addToIGN").css("width","125px")):(jQuery(this).children().children().filter(".addToIGN").css("background","url(http://media.ignimgs.com/media/ign/stp/img/add-to-my-ign_button/follow_btn.png) no-repeat"),
jQuery(this).children().children().filter(".addToIGN").css("width","88px"));jQuery(this).attr("state",ign.social.addtomyign.currentButtonState)}else void 0===ign.social.addtomyign.currentButtonState?(-1<jQuery(this).attr("id").indexOf("myIgnFollowPerson")&&personIdsArray.push(jQuery(this).attr("id").replace(/myIgnFollowPerson/g,"")),-1<jQuery(this).attr("id").indexOf("myIgnFollowGame")&&gameIdsArray.push(jQuery(this).attr("id").replace(/myIgnFollowGame/g,"").toString())):"known"==ign.social.addtomyign.currentButtonState?
(jQuery(this).children().children().filter(".addToIGN").css("background","url(http://media.ignimgs.com/media/ign/stp/img/add-to-my-ign_button/following_btn.png) no-repeat"),jQuery(this).children().children().filter(".addToIGN").css("width","125px"),jQuery(this).attr("state","known")):(jQuery(this).children().children().filter(".addToIGN").css("background","url(http://media.ignimgs.com/media/ign/stp/img/add-to-my-ign_button/follow_btn.png) no-repeat"),jQuery(this).children().children().filter(".addToIGN").css("width",
"88px"),jQuery(this).attr("state","unknown"));targetCounter++;targetCounter==targetElementCount&&(0<personIdsArray.length&&""!=personIdsArray[0]&&(ign.social.generic.error(endpointBase+"people/nickname."+ignNickName+"/@all/"+personIdsArray.toString()+"?jsonp=?"),jQuery.getJSON(endpointBase+"people/nickname."+ignNickName+"/@all/"+personIdsArray.toString()+"?jsonp=?",relationshipWrapper("people"))),0<gameIdsArray.length&&""!=gameIdsArray[0]&&(ign.social.generic.error(endpointBase+"mediaItems/nickname."+
ignNickName+"/@all/@all/"+gameIdsArray.toString()+"?jsonp=?"),jQuery.getJSON(endpointBase+"mediaItems/nickname."+ignNickName+"/@all/@all/"+gameIdsArray.toString()+"?jsonp=?",relationshipWrapper("games"))));jQuery(".myIGNCloseX").live("click",function(){jQuery(".followUpsellOverlay").css("display","none")});jQuery(this).bind("click",function(a){mediaItem=new mediaItemObj;-1<jQuery(this).attr("id").indexOf("myIgnFollowGame")&&(mediaItem.id=this.id.replace(/myIgnFollowGame/g,""),mediaItem.showInNewsFeed=
"true");-1<jQuery(this).attr("id").indexOf("Person")&&(mediaItem.id=this.id.replace(/myIgnFollowPerson/g,""),mediaItem.preferences=["show_in_newsfeed"]);a.preventDefault();ign.social.generic.error("state: "+jQuery(this).attr("state"));a="";"unknown"==jQuery(this).attr("state")||void 0==jQuery(this).attr("state")?"unknown"==ign.social.addtomyign.userState?(jQuery(this).attr("id").indexOf("Person")&&(thisPersistentValue="Person"+jQuery(this).attr("id").replace(/myIgnFollowPerson/g,""),a="person"),-1<
jQuery(this).attr("id").indexOf("myIgnFollowGame")&&(thisPersistentValue="Game"+jQuery(this).attr("id").replace(/myIgnFollowGame/g,""),a="game"),htmlChunk="<style type='text/css'>.followUpsellOverlay {padding:0px;position:absolute;top:0;left:0;width:303px;background-color: #FFFFFF;border-right: 1px solid #D32028;border-left: 1px solid #D32028;}",htmlChunk+=".myIGNCloseX { height: 26px;left: 292px;position: absolute;top: -12px;width: 23px;background:url('http://oystatic.ignimgs.com/src/social/img/icons_sprite.png') no-repeat scroll 0 -4635px transparent;}",
htmlChunk+=".myIgnGetStarted {background:url('http://oystatic.ignimgs.com/src/social/img/follow-btn/Get-started-btn.png') no-repeat scroll 0 0 transparent;width:150px;height:40px;overflow:hidden;display:inline;margin: 0 12px 12px 8px;float:left;}",htmlChunk+=".myIgnGetStarted:hover {background:url('http://oystatic.ignimgs.com/src/social/img/follow-btn/Get-started-btn.png') no-repeat scroll 0 -45px transparent;}",htmlChunk+=".addToIGNContainer .followUpsellOverlay .myIgnSignInText {margin: 12px 0 0;float:left;font-size:14px;} .upsellGraphic {margin:10px 0 10px 8px;}",
htmlChunk+=".bottomRedBarOvrly {background-color:#D32028;height:4px;clear:both;}.followOvrlyInside {padding:4px;}.greyMeOvrly{display:block;float:right;width:230px;height:4px;background-color:#cccccc;}</style>",htmlChunk+="<script type='text/javascript'>jQuery(\".myIgnGetStarted\").live('click',function() {jQuery(\".myIgnGetStarted\").css('background','url(http://oystatic.ignimgs.com/src/social/img/follow-btn/Get-started-btn.png) no-repeat scroll 0 -90px transparent'); window.location = 'http://my.ign.com/register?utm_source=followButton&utm_medium=button&utm_content=loggedOutState&utm_campaign=socialFollowButton&r="+
window.location.href+"'; }); jQuery(\".myIgnSignInText\").live('click',function() {window.location = 'http://my.ign.com/login?utm_source=followButton&utm_medium=button&utm_content=loggedOutState&utm_campaign=socialFollowButton&r="+window.location.href+"'; });\x3c/script>",htmlChunk+='<div class="followUpsellOverlay"><div class="myIGNCloseX"></div><div class="bottomRedBarOvrly"><span class="greyMeOvrly"></span></div>',htmlChunk+='<img src="http://oystatic.ignimgs.com/src/social/img/follow-btn/my-ign-editors.png" border="0" />',
htmlChunk="person"==a?htmlChunk+'<img class="upsellGraphic" src="http://oystatic.ignimgs.com/src/social/img/follow-btn/value-props-people.jpg" border="0" />':htmlChunk+'<img class="upsellGraphic" src="http://oystatic.ignimgs.com/src/social/img/follow-btn/value-prop-games.jpg" border="0" />',htmlChunk+='<div class="myIgnGetStarted"></div><span class="myIgnSignInText">or <a href="http://my.ign.com/login?utm_source=followButton&utm_medium=button&utm_content=loggedOutState&utm_campaign=socialFollowButton&r='+
window.location.href+'">Sign in</a></span>',htmlChunk+='<div class="bottomRedBarOvrly"></div></div>',jQuery(this).children().filter(".addToIGNContainer").append(htmlChunk),jQuery(this).children().filter(".addToIGNContainer").css("position","relative")):(-1<jQuery(this).attr("id").indexOf("Person")&&(myPostArray=Array(mediaItem),dataString=JSON.stringify(myPostArray),ign.social.addtomyign.post_method(proxyBase+"proxy?method=POST&dest="+endpointBase+"people/nickname."+ignNickName+"/@friends",{data:dataString}),
this.state="known"),-1<jQuery(this).attr("id").indexOf("myIgnFollowGame")&&(dataString=JSON.stringify(mediaItem),ign.social.generic.error(dataString),ign.social.generic.error("posting cross domain: "+proxyBase+"proxy?method=POST&dest="+endpointBase+"mediaItems/nickname."+ignNickName+"/@self/@collection"),ign.social.addtomyign.post_method(proxyBase+"proxy?method=POST&dest="+endpointBase+"mediaItems/nickname."+ignNickName+"/@self/@collection",{data:dataString}),this.state="known"),jQuery(this).children().children().filter(".addToIGN").css("background",
"url(http://media.ignimgs.com/media/ign/stp/img/add-to-my-ign_button/following_btn.png) no-repeat"),jQuery(this).children().children().filter(".addToIGN").css("width","125px"),jQuery(this).children().children().filter(".addToIGNControls").children().children().remove(),htmlChunk=-1<jQuery(this).attr("id").indexOf("myIgnFollowGame")?'<div class="manageStuff"><a href="'+proxyBase+'games">Manage My Games</a></div>':'<div class="manageStuff"><a href="'+proxyBase+'people">Manage My People</a></div>',htmlChunk+=
'<div class="removeFromIGN">Remove</div>',jQuery(this).children().children().filter(".addToIGNControls").children().append(htmlChunk),jQuery(".removeFromIGN").bind("click.ignEvents",ign.social.addtomyign.removeFromIGN),jQuery(".myIgnFollowWishlist").bind("click.ignEvents",ign.social.addtomyign.followWishlist),jQuery(".myIgnFollowCollection").bind("click.ignEvents",ign.social.addtomyign.followCollection),jQuery(".manageStuff").bind("click.ignEvents",ign.social.addtomyign.manageGames),jQuery(this).attr("state",
"known"),jQuery(this).children().children().filter(".addToIGNControls").css("display","block")):"known"==jQuery(this).attr("state")&&(0==jQuery(this).children().children().filter(".addToIGNControls").children().children().size()&&(htmlChunk=-1<jQuery(this).attr("id").indexOf("myIgnFollowGame")?'<div class="manageStuff"><a href="'+proxyBase+'games">Manage My Games</a></div>':'<div class="manageStuff"><a href="'+proxyBase+'people">Manage My People</a></div>',htmlChunk+='<div class="removeFromIGN">Remove</div>',
jQuery(this).children().children().filter(".addToIGNControls").children().append(htmlChunk),jQuery(".removeFromIGN").bind("click.ignEvents",ign.social.addtomyign.removeFromIGN),jQuery(".myIgnFollowWishlist").bind("click.ignEvents",ign.social.addtomyign.followWishlist),ign.social.generic.error("just bound wishlist click"),jQuery(".myIgnFollowCollection").bind("click.ignEvents",ign.social.addtomyign.followCollection),jQuery(".manageStuff").bind("click.ignEvents",ign.social.addtomyign.manageGames)),
jQuery(this).children().children().filter(".addToIGNControls").css("display","block"));jQuery.support.hrefNormalized||ign.social.addtomyign.resetZindex(jQuery(this).children().children().filter(".addToIGNControls"));jQuery(this).children().filter(".addToIGNContainer").unbind("mouseenter mouseleave");"known"==jQuery(this).attr("state")&&jQuery(this).children().filter(".addToIGNContainer").hover(function(){},function(){jQuery(this).find(".addToIGNControls").is(":visible")&&(jQuery(this).find(".addToIGNControls").animate({height:"toggle"},
"slow"),ign.social.addtomyign.revertZindex(jQuery(this).find(".addToIGNControls")))})})})},followWishlist:function(a){a.preventDefault();a.stopPropagation();ign.social.generic.error("followWishlist called");targetId=jQuery(this).parent().parent().parent().parent().parent().attr("id");jQuery("#"+targetId+" div.myIgnFollowWishlist").addClass("myIgnFollowRadioCheck");jQuery("#"+targetId+" div.myIgnFollowCollection").removeClass("myIgnFollowRadioCheck");mediaItem=new mediaItemObj;mediaItem.id=targetId.replace(/myIgnFollowGame/g,
"");ign.social.generic.error("the id is "+mediaItem.id);mediaItem.showInNewsFeed="true";dataString=JSON.stringify(mediaItem);ign.social.addtomyign.post_method(proxyBase+"proxy?method=POST&dest="+endpointBase+"mediaItems/nickname."+ignNickName+"/@self/@wishlist",{data:dataString})},followCollection:function(a){a.preventDefault();a.stopPropagation();targetId=jQuery(this).parent().parent().parent().parent().parent().attr("id");jQuery("#"+targetId+" .myIgnFollowWishlist").removeClass("myIgnFollowRadioCheck");
jQuery("#"+targetId+" .myIgnFollowCollection").addClass("myIgnFollowRadioCheck");mediaItem=new mediaItemObj;mediaItem.id=targetId.replace(/myIgnFollowGame/g,"");mediaItem.showInNewsFeed="true";dataString=JSON.stringify(mediaItem);ign.social.addtomyign.post_method(proxyBase+"proxy?method=POST&dest="+endpointBase+"mediaItems/nickname."+ignNickName+"/@self/@wishlist",{data:dataString})},manageGames:function(a){a.preventDefault();a.stopPropagation();document.location=a.target},removeFromIGN:function(a){a.preventDefault();
a.stopPropagation();targetRemoveId=jQuery(this).parent().parent().parent().parent().attr("id");-1<targetRemoveId.indexOf("myIgnFollowGame")&&(targetRemoveId=targetRemoveId.replace(/myIgnFollowGame/g,""));-1<targetRemoveId.indexOf("Person")&&(targetRemoveId=targetRemoveId.replace(/myIgnFollowPerson/g,""));ign.social.generic.error("targetRemoveId="+targetRemoveId);targetType=-1<jQuery(this).parent().parent().parent().parent().attr("id").indexOf("Person")?"person":"game";ign.social.generic.error("targetType="+
targetType);if("unknown"==ign.social.addtomyign.userState){"person"==targetType&&(newPersistentValue="person"+jQuery(this).attr("id"));"game"==targetType&&(newPersistentValue="game"+jQuery(this).attr("id"));ign.social.addtomyign.persistentLoad(ign.social.addtomyign.persistentKey);void 0==ign.social.addtomyign.IGNpersistentValue?(ign.social.addtomyign.IGNpersistentValue="",ign.social.addtomyign.IGNpersistentValueArray=[]):(ign.social.addtomyign.IGNpersistentValueArray=[],ign.social.addtomyign.IGNpersistentValueArray=
ign.social.addtomyign.IGNpersistentValue.split(","));for(i=0;i<ign.social.addtomyign.IGNpersistentValueArray.length;i++)ign.social.addtomyign.IGNpersistentValueArray[i]==thisPersistentValue&&ign.social.addtomyign.IGNpersistentValueArray.splice(i,1);ign.social.addtomyign.IGNpersistentValue=ign.social.addtomyign.IGNpersistentValueArray.toString();ign.social.addtomyign.persistentSave(ign.social.addtomyign.persistentKey,ign.social.addtomyign.IGNpersistentValue);ign.social.addtomyign.persistentLoad(ign.social.addtomyign.persistentKey)}else ign.social.generic.error("we are logged in"),
"person"==targetType&&(justTargetRemoveId=targetRemoveId.toString().replace("myIgnFollowPerson",""),ign.social.addtomyign.post_method(proxyBase+"proxy?method=DELETE&dest="+endpointBase+"people/nickname."+ignNickName+"/@friends/"+justTargetRemoveId,"")),"game"==targetType&&(justTargetRemoveId=targetRemoveId.toString().replace("myIgnFollowGame",""),ign.social.addtomyign.post_method(proxyBase+"proxy?method=DELETE&dest="+endpointBase+"mediaItems/nickname."+ignNickName+"/@self/"+justTargetRemoveId,""));
jQuery(this).parent().parent().parent().children().filter(".addToIGN").css("background","url(http://media.ignimgs.com/media/ign/stp/img/add-to-my-ign_button/follow_btn.png) no-repeat");jQuery(this).parent().parent().parent().children().filter(".addToIGN").css("width","88px");jQuery(this).parent().parent().parent().parent().attr("state","unknown");jQuery(this).parent().parent().css("display","none");jQuery(this+":parent:parent:parent:parent:parent > .addToIGNContainer").unbind("mouseenter mouseleave")},
resetZindex:function(a){a=a.parents();for(var b=0;b<a.length;b++)pos=jQuery(a[b]).css("position"),"relative"!=pos&&"absolute"!=pos&&"fixed"!=pos||jQuery(a[b]).addClass("on-top")},revertZindex:function(a){a=a.parents();for(var b=0;b<a.length;b++)pos=jQuery(a[b]).css("position"),"relative"!=pos&&"absolute"!=pos&&"fixed"!=pos||jQuery(a[b]).removeClass("on-top")}};ign.social.addtomyign.init();
