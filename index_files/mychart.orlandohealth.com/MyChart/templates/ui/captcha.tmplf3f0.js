(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.UI = templates.UI || {};templates['Captcha'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"mychart-captcha\" class=\"mychart-captcha"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Class : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-name=\"mychart-captcha\" "
    + ((stack1 = ((helper = (helper = helpers.validationRequiredAttribute || (depth0 != null ? depth0.validationRequiredAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"validationRequiredAttribute","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "></div>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"mychart-captcha",{"name":"messageDisplay","hash":{},"data":data}));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.Class || (depth0 != null ? depth0.Class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Class","hash":{},"data":data}) : helper)));
},"useData":true});})();