(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.UI = templates.UI || {};templates['SubwayStop'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UI.Subway",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SubwayStops : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideStop : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@STEPNAME@",(depth0 != null ? depth0.Name : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"trainstop"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsVisited : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsFuture : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AnimateIn : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AnimateOut : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Compact : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPreLogin : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.UnclickableSubway),{"name":"unless","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Status : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Status : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Status : depth0),0,{"name":"ifEquals","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@STEPNAME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return " visited";
},"5":function(container,depth0,helpers,partials,data) {
    return " future";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsCurrent : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " now";
},"10":function(container,depth0,helpers,partials,data) {
    return " past";
},"12":function(container,depth0,helpers,partials,data) {
    return " toAdd";
},"14":function(container,depth0,helpers,partials,data) {
    return " toRemove";
},"16":function(container,depth0,helpers,partials,data) {
    return " compact";
},"18":function(container,depth0,helpers,partials,data) {
    return " prelogin";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "data-model-id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "\" data-view-binder-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ViewBinderId), depth0))
    + "\"";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<a "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.UnclickableSubway),{"name":"unless","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " role=\"button\" aria-labelledby=\"stop-description-"
    + container.escapeExpression(((helper = (helper = helpers.Index || (depth0 != null ? depth0.Index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Index","hash":{},"data":data}) : helper)))
    + "\"><span class=\"visualcontent\" aria-hidden=\"true\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"VisitedStep",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><span class=\"icon\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Icon : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" class=\"icon\" /></span><span class=\"trainstation\"></span><span class=\"description\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span></span><span class=\"axcontent hidden\" id=\"stop-description-"
    + container.escapeExpression(((helper = (helper = helpers.Index || (depth0 != null ? depth0.Index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Index","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"VisitedStep",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>";
},"23":function(container,depth0,helpers,partials,data) {
    return "href=\"#\"";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<a "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.UnclickableSubway),{"name":"unless","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " role=\"button\" aria-labelledby=\"stop-description-"
    + container.escapeExpression(((helper = (helper = helpers.Index || (depth0 != null ? depth0.Index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Index","hash":{},"data":data}) : helper)))
    + "\"><span class=\"visualcontent\" aria-hidden=\"true\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CurrentStep",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><span class=\"icon\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Icon : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" class=\"icon\" /></span><span class=\"trainstation\"></span><span class=\"description\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span></span><span class=\"axcontent hidden\" id=\"stop-description-"
    + container.escapeExpression(((helper = (helper = helpers.Index || (depth0 != null ? depth0.Index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Index","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CurrentStep",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<a "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.UnclickableSubway),{"name":"unless","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " role=\"button\" aria-disabled=\"true\" aria-labelledby=\"stop-description-"
    + container.escapeExpression(((helper = (helper = helpers.Index || (depth0 != null ? depth0.Index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Index","hash":{},"data":data}) : helper)))
    + "\"><span class=\"visualcontent\" aria-hidden=\"true\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FutureStep",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><span class=\"icon\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Icon : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" class=\"icon\" /></span><span class=\"trainstation\"></span><span class=\"description\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span></span><span class=\"axcontent hidden\" id=\"stop-description-"
    + container.escapeExpression(((helper = (helper = helpers.Index || (depth0 != null ? depth0.Index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Index","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FutureStep",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>";
},"28":function(container,depth0,helpers,partials,data) {
    return "href=\"#\" tabindex=\"-1\"";
},"useData":true});})();