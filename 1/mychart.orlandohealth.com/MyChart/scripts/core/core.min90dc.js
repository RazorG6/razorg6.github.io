/*! Copyright (c) Epic Systems Corporation 2012 - 2016 */
var Epic=Epic||{};Epic.PatientAccess=Epic.PatientAccess||{};var $$WP=$$WP||Epic.PatientAccess;$$WP.Settings=$$WP.Settings||{};$$WP.Settings.ScriptPath="Scripts/";var console=console||{error:function WP$dud(){},log:function WP$dud(){},warn:function WP$dud(){}};(function WP$Core$InheritanceModel$definition(){var a=true,b="object",c=function WP$Core$Inheritence$isInstance(c){var d;if($.type(c)!==b)return false;if(c instanceof this)return a;if($.isFunction(c._constructor)&&$.isArray(c._constructors)){if(c._constructor===this)return a;for(d=0;d<c._constructors.length;d++)if(c._constructors[d]===this)return a}return false};Function.prototype.extend=function(h,l){var e=this,f,d,i,k,j,m,n,g;if($.isFunction(h)&&$.type(h.prototype)===b){d=h;i=d._className;n=l;if(!$.isFunction(d)||$.type(d.prototype)!==b){console.error("Provided parent class was not a valid class. Cannot perform inheritance.");return}}else{d=l||$$WP;k=h.split(".");i=h.replace(/\./g,"$");for(j=0;j<k.length;j++){if($.type(d)!==b){d=null;break}d=d[k[j]]}if(!$.isFunction(d)||$.type(d.prototype)!==b){console.error("Did not find a class named "+h+" in the given root namespace. Cannot perform inheritance.");return}}e._inheritedMethods={};e.prototype[i]=d;e._inheritedMethods[i]=a;e._className=n;m={_constructor:a,_constructors:a};for(f in d.prototype){if(typeof f!=="string"||m[f])continue;g=d.prototype[f];if($.isFunction(d.prototype[f]))if(d._inheritedMethods[f]){e.prototype[f]=g;e._inheritedMethods[f]=a}else{e.prototype[i+"$"+f]=g;e._inheritedMethods[i+"$"+f]=a}if(typeof e.prototype[f]==="undefined")if($.type(g)===b&&!(g instanceof jQuery)&&!$.isArray(g))e.prototype[f]=$$WP.Utilities.copyObject(g);else e.prototype[f]=g}e.prototype._constructor=e;e.prototype._constructors=$$WP.Utilities.copyObject(d.prototype._constructors);e.prototype._constructors.push(d);e.isInstance=c};$$WP.BaseObject=function WP$BaseObject(){};$$WP.BaseObject._className="WP$BaseObject";$$WP.BaseObject._inheritedMethods={};$$WP.BaseObject.prototype={_constructor:$$WP.BaseObject,_constructors:[]}})()