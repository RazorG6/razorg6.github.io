$$WP=$$WP||{};$$WP.Payments=$$WP.Payments||{};$$WP.Payments.FormValidationHelpers={isValidCreditCardNumber:function WP$Payments$FormValidationHelpers$isValidCreditCardNumber(c,f){var a=false;if($$WPUtil.IsNullOrEmpty(c)||f==null)return a;c=c.replace(/\D/g,"");var e=c.length;if(e<13)return a;var h=$$WP.Payments.CreditCardBrand.getCardBrandFromNumber(c);if(h!==null){if(!h.IsCorrectLength(e))return a;for(var i=a,d=0;d<f.length;d++)if(f[d].Brand==h.Id){i=true;break}if(!i)return a}else if(e>20)return a;for(var j=0,k=c.split(""),b,g=a,d=e-1;d>=0;d--){b=parseInt(k[d],10);if(g){b=b*2;if(b>9)b=1+b%10}j+=b;g=!g}return j%10===0},isValidExpirationMonth:function WP$Payments$FormValidationHelpers$isValidExpirationMonth(a){return isNaN(a)||a<1||a>12?"invalidMonth":""},isValidLastFour:function WP$Payments$FormValidationHelpers$isValidLastFour(a,c){var b="LastFour";return $$WP.Payments.PaymentMethodEntryHelpers.isLastFourFormat(a)?a.substr(1)===$$WP.Payments.DataPoolHelpers.getPaymentMethodInfoFieldData(c,b):a===$$WP.Payments.DataPoolHelpers.getPaymentMethodInfoFieldData(c,b)},isValidNickname:function WP$Payments$FormValidationHelpers$isValidNickname(a){return a.indexOf("^")!==-1||a.indexOf('"')!==-1?false:true},isValidRoutingNumber:function WP$Payments$FormValidationHelpers$isValidRoutingNumber(b){if($$WPUtil.IsNullOrEmpty(b))return false;b=b.replace(/\D/g,"");var h=b.length;if(h!==9)return false;var a=parseInt(b.substring(0,2));if(!(0<=a&&a<=12||21<=a&&a<=32||61<=a&&a<=72||a===80))return false;for(var d=0,f=b.split(""),e,g=[3,7,1,3,7,1,3,7,1],c=0;c<9;c++){e=parseInt(f[c],10);d+=e*g[c]}return d%10===0},enforceNumberFieldMaxLength:function WP$Payments$FormValidationHelpers$enforceNumberFieldMaxLength(d){var a=$afe.jq(d.delegateTarget),b=a.safeAttr("maxlength"),c=a.val();a.safeAttr("type")==="number"&&b!==""&&c.length>b&&a.val(c.substr(0,b))}}