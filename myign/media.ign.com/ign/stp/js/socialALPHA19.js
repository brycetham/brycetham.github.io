//=============================on load
var enviro = ""
var socialVersion = 'v1.0/';

jQuery(document).ready(function() {
		ArtStart();
		ModStart();
		HeaderPrep();
		ArtFollow();
});

//=============================JS for "What We're Playing" module
function ModStart(){
	jQuery("#whatPlayingDD").click(function () {
		if (jQuery("#username").html() == "") {
			window.location.href = "http://"+ enviro +"my.ign.com/login";
			alert('Please log in first');
		} else {
			jQuery("#whatPlayingMenu").show();
		}
	});
	jQuery("#whatPlayingBttn").click(function () {
		jQuery("#whatPlayingMenu").hide(StatusUpdate("whatPlayingDD"));
	});
	jQuery("#whatPlayingDD").keyup(function () {
		GetCount("whatPlayingDD");
		CheckKey("whatPlayingDD");
		OneFourty("CharCount");
	});
	jQuery("#whatPlayingDD").blur(function () {
		if (iCount == 0) {
			if(jQuery().delay){
				//the 'delay' function will only work with jQuery 1.4+
				jQuery("#whatPlayingMenu").delay(500).hide();
			}else {
				jQuery("#whatPlayingMenu").hide();
			}
		}
	});
}

var iCount = overCount = 0;// overCount 0= 1 to 140 characters : 1= over 140 characters
function StatusUpdate(id) {
	if (iCount == 0) {
		alert("You can't submit nothing O_o");
	} else {
		if (overCount == 1) {
			alert("You can submit that many characters, sorry.");
		} else {
			if (Submitter(id)) {
        var nickname = document.getElementById("username").innerHTML;
        var profileUrl = "http://"+ enviro +"people.ign.com/"+ nickname;
        var imgurl = document.getElementById("user-avatar").src;
        var newStatusText= jQuery("#StatusText").val();
        var adate = new Date();
        console.log(newStatusText);
//        if (jQuery("#activityList").length != 0){
//          ign.social.activityItem.create(0, profileUrl, imgurl, nickname, " "+newStatusText,adate);
//        }
				StatusClose();
				Clearing(id);
			}
		}
	}
}

