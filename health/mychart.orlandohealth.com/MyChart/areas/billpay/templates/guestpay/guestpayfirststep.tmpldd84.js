(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.GuestPay = templates.GuestPay || {};templates['GuestPayFirstStep'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"divPmtAmount\" class=\"Step\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.GuestPay.GuestPayAccountLookup",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.GuestPay.GuestPaySignUpPrompt",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.GuestPay.GuestPaySignInPrompt",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + "<div id=\"paymentInfoContainer\" class=\"hidden\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.GuestPay.ChooseBillingSystem",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + "<div class=\"section\" id=\"divPaymentAmounts\"><div class=\"content\"><div class=\"StepPreTextSection\"></div><div id=\"GuarantorBalanceInfo\" class=\"GuarantorInfo\"><span id=\"serviceAreaExplanation\">"
    + ((stack1 = ((helper = (helper = helpers.StepPreText || (depth0 != null ? depth0.StepPreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"StepPreText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></div><div id=\"newActivityContainer\" class=\"BillingWarningBox softwarning\"><p id=\"newActivity\">"
    + container.escapeExpression(((helper = (helper = helpers.NewActivityString || (depth0 != null ? depth0.NewActivityString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NewActivityString","hash":{},"data":data}) : helper)))
    + "</p></div><h2 id=\"AmountSectionHeader\" class=\"header\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"chooseAmountStep",{"name":"getStringResource","hash":{},"data":data}))
    + "</h2><div class=\"grid\"><div class=\"row\"><div class=\"col-6\" id=\"paymentAmountContainer\"></div></div></div><div aria-live=\"polite\"><div tabindex=\"0\" id=\"divOverpaymentWarning\" class=\"BillingWarningBox softwarning hidden\"><p>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"messageOverpayment",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div></div></div></div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});})();