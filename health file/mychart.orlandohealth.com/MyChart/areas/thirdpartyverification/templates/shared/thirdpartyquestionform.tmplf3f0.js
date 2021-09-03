(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.ThirdPartyVerification = templates.ThirdPartyVerification || {};templates['ThirdPartyQuestionForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<form id=\"thirdparty_questions\" method=\"post\" autocomplete=\"off\" action=\"/Signup/ThirdPartyVerification/SubmitKBAAnswers\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Questions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</form>";
},"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<fieldset id=\"question"
    + container.escapeExpression(((helper = (helper = helpers.RelativeOrder || (depth0 != null ? depth0.RelativeOrder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RelativeOrder","hash":{},"data":data}) : helper)))
    + "\"  class=\"questionContainer hidden\"><legend class=\"question\">"
    + container.escapeExpression(((helper = (helper = helpers.Text || (depth0 != null ? depth0.Text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Text","hash":{},"data":data}) : helper)))
    + "</legend><div class=\"answers\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Selections : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a id=\"next"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"button disabled\" href=\"#1\">__Next__</a></div><input id=\"questionRelativeOrder_"
    + container.escapeExpression(((helper = (helper = helpers.RelativeOrder || (depth0 != null ? depth0.RelativeOrder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RelativeOrder","hash":{},"data":data}) : helper)))
    + "\" name=\"questionRelativeOrder\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.RelativeOrder || (depth0 != null ? depth0.RelativeOrder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RelativeOrder","hash":{},"data":data}) : helper)))
    + "\" class=\"hidden\" type=\"hidden\"/></fieldset>";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper;

  return "<label for=\"question"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].RelativeOrder : depths[1]), depth0))
    + "selection"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</label><input id=\"question"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].RelativeOrder : depths[1]), depth0))
    + "selection"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" type=\"radio\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].RelativeOrder : depths[1]), depth0))
    + "Selections\"/>";
},"useData":true,"useDepths":true});})();