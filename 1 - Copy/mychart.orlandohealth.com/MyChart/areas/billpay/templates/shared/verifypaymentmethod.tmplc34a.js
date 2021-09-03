(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.Shared = templates.Shared || {};templates['VerifyPaymentMethod'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"pmtMethod",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><div class=\"confirm-paymentMethodData\"><div class=\"confirm-icon inlineBlock\"><img id=\"Confirm-SelectedBrandLogo\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.ImageSource || (depth0 != null ? depth0.ImageSource : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ImageSource","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.ImageAlt || (depth0 != null ? depth0.ImageAlt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ImageAlt","hash":{},"data":data}) : helper)))
    + "\" /></div><div class=\"confirm-paymentMethodFields inlineBlock pmtSummaryTextAlignLeft\"><p id=\"spanVerifyName\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Nickname : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</p><p id=\"spanVerifyLast4\" class=\"subtle\">x"
    + container.escapeExpression(((helper = (helper = helpers.LastFour || (depth0 != null ? depth0.LastFour : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"LastFour","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PaymentMethodIsCard : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.Nickname || (depth0 != null ? depth0.Nickname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Nickname","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PaymentMethodIsCard : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.CardholderName || (depth0 != null ? depth0.CardholderName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CardholderName","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.BankAccountFullName || (depth0 != null ? depth0.BankAccountFullName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BankAccountFullName","hash":{},"data":data}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p id=\"spanVerifyExp\" class=\"subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.ExpDisplayString || (depth0 != null ? depth0.ExpDisplayString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ExpDisplayString","hash":{},"data":data}) : helper)))
    + "</p>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p id=\"spanVerifyAccountType\" class=\"subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.BankAccountTypeTitle || (depth0 != null ? depth0.BankAccountTypeTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BankAccountTypeTitle","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});})();