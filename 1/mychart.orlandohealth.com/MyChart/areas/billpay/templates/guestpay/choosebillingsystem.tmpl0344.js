(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.BillPay = templates.BillPay || {};templates = templates.GuestPay = templates.GuestPay || {};templates['ChooseBillingSystem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"divChooseAccount\" class=\"Step hidden\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"BillPay.MakePayment",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<fieldset><div class=\"grid\"><div class=\"row\"><div class=\"col-12\"><div class=\"GuarantorInfo\" id=\"GuarantorBalanceInfoToggle\"><span id=\"serviceAreaExplanationToggle\"></span></div><h2 class=\"header\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"selectAcctType",{"name":"getStringResource","hash":{},"data":data}))
    + "</h2></div></div><div class=\"row\"><div class=\"col-3\"><span class=\"tbContainer accountSelectOptionContainer\"><input type=\"radio\" class=\"clearradio togglebutton\" id=\"accountSelectHB\" name=\"accountSelect\" /><label for=\"accountSelectHB\" class=\"togglebutton accountSelectLabel\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/hospital.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"hb",{"name":"getStringResource","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"/><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"hospital",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></label></span></div><div class=\"col-3\"><span class=\"tbContainer accountSelectOptionContainer\"><input type=\"radio\" class=\"clearradio togglebutton\" id=\"accountSelectPB\" name=\"accountSelect\" /><label for=\"accountSelectPB\" class=\"togglebutton accountSelectLabel\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/provider.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"pb",{"name":"getStringResource","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"/><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"physician",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></label></span></div></div></div></fieldset>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});})();