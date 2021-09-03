(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Payments = templates.Payments || {};templates = templates.Shared = templates.Shared || {};templates['EditNicknamePopup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"EditTokenPopUp\" data-evpId=\""
    + container.escapeExpression(((helper = (helper = helpers.evpid || (depth0 != null ? depth0.evpid : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"evpid","hash":{},"data":data}) : helper)))
    + "\" data-token=\""
    + container.escapeExpression(((helper = (helper = helpers.token || (depth0 != null ? depth0.token : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"token","hash":{},"data":data}) : helper)))
    + "\" data-pageId=\""
    + container.escapeExpression(((helper = (helper = helpers.pageid || (depth0 != null ? depth0.pageid : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageid","hash":{},"data":data}) : helper)))
    + "\"><label for=\"EditNicknameField\" id=\"EditNicknameLabel\">"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "</label><input type=\"text\" id=\"EditNicknameField\" maxlength=\"30\" data-id=\"editNicknameField\" value=\""
    + container.escapeExpression(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"default","hash":{},"data":data}) : helper)))
    + "\"/><div id=\"CardEntry-Nickname-Edit-Error\" class=\"CardEntryError alert hidden\"><span class=\"clearlabel\">"
    + container.escapeExpression(((helper = (helper = helpers.errorTitle || (depth0 != null ? depth0.errorTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorTitle","hash":{},"data":data}) : helper)))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.errorText || (depth0 != null ? depth0.errorText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorText","hash":{},"data":data}) : helper)))
    + "</div><ul role=\"presentation\" class=\"buttons\"><li role=\"presentation\"><a href=\"#\" id=\"Dialog-Save\" class=\"button completeworkflow editNicknameSave\" role=\"button\" data-id=\"save\">"
    + container.escapeExpression(((helper = (helper = helpers.save || (depth0 != null ? depth0.save : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"save","hash":{},"data":data}) : helper)))
    + "</a></li><li role=\"presentation\"><a href=\"#\" id=\"Dialog-GoBack\" class=\"button\" role=\"button\" data-id=\"goBack\">"
    + container.escapeExpression(((helper = (helper = helpers.goBack || (depth0 != null ? depth0.goBack : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"goBack","hash":{},"data":data}) : helper)))
    + "</a></li></ul></div>";
},"useData":true});})();