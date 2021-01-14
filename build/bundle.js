(()=>{"use strict";var e={38:(e,t,n)=>{n.d(t,{Mm:()=>f,gf:()=>i,LG:()=>s,yU:()=>u,je:()=>l,aj:()=>y,e0:()=>d,kp:()=>m,HK:()=>p});const r=require("axios");var a=n.n(r);function c(e,t,n,r,a,c,o){try{var l=e[c](o),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){c(o,r,a,l,u,"next",e)}function u(e){c(o,r,a,l,u,"throw",e)}l(void 0)}))}}var l="is_loading",u="fetch_programs",s="fetch_by_year",i="fetch_by_successful_launch",f="fetch_by_successful_landing",p=function(){return function(){var e=o(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l}),e.next=3,a().get("https://api.spaceXdata.com/v3/launches?limit=8");case 3:n=e.sent,t({type:u,payload:n.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=o(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l}),t.next=3,a().get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=".concat(e));case 3:r=t.sent,n({type:s,payload:r.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=o(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l}),t.next=3,a().get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=".concat(e.toLowerCase()));case 3:r=t.sent,n({type:i,payload:r.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=o(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l}),t.next=3,a().get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=".concat(e.toLowerCase()));case 3:r=t.sent,n({type:f,payload:r.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(561),a=n(38);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={programs:[],loading:!1};const s=(0,r.combineReducers)({programs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.je:return o(o({},e),{},{loading:!0});case a.yU:case a.LG:case a.gf:case a.Mm:return o(o({},e),{},{loading:!1,programs:t.payload});default:return e}}})},642:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(297),a=n.n(r),c=n(37),o=n(146);const l=function(){return a().createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light"},a().createElement(o.NavLink,{to:"/",className:"navbar-brand"},a().createElement("h3",null,"SpaceX Launch Program")),a().createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},a().createElement("span",{className:"navbar-toggler-icon"})),a().createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},a().createElement("ul",{className:"navbar-nav"},[{text:"Home",value:"/"},{text:"About",value:"/about"}].map((function(e,t){return a().createElement("li",{key:t,className:"nav-item"},a().createElement(o.NavLink,{to:e.value,className:"nav-link"},e.text))})))))};n(46);const u=function(){return a().createElement("div",null,a().createElement("p",{className:"text-center"},a().createElement("strong",null,"Developed by:")," Dhruv Pahwa"))},s=function(e){return a().createElement("div",{className:"container-fluid",style:{backgroundColor:"#f1f1f1"}},a().createElement(l,null),a().createElement(o.Switch,null,c.default.map((function(e){return a().createElement(o.Route,{key:e.path,path:e.path,exact:e.exact,component:e.component})})),a().createElement(o.Route,{render:function(){return a().createElement("h1",null,"Error 404 - Page Not Found")}})),a().createElement(u,null))}},46:(e,t,n)=>{n.d(t,{Z:()=>x,m:()=>w});var r=n(297),a=n.n(r),c=n(79),o=n(38);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,r,c,o=(r=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(c){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=o.call(this,e)).filterByYear=t.filterByYear.bind(f(t)),t.filterBySuccessfulLaunch=t.filterBySuccessfulLaunch.bind(f(t)),t}return t=l,(n=[{key:"filterByYear",value:function(e){this.props.fetch_by_year(e)}},{key:"filterBySuccessfulLaunch",value:function(e){this.props.fetch_by_successful_launch(e)}},{key:"filterBySuccessfulLanding",value:function(e){this.props.fetch_by_successful_landing(e)}},{key:"render",value:function(){var e=this;return a().createElement("div",{className:"text-center"},a().createElement("h5",null,"Launch Year"),a().createElement("div",{className:"row"},[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020].map((function(t,n){return a().createElement("div",{className:"col-sm-6 mb-3",key:n},a().createElement("button",{className:"btn btn-success",onClick:function(){return e.filterByYear(t)}},t))}))),a().createElement("h5",null,"Successful Launch"),a().createElement("div",{className:"row"},["True","False"].map((function(t,n){return a().createElement("div",{className:"col-sm-6 mb-3",key:n},a().createElement("button",{className:"btn btn-success",onClick:function(){return e.filterBySuccessfulLaunch(t)}},t))}))),a().createElement("h5",null,"Successful Landing"),a().createElement("div",{className:"row"},["True","False"].map((function(t,n){return a().createElement("div",{className:"col-sm-6 mb-3",key:n},a().createElement("button",{className:"btn btn-success",onClick:function(){return e.filterBySuccessfulLanding(t)}},t))}))))}}])&&u(t.prototype,n),l}(r.Component);const d=(0,c.connect)(null,(function(e){return{fetch_by_year:function(t){return e((0,o.kp)(t))},fetch_by_successful_launch:function(t){return e((0,o.e0)(t))},fetch_by_successful_landing:function(t){return e((0,o.aj)(t))}}}))(m),y=function(){return a().createElement("div",{className:"text-center mt-9"},a().createElement("div",{class:"spinner-grow text-muted"}),a().createElement("div",{class:"spinner-grow text-primary"}),a().createElement("div",{class:"spinner-grow text-success"}),a().createElement("div",{class:"spinner-grow text-info"}),a().createElement("div",{class:"spinner-grow text-warning"}),a().createElement("div",{class:"spinner-grow text-danger"}),a().createElement("div",{class:"spinner-grow text-secondary"}),a().createElement("div",{class:"spinner-grow text-dark"}),a().createElement("div",{class:"spinner-grow text-light"}))};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,r,c,o=(r=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(c){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),o.call(this,e)}return t=l,(n=[{key:"componentDidMount",value:function(){this.props.fetchPrograms()}},{key:"renderPrograms",value:function(){return this.props.programs.map((function(e){return a().createElement("div",{className:"col-sm-6 col-md-6 mb-5",key:e.flight_number},a().createElement("div",{className:"card"},a().createElement("img",{src:e.links.mission_patch_small}),a().createElement("div",{className:"card-body"},a().createElement("h4",{className:"card-title text-primary"},e.mission_name," #",e.flight_number),a().createElement("strong",null,"Mission Ids: "),a().createElement("ul",{className:"card-text"},a().createElement("li",null,e.mission_id[0])),a().createElement("p",{className:"card-text"},a().createElement("strong",null,"Launch Year:"),e.launch_year),a().createElement("p",{className:"card-text"},a().createElement("strong",null,"Successful Launch:"),JSON.stringify(e.launch_success)))))}))}},{key:"render",value:function(){return a().createElement("div",{className:"row"},a().createElement("div",{className:"col-sm-12 col-md-3"},a().createElement("h3",null,"Filters"),a().createElement(d,null)),a().createElement("div",{className:"col-sm-12 col-md-9 mt-5"},a().createElement("div",{className:"row"},this.props.isLoading?a().createElement(y,null):this.props.programs.length>0?this.renderPrograms():a().createElement("h1",{className:"text-center text-danger"},"OOPS... No Record Found"))))}}])&&v(t.prototype,n),l}(r.Component),w=function(e){return e.dispatch((0,o.HK)())};const x=(0,c.connect)((function(e){return{programs:e.programs.programs,isLoading:e.programs.loading}}),(function(e){return{fetchPrograms:function(){return e((0,o.HK)())}}}))(_)},37:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(297),a=n.n(r),c=n(46);const o=[{path:"/",exact:!0,component:c.Z,loadData:c.m},{path:"/about",component:function(e){return a().createElement("div",null,a().createElement("h1",null,"Technologies Used"),a().createElement("ul",null,a().createElement("li",null,"React"),a().createElement("li",null,"Redux"),a().createElement("li",null,"React Router"),a().createElement("li",null,"Bootstrap"),a().createElement("li",null,"HTML & CSS"),a().createElement("li",null,"Webpack"),a().createElement("li",null,"Babel"),a().createElement("li",null,"Axios")))}}]},949:e=>{e.exports=require("@babel/polyfill")},995:e=>{e.exports=require("compression")},127:e=>{e.exports=require("express")},622:e=>{e.exports=require("path")},297:e=>{e.exports=require("react")},79:e=>{e.exports=require("react-redux")},146:e=>{e.exports=require("react-router-dom")},561:e=>{e.exports=require("redux")},694:e=>{e.exports=require("redux-thunk")},158:e=>{e.exports=require("serialize-javascript")}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=n(146),t=n(561),r=n(79);const a=require("react-dom/server");n(949);var c=n(127),o=n(297),l=n(37),u=n(694),s=n(158),i=n(642),f=n(377),p=n(995),m=n(622),d=c(),y=process.env.PORT||5e3;d.use(p()),d.use(c.static("public")),d.get("*",(function(n,c){var p=(0,t.createStore)(f,(0,t.applyMiddleware)(u)),m=l.find((function(t){return(0,e.matchPath)(n.url,t)}))||{};(m.loadData?m.loadData(p):Promise.resolve()).then((function(){var t=(0,a.renderToString)(o.createElement(r.Provider,{store:p},o.createElement(e.StaticRouter,{location:n.url,context:{}},o.createElement(i,null)))),l='\n                <!DOCTYPE html>\n                <html>\n                    <head>\n                        <title>SpaceX Launch Program</title>\n                        <meta charset="utf-8">\n                        <meta name="viewport" content="width=device-width, initial-scale=1">\n                    </head>\n                    <body>\n                        <div id="root">'.concat(t,"</div>\n                        <script>window.INITIAL_STATE = ").concat(s(p.getState()),'<\/script>\n                        <script src="bundle.js"><\/script>\n                    </body>\n                </html>\n            ');c.send(l)}))})),d.use(c.static("public")),d.get("*",(function(e,t){t.sendFile(m.resolve(__dirname,"public","bundle.js"))})),d.listen(y,(function(){console.log("App Started on port ".concat(y))}))})()})();