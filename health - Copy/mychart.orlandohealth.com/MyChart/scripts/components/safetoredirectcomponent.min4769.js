$$WPComp.SafeToRedirectComponent=function WPPop$SafeToRedirectPopup(b){var a=this;$$WPComp.applySettings(b,a);if(typeof a.callback!=="function")throw"A callback function is required for SafetoRedirectPopup";a.CallbackContext=a.CallbackContext||a;a.Components$Component({});if(!WP.Events.showBeforeUnloadMessage()){WP.Events.beforeUnloadHold=true;a.callback.apply(a.CallbackContext,[true]);a._alreadyExecutedCallback=true;a.dispose();return}a.addEventListener("click",a.clickSafeToRedirect)};$$WPComp.SafeToRedirectComponent.prototype={IsClosable:true,ToolbarButtons:[new $$WPComp.ComplexObjects.Button($$WP.Strings.getForTemplate("StayButtonText","Global.SafeToRedirectPopup"),null,"","stay"),new $$WPComp.ComplexObjects.Button($$WP.Strings.getForTemplate("LeaveButtonText","Global.SafeToRedirectPopup"),null,"inlinedelete","leave")],TitleText:$$WP.Strings.getForTemplate("Title","Global.SafeToRedirectPopup"),Html:$$WP.Strings.getForTemplate("Message","Global.SafeToRedirectPopup"),clickSafeToRedirect:function WPPop$SafeToRedirectPopup$_click(b){var a=this;if(!b.dataId)return;WP.Events.beforeUnloadHold=b.dataId===$$WPComp.TOOLBARIDENTIFIER+"leave";a._alreadyExecutedCallback=true;a.callback.apply(a.CallbackContext,[WP.Events.beforeUnloadHold]);a.dispose(true);return false},show:function(){if(this._alreadyExecutedCallback){this.dispose(true);return}this.Components$Component$show();WP.Events.SafeToUnloadWarningDisplayed=true},dispose:function(b){var a=this;if(a._isDisposed)return;if(!a._alreadyExecutedCallback){a._alreadyExecutedCallback=true;a.callback.apply(a.CallbackContext,[false])}a.Components$Component$dispose(b);WP.Events.SafeToUnloadWarningDisplayed=false}};$$WPComp.SafeToRedirectComponent.canceledRedirect=function WPPop$SafeToRedirectPopup$canceledRedirect(){delete WP.Events.beforeUnloadHold};$$WPComp.SafeToRedirectComponent.extend("Components.Component")