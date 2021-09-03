(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.Shared = templates.Shared || {};templates['VerifyCreditCardExtraInfo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div><span id=\"billingAddressLabel\" class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"billingAddr",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div><div class=\"pmtSummaryCenter\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AddressInfo : depth0)) != null ? stack1.Street : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AddressInfo : depth0)) != null ? stack1.CityStateZipString : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HomePhone : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Email : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p id=\"billingAddress-address\" class=\"VerifyCreditCardField\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.AddressInfo : depth0)) != null ? stack1.Street : stack1), depth0))
    + "</p>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p id=\"billingAddress-csz\" class=\"VerifyCreditCardField\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.AddressInfo : depth0)) != null ? stack1.CityStateZipString : stack1), depth0))
    + "</p>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p id=\"billingAddress-phone\" class=\"VerifyCreditCardField\">"
    + container.escapeExpression(((helper = (helper = helpers.HomePhone || (depth0 != null ? depth0.HomePhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"HomePhone","hash":{},"data":data}) : helper)))
    + "</p>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p id=\"billingAddress-email\" class=\"VerifyCreditCardField\">"
    + container.escapeExpression(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Email","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});})();