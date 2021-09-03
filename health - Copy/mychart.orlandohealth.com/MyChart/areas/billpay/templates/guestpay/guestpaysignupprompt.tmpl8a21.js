(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.GuestPay = templates.GuestPay || {};templates['GuestPaySignUpPrompt'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"divMyChartPrompt\" class=\"MyChartPromptBox hidden\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.PayAsGuest",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"signUpPrompt",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div class=\"MyChartPromptButtonBox\"><a id=\"btnCreateAccount\" class=\"button autowidth multi otherbutton\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"createAccountHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "\" aria-describedby=\"btnCreateAccount-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"createAccount",{"name":"getStringResource","hash":{},"data":data}))
    + "</a><a id=\"btnContinueWithoutAccount\" class=\"button multi completeworkflow autowidth\" tabindex=\"0\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"continueNoAccountHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "\"  aria-describedby=\"btnContinueWithoutAccount-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"continueAsGuest",{"name":"getStringResource","hash":{},"data":data}))
    + "</a><div class=\"hidden\" id=\"btnCreateAccount-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"createAccountHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div class=\"hidden\" id=\"btnContinueWithoutAccount-Title\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"continueNoAccountHelp",{"name":"getStringResource","hash":{},"data":data}))
    + "</div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});})();