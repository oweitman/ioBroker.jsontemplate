var vis2jsontemplateWidgets;(()=>{"use strict";var e={53846:(e,_,s)=>{var o={"./JSONTemplateWidget":()=>Promise.all([s.e("vendors-node_modules_ace-builds_src-noconflict_ace_js"),s.e("vendors-node_modules_ace-builds_src-noconflict_ext-language_tools_js-node_modules_ace-builds_-92df52"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_material_mui_material"),s.e("webpack_sharing_consume_default_react-ace_react-ace"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5"),s.e("webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-3c1a17"),s.e("src_JSONTemplateWidget_jsx")]).then((()=>()=>s(90626))),"./translations":()=>s.e("src_translations_js").then((()=>()=>s(44304)))},a=(e,_)=>(s.R=_,_=s.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),s.R=void 0,_),r=(e,_)=>{if(s.S){var o="default",a=s.S[o];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return s.S[o]=e,s.I(o,_)}};s.d(_,{get:()=>a,init:()=>r})}},_={};function s(o){var a=_[o];if(void 0!==a)return a.exports;var r=_[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=e,s.c=_,s.amdD=function(){throw new Error("define cannot be used indirect")},s.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return s.d(_,{a:_}),_},s.d=(e,_)=>{for(var o in _)s.o(_,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:_[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((_,o)=>(s.f[o](e,_),_)),[])),s.u=e=>"static/js/"+e+"."+{"vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64":"011dcd95","vendors-node_modules_mui_material_colors_index_js-node_modules_sentry_browser_build_npm_cjs_i-1f3c0d":"032c5555","vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-6fee03":"626a5899","vendors-node_modules_react-color_es_index_js-node_modules_react-colorful_dist_index_js-node_m-a1a6aa":"d7d40dc9","vendors-node_modules_iobroker_adapter-react-v5_GenericApp_js":"754c6bbc","vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_js-node_modules_iobr-c9c0ef":"d1b250bc",webpack_sharing_consume_default_react_react:"2fd07b81","webpack_sharing_consume_default_prop-types_prop-types":"82129abd",webpack_sharing_consume_default_clsx_clsx:"2bbf7c42",webpack_sharing_consume_default_mui_system_mui_system:"9f46d223","webpack_sharing_consume_default_react-dom_react-dom":"b6f9a575",webpack_sharing_consume_default_mui_material_mui_material:"fed3dc92","webpack_sharing_consume_default_mui_material_styles_mui_material_styles-webpack_sharing_consu-994060":"c14dd06e","webpack_sharing_consume_default_react-ace_react-ace":"fac9c7b8","webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_689b":"fc2276c3","webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_bd3d":"96850ceb","webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-3352fe":"dd9bdcae","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694110":"0e2afc21","vendors-node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devic-f98917":"614ffafb","node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devices_sync_-1759b6":"4a1a0dbd","vendors-node_modules_iobroker_vis-2-widgets-react-dev_index_jsx":"4ba8cefd","webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5":"6a110c6a","vendors-node_modules_mui_icons-material_esm_index_js-node_modules_mui_material_colors_blue_js-f5ed4c":"46466a5e","node_modules_react_jsx-runtime_js-_c3dc0":"1bc6278f","vendors-node_modules_iobroker_adapter-react-v5_node_modules_mui_icons-material_esm_index_js":"0112c395","node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-498fc80":"af8f418d","vendors-node_modules_iobroker_json-config_node_modules_mui_icons-material_esm_index_js":"7236d90e","node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-498fc81":"9e8692af","vendors-node_modules_mui_material_styles_index_js":"9b2817e2","node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-2c2d26":"7ff2442a","vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js":"b6615150","vendors-node_modules_mui_material_node_modules_mui_system_esm_Unstable_Grid_createGrid_js":"b31827d6","vendors-node_modules_mui_material_index_js":"6f8f3ad2","vendors-node_modules_mui_styles_index_js":"c8a8f7e9","node_modules_react_jsx-runtime_js-_c3dc1":"cf12c8b0","vendors-node_modules_mui_material_node_modules_mui_system_esm_index_js-node_modules_mui_utils-77ff75":"b5474226","node_modules_mui_utils_esm_deepmerge_deepmerge_js-node_modules_mui_utils_esm_formatMuiErrorMe-99684d":"80f29437","vendors-node_modules_mui_system_index_js":"5fcad9d1","node_modules_mui_system_RtlProvider_index_js-node_modules_babel_runtime_helpers_esm_extends_js":"3aac884b",node_modules_clsx_dist_clsx_mjs:"1062a0c2","node_modules_prop-types_index_js":"1171d0b2","vendors-node_modules_ace-builds_src-noconflict_ace_js":"def3301c","vendors-node_modules_react-ace_lib_index_js":"777e9751","node_modules_react-dom_client_js":"55cfdfb3","vendors-node_modules_react-dom_index_js":"4bab663b",node_modules_react_index_js:"2b113062","vendors-node_modules_ace-builds_src-noconflict_ext-language_tools_js-node_modules_ace-builds_-92df52":"5e9a5d8d","webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-3c1a17":"d36e0d62",src_JSONTemplateWidget_jsx:"cfb87751",src_translations_js:"883ebab4","node_modules_mui_material_styles_getOverlayAlpha_js-node_modules_mui_material_styles_useTheme_js":"ef69d011","node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devices_sync_-8d65b1":"bc3b06d7","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694111":"54d2fac0"}[e]+".chunk.js",s.miniCssF=e=>{},s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),s.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),(()=>{var e={},_="iobroker.vis-2-widgets-jsontemplate:";s.l=(o,a,r,t)=>{if(e[o])e[o].push(a);else{var d,i;if(void 0!==r)for(var n=document.getElementsByTagName("script"),m=0;m<n.length;m++){var l=n[m];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==_+r){d=l;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.setAttribute("data-webpack",_+r),d.src=o),e[o]=[a];var u=(_,s)=>{d.onerror=d.onload=null,clearTimeout(c);var a=e[o];if(delete e[o],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(s))),_)return _(s)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),i&&document.head.appendChild(d)}}})(),s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{s.S={};var e={},_={};s.I=(o,a)=>{a||(a=[]);var r=_[o];if(r||(r=_[o]={}),!(a.indexOf(r)>=0)){if(a.push(r),e[o])return e[o];s.o(s.S,o)||(s.S[o]={});var t=s.S[o],d="iobroker.vis-2-widgets-jsontemplate",i=(e,_,s,o)=>{var a=t[e]=t[e]||{},r=a[_];(!r||!r.loaded&&(!o!=!r.eager?o:d>r.from))&&(a[_]={get:s,from:d,eager:!!o})},n=[];if("default"===o)i("@iobroker/adapter-react-v5","4.14.1",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_colors_index_js-node_modules_sentry_browser_build_npm_cjs_i-1f3c0d"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-6fee03"),s.e("vendors-node_modules_react-color_es_index_js-node_modules_react-colorful_dist_index_js-node_m-a1a6aa"),s.e("vendors-node_modules_iobroker_adapter-react-v5_GenericApp_js"),s.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_js-node_modules_iobr-c9c0ef"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom"),s.e("webpack_sharing_consume_default_mui_material_mui_material"),s.e("webpack_sharing_consume_default_mui_material_styles_mui_material_styles-webpack_sharing_consu-994060"),s.e("webpack_sharing_consume_default_react-ace_react-ace"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_689b"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_bd3d"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-3352fe"),s.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694110")]).then((()=>()=>s(72471))))),i("@iobroker/adapter-react-v5","5.0.8",(()=>Promise.all([s.e("vendors-node_modules_mui_material_colors_index_js-node_modules_sentry_browser_build_npm_cjs_i-1f3c0d"),s.e("vendors-node_modules_react-color_es_index_js-node_modules_react-colorful_dist_index_js-node_m-a1a6aa"),s.e("vendors-node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devic-f98917"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_material_mui_material"),s.e("webpack_sharing_consume_default_mui_material_styles_mui_material_styles-webpack_sharing_consu-994060"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_689b"),s.e("node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devices_sync_-1759b6")]).then((()=>()=>s(75826))))),i("@iobroker/vis-2-widgets-react-dev","1.0.7",(()=>Promise.all([s.e("vendors-node_modules_iobroker_vis-2-widgets-react-dev_index_jsx"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_mui_material_mui_material"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5")]).then((()=>()=>s(27798))))),i("@mui/icons-material","5.14.19",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_icons-material_esm_index_js-node_modules_mui_material_colors_blue_js-f5ed4c"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_react_jsx-runtime_js-_c3dc0")]).then((()=>()=>s(4913))))),i("@mui/icons-material","5.16.7",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_iobroker_adapter-react-v5_node_modules_mui_icons-material_esm_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-498fc80")]).then((()=>()=>s(12284))))),i("@mui/icons-material","5.16.7",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_iobroker_json-config_node_modules_mui_icons-material_esm_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-498fc81")]).then((()=>()=>s(74962))))),i("@mui/material/styles","5.14.14",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-2c2d26")]).then((()=>()=>s(2281))))),i("@mui/material","5.14.14",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-6fee03"),s.e("vendors-node_modules_mui_material_node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("vendors-node_modules_mui_material_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>s(37528))))),i("@mui/styles","5.14.14",(()=>Promise.all([s.e("vendors-node_modules_mui_styles_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("node_modules_react_jsx-runtime_js-_c3dc1")]).then((()=>()=>s(91264))))),i("@mui/system","5.16.7",(()=>Promise.all([s.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"),s.e("vendors-node_modules_mui_material_node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_material_node_modules_mui_system_esm_index_js-node_modules_mui_utils-77ff75"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("node_modules_mui_utils_esm_deepmerge_deepmerge_js-node_modules_mui_utils_esm_formatMuiErrorMe-99684d")]).then((()=>()=>s(34837))))),i("@mui/system","6.0.2",(()=>Promise.all([s.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"),s.e("vendors-node_modules_mui_system_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("node_modules_mui_system_RtlProvider_index_js-node_modules_babel_runtime_helpers_esm_extends_js")]).then((()=>()=>s(56220))))),i("clsx","2.1.1",(()=>s.e("node_modules_clsx_dist_clsx_mjs").then((()=>()=>s(58387))))),i("prop-types","15.8.1",(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(58457))))),i("react-ace","11.0.1",(()=>Promise.all([s.e("vendors-node_modules_ace-builds_src-noconflict_ace_js"),s.e("vendors-node_modules_react-ace_lib_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types")]).then((()=>()=>s(23641))))),i("react-dom/client","18.3.1",(()=>Promise.all([s.e("webpack_sharing_consume_default_react-dom_react-dom"),s.e("node_modules_react-dom_client_js")]).then((()=>()=>s(73603))))),i("react-dom","18.3.1",(()=>Promise.all([s.e("vendors-node_modules_react-dom_index_js"),s.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>s(46074))))),i("react","18.3.1",(()=>s.e("node_modules_react_index_js").then((()=>()=>s(16911)))));return n.length?e[o]=Promise.all(n).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var _=s.g.document;if(!e&&_&&(_.currentScript&&"SCRIPT"===_.currentScript.tagName.toUpperCase()&&(e=_.currentScript.src),!e)){var o=_.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e=e=>{var _=e=>e.split(".").map((e=>+e==e?+e:e)),s=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=s[1]?_(s[1]):[];return s[2]&&(o.length++,o.push.apply(o,_(s[2]))),s[3]&&(o.push([]),o.push.apply(o,_(s[3]))),o},_=(_,s)=>{_=e(_),s=e(s);for(var o=0;;){if(o>=_.length)return o<s.length&&"u"!=(typeof s[o])[0];var a=_[o],r=(typeof a)[0];if(o>=s.length)return"u"==r;var t=s[o],d=(typeof t)[0];if(r!=d)return"o"==r&&"n"==d||"s"==d||"u"==r;if("o"!=r&&"u"!=r&&a!=t)return a<t;o++}},o=e=>{var _=e[0],s="";if(1===e.length)return"*";if(_+.5){s+=0==_?">=":-1==_?"<":1==_?"^":2==_?"~":_>0?"=":"!=";for(var a=1,r=1;r<e.length;r++)a--,s+="u"==(typeof(d=e[r]))[0]?"-":(a>0?".":"")+(a=2,d);return s}var t=[];for(r=1;r<e.length;r++){var d=e[r];t.push(0===d?"not("+i()+")":1===d?"("+i()+" || "+i()+")":2===d?t.pop()+" "+t.pop():o(d))}return i();function i(){return t.pop().replace(/^\((.+)\)$/,"$1")}},a=(_,s)=>{if(0 in _){s=e(s);var o=_[0],r=o<0;r&&(o=-o-1);for(var t=0,d=1,i=!0;;d++,t++){var n,m,l=d<_.length?(typeof _[d])[0]:"";if(t>=s.length||"o"==(m=(typeof(n=s[t]))[0]))return!i||("u"==l?d>o&&!r:""==l!=r);if("u"==m){if(!i||"u"!=l)return!1}else if(i)if(l==m)if(d<=o){if(n!=_[d])return!1}else{if(r?n>_[d]:n<_[d])return!1;n!=_[d]&&(i=!1)}else if("s"!=l&&"n"!=l){if(r||d<=o)return!1;i=!1,d--}else{if(d<=o||m<l!=r)return!1;i=!1}else"s"!=l&&"n"!=l&&(i=!1,d--)}}var u=[],c=u.pop.bind(u);for(t=1;t<_.length;t++){var p=_[t];u.push(1==p?c()|c():2==p?c()&c():p?a(p,s):!c())}return!!c()},r=(e,_)=>e&&s.o(e,_),t=e=>(e.loaded=1,e.get()),d=e=>Object.keys(e).reduce(((_,s)=>(e[s].eager&&(_[s]=e[s]),_)),{}),i=(e,s,o)=>{var a=o?d(e[s]):e[s];return Object.keys(a).reduce(((e,s)=>!e||!a[e].loaded&&_(e,s)?s:e),0)},n=(e,_,s,a)=>"Unsatisfied version "+s+" from "+(s&&e[_][s].from)+" of shared singleton module "+_+" (required "+o(a)+")",m=e=>{throw new Error(e)},l=e=>{"undefined"!==typeof console&&console.warn&&console.warn(e)},u=e=>function(_,o,a,r,t){var d=s.I(_);return d&&d.then&&!a?d.then(e.bind(e,_,s.S[_],o,!1,r,t)):e(_,s.S[_],o,a,r,t)},c=(e,_,s)=>s?s():((e,_)=>m("Shared module "+_+" doesn't exist in shared scope "+e))(e,_),p=u(((e,_,s,o,d,m)=>{if(!r(_,s))return c(e,s,m);var u=i(_,s,o);return a(d,u)||l(n(_,s,u,d)),t(_[s][u])})),b={},f={28437:()=>p("default","react",!1,[0],(()=>s.e("node_modules_react_index_js").then((()=>()=>s(16911))))),95973:()=>p("default","prop-types",!1,[0],(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(58457))))),53829:()=>p("default","clsx",!1,[0],(()=>s.e("node_modules_clsx_dist_clsx_mjs").then((()=>()=>s(58387))))),5596:()=>p("default","@mui/system",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"),s.e("vendors-node_modules_mui_material_node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_material_node_modules_mui_system_esm_index_js-node_modules_mui_utils-77ff75"),s.e("webpack_sharing_consume_default_clsx_clsx")]).then((()=>()=>s(34837))))),23479:()=>p("default","react-dom",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_react-dom_index_js"),s.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>s(46074))))),67085:()=>p("default","@mui/material",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-6fee03"),s.e("vendors-node_modules_mui_material_node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("vendors-node_modules_mui_material_index_js"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>s(37528))))),17913:()=>p("default","@mui/material/styles",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_styles_getOverlayAlpha_js-node_modules_mui_material_styles_useTheme_js")]).then((()=>()=>s(2281))))),32719:()=>p("default","@mui/styles",!1,[4,5,14,14],(()=>Promise.all([s.e("vendors-node_modules_mui_styles_index_js"),s.e("webpack_sharing_consume_default_clsx_clsx")]).then((()=>()=>s(91264))))),58093:()=>p("default","react-ace",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_ace-builds_src-noconflict_ace_js"),s.e("vendors-node_modules_react-ace_lib_index_js")]).then((()=>()=>s(23641))))),16390:()=>p("default","@mui/icons-material",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_iobroker_json-config_node_modules_mui_icons-material_esm_index_js"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system")]).then((()=>()=>s(74962))))),53564:()=>p("default","@mui/icons-material",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_iobroker_adapter-react-v5_node_modules_mui_icons-material_esm_index_js"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system")]).then((()=>()=>s(12284))))),46768:()=>p("default","@iobroker/adapter-react-v5",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devic-f98917"),s.e("node_modules_iobroker_json-config_node_modules_iobroker_adapter-react-v5_assets_devices_sync_-8d65b1")]).then((()=>()=>s(75826))))),79945:()=>p("default","@mui/system",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"),s.e("vendors-node_modules_mui_system_index_js")]).then((()=>()=>s(56220))))),37449:()=>p("default","@iobroker/adapter-react-v5",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_colors_index_js-node_modules_sentry_browser_build_npm_cjs_i-1f3c0d"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-6fee03"),s.e("vendors-node_modules_react-color_es_index_js-node_modules_react-colorful_dist_index_js-node_m-a1a6aa"),s.e("vendors-node_modules_iobroker_adapter-react-v5_GenericApp_js"),s.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_js-node_modules_iobr-c9c0ef"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom"),s.e("webpack_sharing_consume_default_mui_material_styles_mui_material_styles-webpack_sharing_consu-994060"),s.e("webpack_sharing_consume_default_react-ace_react-ace"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_689b"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_bd3d"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-3352fe"),s.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694111")]).then((()=>()=>s(72471))))),59797:()=>p("default","@iobroker/vis-2-widgets-react-dev",!1,[0],(()=>s.e("vendors-node_modules_iobroker_vis-2-widgets-react-dev_index_jsx").then((()=>()=>s(27798))))),21839:()=>p("default","@mui/icons-material",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_icons-material_esm_index_js-node_modules_mui_material_colors_blue_js-f5ed4c"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system")]).then((()=>()=>s(4913)))))},h={webpack_sharing_consume_default_react_react:[28437],"webpack_sharing_consume_default_prop-types_prop-types":[95973],webpack_sharing_consume_default_clsx_clsx:[53829],webpack_sharing_consume_default_mui_system_mui_system:[5596],"webpack_sharing_consume_default_react-dom_react-dom":[23479],webpack_sharing_consume_default_mui_material_mui_material:[67085],"webpack_sharing_consume_default_mui_material_styles_mui_material_styles-webpack_sharing_consu-994060":[17913,32719],"webpack_sharing_consume_default_react-ace_react-ace":[58093],"webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_689b":[16390],"webpack_sharing_consume_default_mui_icons-material_mui_icons-material-_bd3d":[53564],"webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-3352fe":[46768,79945],"webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5":[37449],"webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-3c1a17":[59797,21839]},v={};s.f.consumes=(e,_)=>{s.o(h,e)&&h[e].forEach((e=>{if(s.o(b,e))return _.push(b[e]);if(!v[e]){var o=_=>{b[e]=0,s.m[e]=o=>{delete s.c[e],o.exports=_()}};v[e]=!0;var a=_=>{delete b[e],s.m[e]=o=>{throw delete s.c[e],_}};try{var r=f[e]();r.then?_.push(b[e]=r.then(o).catch(a)):o(r)}catch(t){a(t)}}}))}})(),(()=>{var e={vis2jsontemplateWidgets:0};s.f.j=(_,o)=>{var a=s.o(e,_)?e[_]:void 0;if(0!==a)if(a)o.push(a[2]);else if(/^webpack_sharing_consume_default_(iobroker_(adapter\-react\-v5_iobroker_adapter\-react\-v5(|\-webpack_s\-3352fe)|vis\-2\-widgets\-react\-dev_iobroker_vis\-2\-widgets\-react\-3c1a17)|mui_(icons\-material_mui_icons\-material\-_(689b|bd3d)|material_(mui_material|styles_mui_material_styles\-webpack_sharing_consu\-994060)|system_mui_system)|react(\-ace_react\-ace|\-dom_react\-dom|_react)|clsx_clsx|prop\-types_prop\-types)$/.test(_))e[_]=0;else{var r=new Promise(((s,o)=>a=e[_]=[s,o]));o.push(a[2]=r);var t=s.p+s.u(_),d=new Error;s.l(t,(o=>{if(s.o(e,_)&&(0!==(a=e[_])&&(e[_]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),t=o&&o.target&&o.target.src;d.message="Loading chunk "+_+" failed.\n("+r+": "+t+")",d.name="ChunkLoadError",d.type=r,d.request=t,a[1](d)}}),"chunk-"+_,_)}};var _=(_,o)=>{var a,r,t=o[0],d=o[1],i=o[2],n=0;if(t.some((_=>0!==e[_]))){for(a in d)s.o(d,a)&&(s.m[a]=d[a]);if(i)i(s)}for(_&&_(o);n<t.length;n++)r=t[n],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0},o=self.webpackChunkiobroker_vis_2_widgets_jsontemplate=self.webpackChunkiobroker_vis_2_widgets_jsontemplate||[];o.forEach(_.bind(null,0)),o.push=_.bind(null,o.push.bind(o))})(),s.nc=void 0;var o=s(53846);vis2jsontemplateWidgets=o})();
//# sourceMappingURL=customWidgets.js.map