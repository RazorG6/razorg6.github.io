(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.UI = templates.UI || {};templates['Subway'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UI.Subway",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"subway noprint\"><div class=\"nav\"><a class=\"scrollleft\" href=\"#\" role=\"button\" aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ScrollLeft",{"name":"getDisplayString","hash":{},"data":data}))
    + "\"></a><a class=\"scrollright\" href=\"#\" role=\"button\" aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ScrollRight",{"name":"getDisplayString","hash":{},"data":data}))
    + "\"></a></div><div class=\"stopWrapper\"><div class=\"line dotnet extraWide\" aria-hidden=\"true\">"
    + ((stack1 = container.invokePartial(partials.SubwayLine,depth0,{"name":"SubwayLine","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><div class=\"stops dotnet extraWide\">"
    + ((stack1 = container.invokePartial(partials.SubwayStop,depth0,{"name":"SubwayStop","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div></div></div><span id=\"subwayStepFocusTarget\" class=\"clearlabel\" tabindex=\"-1\"></span><div class=\"subwayStep\"></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DrawNavButtons : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"formbuttons"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NavButtonAlignment : depth0),0,{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><p class=\"button buttoncheck pullback hidden unchecked\" id=\"subway-verify-container\" aria-checked=\"false\"><input type=\"checkbox\" class=\"buttoncheck\" id=\"subway-verify-checkbox\" onkeypress=\"return event.keyCode != 13;\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.VerifyCheckboxWithValidation : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label for=\"subway-verify-checkbox\" class=\"buttoncheck required\"><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NavigationVerifyCheckbox",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><span class=\"requiredStar\" aria-hidden=\"true\">&nbsp;</span></label></p><div class=\"messagedisplay hidden\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.VerifyCheckboxWithValidation : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><div class=\"alert validationmessage hidden\" id=\"subway-verify-warning\">";
  stack1 = ((helper = (helper = helpers.ifNotMobile || (depth0 != null ? depth0.ifNotMobile : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"ifNotMobile","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.ifNotMobile) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div></div><input type=\"button\" class=\"button previousstep jqHidden\" id=\"subway-back\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NavigationBackButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><input type=\"button\" class=\"button nextstep jqHidden\" id=\"subway-next\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NavigationNextButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + " /><input type=\"button\" class=\"button continuelater jqHidden\" id=\"subway-finish-later\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NavigationFinishLaterButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><input type=\"button\" class=\"button completeworkflow jqHidden\" id=\"subway-submit\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NavigationSubmitButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + " />"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanCancel : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    return " right";
},"4":function(container,depth0,helpers,partials,data) {
    return " data-validation-settings='{\"required\": true}' data-name=\"VerifyCheckbox\" ";
},"6":function(container,depth0,helpers,partials,data) {
    return " data-message-display-for=\"VerifyCheckbox\"";
},"8":function(container,depth0,helpers,partials,data) {
    return "<img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/warning.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" class=\"yield\" alt=\"\" /><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"InputRequired","Core.FormValidation",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<input type=\"button\" class=\"button cancelworkflow jqHidden ";
  stack1 = ((helper = (helper = helpers.ifMobile || (depth0 != null ? depth0.ifMobile : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"ifMobile","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.ifMobile) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" id=\"subway-cancel\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NavigationCancelButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"11":function(container,depth0,helpers,partials,data) {
    return "fullwidth";
},"usePartial":true,"useData":true});})();