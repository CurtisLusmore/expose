(this.webpackJsonpexpose=this.webpackJsonpexpose||[]).push([[0],{60:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(9),i=n.n(o),r=(n(60),n(35)),s=n(13),u=n(25),m=n(21),d=n(103),l=n(108),j=n(98),b=n(6),h=Object(j.a)((function(t){return{root:{width:"100%","& > *":{marginBottom:"10px"},"& .MuiTextField-root":{width:"100%"}}}}));function f(t){var e=t.addLocation,n=window.localStorage.getItem("form"),c=n?JSON.parse(n):{name:"",mode:"checkin"},o=a.a.useState(c),i=Object(u.a)(o,2),r=i[0],s=i[1];function j(t){"function"===typeof t&&(t=t(r)),window.localStorage.setItem("form",JSON.stringify(t)),s(t)}var f=h();switch(r.mode){case"checkin":return Object(b.jsxs)("form",{className:f.root,onSubmit:function(t){return t.preventDefault(),e(r.name,"checkin"),j((function(t){return Object(m.a)(Object(m.a)({},t),{},{mode:"checkout"})})),!1},children:[Object(b.jsx)(l.a,{required:!0,label:"Location Name",name:"name",value:r.name,onChange:function(t){j((function(e){return Object(m.a)(Object(m.a)({},e),{},{name:t.target.value})}))}}),Object(b.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",children:"Check In"})]});case"checkout":return Object(b.jsxs)("form",{className:f.root,onSubmit:function(t){return t.preventDefault(),e(r.name,"checkout"),j((function(t){return Object(m.a)(Object(m.a)({},t),{},{name:"",mode:"checkin"})})),!1},children:[Object(b.jsx)(l.a,{required:!0,label:"Location Name",name:"name",value:r.name,disabled:!0}),Object(b.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",children:"Check Out"})]});default:throw new Error("Unknown mode ".concat(r.mode))}}var O=n(106),p=n(102),g=n(104),v=n(105),x=n(107),w=n(41),y=n(32),k=n.n(y),S=Object(j.a)((function(t){return{root:{width:"100%"},dividerFullWidth:{margin:"5px 0 0 ".concat(t.spacing(2),"px")}}}));function N(t){var e=t.name,n=t.timestamps,c=t.locations;return Object(b.jsx)(g.a,{children:Object(b.jsx)(v.a,{primary:function(t,e){if(1===e.length){var n=e[0],c=n.latitude,a=n.longitude;return Object(b.jsx)("a",{href:"https://www.google.com/maps/search/".concat(c,",").concat(a,"/@").concat(c,",").concat(a,",17z"),children:t})}var o=Object(u.a)(e,2),i=o[0],r=i.latitude,s=i.longitude,m=o[1],d=m.latitude,l=m.longitude;return Object(b.jsx)("a",{href:"https://www.google.com/maps/dir///@".concat(d,",").concat(l,",17z/data=!3m1!4b1!4m10!4m9!1m3!2m2!1d").concat(s,"!2d").concat(r,"!1m3!2m2!1d").concat(l,"!2d").concat(d,"!3e2"),children:t})}(e,c),secondary:function(t){return 1===t.length?k()(t[0]).format("hh:mmA"):k()(t[0]).format("hh:mmA")+" - "+k()(t[1]).format("hh:mmA")}(n)})},n[0])}function C(t){var e=t.history.reduce((function(t,e){var n=Object(r.a)(t),c=n[0],a=n.slice(1),o=k()(e.timestamps[0]).format("DD/MM/YYYY");return void 0===c?[{date:o,items:[e]}]:c.date!==o?[].concat(Object(s.a)(a),[c,{date:o,items:[e]}]):[].concat(Object(s.a)(a),[{date:o,items:[].concat(Object(s.a)(c.items),[e])}])}),[]),n=S();return Object(b.jsx)(p.a,{className:n.root,subheader:Object(b.jsx)(x.a,{component:"div",children:"Location History"}),children:e.map((function(t){var e=t.date,c=t.items;return Object(b.jsxs)("span",{children:[Object(b.jsx)(O.a,{component:"li"},"divider-".concat(e)),Object(b.jsx)("li",{children:Object(b.jsx)(w.a,{className:n.dividerFullWidth,color:"textSecondary",display:"block",variant:"caption",children:e})},"subhead-".concat(e)),c.map(N)]},"span-".concat(e))}))})}var F=Object(j.a)((function(t){return{root:{width:"90%",margin:"10px auto 10px auto"}}}));var I=function(){var t=window.localStorage.getItem("items"),e=t?JSON.parse(t):[],n=a.a.useState(e),c=Object(u.a)(n,2),o=c[0],i=c[1];function m(t){"function"===typeof t&&(t=t(o)),window.localStorage.setItem("items",JSON.stringify(t)),i(t)}var d=F();return Object(b.jsxs)("div",{className:d.root,children:[Object(b.jsx)(f,{addLocation:function(t,e){var n=(new Date).getTime();navigator.geolocation.getCurrentPosition((function(c){var a=c.coords,o={latitude:a.latitude,longitude:a.longitude};switch(e){case"checkin":m((function(e){return[{name:t,timestamps:[n],locations:[o]}].concat(Object(s.a)(e))}));break;case"checkout":m((function(e){var c=Object(r.a)(e),a=c[0],i=c.slice(1);return[{name:t,timestamps:[].concat(Object(s.a)(a.timestamps),[n]),locations:[].concat(Object(s.a)(a.locations),[o])}].concat(Object(s.a)(i))}))}}),(function(){}),{maximumAge:0,enableHighAccuracy:!0})}}),Object(b.jsx)(C,{history:o})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.0c63e57f.chunk.js.map