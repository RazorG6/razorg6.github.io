(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Payments = templates.Payments || {};templates = templates.Shared = templates.Shared || {};templates['ExternalPayment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"AddPmtMethodIFrame\"><div id=\"iFrameLoadingIndicator\" class=\"hidden pmtLoadingOverlay "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsMobileOptimized : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.ajaxSpinner || (depth0 && depth0.ajaxSpinner) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),1,{"name":"ajaxSpinner","hash":{},"data":data}))
    + "</div><h3 id=\"extPmtPageHeader\" class=\"hidden\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCardHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</h3><iframe id=\"extPmtPageFrame\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsMobileOptimized : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" src=\"about:blank\" sandbox=\"allow-forms allow-scripts allow-same-origin\" frameborder=\"0\" scrolling=\"no\"></iframe></div>";
},"1":function(container,depth0,helpers,partials,data) {
    return "mobileExtPmtPage";
},"useData":true});})();