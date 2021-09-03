(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Payments = templates.Payments || {};templates = templates.Shared = templates.Shared || {};templates['BankAccountFormFields'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div id=\"CheckEntry\" class=\"CheckEntryGroup content\" style=\"display:none\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.CardSelection",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div id=\"CheckEntryFields\" class=\"CardEntry-Field grid compact\"><div class=\"row\"><fieldset role=\"radiogroup\" aria-required=\"true\" class=\"col-12\"><legend class=\"label required\" id=\"CardEntry-BankAccountTypeNumber-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckAccountTypeLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</legend><div id=\"CardEntry-BankAccountTypeNumber\" required=\"true\"><span class=\"tbContainer\"><input id=\"CardEntry-BankAccountTypeNumber-Checking\" class=\"FieldToggle togglebutton clearradio \" name=\"BankAccountTypeNumber\" type=\"radio\" value=\"1\" autocomplete=\"off\" /><label for=\"CardEntry-BankAccountTypeNumber-Checking\" class=\"togglebutton\" id=\"CardEntry-BankAccountTypeNumber-Checking-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckChecking",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></span><span class=\"tbContainer\"><input id=\"CardEntry-BankAccountTypeNumber-Savings\" class=\"FieldToggle togglebutton clearradio\" name=\"BankAccountTypeNumber\" type=\"radio\" value=\"2\" autocomplete=\"off\" /><label for=\"CardEntry-BankAccountTypeNumber-Savings\" class=\"togglebutton\" id=\"CardEntry-BankAccountTypeNumber-Savings-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckSavings",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><span></div><div id=\"CardEntry-BankAccountTypeNumber-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></div></fieldset></div><div class=\"CardEntry-Field row\"><div class=\"col-3\"><label for=\"CardEntry-BankAccountFirstName\" class=\"required\" id=\"CardEntry-BankAccountFirstName-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"firstNameLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input id=\"CardEntry-BankAccountFirstName\" class=\"FieldInputBox paymentInput fixed\" required=\"true\" maxlength=\"25\" name=\"BankAccountFirstName\" type=\"text\" autocomplete=\"off\" /><p id=\"CardEntry-BankAccountFirstName-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></p></div><div class=\"col-3\"><label for=\"CardEntry-BankAccountLastName\" class=\"required\" id=\"CardEntry-BankAccountLastName-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"lastNameLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input id=\"CardEntry-BankAccountLastName\" class=\"FieldInputBox paymentInput fixed\" required=\"true\" maxlength=\"25\" name=\"BankAccountLastName\" type=\"text\" autocomplete=\"off\" /><p id=\"CardEntry-BankAccountLastName-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></p></div></div><img id=\"imgCheckExample\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images\\check-example.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckExampleAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\"  /><div class=\"CardEntry-Field row\"><div class=\"col-12\"><label for=\"CardEntry-RoutingNumber\" class=\"required\" id=\"CardEntry-RoutingNumber-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckRoutingNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label>";
  stack1 = ((helper = (helper = helpers.ifMobile || (depth0 != null ? depth0.ifMobile : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"ifMobile","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.ifMobile) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<div id=\"RoutingNumberHelpBubble\" class=\"popupiconcontainer HelpImageAfterField\"></div><div class=\"CardImageAfterField hideinmobile\"><img id=\"CardEntry-RoutingNumberValidIcon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images\\requirement_met.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"fieldIsValidAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"noDisp validationImg\" /></div><div id=\"CardEntry-RoutingNumber-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></div></div></div><div class=\"CardEntry-Field row\"><div id=\"CardEntry-AccountNumberActual\" class=\"col-3\"><label for=\"CardEntry-AccountNumber\" class=\"required\" id=\"CardEntry-AccountNumber-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckAccountNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input id=\"CardEntry-AccountNumber\" class=\"FieldInputBox accountNumber paymentInput fixed\" required=\"true\" maxlength=\"40\" name=\"AccountNumber\" spellcheck=\"false\" type=\"text\" autocomplete=\"off\" /><p id=\"CardEntry-AccountNumber-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></p></div><div class=\"col-6\" id=\"AccountValidationDiv\"><label for=\"CardEntry-AccountNumberValidation\" class=\"required\" id=\"CardEntry-AccountNumberValidation-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCheckAccountNumberValidationLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input type=\"text\" class=\"FieldInputBox accountNumber disableCopyPaste paymentInput fixed\" id=\"CardEntry-AccountNumberValidation\" name=\"AccountNumberValidation\" required=\"true\" spellcheck=\"false\" /><div id=\"AccountNumberHelpBubble\" class=\"popupiconcontainer HelpImageAfterField\"></div><div class=\"CardImageAfterField hideinmobile\"><img id=\"CardEntry-AccountNumberValidIcon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images\\requirement_met.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"fieldIsValidAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"noDisp validationImg\" /></div><p id=\"CardEntry-AccountNumberValidation-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></p></div></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.BankAccountExtraFields : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    return "<input id=\"CardEntry-RoutingNumber\" class=\"FieldInputBox paymentInput\" required=\"true\" maxlength=\"9\" name=\"RoutingNumber\" type=\"number\" min=\"0\" inputmode=\"numeric\" pattern=\"[0-9]*\" autocomplete=\"off\" />";
},"3":function(container,depth0,helpers,partials,data) {
    return "<input id=\"CardEntry-RoutingNumber\" class=\"FieldInputBox fixed\" required=\"true\" maxlength=\"9\" name=\"RoutingNumber\" spellcheck=\"false\" type=\"text\" autocomplete=\"off\" />";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BankAccountExtraFields : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"CardEntry-Field row\"><div id=\"CardEntry-BankAccountExtraField\" class=\"col-12\"><label for=\"CardEntry-"
    + container.escapeExpression(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Id","hash":{},"data":data}) : helper)))
    + "\" class=\"ghostlabel label "
    + container.escapeExpression(((helper = (helper = helpers.LabelClass || (depth0 != null ? depth0.LabelClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"LabelClass","hash":{},"data":data}) : helper)))
    + "\" id=\"CardEntry-"
    + container.escapeExpression(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Id","hash":{},"data":data}) : helper)))
    + "-Label\">"
    + container.escapeExpression(((helper = (helper = helpers.Label || (depth0 != null ? depth0.Label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Label","hash":{},"data":data}) : helper)))
    + "</label>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDropDown : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "<div id=\""
    + container.escapeExpression(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Id","hash":{},"data":data}) : helper)))
    + "HelpBubble\" class=\"popupiconcontainer HelpImageAfterField\"></div><div id=\"CardEntry-"
    + container.escapeExpression(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Id","hash":{},"data":data}) : helper)))
    + "-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></div></div></div>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<select class=\"FieldInputBox paymentInput fixed\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Required : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"CardEntry-"
    + container.escapeExpression(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.MaxLength : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " name=\""
    + container.escapeExpression(((helper = (helper = helpers.FieldName || (depth0 != null ? depth0.FieldName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldName","hash":{},"data":data}) : helper)))
    + "\" spellcheck=\""
    + container.escapeExpression(((helper = (helper = helpers.IsSpellCheckOn || (depth0 != null ? depth0.IsSpellCheckOn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IsSpellCheckOn","hash":{},"data":data}) : helper)))
    + "\"><option value=\"\"></option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Options : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"8":function(container,depth0,helpers,partials,data) {
    return "required=\"true\"";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "maxlength=\""
    + container.escapeExpression(((helper = (helper = helpers.MaxLength || (depth0 != null ? depth0.MaxLength : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"MaxLength","hash":{},"data":data}) : helper)))
    + "\"";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.Text || (depth0 != null ? depth0.Text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Text","hash":{},"data":data}) : helper)))
    + "</option>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<input class=\"FieldInputBox paymentInput fixed\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Required : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"CardEntry-"
    + container.escapeExpression(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Id","hash":{},"data":data}) : helper)))
    + "\" maxlength=\""
    + container.escapeExpression(((helper = (helper = helpers.MaxLength || (depth0 != null ? depth0.MaxLength : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"MaxLength","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.FieldName || (depth0 != null ? depth0.FieldName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldName","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" autocomplete=\"off\" />";
},"useData":true});})();