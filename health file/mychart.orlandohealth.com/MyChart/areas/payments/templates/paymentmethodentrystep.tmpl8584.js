(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Payments = templates.Payments || {};templates['PaymentMethodEntryStep'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"PaymentMethodEntryStep\" class=\"Step pmtStep\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.CardSelection",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div id=\"divHeaderSection\"><div class=\"section\"><div class=\"content\"><h2 id=\"pmtMethodHeader\" class=\"header\">"
    + container.escapeExpression(((helper = (helper = helpers.HeaderText || (depth0 != null ? depth0.HeaderText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"HeaderText","hash":{},"data":data}) : helper)))
    + "</h2></div></div></div><div id=\"divStoredPaymentMethodSection\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.StoredPaymentMethodsSection",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UseIFrame : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.ajaxSpinner || (depth0 != null ? depth0.ajaxSpinner : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ajaxSpinner","hash":{},"data":data}) : helper)))
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.ExternalPayment",depth0,{"name":"addTemplate","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.NewPaymentMethodForms",(depth0 != null ? depth0.NewPmtMethodModel : depth0),{"name":"addTemplate","hash":{},"data":data}));
},"useData":true});})();