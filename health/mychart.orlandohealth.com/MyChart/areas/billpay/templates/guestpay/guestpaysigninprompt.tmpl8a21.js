(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.GuestPay = templates.GuestPay || {};templates['GuestPaySignInPrompt'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"divSigninPrompt\" class=\"MyChartPromptBox hidden\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.PayAsGuest",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"signInPrompt",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div class=\"MyChartPromptButtonBox\"><a id=\"btnSignIn\" class=\"button autowidth multi\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"signInHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "\" href=\"#\" aria-describedby=\"btnSignIn-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"signIn",{"name":"getStringResource","hash":{},"data":data}))
    + "</a><a id=\"btnContinueWithoutSignIn\" class=\"button autowidth multi completeworkflow\" tabindex=\"0\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"continueNoSignInHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "\" aria-describedby=\"btnContinueWithoutSignIn-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"continueAsGuest",{"name":"getStringResource","hash":{},"data":data}))
    + "</a><div class=\"hidden\" id=\"btnSignIn-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"signInHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div class=\"hidden\" id=\"btnContinueWithoutSignIn-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"continueNoSignInHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "</div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});})();