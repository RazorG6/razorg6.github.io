(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.Shared = templates.Shared || {};templates['VerifyBankAccountExtraInfo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RoutingNumber : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AccountState : depth0)) != null ? stack1.Title : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DriversLicense : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"VerifyBankAccountField\"><span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"routingNo",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><p class=\"GuarantorValue\" id=\"verifyRoutingNumber\">"
    + container.escapeExpression(((helper = (helper = helpers.RoutingNumber || (depth0 != null ? depth0.RoutingNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RoutingNumber","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"VerifyBankAccountField\"><span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"bankAcctState",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><p class=\"GuarantorValue\" id=\"verifyRoutingNumber\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.AccountState : depth0)) != null ? stack1.Title : stack1), depth0))
    + "</p></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"VerifyBankAccountField\"><span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"licenseNo",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><p class=\"GuarantorValue\" id=\"verifyRoutingNumber\">"
    + container.escapeExpression(((helper = (helper = helpers.DriversLicense || (depth0 != null ? depth0.DriversLicense : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DriversLicense","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"useData":true});})();