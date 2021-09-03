(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Payments = templates.Payments || {};templates = templates.Shared = templates.Shared || {};templates['NewPaymentMethodForms'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"AddCardForm\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.CardFormClass || (depth0 != null ? depth0.CardFormClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CardFormClass","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.CardSelection",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<label class=\"clearlabel\" tabindex=\"-1\" id=\"newEntryModeDescription\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"selectionModeHelpTextNoSaved",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><div class=\"CardEntryContainer\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowHeader : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<form id=\"CardEntryForm\" autocomplete=\"off\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsCardAllowed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id=\"CardInfoDiv\" class=\"CardEntryForm section\"><span class=\"helptext required\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCardRequiredFieldLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsCardAllowed : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsCheckAllowed : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllowSavingPaymentMethod : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id=\"SubmitError\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowSaveButton : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></form></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h3>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCardHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</h3><div id=\"pmtMethodsAccepted\"><div id=\"pmtMethodsAcceptedText\">"
    + container.escapeExpression(((helper = (helper = helpers.AcceptedPaymentMethodsText || (depth0 != null ? depth0.AcceptedPaymentMethodsText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AcceptedPaymentMethodsText","hash":{},"data":data}) : helper)))
    + "</div><div id=\"pmtMethodsAcceptedIcons\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllowedCardBrands : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img class=\"allowedBrandsIcon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IconFilePath : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\" />";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsCheckAllowed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "<fieldset><legend class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"addNewCardLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</legend><div id=\"TogglePaymentMethodType\"><span class=\"tbContainer\"><input id=\"PaymentMethodType-CreditCard\" class=\"togglebutton clearradio\" autocomplete=\"off\" required=\"true\" name=\"PaymentMethodType\" type=\"radio\" value=\"0\"  /><label id=\"PaymentMethodType-CreditCard-Label\" class=\"togglebutton\" for=\"PaymentMethodType-CreditCard\" role=\"button\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"cardSelectLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></span><span class=\"tbContainer\"><input id=\"PaymentMethodType-Check\" class=\"togglebutton clearradio\" autocomplete=\"off\" required=\"true\" name=\"PaymentMethodType\" type=\"radio\" value=\"1\" /><label id=\"PaymentMethodType-Check-Label\" class=\"togglebutton\" for=\"PaymentMethodType-Check\" role=\"button\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"bankAccountSelectLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></span></div></fieldset>";
},"7":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.CreditCardFormFields",depth0,{"name":"addTemplate","hash":{},"data":data}));
},"9":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payments.Shared.BankAccountFormFields",depth0,{"name":"addTemplate","hash":{},"data":data}));
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"NicknameDiv\" class=\"content\">"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideSaveForFutureCheckbox : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"CardEntry-Field "
    + container.escapeExpression(((helper = (helper = helpers.NicknameClass || (depth0 != null ? depth0.NicknameClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NicknameClass","hash":{},"data":data}) : helper)))
    + "\" id=\"NicknameEntry\"><label for=\"CardEntry-Nickname\" id=\"CardEntry-Nickname-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"newCardNicknameLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input id=\"CardEntry-Nickname\" class=\"FieldInputBox paymentInput fixed\" maxLength=\"30\" name=\"Nickname\" type=\"text\" autocomplete=\"off\" /><div id=\"NicknameHelpBubble\" class=\"popupiconcontainer HelpImageAfterField\"></div><div id=\"CardEntry-Nickname-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"></div></div></div>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<p class=\"CardEntry-Field button buttoncheck\"><input id=\"CardEntry-SaveToken\" class=\"buttoncheck\" autocomplete=\"off\" name=\"SaveToken\" type=\"checkbox\" aria-labelledby=\"CardEntry-SaveToken-Label CardEntry-SaveToken-Desc\"/><label for=\"CardEntry-SaveToken\" class=\"buttoncheck\" id=\"CardEntry-SaveToken-Label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"saveForFutureUse",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><span id=\"CardEntry-SaveToken-Desc\" class=\"clearlabel\" tabindex=\"-1\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"saveForFutureUseDesc",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><div id=\"CardEntry-SaveToken-Error\" class=\"CardEntryError alert jqHidden\" role=\"alert\"><span></span></div></p>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"AddCardSubmit\" >"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideSaveForFutureCheckbox : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<input type=\"button\" id=\"btnAddNewCard\" name=\"btnAddNewCard\" class=\"button nextstep\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"saveNewCardButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"17":function(container,depth0,helpers,partials,data) {
    return "<input type=\"button\" id=\"btnAddNewCard\" name=\"btnAddNewCard\" class=\"button nextstep\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"processPaymentMethodButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"useData":true});})();