﻿/*! Copyright (c) Epic Systems Corporation 2009-2019 */
function specialEffects(){var l="autocomplete",k="printmode",a,s,j,o,r,h,b,d,f,i,g,c,m,e;if(!document.getElementsByTagName||!document.getElementById)return false;j=window.location.toString();setScannedImageSize();WP.Controls.Menu();if(WP&&WP.DOM&&WP.DOM.Browser&&WP.DOM.Browser.isMobile){e=$afe.select("#menu .home").find("a.selected")[0];if(e){e.onclick=function(){return false};e.href="#"}}if(j.indexOf(k)==-1){try{generateTableEffects()}catch(p){}try{setupTabbedSections()}catch(n){}}!$afe.select(".report .rpt.Universal").length&&resizeLargeImgAndTable();if(typeof loadGraphs==="function")try{loadGraphs()}catch(q){}$afe.select("form").safeAttr(l,"off");$afe.select("input").safeAttr(l,"off");!window.location.hash&&window.setTimeout(function(){window.scroll(0,0)},1);h=document.getElementById("printbar");if(h)h.style.display="block";if(j.indexOf(k)>0){if(document.getElementById("main"))c=document.getElementById("main");else c=document.getElementById("datatile");b=c.getElementsByTagName("a");for(a=0;a<b.length;a++){b[a].href="";b[a].onclick="";b[a].removeAttribute("href");b[a].removeAttribute("onclick");b[a].removeAttribute("title");b[a].removeAttribute("target")}d=c.getElementsByTagName("tr");for(a=0;a<d.length;a++){d[a].onclick="";d[a].removeAttribute("onclick");d[a].removeAttribute("title")}f=c.getElementsByTagName("input");for(a=0;a<f.length;a++)f[a].disabled=true;i=c.getElementsByTagName("select");for(a=0;a<i.length;a++)i[a].disabled=true;g=c.getElementsByTagName("textarea");for(a=0;a<g.length;a++)g[a].disabled=true}doTextHighlight();setupButtoncheck();$afe.select("#moreTabsTab").hover(function(a){moretabsFocus(a)},function(a){moretabsBlur(a)})}function matchWrapHeight(){$afe.jq(window).trigger("matchColumnHeights")}function doTextHighlight(){var n="hilitefxid",a=null,j,h,e,k,i,d,m,f,b,c,g,l;j=document.getElementById("hilitefxform");if(j===a)return;i=document.getElementById(n);if(i===a)return;d=i.value;if(typeof d==="undefined"||d===a||d.length===0)return;m=document.getElementById(d);if(m===a)return;h=j.getElementsByTagName("input");if(h===a)return;b=new Array(3);b[0]=document.getElementsByTagName("TD");b[1]=document.getElementsByTagName("DIV");b[2]=document.getElementsByTagName("SPAN");for(c=0;c<b.length;c=c+1)for(g=0;g<b[c].length;g=g+1){l=b[c][g];if(containsClassName(l,"srchbl"))for(f=0;f<h.length;f=f+1){e=h[f];if(e===a)return;if(e.getAttribute("id")===a||e.getAttribute("id").indexOf(n)===-1){k=e.value;k.length>0&&$$WPUtil.highlightNodeText(l,k)}}}}function setupExpandableObject(f,h,g){var a="hover",e,c,b,d;if(typeof f!=="object")return;if(!g&&f.className.indexOf("expandable")<0)return;if(h)e=function(){expandElement(this);return false};else e=function(){expandElementExcl(this);return false};c=f.children;for(b=0;b<c.length;b++)if(c[b].className.indexOf("clickable")>-1){collapseElement(c[b],e);c[b].onmouseover=function(){applyClass(this,a)};c[b].onmouseout=function(){removeClassNames(this,a)};d=WP.DOM.Search.getNext(c[b]);if(d.nodeName.toUpperCase()==="A"){d.onfocus=function(){applyClass(this.parentNode,a)};d.onblur=function(){removeClassNames(this.parentNode,a)}}}}function setupExpandableCollection(c,d){var b,a;if(typeof c!=="string")return;b=document.getElementsByTagName(c);for(a=0;a<b.length;a++)setupExpandableObject(b[a],d)}function expandElement(a){setSlaveElmntDisp(a,true);a.onclick=function(){collapseElement(this,function(){expandElement(this);return false});return false}}function collapseElement(a,b){setSlaveElmntDisp(a,false);a.onclick=b;$afe.jq(window).trigger("matchColumnHeights")}function expandElementExcl(c){var b,a,d;d=function(){expandElementExcl(this);return false};b=c.parentNode.children;for(a=0;a<b.length;a++)b[a].className.indexOf("clickable")>-1&&collapseElement(b[a],d);setSlaveElmntDisp(c,true);c.onclick=function(){collapseElement(this,function(){expandElementExcl(this);return false});return false};$afe.jq(window).trigger("matchColumnHeights")}function setSlaveElmntDisp(b,l){var h="aria-expanded",c,f,k,j,d,e,a,i,g;a=b.getAttribute("id");if(a!==null)a=a.substring(5,a.length);c=document.getElementById(a);if(c!==null){f=b.getElementsByTagName("img");k=c.children;if(b.firstElementChild.nodeName==="A"&&!$$WPUtil.IsNullOrEmpty(b.firstElementChild.getAttribute(h))){i=b.firstElementChild;g=true}if(l){j="en-US/images/rowopen.svg";d="";g&&i.setAttribute(h,"true")}else{j="en-US/images/rowclosed.svg";d="none";g&&i.setAttribute(h,"false")}c.style.display=d;for(e=0;e<k.length;e++)k[e].style.display=d;f.length>0&&f[0].className.indexOf("icon")>-1&&$afe.jq(f[0]).safeAttr("src",j)}}function setupTabbedSections(){var b=$afe.select(".innertabs .membertab a"),c,a;b.each(function(){var a=$(this),c=a.safeAttr("href").indexOf("#")>=0,b=a.attr("onclick")!==undefined||a.prop("onclick")!==null,d=typeof jQuery!==undefined&&jQuery._data(this,"events").click!==undefined;isBillingDetailsTab=a.parent().hasClass("ba_detail_tab");if(c&&!(b||d||isBillingDetailsTab)){$(this).click(showTabbedSection);a.on("keydown","","",$$WP.Utilities.UI.NavTabsSpacebarHelper)}});c=document.location.toString();a=c.match("tabbedsec=tab_[A-Za-z0-9_]*");a!==null&&a.length>0&&$afe.select("#"+a[0].split("=")[1]).click();$afe.select(".innertabs .membertab.selected").length===0&&b.first().click()}function showTabbedSection(d){var g="aria-selected",f="selected",e=".membertab",b,a,c;if(typeof d==="string"){b=$afe.select("#"+d).parents(e).first();if(b.length===0){$$WP.Debug.logError("couldn't find tab with ID "+d);return}}else b=$afe.jq(this).parents(e).first();$afe.select(".innertabs .membertab.selected").removeClass(f);$afe.select(".innertabs .membertab").find("a").safeAttr(g,"false");$afe.select(".section[id^='topic_']").addClass("hidden");b.addClass(f);b.find("a").safeAttr(g,"true");a=b.find("a").safeAttr("id");if(!a)return false;a=a.substring(4,a.length);c=$afe.select("#"+a);c.removeClass("hidden");c.find(".component").not(".hidden").not(".loaded").each(function(){var b=$afe.jq(this),a=$$WPComp.getInstance(b.safeAttr("data-component-id"));a&&typeof a.refresh==="function"&&a.refresh()});$afe.jq(window).trigger("matchColumnHeights");return false}function setScannedImageSize(){var a,c,b,d;d=700;a=document.getElementById("scan");if(a){c=a.width;if(c>d){b=a.height*d/c;b=b-b%1;c=d;a.style.height=b+"px";a.style.width=c+"px"}}}function adjustLightbox(){var c=document.getElementById("lightbox"),g=document.getElementById("wrap"),a,e,f,d,b;if(!c||!g)return;a=c.clientHeight;for(d=0;d<c.children.length;d++){e=c.children[d];if(a<e.clientHeight)a=e.clientHeight}if(window.innerHeight){if(a>window.innerHeight)return;b=window.pageYOffset+.5*(window.innerHeight-a)}else{if(a>document.documentElement.clientHeight)return;b=document.documentElement.scrollTop+.5*(document.documentElement.clientHeight-a)}f=parseInt(WP.DOM.Read.getStyle(g,"margin-top"),10);b=b-f;if(b<0)b=0;c.style.marginTop=b+"px"}function hideLightbox(){var a=$afe.select("#lightbox, #lightbox_overlay"),b;if(a.length===0)return;a.removeAttr("tabindex");a.addClass("hidden");setAriaHiddenForPage(false);$afe.select("body").removeClass("showLightBox");$afe.select("[data-root]").each(function(){$afe.jq(this).off("focus.popup");$afe.jq(this).removeAttr("data-root")});if(isDataTile()){$afe.select("#content, #main, #sidebar").removeClass("suppressed");setAppropriateHeight()}if(typeof initLightbox.onCloseCallback==="function"){try{initLightbox.onCloseCallback()}catch(d){}try{delete initLightbox.onCloseCallback}catch(c){}}b=$afe.select(".lb_overlay:visible").length;$$WPUtil.UI.PDF&&$$WPUtil.UI.PDF.needIframeShim()&&$$WPUtil.UI.PDF.pageHasEmbeddedPdf()&&b==0&&$$WPUtil.UI.PDF.showPdfs()}function resetLightbox(){var b,a;b=$afe.select("#lightbox");a=$afe.select("#lightbox_overlay");$afe.select("body").removeClass("showLightBox");b.safeAttr("style","").removeClass("hidden").empty();a.safeAttr("style","").removeClass("hidden");if(WP.Events){WP.Events.removeListener(window,"resize",adjustLightboxEventCallback);WP.Events.removeListener(window,"scroll",adjustLightboxEventCallback)}}function getProxyDisclaimer(a){$$WPUtil.SafeToRedirect(function initLBProxyTabs(b){if(!b)return;initLightbox(a+"&co=true",function focusOnContinue(){document.getElementById("continue").focus()},$$WPUtil.DidNotRedirect)});return false}function initLightbox(e,h,k){if($$WPUtil.isAbsoluteURL(e)===true){console.error("Non-enduser message: Someone tried to execute a lightbox control from outside of MyChart.  Potential phishing attempt.  This code was not executed.");return}initLightbox.onCloseCallback=k||function(){};var a=document.getElementById("lightbox"),i=document.getElementById("lightbox_overlay"),j,c,d,b,f,g;d={};c={};getFirstAndLastFocusableElements(document.body,d,"root");if(!a||!i){window.location.href=e;return}$(a).safeAttr("role","dialog");$(a).safeAttr("aria-modal","true");j=function(n){var j="focus.popup",m;dangerou$.setHtml(a,n);$afe.jq(a).add($afe.jq(i)).removeClass("hidden").css("display","block");setAriaHiddenForPage(true);$$WPUtil.UI.PDF&&$$WPUtil.UI.PDF.needIframeShim()&&$$WPUtil.UI.PDF.pageHasEmbeddedPdf()&&$$WPUtil.UI.PDF.hidePdfs();adjustLightbox();$afe.jq(a).safeAttr("tabindex",0);a.focus();m=lightBoxKeyDownHandler(a,hideLightbox,c);if(WP.Events){WP.Events.addListener(window,"resize",function(){b!==null&&window.clearTimeout(b);b=window.setTimeout(adjustLightbox,100)});WP.Events.addListener(window,"scroll",function(){b!==null&&window.clearTimeout(b);b=window.setTimeout(adjustLightbox,100)});WP.Events.addListener(a,"keydown",m);f=addPopupRootElementFocusHandler(true,c);g=addPopupRootElementFocusHandler(false,c);$afe.jq(d.first).on(j,f);$afe.jq(d.first).on(j,g)}for(var k=a.getElementsByTagName("script"),e=0;e<k.length;e++)if($$WPUtil.isAbsoluteURL(k[e].getAttribute("src"))===false){var l=document.createElement("script");l.type="text/javascript";if(k[e].src)l.src=k[e].src;document.body.appendChild(l)}else console.error("Non-enduser message: Someone tried to include a script from outside of MyChart in the return value of a lightbox.  Potential phishing attempt.  This code was not executed.");WP.Utils.minifyElement($afe.select("#lightbox"));$afe.select(".ghostInput input, .ghostInput select, .ghostInput textarea").trigger("change");typeof h==="function"&&h();setAppropriateHeight()};$.ajax({url:e,success:j,method:"GET",data:{lb:"true"},error:function(){window.location=e}})}function showLightBox(c){var a,b;a=document.getElementById("lightbox");b=document.getElementById("lightbox_overlay");dangerou$.setHtml(a,c);b.style.display="block";a.style.display="block";$afe.select("body").addClass("showLightBox");$afe.jq(b).removeClass("hidden");$afe.jq(a).removeClass("hidden");$$WPUtil.UI.PDF&&$$$WPUtil.UI.PDF.needIframeShim()&&$$WPUtil.UI.PDF.pageHasEmbeddedPdf()&&$$WPUtil.UI.PDF.hidePdfs();adjustLightbox();if(WP.Events){WP.Events.addListener(window,"resize",adjustLightboxEventCallback);WP.Events.addListener(window,"scroll",adjustLightboxEventCallback)}$afe.jq(a).safeAttr("tabindex",0);a.focus()}function lightBoxKeyDownHandler(e,d,a){if(WP.Events){getFirstAndLastFocusableElements(e,a);var b=a.first,c=a.last;KEYCODE_TAB=9;return function(a){var e=a.key==="Tab"||a.keyCode===KEYCODE_TAB;if(a.keyCode===27){d();return}if(!e)return;if(a.shiftKey){if(document.activeElement===b){c.focus();a.preventDefault()}}else if(document.activeElement===c){b.focus();a.preventDefault()}}}}function getFirstAndLastFocusableElements(d,a,c){var b=$afe.select('a[href], area[href], input:not([disabled],[type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]',d);a.first=b[0];a.last=b[b.length-1];if(c){$afe.jq(a.first).attr("data-"+c,"first");$afe.jq(a.last).attr("data-"+c,"last")}}function addPopupRootElementFocusHandler(b,a){return function rootElementReceivedFocus(d){var c;if(b)c=a.first;else c=a.last;if(d.target===c||d.target.contains(c))return;c.focus();d.preventDefault()}}var s_adjustLightboxEventListenerTimeoutId=null;function adjustLightboxEventCallback(){s_adjustLightboxEventListenerTimeoutId!==null&&window.clearTimeout(s_adjustLightboxEventListenerTimeoutId);s_adjustLightboxEventListenerTimeoutId=window.setTimeout(adjustLightbox,100)}function moretabsFocus(){var a="#moretabs";if($afe.select(a).hasClass("mtShow"))return;$afe.select(a).removeClass("mtHide").addClass("mtShow").safeAttr("aria-hidden","false");$afe.select("#moreTabsTab").addClass("hidebar")}function moretabsBlur(a){var c="moreTabsTab",b=a.relatedTarget&&a.relatedTarget.offsetParent&&!(a.relatedTarget.offsetParent.id==c);if(!b&&WP.DOM.Browser.isIE)b=!(document.activeElement.offsetParent.id==c);if(a.type=="mouseleave"||b){$afe.select("#moretabs").removeClass("mtShow").addClass("mtHide").safeAttr("aria-hidden","true");$afe.select("#moreTabsTab").removeClass("hidebar")}}if(typeof WP==="undefined")WP={};if(typeof WP.Controls==="undefined")WP.Controls={};var proxyPopup,gotTheMessage=false;function photoIframe(f){var d="none",j="ProxySilhouette.png",a=document.getElementById("iframeproxypicker_"+f),b,i,g,h,c,e,k;h=a.parentElement.parentElement.parentElement.parentElement;k=document.createElement("div");a.parentNode.parentNode.appendChild(k,a.parentNode);b=new WP.Controls.ProgressSpinner(k," ","inline");c=document.getElementById("photoImg_"+f);b.hide();a.writeError=function(e){var d;if(!g){if(e.length<2)return;i=WP.DOM.Create.tag("tr","tableRowMessage");g=WP.DOM.Create.tag("td","tableProxyMessage alert");g.colSpan=4;i.appendChild(g);d=a.parentNode.parentNode.parentNode;getChild(d,0).rowSpan++;if(d.nextSibling)h.insertBefore(i,a.parentNode.parentNode.parentNode.nextSibling);else h.appendChild(i)}dangerou$.setHtml(g,e);if(b.oldDisp)c.style.display=b.oldDisp;b.hide();c.style.display=b.oldDisp||""};e=document.getElementById("photodelete_"+f);e.style.display=c.src.indexOf(j)>0?d:"";WP.Events.addListener(e,"click",function(){var g;if(b.isHidden===false){a.src=a.src;b.hide();c.style.display=b.oldDisp;e.style.display=c.src.indexOf(j)>0?d:"";a.fixTabbing(a);return}c.src="./en-US/images/ProxySilhouette.png";g=document.getElementById("photo_"+f);g.value="";WP.Events.fireEvent(g,"change");e.style.display=d;a.fixTabbing&&a.fixTabbing(a)});a.beforeupload=function(){b.show();b.oldDisp=c.style.display;c.style.display=d;return true};a.viewer={addImage:function(){},transferToForm:function(){}};a.onupload=function(j,k,l,h){var d="showfile.asp?key=",g,i="When you click Save on the Personalize page, this photo will be saved to the medical record and visible to medical staff.";c.style.display=b.oldDisp;b.hide();if(j!==1){a.writeError("Only images may be used as your patient photo.");return}g=document.getElementById("photo_"+f);g.value=d+h;WP.Events.fireEvent(g,"change");c.src=d+h;e.style.display="";a.nextElement=e;if(gotTheMessage===false){gotTheMessage=true;WP.Events.addListener(c,"load",function(){i.length&&window.setTimeout(function(){alert(i)},50)},true)}};if(!proxyPopup){proxyPopup=document.getElementById("popupphotopopup");proxyPopup.parentElement.removeChild(proxyPopup);document.getElementById(h.parentElement.id+"_col0").appendChild(proxyPopup)}}function updateSilhouetteColor(b,e){var a,d=document.getElementById("photoImg_"+e),c=b.nextSibling;a=c.className.match(/color\d/,"");if(a&&a[0])a=a[0];removeClassNames(c,a);applyClass(c,escape(b.value));if(d){removeClassNames(d,a);applyClass(d,escape(b.value))}}var showFlyout=function showFlyout(c){var b,a;b=$afe.select("#flyout");removeClassNames(b[0],"collapsed");if(c.data.trigger==="keyboard"){a=b.find("a.flyoutitem").not(".chosen");a.length>0&&a[0].focus()}},hideFlyout=function hideFlyout(){var a=document.getElementById("flyout");applyClass(a,"collapsed")};function setupMyCondNav(){var a;if(!$afe.select("#flyout"))return;$afe.select("body").on({focus:hideFlyout,click:showFlyout},"#flyoutprompt",{trigger:"keyboard"}).on({mouseleave:hideFlyout,mouseenter:showFlyout},"#flyout, #flyoutprompt",{trigger:"mouse"}).on({focus:hideFlyout},"#innertabs .tab a");a=$afe.select(".innertabs .tab");a&&applyClass(a[a.length-1],"lasttab")}function preventBadAnchorJump(){var g=document.getElementById("main"),f=document.getElementById("defaultColumn"),e=document.getElementById("datatile"),b=g||f||e,d=WP.DOM.Browser.isIE||b.scrollTop>0,c=1020,a;if(!d||!window.location.hash||!b||containsClassName(document.documentElement,"staticheight"))return;a=$afe.select("#blftwrapper").position().top-$afe.jq(b).position().top;if(a>c)a=c;preventBadAnchorJump.targetRule.style.top=a+"px"}function resizeLargeImgAndTable(){var a="large_img",d="className",b="width",f,e,c,g;$afe.select(".report table").each(function(){var g;f=$afe.jq(this).find("img");if(f.length>0){$afe.jq(this).addClass("tableLayoutFixed");f.each(function(){var f=this;c=$afe.jq(f).parent().width();e=$afe.jq(f).safeAttr(b);if(e>c)if($afe.jq(f).parent().prop(d)!=a){g=$$WP.SimpleTemplates.Div({"class":a});$afe.jq(f).safeWrap(g)}})}});$afe.select(".section#summary table,.section#discharge table,.section#patedu table,.section#instructions table,.report table,body.md_letters .section table").each(function(){var a;c=$afe.jq(this).parent().width();g=$afe.jq(this).safeAttr(b);if(g>c){a=$$WP.SimpleTemplates.Div({"class":"table_wrapper"});$afe.jq(this).safeWrap(a)}});$afe.select(".section#summary img,.section#discharge img,.section#patedu img,.section#instructions img,body.md_letters .section img").each(function(){var f=this,g;c=$afe.jq(f).parent().width();e=$afe.jq(f).safeAttr(b);if(e>c)if($afe.jq(f).parent().prop(d)!=a){g=$$WP.SimpleTemplates.Div({"class":a});$afe.jq(f).safeWrap(g)}});!$afe.select(".section .report .rpt.Universal").length&&$afe.select(".section#discharge div.report").each(function(){fitReportToWidth($afe.jq(this))})}function fitReportToWidth(c){var e="4% 2%",d="scale(",i=c[0];c.safeWrap($$WP.SimpleTemplates.Div());var b=c.parent();c.addClass("shrinkReport").removeClass("report");b.addClass("report shrinkReportParent");var j=i.scrollWidth,g=b.width();if(j>g){var h=i.scrollHeight,f=b.innerHeight(),a=(g/j).toFixed(2)-.04;if(a<.7){a=.7;b.css({"overflow-y":"hidden"})}else b.css({overflow:"hidden"});c.css({display:"inline-table",transform:d+a+")","transform-origin":e,"-webkit-transform":d+a+")","-webkit-transform-origin":e,"-ms-transform":d+a+")","-ms-transform-origin":e});navigator.userAgent.indexOf("MSIE 8")>0&&c.css({filter:"progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12=0, M21=0, M22="+a+", SizingMethod='auto expand')"});f-=h-h*a;b.css({height:Math.ceil(f)+"px"})}}function showPopup(d,c,b,a){var e=$$WPUtil.quickPopup(new $$WPComp.ConfirmComponent({callback:function(b){var a="#DECLINE";if(!b){$afe.select(a).prop("onclick",null);$afe.select(a).click()}else $afe.select("#lightbox_overlay").css("display","none")},ToolbarButtons:[{Text:b,Class:"otherbutton"},{Text:a,Class:"inlinedelete"}],TitleText:d,Html:c,AffirmButtonIndex:0,forcePrompt:true,IsClosable:true}),{Size:$$WP.Containers.Popup.SizeEnum.SMALL})}function SMSLightbox(l,h,i,j,k){var b=true,a="value",c="[name=orig_sms_on]",e,d,f,g;SMSLightbox._isSMSOn=$afe.select(c).safeAttr(a);if(SMSLightbox._isSMSOn==="1"){e="inlinedelete";if($afe.select("input[name='reqBillTklr']").val()==="1"&&$afe.select("input[name='paperlessSignup']").val()==="1"){f=$afe.select("[name='orig_events']").val();for(d=3;d<6;d++){g=f.indexOf("tklr^"+d);if(g!==-1&&f.charAt(g+8)){SMSLightbox._turnEmailOn=b;h=i;break}}}}else if(SMSLightbox._isSMSOn==="0")e="completeworkflow";var m=$$WPUtil.quickPopup(new $$WPComp.ConfirmComponent({callback:function(h){var d="[name=sms_on]";if(h){var g,f,e;if(SMSLightbox._turnEmailOn){for(e=3;e<6;e++)!$afe.select("#tklr_"+e+"_smtp").prop("checked")&&$afe.select("#tklr_"+e+"_smtp").prop("checked",b);$afe.select(d).safeAttr(a,0);$afe.select("input#submitform").click()}else{if(SMSLightbox._isSMSOn==="1")f=0;else if(SMSLightbox._isSMSOn==="0")f=1;g=$afe.select('#PrefsForm [name="sec_token"]').safeAttr(a);$.ajax({url:makeLink("inside.asp?mode=patprefs&co=true"),type:"post",data:{sec_token:g,SMSFlag:f},error:$$WPUtil.DisplayAjaxError,success:function(k){var i="greyoutbackground",h='td[headers$="col2"]',g="disabled",f='input[id$="sms"]',e=".smsswitchlink",j;if(k){$afe.select(e).remove();j=dangerou$.parseHtml(k).find(e);if(SMSLightbox._isSMSOn==="0"){j.safeInsertAfter($afe.select("table[id^=prefs]"));$afe.select(f).removeAttr(g);$afe.select(h).removeClass(i);$afe.select(d).safeAttr(a,1);$afe.select(c).safeAttr(a,1)}else if(SMSLightbox._isSMSOn==="1"){j.safeInsertAfter($afe.select("table[id^=prefs] thead"));$afe.select(f).prop(g,b);$afe.select(h).addClass(i);$afe.select(d).safeAttr(a,0);$afe.select(c).safeAttr(a,0)}}}})}}},ToolbarButtons:[{Text:j,Class:e},{Text:k,Class:"otherbutton"}],TitleText:l,Html:h,AffirmButtonIndex:0,forcePrompt:b,IsClosable:b}),{Size:$$WP.Containers.Popup.SizeEnum.MEDIUM,HasBackButton:false})}SMSLightbox._isSMSOn=null;SMSLightbox._turnEmailOn=null;function setupButtoncheck(d){var b="aria-checked",a="checked",c;d=d||$afe.select("body");c=d.find("p.buttoncheck");c.find("input.buttoncheck:checked").parent().addClass(a).safeAttr(b,"true");c.find("input.buttoncheck[disabled]").parent().addClass("disabled");c.find("input.buttoncheck").change(a,function(){var c="unchecked",d=$afe.jq(this).parent("p");d.toggleClass(a);if(d.hasClass(a))d.removeClass(c).safeAttr(b,"true");else d.addClass(c).safeAttr(b,"false")})}function setAriaHiddenForPage(b){var a=[];addIdToArray("header",a);addIdToArray("footer",a);addIdToArray("content",a);addIdToArray("menu-container",a);addIdToArray("toastWrapper",a);for(i=0;i<a.length;i++)a[i].setAttribute("aria-hidden",b)}function addIdToArray(c,b){var a=document.getElementById(c);a&&b.push(a)}