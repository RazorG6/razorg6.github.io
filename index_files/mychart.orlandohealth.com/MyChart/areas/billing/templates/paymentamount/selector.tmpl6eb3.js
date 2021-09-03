(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Billing = templates.Billing || {};templates = templates.Shared = templates.Shared || {};templates = templates.PaymentAmount = templates.PaymentAmount || {};templates['Selector'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Billing.Shared.PaymentAmount",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"flatradiogrouper payment_amount_selector\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"alert jqHidden\" id=\"payment_amount_error\" aria-live=\"polite\" role=\"alert\"></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p class=\"flatradio container\" role=\"none\"><input class=\"flatradio\" name=\"payment_option\" type=\"radio\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"payment_amount_options_"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDisabled : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " data-amount=\""
    + container.escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" data-amount-type=\""
    + container.escapeExpression(((helper = (helper = helpers.AmountType || (depth0 != null ? depth0.AmountType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AmountType","hash":{},"data":data}) : helper)))
    + "\"/><label class=\"flatradio prettylabel "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsOtherAmount : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" for=\"payment_amount_options_"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><span "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsOtherAmount : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"option_label label_main\">"
    + container.escapeExpression(((helper = (helper = helpers.ContainerLabel || (depth0 != null ? depth0.ContainerLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ContainerLabel","hash":{},"data":data}) : helper)))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsOtherAmount : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "</label></p>";
},"2":function(container,depth0,helpers,partials,data) {
    return "required";
},"4":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "wrap";
},"8":function(container,depth0,helpers,partials,data) {
    return "id=\"option_label_other\"";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"option_amount alignEnd other_option\"><input class=\"other_option_input\" type=\"text\" min=\"0\" max=\"999999999.99\" inputmode=\"decimal\" data-value=\"\" aria-hidden=\"true\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.ContainerLabel || (depth0 != null ? depth0.ContainerLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ContainerLabel","hash":{},"data":data}) : helper)))
    + "\"/></span>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<span class=\"option_amount alignEnd label_main\">"
    + container.escapeExpression((helpers.numberAsCurrency || (depth0 && depth0.numberAsCurrency) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Amount : depth0),true,{"name":"numberAsCurrency","hash":{},"data":data}))
    + "</span>";
},"useData":true});})();