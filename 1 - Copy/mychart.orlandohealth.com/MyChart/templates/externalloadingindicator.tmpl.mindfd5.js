(function(){var b=Handlebars.template,a=$$WP.Templates=$$WP.Templates||{};a=a.Core=a.Core||{};a.externalloadingindicator=b({compiler:[7,">= 4.0.0"],main:function(f,b,e,j,h){var a=null,d,c,g,i="";d=(c=(c=e.canShowExternalLoadingIndicator||(b!=a?b.canShowExternalLoadingIndicator:b))!=a?c:e.helperMissing,g={name:"canShowExternalLoadingIndicator",hash:{},fn:f.program(1,h,0),inverse:f.program(3,h,0),data:h},typeof c==="function"?c.call(b!=a?b:f.nullContext||{},g):c);if(!e.canShowExternalLoadingIndicator)d=e.blockHelperMissing.call(b,d,g);if(d!=a)i+=d;return i},"1":function(){return'<div class="loadingExt loading externalLoadingIndicator"><span class="lE-backorbit"></span><span class="lE-moon"></span><span class="lE-fullLogo"></span><span class="lE-panhandleAndCheck"></span></div>'},"3":function(){return'<div class="loadingIndicator"><div class="indicator"></div></div>'},useData:true})})()