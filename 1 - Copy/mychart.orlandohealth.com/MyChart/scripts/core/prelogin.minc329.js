/*! Copyright (c) Epic Systems Corporation 2012-2019 */
$afe.onDocumentReady(function PageStartup$ready(){var a="body > .ajaxspinner";$afe.select("#main .ajaxspinner").last().remove().safeAppendTo("body");$afe.jq(document).ajaxStart(function PageStartup$ajaxStart(){$$WPUtil.ShowAjaxSpinner($afe.select(a))});$afe.jq(document).ajaxStop(function PageStartup$ajaxStop(){$$WPUtil.HideAjaxSpinner($afe.select(a))})})