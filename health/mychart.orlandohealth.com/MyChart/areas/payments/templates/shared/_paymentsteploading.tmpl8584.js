(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Payments = templates.Payments || {};templates = templates.Shared = templates.Shared || {};templates['_PaymentStepLoading'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"PaymentMethodEntryStepLoading\" class=\"Step pmtStep\">"
    + container.escapeExpression((helpers.ajaxSpinner || (depth0 && depth0.ajaxSpinner) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),1,{"name":"ajaxSpinner","hash":{},"data":data}))
    + "</div>";
},"useData":true});})();