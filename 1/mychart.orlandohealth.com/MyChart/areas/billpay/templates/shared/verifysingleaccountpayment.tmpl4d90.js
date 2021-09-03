(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.Shared = templates.Shared || {};templates['VerifySingleAccountPayment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"pmtAmt",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><div class=\"PaymentAmountVerify\" id=\"divVerifyPmtAmt\">"
    + container.escapeExpression((helpers.numberAsCurrency || (depth0 && depth0.numberAsCurrency) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0["0"] : depth0)) != null ? stack1.PaymentAmount : stack1),true,{"name":"numberAsCurrency","hash":{},"data":data}))
    + "</div><span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"acctNum",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0["0"] : depth0)) != null ? stack1.DisplayHospitalAccount : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span id=\"verifyGuarantorNumber\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0["0"] : depth0)) != null ? stack1.HospitalAccountId : stack1), depth0))
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span id=\"verifyGuarantorNumber\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0["0"] : depth0)) != null ? stack1.GuarantorAccountId : stack1), depth0))
    + "</span>";
},"useData":true});})();