$$WPComp.VB6Component=function WPComp$VB6Component(a){var b=this;a=a||{};b._componentClick=a._componentClick||function(){};b.Url=makeLink("inside.asp?mode="+(a.Mode||b.Mode)+"&co=true");b.DontSetH2AsTitle=a.DontSetH2AsTitle||false;b.Components$ViewComponent(a)};$$WPComp.VB6Component.prototype={Mode:"",Class:"VB6Component",DontSetH2AsTitle:false,html:function WPComp$VB6Component$html(b){var a=this,d=[];d=a.getInfoButtonData(b);b=a.cleanResponse(b);var e=dangerou$.parseHtml("<div>"+b+"</div>"),c=e.find("h2");if(!a.DontSetH2AsTitle)if(c.length===1){a.setTitle(c.text(),a._Title.Buttons,a._Title.Image,a.IsClosable);c.remove()}a.Components$ViewComponent$html(e.html());a.setInfoButtonData(d)},dispose:function WPComp$VB6Component$dispose(a){if(this._isDisposed)return;var b=this.$container.find("form");b.each(function(){if(WP.Validators)delete WP.Validators.Forms[this.id]});this.Components$ViewComponent$dispose(a)},cleanResponse:function WPComp$VB6Component$cleanResponse(c){var b=dangerou$.parseHtml(c),a=b.find("#main").html();return a},getInfoButtonData:function WPComp$VB6Component$getInfoButtonData(b){var a=0,h=0,c=0,d=[],e,g,i,f,l=90,j=4,k=14;do{a=b.indexOf('<script type="text/javascript">var info = WP.Controls.InfoButton',h);h=b.indexOf("<\/script>",a);if(a!==-1){e=b.indexOf("HTMLUnencode",a);g=b.substring(a+l,e-j);i=b.indexOf('"), "popupparentdiv',a);f=b.substring(e+k,i);d[c]={};d[c].id=g;d[c].info=f;c=c+1}}while(a!==-1);return d},setInfoButtonData:function WPComp$VB6Component$setInfoButtonData(a){var b=0;if(a!==null&&a.length!==null){for(b=0;b<a.length;b++)$afe.select("#"+a[b].id).safeAttr("data-info",a[b].info).safeAttr("data-id","infobutton");this.setInfoButtonBubbles()}},setInfoButtonBubbles:function WPComp$VB6Component$setInfoButtonBubbles(){var b=null,c=$afe.select("div[data-id='infobutton']"),d,a;if(c.length>0)for(a=0;a<c.length;a++)if($afe.select("#"+c[a].id+" .popupiconcontainer").length===0){d=$afe.select("#"+c[a].id);WP.Controls.InfoButton(document.getElementById(c[a].id),HTMLUnencode(d.safeAttr("data-info")),"popupparentdiv_"+c[a].id,b,"",b,b,b,b,b)}}};$$WPComp.VB6Component.extend("Components.ViewComponent");$$WPUtil.guaranteeExistence($$WPUtil,"ComponentFactory.HomePage");$$WPUtil.ComponentFactory.vb6Mode=function CF$byMode(c,b,a){a=a||{};a.Mode=c+"&"+b;a._mode=c;a._otherParameters=b;a.copy=a.copy||function(a){a.Html=a.Html||this.$content.get(0).innerHTML;return $$WPUtil.ComponentFactory.vb6Mode(this._mode,this._otherParameters)};return new $$WPComp.VB6Component(a)};$$WPUtil.ComponentFactory.HomePage.quickLinks=function CF$quickLinks(a){a=a||{};a.Class=a.Class||"";a.Class+=" quickLinks list hoverable";a.copy=a.copy||function(a){a.Html=a.Html||this.$content.get(0).innerHTML;return $$WPUtil.ComponentFactory.HomePage.quickLinks(a)};a.html=function(b){var a=this;$$WP.Components.VB6Component.prototype.html.apply(a,[b]);if(!a.$content.find("#links").children("a").length)a.hide();else!a.$container.hasClass("vertical")&&$$WP.Behaviors.matchRowHeights(a.$content,"#links a")};return $$WPUtil.ComponentFactory.vb6Mode("","widgetName=quickLinks",a)};$$WPUtil.ComponentFactory.HomePage.news=function CF$news(a){a=a||{};a.Class=a.Class||"";a.Class+=" news";a.copy=a.copy||function(a){a.Html=a.Html||this.$content.get(0).innerHTML;return $$WPUtil.ComponentFactory.HomePage.news(a)};a.Components$VB6Component$cleanResponse=$$WPComp.VB6Component.prototype.cleanResponse;a.cleanResponse=function(a){a=this.Components$VB6Component$cleanResponse(a).replace(/ id="[^"]+"/gim,"");var b=a.indexOf("<!-- Start Section Block -->")+28;if(b>27)a=a.substring(b,a.indexOf("<!-- End Section Block -->",b));return a};return $$WPUtil.ComponentFactory.vb6Mode("","widgetName=staticNews",a)};$$WPUtil.ComponentFactory.HomePage.alerts=function CF$alerts(a){a=a||{};a.Class=a.Class||"";a.Class+=" Alerts";a.SupportAnimations=a.SupportAnimations!==false;a.copy=a.copy||function CF$alerts$copy(a){a.Html=a.Html||this.$content.get(0).innerHTML;return $$WPUtil.ComponentFactory.HomePage.alerts(a)};a.Components$VB6Component$html=$$WPComp.VB6Component.prototype.html;a.html=a.html||function CF$alerts$html(e){var a=this;a.Components$VB6Component$html(e);if(a.$content.find("#alertspanel-autowaitlist").length>0||a.$content.find("#alertspanel-expiredautowaitlist").length>0)$$WPUtil.ComponentFactory.HomePage.AutoWaitList(0,null);else a.$content.find("a").length===0&&a.$container.addClass("noinfo");var b=a.$content.find("[data-alertid='alertspanel-notificationreview']");if(b.length>0){var c=JSON.parse($(b[0]).html());$$WPUtil.guaranteeExistence($$WP,"Preferences.NotificationsReviewAlertComponent");var d=new $$WP.Preferences.NotificationsReviewAlertComponent(c);$$WPUtil.ComponentFactory.HomePage.ShowNotificationAlertAsPopup(d);a.$content.find("#alerts div").length===1&&a.hide()}};return $$WPUtil.ComponentFactory.vb6Mode("","widgetName=alerts",a)};$$WPUtil.ComponentFactory.HomePage.ShowNotificationAlertAsPopup=function CF$ShowNotificationAlertAsPopup(a){var b=new $$WPContain.Popup({positioningFunction:$$WPContain.Positions.InsideNearTop,Components:a,IsClosable:!a.Data.emailRequired,TitleText:null,Size:$$WPContain.Popup.SizeEnum.MEDIUM,Class:"notificationreview",BackButtonText:$$WP.Strings.get("AskLaterExitPopup","notifications.notificationalert")});a.show();b.show(true);$$WP.FormValidation.initializeDOMSubtree($afe.select("#updateform"));setupButtoncheck()};$$WPUtil.guaranteeExistence($$WPUtil,"ComponentFactory.Clinical");$$WPUtil.ComponentFactory.Clinical.goals=function CF$goals(b){var a="";b=b||{};b.DontSetH2AsTitle=true;b.Class=b.Class||a;b.Class+=" goalsvb6";b.SupportAnimations=b.SupportAnimations!==false;var c,d,e=b.RegistryID||a;d="section=1&widgetMode=1&registryid="+e;if(e===a)c="goalsreview";else c="mycondition";b.Components$VB6Component$html=$$WPComp.VB6Component.prototype.html;b.html=b.html||function CF$goals$html(t){var e="showing_clicked_goal_details",c="Clinical.Goals",d=this,r,n,o,l,m,q,s=0,f,p,i,j,g,k,h;d.Components$VB6Component$html(t);n=$$WP.Strings.getForTemplate("graphlabel",c);o=$$WP.Strings.getForTemplate("tablelabel",c);l=new $$WPComp.ComplexObjects.Button(n,a,"graphButton selected","graph");m=new $$WPComp.ComplexObjects.Button(o,a,"tableButton","table");q=[l,m];p=new $$WPComp.ComplexObjects.ButtonBar(a,a,"goaltitle",a,a);j=new $$WPComp.ComplexObjects.ButtonBar(a,a,"goalrecentvalue",a,a);k=new $$WPComp.ComplexObjects.ButtonBar(a,a,"goalbuttonlist",$$WPUtil.copyObject(q),$$WPComp.TITLEBARIDENTIFIER);i=$afe.renderTemplate($$WP.Templates.Core.ButtonBar,p);g=$afe.renderTemplate($$WP.Templates.Core.ButtonBar,j);h=$afe.renderTemplate($$WP.Templates.Core.ButtonBar,k);d.$content.safePrepend(h);d.$content.safePrepend(g);d.$content.safePrepend(i);f=$$WP.SimpleTemplates.Anchor({href:"#","class":"focusanchor",name:"goalmaintop",title:$$WP.Strings.get(e,c)});$$WP.Strings.setDisplayText(f,e,c);d.$content.safePrepend(f);loadGraphs();s=b._selectedIndex||0;r=$afe.select(".goalslarge .goalslist").find("[data-index='"+s+"']").safeAttr("id");b._showSelectedGoalGraph(r)};b._componentClick=function(a){b._switchTableGraph(a);return false};return $$WPUtil.ComponentFactory.vb6Mode(c,d,b)};$$WPUtil.ComponentFactory.Clinical.TestResultDetails=function CF$testResults(a){a=a||{};a.DontSetH2AsTitle=true;a.Class=a.Class||"";a.SupportAnimations=a.SupportAnimations!==false;var b,c="labdetail",d=a.RegistryID||"";a.Components$VB6Component$html=$$WPComp.VB6Component.prototype.html;a.Components$VB6Component$cleanResponse=$$WPComp.VB6Component.prototype.cleanResponse;a.cleanResponse=function(c){c=this.Components$VB6Component$cleanResponse(c);var a=dangerou$.parseHtml(c),d=a.filter(".title"),e=a.filter(".cptLink"),b=a.filter(".tabcontainer");b.removeClass("tabcontainer");d.find("div#assistiveicons").remove();b.find(".navparent").remove();var f=$afe.jq(document.createElement("div")).safeAppend(d).safeAppend(e).safeAppend(b);return f.html()};return $$WPUtil.ComponentFactory.vb6Mode(c,b,a)}