//WW
function __ZDConsent(a){var d=a.zdconsent?a.zdconsent.gdprApplies:!1,t=a._ZDAKGEO&&a._ZDAKGEO.cc?a._ZDAKGEO.cc:null;a.zdconsent&&a.zdconsent.geoCC&&(t=a.zdconsent.geoCC);var l=a.zdconsent?a.zdconsent.consentGiven:!1,e=l||!d?!0:!1,f={comscore:e?1:0,ga:e,googleads:e},y=a&&a.zdconsent&&a.zdconsent.cmd?a.zdconsent.cmd:[],u=0,z=0,A=0,M=a.location.search&&-1!=a.location.search.indexOf("debug")?!0:!1,v=a.frameElement||a.parent!=a?!0:!1,h=function(b,a){if(M)try{console.log("[ZDConsent] "+b),a&&console.log(a)}catch(c){console.log(c)}},
B=function(b){return(b=document.cookie.match("(^|;)\\s*"+b+"\\s*=\\s*([^;]+)"))?b.pop():""},p=function(){var b=B("euconsent");return b?b:e?"BOOd08iOOd08iAKABBENAh-AAAAVl7_______9____7_9uz_Gv_r_ff_3nW0739P1A_r_Oz_qG_-xzVo4_FpQAQ":"BOOd21mOOd21mAKABDENAhAAAAAVmAAA"},C=function(){return{consentData:p(),gdprApplies:d,hasGlobalConsent:null}},E=function(b,a,c){if("getConsentString"==b)c(p(),!0);else if("getConsentData"==b)c(C(),!0);else if("ping"==b)c({gdprAppliesGlobally:!1,cmpLoaded:!0},!0);else if("getVendorConsents"==
b){var g="5 31 44 47 54 64 65 83 87 92 96 99 103 104 106 107 113 115 116 117 119 121 123 125 126 134 135 137 139 141 142 143 146 148 150 152 155 156 160 161 162 165 166 167 169 170 171 172 174 176 177 178 179 181 182 184 185 186 187 189 191 192 193 196 199 201 202 203 204 206 207 208 209 211 212 213 214 215 216 218 219 220 221 222 223 228 230 231 233 236 237 238 239 242 243 247 248 249 250 251 252 253 255 257 259 260 261 262 263 264 265 266 267 268 269 270 271 272 275 281 283 286 287 288 292 293 296 298 300 301 303 305 306 307 308 310 311 312 313 320 322 324 327 329 330 332 334 335 336 337 338 339 340 341 342 343 344".split(" ");
b={};a={};for(var k=1;5>=k;k++)b[k+""]=e?!0:!1;for(k=6;24>=k;k++)b[k+""]=!1;for(k=1;345>=k;k++)a[k+""]=e?!0:!1;for(k=0;k<g.length;k++)a[g[k]]=!1;g=(new Date).toISOString();c({metadata:"BOOd08iOOd08iAKABBENAhA",gdprApplies:d,hasGlobalScope:!1,cookieVersion:1,created:g,lastUpdated:g,cmpId:1,cmpVersion:1,consentLanguage:"EN",vendorListVersion:33,maxVendorId:345,purposeConsents:b,vendorConsents:a},!0)}else c(null,!1)},F=function(){h("Setting up ZDConsent CMP");if(a.__cmp&&a.__cmp.a&&a.__cmp.a.length)for(var b=
0;b<a.__cmp.a.length;b++){var g=a.__cmp.a.length[b];E(g[0],g[1],g[2])}a.__cmp=E},G=function(){var b=a.zdconsent?a.zdconsent.cmd:y;if(!b.processed){if("undefined"!==typeof b.length&&"undefined"===typeof b.processed){h("Processing ZDConsent queue: "+b.length);for(var g=0;g<b.length;g++){var c=b[g];if(!c||"boolean"===typeof c)return;try{"[object Function]"==={}.toString.call(c)?c(a):m(c)}catch(D){h(" queue error: "+D,c)}}}a.zdconsent=a.zdconsent||{};a.zdconsent.cmd={processed:!0,push:function(b){if(b&&
"boolean"!==typeof b)try{"[object Function]"==={}.toString.call(b)?b(a):m(b)}catch(k){h("queue error: "+k,b)}}};return a.zdconsent.cmd}},m=function(b,g,c,d,k){d||(d=a);d=d.document;var h=d.getElementsByTagName("head")[0]||d.documentElement,e=!1,f=d.createElement("script");f.async=k?!1:!0;g&&(f.id=g);if(c){var l=function(){f.onload=f.onreadystatechange=null;try{c&&c()}catch(O){}};f.onreadystatechange=function(){e||"loaded"!=this.readyState&&"complete"!=this.readyState||(e=!0,l())};f.onload=l}if("string"===
typeof b)f.src=b;else for(var m in b)f.setAttribute(m,b[m]);h.insertBefore(f,h.firstChild)},H=function(){l=!0;a.zdconsent.consentGiven=!0;for(var b in f)f[b]=!0,"comscore"==b&&(f[b]="1");a.zdconsent.optins=f;e=!0;q();r();return!0},w=function(){q();r();d||l||(a.dataLayer=a.dataLayer||[],a.dataLayer.push({event:"evidonConsentGiven"}));d||G()},r=function(){a.googletag=a.googletag||{};a.googletag.cmd=a.googletag.cmd||[];a.pbjs=a.pbjs||{};a.pbjs.que=a.pbjs.que||[];d?(a.pbjs.que.push(function(){pbjs.setConfig&&
pbjs.getConfig?("undefined"===typeof a.__cmp&&F(),pbjs.getConfig("consentManagement")||(h("Configuring PBJS Consent Module"),pbjs.setConfig({consentManagement:{cmpApi:"iab",timeout:1E3,allowAuctionWithoutConsent:!0}}))):h("Unsupported Prebid version - please upgrade to version 1.12+")}),f.googleads?(a.googletag.cmd.push(function(){a.googletag.pubads().setRequestNonPersonalizedAds(0);a.googletag.pubads().setTargeting("gdpr","1");h("Configuring GPT: personalized ads")}),(adsbygoogle=a.adsbygoogle||
[]).requestNonPersonalizedAds=0):(a.googletag.cmd.push(function(){a.googletag.pubads().setRequestNonPersonalizedAds(1);a.googletag.pubads().setTargeting("gdpr","0");h("Configuring GPT: non-personalized ads")}),(adsbygoogle=a.adsbygoogle||[]).requestNonPersonalizedAds=1),z+=1):z&&(a.googletag.cmd.push(function(){a.googletag.pubads().setRequestNonPersonalizedAds(0);a.googletag.pubads().clearTargeting("gdpr");h("Configuring GPT: non-personalized ads")}),(adsbygoogle=a.adsbygoogle||[]).requestNonPersonalizedAds=
0)},q=function(){d&&!f.ga?(a.ga&&(a.ga("set","anonymizeIp",!0),a.ga("set","displayFeaturesTask",null)),A+=1):A&&a.ga&&(a.ga("set","anonymizeIp",!1),a.ga("require","displayfeatures"))},x=function(b){h("Opt Out All received",b);b=a.location.hostname.split(".").reverse().splice(0,2).reverse().join(".");document.cookie="opt_out=zdc; path=/; max-age=3888000; domain=."+b+";";document.cookie="euconsent=BOOd21mOOd21mAKABDENAhAAAAAVmAAA; path=/; max-age=3888000; domain=."+b+";";document.cookie="_evidon_suppress_notification_cookie="+
JSON.stringify({date:new Date})+"; path=/; max-age=3888000; domain=."+b+";";document.cookie="_evidon_consent_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=."+b+";";document.cookie="_evidon_consent_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";l=!1;a.zdconsent.consentGiven=!1;for(var g in f)f[g]=!1,"comscore"==g&&(f[g]="0");a.zdconsent.optins=f;e=!1;q();r()},I=function(b,g){h("Opt In All received",b);b=a.location.hostname.split(".").reverse().splice(0,2).reverse().join(".");
document.cookie="zdconsent=optin; path=/; max-age=33955200; domain=."+b+";";document.cookie="euconsent=BOOd08iOOd08iAKABBENAh-AAAAVl7_______9____7_9uz_Gv_r_ff_3nW0739P1A_r_Oz_qG_-xzVo4_FpQAQ; path=/; max-age=33955200; domain=."+b+";";document.cookie="opt_out=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=."+b+";";document.cookie="opt_out=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";-1==document.cookie.indexOf("_evidon_consent_cookie={")&&(b=a.location.hostname.split(".").reverse().splice(0,
2).reverse().join("."),document.cookie="_evidon_consent_cookie="+JSON.stringify({vendors:{7:[1,6,11,14,17,31,36,38,45,51,56,63,64,66,82,84,99,103,111,124,131,139,141,167,168,173,174,185,189,243,249,256,259,280,281,290,292,293,298,307,310,311,313,321,348,373,384,395,447,457,474,477,491,560,564,587,608,611,631,635,650,660,667,673,674,718,748,761,775,846,853,933,937,941,948,1157,1175,1198,1256,1310,1371,1412,1635,1647,1650,1806,1872,1879,1896,1904,1924,1955,2197,2253,2366,2449,2521,2568,2609,2683,2807,
2889,2937,2952,3009,3139,3162,3163,3206,3207,3222,3272,3277,3490,3524,3994,4025,4160,4667,5042]},consent_date:new Date})+"; path=/; max-age=33955200; domain=."+b+";");H()},J=function(b){b&&b.preventDefault&&b.preventDefault();b&&b.stopPropagation&&b.stopPropagation();b&&(b.cancelBubble=!0);return a.document.getElementById("_evidon-consent-frame")?!1:a.evidon.notice.showConsentTool()},K=function(b){b&&b.preventDefault&&b.preventDefault();b&&b.stopPropagation&&b.stopPropagation();b&&(b.cancelBubble=
!0);a.evidon.banner&&a.evidon.banner.destroyNotice();a.evidon.barrier&&a.evidon.barrier.destroyNotice();if(b=document.getElementById("_evidon-barrier-wrapper"))b.style.display="none",b.parentElement.removeChild(b);J();return!1},L=function(){if(d){if(!u){var b=a.document.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText="#_evidon-banner-acceptbutton:hover { background-color: #555; border-color: #333; }":b.appendChild(document.createTextNode("#_evidon-banner-acceptbutton:hover { background-color: #555; border-color: #333; }"));
a.document.getElementsByTagName("head")[0].appendChild(b)}if(b=document.getElementById("_evidon-banner-cookiebutton")){b.onclick=K;if(b=document.getElementById("_evidon-banner-cookiebuttontext"))b.onclick=K;(b=document.getElementById("_evidon-banner-acceptbutton"))&&b.addEventListener("click",I)}else u+=1,20<u||setTimeout(L,100)}},N=function(){var b=a.evidon.notice?a.evidon.notice.country.code:a.evidon.location.code;t=b;a.zdconsent&&(a.zdconsent.geoCC=b);/be|bg|cz|dk|de|ee|ie|el|es|fr|hr|it|cy|lv|lt|lu|hu|mt|nl|at|pl|pt|ro|si|sk|fi|se|gb|uk/i.test(b)?
d||(d=!0,a.zdconsent&&(a.zdconsent.gdprApplies=!0),w()):d&&(d=!1,a.zdconsent&&(a.zdconsent.gdprApplies=!1),w());return!0};(function(){var b=document.cookie;l=-1==b.indexOf('_evidon_consent_cookie={"vendors":')?!1:!0;-1!=b.indexOf("opt_out=")&&(l=!1);b=B("euconsent");-1!=b.indexOf("BOOd08iOOd08iAKABBENAh-AAAAVl7_______9____7_9uz_Gv_r_ff_3nW0739P1A_r_Oz_qG_-xzVo4_FpQAQ")||-1!=b.indexOf("___")?l=!0:-1!=b.indexOf("BOOd21mOOd21mAKABDENAhAAAAAVmAAA")&&(l=!1);e=l||!d?!0:!1;f={comscore:e?1:0,ga:e,googleads:e};
return l})();w();"undefined"==typeof a.evidon&&(a.evidon={});a.evidon.id=660;"undefined"==typeof a.evidon.priorConsentCallback&&(a.evidon.priorConsentCallback=function(){h("Evidon priorConsentCallback fired");H();try{a.zd&&a.zd.core&&a.zd.core.signals.GDPRoptin(a.zdcore_local_uid||"")}catch(b){h("Core error",b)}G();q();r()});var n=function(){var b=a.location.hostname.split(".");return 1>=b.length?"":b[b.length-2]}();n&&"localhost"!=n||(n="pcmag");try{-1!=a.location.search.indexOf("zdconsent")&&(n=
"zdconsent",a.evidon.domain="zdconsent.com")}catch(b){}v||(m("https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js","evidon-notice"),m("https://c.evidon.com/geo/country.js","evidon-location",N),m("https://c.evidon.com/sitenotice/"+a.evidon.id+"/snthemes.js","evidon-themes"),m("https://c.evidon.com/sitenotice/evidon-access.js","evidon-access"),m("https://c.evidon.com/sitenotice/"+a.evidon.id+"/"+n+"/settings.js","evidon-settings",L));a.dataLayer=a.dataLayer||[];a.dataLayer.push({event:"zdconsentLoaded"});
v=new Event("zdconsentloaded");a.dispatchEvent(v);a.addEventListener("message",function(b){var a=b.data;if(a){try{"string"===typeof a&&(a=JSON.parse(a))}catch(D){return}if(a.sender&&"zdconsent"==a.sender){b=a.action;if("optoutall"==b||"optout"==b&&"all"==a.optout)return x();if("optin"==b)a:{var c=a.optedin;b=a.optedout;h("Opt-in some",a);if(c&&c.length){if(b&&b.length)for(a=["Ad Network","Ad Exchange"],c=0;c<a.length;c++)if(-1!=b.indexOf(a[c])){x();break a}I()}else x()}}}},!1);return{inited:!0,loadJS:m,
loadCSS:function(b,g,c){function d(){e.onload=e.onreadystatechange=null;g&&g()}c=c?c.document:a.document;var f=c.getElementsByTagName("head")[0]||c.documentElement,h=!1,e=c.createElement("link");e.rel="stylesheet";e.type="text/css";e.onreadystatechange=function(){h||"loaded"!=this.readyState&&"complete"!=this.readyState||(h=!0,d())};e.onload=d;e.href=b;f.appendChild(e)},gdprApplies:d,consentGiven:l,geoCC:t,cmd:y,showConsentTool:J,optins:f,getConsentString:p,getConsentData:C,getApsConsent:function(){return{enabled:d,
consent:p()}},setupCMP:F,log:h}}window.zdconsent&&window.zdconsent.inited||(window.zdconsent=__ZDConsent(window));