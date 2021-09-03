﻿/*! Copyright (c) Epic Systems Corporation 2011-2016 */
if(typeof WP==="undefined")WP={};if(typeof WP.Validators==="undefined")WP.Validators={};WP.Validators.currentAlerts={};WP.Validators.alertsHolder=null;WP.Validators.DisplayErrors=function(b,c,j){var i="matchColumnHeights",h="object",f="&nbsp;",a,e,d,g;if(WP.suppressErrors===true||b===" ")b="";if(typeof b==="function"){try{a=b(c)}catch(l){a=""}if(a==="")return}else if(typeof b==="string")a=b;else a=b.innerText||b.textContent;e=j||WP.Validators.alertsHolder;if(!e){a&&$$WP.Utilities.quickMessageBox(a,"",[],null,[],"");return}if(!c){if(a===f||a===" "||a===HTMLUnencode(f)){a="";if(typeof b===h&&$afe.jq(b).text()===HTMLUnencode(f))b=f}WP.Validators.currentAlerts={};if(typeof b===h){$afe.jq(e).empty();e.appendChild(b)}else{if(e.innerHTML===a)return;dangerou$.setHtml(e,a);if(a===f){var k=e.innerText||e.textContent||"";k.length===0&&$T(e,String.fromCharCode(6))}}$afe.jq(window).trigger(i);return}d=WP.Validators.currentAlerts;if(!a){if(d[c]){e.removeChild(d[c]);delete d[c]}$afe.jq(window).trigger(i);return}if(!d[c]){g=document.createElement("p");g.className="alert";d[c]=g;e.appendChild(g)}if(d[c].innerHTML===a||d[c]===a)return;if(typeof b===h){$afe.jq(d[c]).empty();d[c].appendChild(b)}else dangerou$.setHtml(d[c],a);$afe.jq(window).trigger(i)};if(typeof WP.Validators.Text==="undefined")WP.Validators.Text={};WP.Validators.Text.MaxLengthAndRequired=function(a,l,h,q,d,j){var g="alertborder",o="@MYCHART@MAXLEN@",f="function",c=true,e="focus",n="fadedtext",m="ghostInput",k,i,p,b={};if(!a)return;if(typeof a==="string")a=document.getElementById(a);d=d||null;l=l||"";p=l.length>0;h=h||200;b.hideHintTextFun=function(){var c=$afe.jq(a);if(c.parent().hasClass(m))return;c.removeClass(n).val("");WP.Events.removeListener(a,e,b.hideHintTextFun)};b.showHintTextFun=function(){var c=$afe.jq(a);if(c.parent().hasClass(m))return;c.addClass(n).val("Enter Text Here");WP.Events.addListener(a,e,b.hideHintTextFun)};if(d){i=WP.Validators.Forms[d];if(typeof i==="undefined"){WP.Validators.Forms[d]=[];i=WP.Validators.Forms[d]}k=i.length}b.isEmpty=WP.Strings.isEmpty;b.scrollPreventer=function(){var d=a.scrollTop,e=a.scrollHeight,g=d+a.height===a.scrollHeight;b.valueChecker();if(a.scrollTop!==d)a.scrollTop=g===c?e:d;typeof j===f&&j()};b.valueChecker=function(){var m="data-invalid";$input=$afe.jq(a);$$WP.Utilities.setActivity();var n,f,j,e;n=a.value.length;f={};f[o]=h;if(n>h){f["@MYCHART@OVERLIMIT@"]=n-h;e=decodeMnemonics("@MYCHART@OVERLIMIT@ too many characters",f);j=createAlert(e,false)}else{f["@MYCHART@REMAININGCHARACTERS@"]=Math.max(0,h-n)+"";e=b.isEmpty(a.value)&&p?l:" ";if(e.trim().length>0)j=createAlert(e,c);else j=decodeMnemonics("@MYCHART@REMAININGCHARACTERS@ of @MYCHART@MAXLEN@ characters left",f);removeClassNames(a,g)}if(j.length===0)j="&nbsp;";WP.Validators.DisplayErrors(j,"",q);if(d){i[k]=e;if(e.trim().length>0){$input.safeAttr(m,"true");applyClass(a,"invalid")}else{$input.removeAttr(m);removeClassNames(a,"invalid")}}};b.focusFun=function(){removeClassNames(a,g);WP.Events.removeListener(a,e,b.focusFun)};b.blurFun=function(){var m;if(b.isEmpty(a.value)){a.value.length===0&&b.showHintTextFun();if(p){m=c;var s={},r,n;s[o]=h;r=decodeMnemonics(l,s);n=createAlert(r,c);WP.suppressErrors===c&&applyClass(n,"clearlabel");WP.Validators.DisplayErrors(n,"",q);if(d)i[k]=r}}else if(a.value.length<=h){removeClassNames(a,g);WP.Validators.DisplayErrors("&nbsp;","",q);if(d)i[k]=" ";typeof j===f&&j()}else m=c;if(m&&WP.suppressErrors!==c){applyClass(a,g);WP.Events.addListener(a,e,b.focusFun)}b.valueChecker();var t=$afe.select("form#"+d);t.length>0&&$$WP.FormValidation.checkIfFormIsValid(t,c)};b.afterCutPaste=function(){window.setTimeout(b.scrollPreventer,1)};WP.Events.addListener(a,"blur",b.blurFun);WP.Events.addListener(a,"keyup",b.scrollPreventer);WP.Events.addListener(a,"paste",b.afterCutPaste);WP.Events.addListener(a,"cut",b.afterCutPaste);WP.Validators.undoRedo(a);WP.suppressErrors=c;b.scrollPreventer();b.blurFun();WP.suppressErrors=false;a.removeMaxLength=function(){WP.Events.removeListener(a,"blur",b.blurFun);WP.Events.removeListener(a,"keyup",b.scrollPreventer);WP.Events.removeListener(a,"cut",b.afterCutPaste);WP.Events.removeListener(a,"paste",b.afterCutPaste);b.hideHintTextFun();b.focusFun();delete b.blurFun;delete b.scrollPreventer;delete b.valueChecker;delete b.isEmpty;delete b.firstAction;delete b.showHintTextFun;delete b.hideHintTextFun;delete b.focusFun;i[k]="";typeof j===f&&j();typeof a.removeUndoRedo===f&&a.removeUndoRedo()}};if(typeof WP.Validators.undoRedo==="undefined")WP.Validators.undoRedo=function(c){var b=true,d=false;if(navigator.userAgent.toLowerCase().indexOf("msie")===-1)return;var a={undoStack:[c.value],redoStack:[],isDeleting:d,isInserting:d};a.pop=function(a){if(a.length===0)return;var b=a[a.length-1];a.length-=1;return b};a.addUndoFun=function(d){if(c.value==="Enter Text Here")return;if(a.undoStack.length===0||c.value!==a.undoStack[a.undoStack.length-1]){a.undoStack[a.undoStack.length]=c.value;a.undoStack.length>75&&a.undoStack.shift();if(d!==b)a.redoStack=[]}};a.onKeyUp=function(g){var e,f=g||window.event;if(f.ctrlKey===d){a.clearNativeUndo();return}if(f.keyCode===90){if(a.undoStack.length===0)return;a.redoStack[a.redoStack.length]=c.value;e=a.pop(a.undoStack);if(e===c.value)e=a.pop(a.undoStack)||"";c.value=e}else if(f.keyCode===89){if(a.redoStack.length===0)return;e=a.pop(a.redoStack);a.addUndoFun(b);c.value=e}};a.onKeyDown=function(e){var c=e||window.event;if(c.keyCode===8||c.keyCode===46){a.isDeleting=b;if(a.isInserting===b){a.isInserting=d;a.addUndoFun()}}else{a.isInserting=b;if(a.isDeleting===b){a.isDeleting=d;a.addUndoFun()}else if(c.keyCode===32){a.isSpacing!==b&&a.addUndoFun();a.isSpacing=b}else{a.isSpacing===b&&a.addUndoFun();a.isSpacing=d}}};a.clearNativeUndo=function(){var a=document.createElement("div");document.body.appendChild(a);document.body.removeChild(a)};WP.Events.addListener(c,"keyup",a.onKeyUp);WP.Events.addListener(c,"paste",a.addUndoFun);WP.Events.addListener(c,"cut",a.addUndoFun);WP.Events.addListener(c,"keydown",a.onKeyDown);c.removeUndoRedo=function(){WP.Events.removeListener(c,"keyup",a.onKeyUp);WP.Events.removeListener(c,"paste",a.addUndoFun);WP.Events.removeListener(c,"cut",a.addUndoFun);WP.Events.removeListener(c,"keydown",a.onKeyDown);try{delete a.addUndoFun;delete a.onKeyDown;delete a.undoStack;delete a.redoStack;delete a.isDeleting;delete a.isInserting;delete a.pop;delete a.clearNativeUndo}catch(b){}};a.addUndoFun()};if(typeof WP.Validators.Calendar==="undefined")WP.Validators.Calendar={aftertwodays:function(c,b,a){return new Date(c,b,a)-new Date>86399e3},past:function(c,b,a){return new Date(c,b,a)<=new Date},future:function(c,b,a){return new Date(c,b,a+1)>=new Date},range:function(f,e,d){var a,b,c;b=window.cachedStartDate;c=window.cachedEndDate;a=new Date(f,e,d);return b&&a<b?false:c&&a>c?false:true},any:function(){return true}};if(typeof WP.Validators.Forms==="undefined")WP.Validators.Forms={};WP.Validators.Forms.SelectionRequired=function(a,g,j,m,d,i){var e="alertborder",h="function",b=true,k,f,l,c={};if(!a)return;if(typeof a==="string")a=document.getElementById(a);d=d||null;g=g||"";l=g.length>0;j=j||-1;if(d){f=WP.Validators.Forms[d];if(typeof f==="undefined"){WP.Validators.Forms[d]=[];f=WP.Validators.Forms[d]}k=f.length}c.scrollPreventer=function(){var d=a.scrollTop,e=a.scrollHeight,f=d+a.height===a.scrollHeight;c.blurFun();if(a.scrollTop!==d)a.scrollTop=f===b?e:d;typeof i===h&&i()};c.focusFun=function(){removeClassNames(a,e);WP.Events.removeListener(a,"focus",c.focusFun)};c.blurFun=function(){var p;if(a.value==j){if(l){p=b;var q={},o,n;o=decodeMnemonics(g,q);n=createAlert(o,b);WP.suppressErrors===b&&applyClass(n,"clearlabel");WP.Validators.DisplayErrors(n,"",m);if(d)f[k]=o}}else{removeClassNames(a,e);WP.Validators.DisplayErrors("","",m);if(d)f[k]=" ";typeof i===h&&i()}if(p&&WP.suppressErrors!==b){applyClass(a,e);WP.Events.addListener(a,"focus",c.focusFun)}};WP.Events.addListener(a,"blur",c.blurFun);WP.Events.addListener(a,"change",c.blurFun);WP.Events.addListener(a,"keyup",c.scrollPreventer);WP.suppressErrors=b;c.scrollPreventer();c.blurFun();WP.suppressErrors=false}