/*! Copyright (c) Epic Systems Corporation 2014 */
$$WPUtil.guaranteeExistence($$WP,"Controllers");var $$WPControl=$$WP.Controllers;$$WPControl.Controller=function WPControl$Controller(b){var a=this;a.WP$BaseObject();if($$WPUtil.IsNullOrEmpty(b))b="";a._ViewInstance=b;a._GUID=a._GUID+a._ViewInstance};$$WPControl.Controller.prototype={_GUID:"5AF32D57-2448-43E5-854F-45E1F1D38193_Controller",_ViewInstance:"",proxify:function WPControl$Controller$proxify(){var b=this,c,d,a;d=arguments||[];for(c=0;c<d.length;c++){a=d[c];if(typeof b[a]!=="function"){$$WP.Debug.logError(a+" is not a function. Cannot proxify it.");continue}b[a]=$.proxy(b[a],b)}}};$$WPControl.Controller.extend($$WP.BaseObject,"WP$Controllers$Controller");$$WP.Debug.UnitTest=$$WP.Debug.UnitTest||{};$$WP.Debug.UnitTest.tests=$$WP.Debug.UnitTest.tests||[];$$WP.Debug.UnitTest.tests.push(function UnitTests$Controller(){var d="body",e;e=$$WP.Debug.UnitTest.assert;var b,a,c;b=function(){};b.prototype={callbackInvoked:false,onTest:function(){this.callbackInvoked=true},onTest2:function(){this.callbackInvoked=true},onTest3:function(){this.callbackInvoked=true}};b.extend("Controllers.Controller");c="unittest_controller_proxify";a=new b;a.proxify("onTest","onTest2","onTest3");e(a.hasOwnProperty("onTest")&&a.hasOwnProperty("onTest2")&&a.hasOwnProperty("onTest3"),"Proxify did not copy all of the methods to the instance object.");$afe.select(d).on(c,a.onTest);$afe.select(d).trigger(c);e(a.callbackInvoked,"Proxified method was not invoked as an event callback");a.callbackInvoked=false;$afe.select(d).off(c,a.onTest);a=null})