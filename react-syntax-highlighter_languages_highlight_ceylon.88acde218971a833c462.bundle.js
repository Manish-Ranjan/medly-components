(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{4171:function(module,exports){module.exports=function(hljs){var KEYWORDS="assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",SUBST={className:"subst",excludeBegin:!0,excludeEnd:!0,begin:/``/,end:/``/,keywords:KEYWORDS,relevance:10},EXPRESSIONS=[{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[SUBST]},{className:"string",begin:"'",end:"'"},{className:"number",begin:"#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",relevance:0}];return SUBST.contains=EXPRESSIONS,{keywords:{keyword:KEYWORDS+" shared abstract formal default actual variable late native deprecatedfinal sealed annotation suppressWarnings small",meta:"doc by license see throws tagged"},illegal:"\\$[^01]|#[^0-9a-fA-F]",contains:[hljs.C_LINE_COMMENT_MODE,hljs.COMMENT("/\\*","\\*/",{contains:["self"]}),{className:"meta",begin:'@[a-z]\\w*(?:\\:"[^"]*")?'}].concat(EXPRESSIONS)}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ceylon.88acde218971a833c462.bundle.js.map