function StripCode(el) {
	el = el.replace(/<span[ .\w\s=":'&?@%\/\.]+>/gim, "");
	el = el.replace(/<\/span>/gim, "");

	el = el.replace(/(&lt;|<)+a[ .\w\s=":'&?@%\/\.]+(&gt;|>)+/gim, "");
	el = el.replace(/(&lt;|<)+\/a(&gt;|>)+/gim, "");

	el = el.replace(/(<br>)|(<br \/>)|(<br\/>)/gim, "");
	el = el.replace(/(&nbsp;)/gim, " ");

//	el = el.replace(/~/gim, "&#126;");
//	el = el.replace(/`/gim, "&#96;");
//	el = el.replace(/!/gim, "&#33;");
//	el = el.replace(/$/gim, "&#36;");
//	el = el.replace(/%/gim, "&#37;");
	return(el);
}

function GetCount(id) {
	var obj = document.getElementById(id);
	var el = "";

  el = StripCode(jQuery("#"+id).val());
	iCount = el.length;

  if ((id == "userStatusUpdate") || (id == "whatPlayingDD")){
    if ((iCount > 0) && (iCount <= 140)) {
      jQuery(".statusBttn").css({"visibility":"visible"});
    } else if ((iCount == 0) || (iCount > 140)){
      jQuery(".statusBttn").css({"visibility":"hidden"});
    }
  }

	var newID = "";

	switch (id) {
		case "userStatusUpdate":
			newID = "statusCountShow";
			break;
		case "whatPlayingDD":
			newID = "CharCount";
			break;
		case "statusField":
			newID = "myStatusCount";
			break;
	}
	jQuery("#"+ newID).text(140 - iCount + " characters left");
}

function OneFourty(id) {
	if (iCount == 140) {
		jQuery("#"+id).css({"font-weight":"bold", "color":"#666"});
		overCount = 0
	} else if (iCount > 140) {
		jQuery("#"+id).css({"font-weight":"bold", "color":"#f00"});
		jQuery("#"+id).text(iCount - 140 + " characters to many");
		overCount = 1;
	} else {
		jQuery("#"+id).css({"font-weight":"normal", "color":"#666"});
		overCount = 0
	}
}

function Submitter(id) {
	var data = "";
	data = jQuery("#"+id).val();
  data = StripCode(data);

	var proxy_frame = document.createElement("IFRAME");

	proxy_frame.id = "proxy_frame";
	proxy_frame.style.display = "none";
  jQuery("body").append( proxy_frame );

	var post_process = proxy_frame.contentWindow.document;
	post_process.open();
		post_process.write('<form method="POST" action="http://'+ enviro +'my.ign.com/status/">');
		post_process.write('<input type="text" name="status" value="'+ data +'" />');
		post_process.write('</form>');
		post_process.write('<scr'+'ipt>window.onload = function(){document.forms[0].submit(); }</scri'+'pt>');
	post_process.close();
	return(true);
}

function Clearing(id) {
	jQuery("#CharCount").text(140 + " characters left");
	if (document.getElementById("whatPlayingDD")){
		jQuery("#whatPlayingDD").val("");
	}
	iCount = 0;
}


//=============================JS for header and obj nav items
function HeaderPrep() {
	var t = setTimeout('HeaderUpdate();', 1 * 1000);
	jQuery("#userStatusUpdate").keyup(function () {
		GetCount("userStatusUpdate");
		CheckKey("userStatusUpdate");
		OneFourty("statusCountShow");
	});
  jQuery("#userStatusUpdate").blur(function () {
    if (iCount == 0){
      StatusClose();
    }
  });
}

jQuery('.statusBttn').mouseover(function(){
  jQuery(this).css({"background-position":"right -45px"});
  jQuery('.statusBttn div').css({"background-position":"left -45px"});
});
jQuery('.statusBttn, .statusBttn div').mouseout(function(){
  jQuery(this).css({"background-position":"right -10px"})
  jQuery('.statusBttn div').css({"background-position":"left -10px"})
});
jQuery('.statusBttn, .statusBttn div').mousedown(function(){
  jQuery(this).css({"background-position":"right -80px"})
  jQuery('.statusBttn div').css({"background-position":"left -80px"})
});

function HeaderUpdate() {
  var login = (document.getElementById("masthead-login").style.display == "block") ? true : false;
	var currentURL = document.location.href;

	if (login){
    document.getElementById("upateStatus").onclick = function() {
      jQuery(this).addClass('statusUpdateActive');
      document.getElementById("StatusText").className = "statusTextActive";
      document.getElementById("statusInput").className = "StatusInputActive";
      document.getElementById("userStatusUpdate").focus();
    };

    var username = getUserName();
    var url = "http://social-"+ enviro +"services.ign.com/"+ socialVersion +"social/rest/people/nickname."+ username +"/@self?jsonp=?";
    var obj = document.getElementById("StatusText");
    var inboxCnt = 0;
    var feedCnt = 0;
    var randNum = 0;
    while(randNum > 3 || randNum <= 0){
      randNum = Math.round(Math.random()*3);
    }
    if (username) {
      var userAvatar = "http://oyster.ignimgs.com/static/social/img/avatars/male"+ randNum +".jpg";
      jQuery.getJSON(url, function(data) {
        if (data.entry[0]) {

          userAvatar = (data.entry[0].thumbnailUrl) ? data.entry[0].thumbnailUrl : "http://oyster.ignimgs.com/static/social/img/avatars/"+ data.entry[0].gender +""+ randNum +".jpg";

          var nowDate = new Date();
          var PostDate = data.entry[0].statusUpdateTime;
          if (PostDate) {
            PostDate = PostDate.substring(0, (PostDate.length-1));//removs 'z' from end of date string

            var aryPDate = new Array();
            aryPDate[0] = PostDate.substring(0, 4);//year
            aryPDate[1] = PostDate.substring(5, 7);//month
            aryPDate[2] = PostDate.substring(8, 10);//day
            aryPDate[3] = PostDate.substring(11, 13);//hour
            aryPDate[4] = PostDate.substring(14, 16);//minutes
            aryPDate[5] = PostDate.substring(17, 19);//seconds

            //re-establishes the returened date as a date object
            PostDate = new Date(aryPDate[0], aryPDate[1]-1, aryPDate[2], aryPDate[3], aryPDate[4], aryPDate[5]);

            var sinceLastPost = ((nowDate.getTime() - Date.parse(PostDate)) / 1000 / 60 / 60  / 24);
            if (sinceLastPost <= 1) {
              var userStatus = data.entry[0].status;
              userStatus = userStatus.replace(/(&lt;|<)+a[ .\w\s=":'&?@%\/\.]+(&gt;|>)+([ .\w\s=":'&?@%\/\.]+)(&lt;|<)+\/a(&gt;|>)+/gim, '$3');
              jQuery("#StatusText").val(userStatus);
              //GetCount("userStatusUpdate");
            }
          }
        }
        document.getElementById("user-avatar").src = userAvatar;
        document.getElementById("username").href = "http://"+ enviro +"people.ign.com/"+ username;
        document.getElementById("lnk-avatar").href = "http://"+ enviro +"people.ign.com/"+ username;
        //document.getElementById("SocialInbox").href = "http://"+ enviro +"my.ign.com/inbox";
        document.getElementById("SocialInbox").style.display = "none";
        document.getElementById("InboxCount").innerHTML = '';//"("+ inboxCnt +")";
        document.getElementById("SocialNewsFeed").href = "http://"+ enviro +"my.ign.com";
        document.getElementById("FeedCount").innerHTML = '';//"("+ feedCnt +")";

        document.getElementById("SocialProfile").href = "http://"+ enviro +"people.ign.com/"+ username;
        document.getElementById("SocialGames").href = "http://"+ enviro +"my.ign.com/games";
        document.getElementById("SocialPeople").href = "http://"+ enviro +"my.ign.com/people";
        document.getElementById("SocialBlog").href = "http://"+ enviro +"my.ign.com/blog";
        document.getElementById("BoardsMessage").href = "http://boards.ign.com/ASP/pm_unread.asp";


        document.getElementById("SocialSettings").href = "http://"+ enviro +"my.ign.com/settings";
        document.getElementById("lnk-logout-alpha").href = "http://"+ enviro +"my.ign.com/logout?r="+ currentURL;
      });
    }
	}	else {
    var loginURL = "http://"+ enviro +"my.ign.com/login?r="+ currentURL;
    var regURL = "http://"+ enviro +"my.ign.com/register?r="+ currentURL;
    jQuery("#lnk-logout-avatar, #lnk-login_alpha, #FB_icon").attr("href",loginURL);
    jQuery("#lnk-reg_alpha").attr("href",regURL);
	}
}

function StatusClose(i) {
	if (i!=0){
		jQuery("#userStatusUpdate").val("");
	}
	GetCount("userStatusUpdate");
	OneFourty("statusCountShow");
	document.getElementById("StatusText").className = "statusText";
	document.getElementById("statusInput").className = "statusInput";
	document.getElementById("upateStatus").className = "statusUpdate";
}

//=============================JS for article interrupt
function ArtStart(){
  try{
    if (FA_author) {
      var userURL = "http://social-"+ enviro +"services.ign.com/"+ socialVersion +"social/rest/people/nickname."+ FA_author +"/@self?jsonp=?";

      var randNum = 0;
      while(randNum > 3 || randNum <= 0){
        randNum = Math.round(Math.random()*3);
      }
      var FA_avatar = "http://oyster.ignimgs.com/static/social/img/avatars/male"+ randNum +".jpg"
      var FA_url = "<span>"+ FA_author +"</span>";
      jQuery.getJSON(userURL, function(data){
        var randNum = 0;
        while(randNum > 3 || randNum <= 0){
          randNum = Math.round(Math.random()*3);
        }
        FA_avatar = (data.entry[0].thumbnailUrl) ? data.entry[0].thumbnailUrl : "http://oyster.ignimgs.com/static/social/img/avatars/"+ data.entry[0].gender +""+ randNum +".jpg";
        FA_url = (data.entry[0].profileUrl) ? "<a href='"+ data.entry[0].profileUrl +"'>"+ FA_author +"</a>" : "<span>"+ FA_author +"</span>";
        FA_followCount = (data.entry[0].followerCount)? "<span>"+ data.entry[0].followerCount +"</span> followers" : "<span>0</span> followers" ;

        document.getElementById("artAuthorFollowers").innerHTML = FA_followCount;
        document.getElementById("AA_Holder").innerHTML = '<img src="'+ FA_avatar +'" alt="" class="AuthorAvatar" />';
        document.getElementById("artAuthorName").innerHTML = FA_url;
        //document.getElementById("artAuthorTitle").innerHTML = FA_title;
      });

      var aryIDs = document.getElementById("artIDs").innerHTML.split(",");
      if (document.getElementById("artIDs").innerHTML != "") {
        for (i=0; i<aryIDs.length; i++){
          var aryArtFed = aryIDs[i].split("|");
          var authorObj = document.getElementById("artID-"+ aryArtFed[0]);
          var authorName = authorObj.innerHTML.substring(3);
          if (authorObj != null) {
            var urlUser = "http://social-"+ enviro +"services.ign.com:80/"+ socialVersion +"social/rest/people/fedreg."+aryArtFed[1]+"/@self?jsonp=?";
            AuthorFiller(authorObj, authorName, urlUser, aryArtFed[0]);
          }
        }
      }
    }
  } catch (err) {}
}

function AuthorFiller(authorObj, authorName, urlUser, artID) {
	jQuery.getJSON(urlUser, function(data) {
		if (data.entry[0]) {
			var sURL = data.entry[0].profileUrl;
			var autherObjID = authorName.replace(/ /gi, "_").toLowerCase() +"_"+ artID;
			authorObj.innerHTML = "By <a hr"+"ef=\""+ sURL.toLowerCase() +"\">"+ authorName +"</"+"a>"+ " | <span id=\""+ autherObjID +"\">0</span> followers";
			document.getElementById(autherObjID).innerHTML = data.entry[0].followerCount;
		} else {
			authorObj.innerHTML = 'By <span>'+ authorName +'</span>';
		}
	});
}


//=============================JS for article follow button
function ArtFollow() {
	try {
		if (authorId) {
      jQuery("#myIgnFollowPersonfedreg."+authorId).hide();
			var userURL = "http://social-"+ enviro +"services.ign.com/"+ socialVersion +"social/rest/people/fedreg."+ authorId +"/@self?jsonp=?";
			var userProfileURL = "";

      jQuery.getJSON(userURL, function(nodeData) {
        userProfileURL = nodeData.entry[0].profileUrl;
        userProfileID = nodeData.entry[0].id;
        if (nodeData.entry[0].thumbnailUrl) {
          var avatarURL = "http://"+ enviro +"my.ign.com/user/icon/id/" + userProfileID + "?include_style=0&jsonp=?";
          jQuery.getJSON(avatarURL, function(data) {
            jQuery("#AuthorAvatar, #AutherAvatar").html(data.icon+"<div class=\"clear\"></div>").css("width", "100px");
          });
        }
        jQuery(".byline a").attr('href',userProfileURL);
        jQuery(".byline a").css({'fontWeight':"bold", "color":"#003399"});
			});
		}
	} catch (err) {}
}



//=============================JS for extra header stuff
function CheckKey(id) {
	jQuery('#'+ id).bind('keypress', function(e) {
		if(e.keyCode==13){
      event.preventDefault();
    }
	});
}
