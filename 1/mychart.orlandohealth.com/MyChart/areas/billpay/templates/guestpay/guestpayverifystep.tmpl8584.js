(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.GuestPay = templates.GuestPay || {};templates['GuestPayVerifyStep'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"guestPayVerifyStep\" class=\"pmtStep\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<h2 class=\"header\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"almostDone",{"name":"getStringResource","hash":{},"data":data}))
    + "</h2><div id=\"verifyText\" class=\"PaymentTopPageText\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1)) != null ? stack1.PaymentMethodIsCard : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"grid\"><p class=\"separator\" /><div class=\"row\"><div class=\"paymentSummarySection col-4\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.Shared.VerifySingleAccountPayment",((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.Details : stack1),{"name":"addTemplate","hash":{},"data":data}))
    + "</div><p class=\"dividerX\" />"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1)) != null ? stack1.PaymentMethodIsCard : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"paymentSummarySection col-4\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.Shared.VerifyPaymentMethod",((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1),{"name":"addTemplate","hash":{},"data":data}))
    + "</div></div><p class=\"separator\" /></div><div class=\"pmtLoadingOverlay hidden\">"
    + container.escapeExpression((helpers.ajaxSpinner || (depth0 && depth0.ajaxSpinner) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),1,{"name":"ajaxSpinner","hash":{},"data":data}))
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"verifyCardDetails",{"name":"getStringResource","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"verifyAccountDetails",{"name":"getStringResource","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1)) != null ? stack1.HaveAddressInfo : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"verifyBillingInfo\" class=\"paymentSummarySection col-4\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.Shared.VerifyCreditCardExtraInfo",((stack1 = ((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1)) != null ? stack1.Address : stack1),{"name":"addTemplate","hash":{},"data":data}))
    + "</div><p class=\"dividerX\" />";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1)) != null ? stack1.HaveAccountInfo : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"verifyAccountInfo\" class=\"paymentSummarySection col-4\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.Shared.VerifyBankAccountExtraInfo",((stack1 = (depth0 != null ? depth0.PaymentPostingDataModel : depth0)) != null ? stack1.PaymentMethodInfo : stack1),{"name":"addTemplate","hash":{},"data":data}))
    + "</div><p class=\"dividerX\" />";
},"useData":true});})();