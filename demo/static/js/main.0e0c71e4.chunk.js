(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{45:function(e){e.exports=JSON.parse('[{"name":"English","countryCode":"GB","unverified":50000,"done":765,"total":1000,"id":"GZnHkpV4w"},{"name":"Russian","countryCode":"RU","unverified":50000,"done":124,"total":1000,"id":"VvdBcm2hHA"},{"name":"Italian","countryCode":"IT","unverified":50000,"done":178,"total":1000,"id":"Z1BHwIzSME"},{"name":"Macedonia","countryCode":"MK","unverified":50000,"done":67,"total":1000,"id":"S6LFoTaQ9K"},{"name":"English","countryCode":"GB","unverified":50000,"done":765,"total":1000,"id":"EyGnml1P0y"},{"name":"Russian","countryCode":"RU","unverified":50000,"done":124,"total":1000,"id":"a6Vsootb1g"},{"name":"Italian","countryCode":"IT","unverified":50000,"done":178,"total":1000,"id":"Z0NqWtf4H6"},{"name":"Macedonia","countryCode":"MK","unverified":50000,"done":67,"total":1000,"id":"j_GTNutrVw"},{"name":"English","countryCode":"GB","unverified":50000,"done":765,"total":1000,"id":"RO3bip_ROi"},{"name":"Russian","countryCode":"RU","unverified":50000,"done":124,"total":1000,"id":"YSfZr-4bkC"},{"name":"Italian","countryCode":"IT","unverified":50000,"done":178,"total":1000,"id":"_7znW8WKy0"},{"name":"Macedonia","countryCode":"MK","unverified":50000,"done":67,"total":1000,"id":"u3a0lRQWHO"}]')},49:function(e){e.exports=JSON.parse('[{"name":"Russian","countryCode":"RU","id":"xeP5cRG_a"},{"name":"Latvian","countryCode":"LV","id":"0SoU54EEcE"},{"name":"English","countryCode":"GB","id":"BbUpHAqYAD"},{"name":"French","countryCode":"FR","id":"oP9b3evTAE"},{"name":"Estonian","countryCode":"EE","id":"jNSlY6G-GJ"},{"name":"Chinese","countryCode":"CN","id":"PqHTXm7BNg"}]')},55:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(55),a(8)),s=a(16),d=a(45),l=a(2),u="language-items",j=JSON.parse(localStorage.getItem(u)||"{}"),m=Array.isArray(j)?j:d,b=o.a.createContext(null),f=function(){var e=o.a.useContext(b);if(!e)throw new Error("useLanguageInfos must be used within a LanguageInfosProvider");return e},h=function(e){var t=o.a.useState(m),a=Object(s.a)(t,2),n=a[0],r=a[1],c=o.a.useMemo((function(){return localStorage.setItem(u,JSON.stringify(n)),[n,r]}),[n,r]);return Object(l.jsx)(b.Provider,Object(i.a)({value:c},e))},g=a(38),O=a(47),v=a(46),x=a.n(v),p=a(91),C=a(93),y=function(e){var t=e.progress;return Object(l.jsx)(C.a,{variant:t<50?"danger":"info",className:"progress mb-2 mt-2",style:{height:"1px"},"data-test":"component-progress-bar",now:t})},N=function(e){var t=e.label,a=e.value,n=e.href;return Object(l.jsxs)("div",{"data-test":"component-info",children:[Object(l.jsx)("div",{className:"text-uppercase small","data-test":"element-label",children:t}),Object(l.jsx)("div",{className:"h5","data-test":"element-value",children:n?Object(l.jsx)("a",Object(i.a)(Object(i.a)({href:n},"#"===n&&{onClick:function(e){return e.preventDefault()}}),{},{children:a})):a})]})},w=(a(57),o.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return Object(l.jsx)("a",{href:"/#",ref:t,className:"text-dark text-decoration-none font-weight-bold",onClick:function(e){e.preventDefault(),n(e)},children:a})}))),k=function(e){var t=e.info,a=e.removeLanguageInfo,n=t.name,o=t.countryCode,r=t.done,c=t.total,s=t.unverified,d=c-r,u=Math.round(100*r/c),j=[{label:"done",value:"".concat(u,"%")},{label:"todo",value:d,href:"#"},{label:"unverified",value:s,href:"#"}];return Object(l.jsxs)("div",{className:"language-item","data-test":"component-language-info-item",children:[Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("a",{href:"/#",onClick:function(e){return e.preventDefault()},"data-test":"element-link",children:[Object(l.jsx)(x.a,{code:o,height:"9","data-test":"element-flag"}),Object(l.jsx)("span",{className:"ml-1",children:n})]})}),Object(l.jsx)("div",{className:"ml-auto",children:Object(l.jsxs)(p.a,{"data-test":"element-dropdown",children:[Object(l.jsx)(p.a.Toggle,{as:w,id:"dropdown-custom-components","data-test":"element-dropdown-toggle",children:"\u22ef"}),Object(l.jsx)(p.a.Menu,{align:"right",children:Object(l.jsx)(p.a.Item,{eventKey:"1",onClick:a,"data-test":"element-delete-dropdown-item",children:Object(l.jsx)("small",{children:"Delete language..."})})})]})})]}),Object(l.jsx)(y,{progress:u}),Object(l.jsx)("div",{className:"d-flex flex-wrap",children:j.map((function(e,t){return Object(l.jsx)("div",{className:"language-item-info"+(2===t?" text-right":""),children:Object(l.jsx)(N,Object(i.a)(Object(i.a)({},e),{},{"data-test":"element-info"}))},t)}))})]})},S=(a(61),function(e){var t=e.items.reduce((function(e,t){return{total:e.total+t.total,done:e.done+t.done}}),{total:0,done:0}),a=t.total,n=t.done,o=0===a?0:Math.round(100*n/a),r=[{label:"done",value:"".concat(o,"%")},{label:"base words",value:160246},{label:"team",value:26,href:"#"},{label:"keys",value:1834},{label:"qa issues",value:47154,href:"#"}];return Object(l.jsxs)("div",{className:"sidebar","data-test":"component-dashboard-sidebar",children:[Object(l.jsx)("a",{href:"/#",className:"text-primary h5 font-weight-normal text-decoration-none d-block mb-2",onClick:function(e){return e.preventDefault()},"data-test":"element-link",children:"Sample Project"}),Object(l.jsx)(y,{progress:25,"data-test":"element-progress-bar"}),Object(l.jsx)("div",{className:"d-flex flex-wrap",children:r.map((function(e,t){return Object(l.jsx)("div",{className:"sidebar-info",children:Object(l.jsx)(N,Object(i.a)(Object(i.a)({},e),{},{"data-test":"element-info"}))},t)}))})]})}),I=a(92),E=a(90),M=a(48),R=a.n(M),B=a(49),P=a(50),A=(a(70),function(e){var t=Object(i.a)(Object(i.a)({},e),{},{classNamePrefix:"react-select"});return Object(l.jsx)(P.a,Object(i.a)(Object(i.a)({},t),{},{"data-test":"component-react-select"}))}),L=(a(83),B.map((function(e){return{value:e.id,label:e.name,countryCode:e.countryCode}}))),G=function(e){var t=e.addLanguages,a=o.a.useState(null),n=Object(s.a)(a,2),r=n[0],c=n[1],i=o.a.useState([]),d=Object(s.a)(i,2),u=d[0],j=d[1],m=o.a.useState(!1),b=Object(s.a)(m,2),f=b[0],h=b[1],g=function(){return h(!1)};return Object(l.jsxs)("div",{className:"language-item","data-test":"component-add-language-infos-button",children:[Object(l.jsx)(O.a,{variant:"outline-primary",size:"sm",onClick:function(){return h(!0)},"data-test":"btn-add-languages",children:"Add language"}),Object(l.jsxs)(I.a,{show:f,onHide:g,className:"add-languages-modal","data-test":"element-modal",children:[Object(l.jsx)(I.a.Header,{closeButton:!0,className:"text-dark p-0 border-0",children:"Add languages"}),Object(l.jsxs)(I.a.Body,{children:[r?Object(l.jsx)(E.a,{variant:"warning",children:r}):null,Object(l.jsx)(A,{options:L,isMulti:!0,placeholder:"Select one or more languages",defaultMenuIsOpen:!0,onChange:function(e){return j(e)},classNamePrefix:"language-select","data-test":"element-select"})]}),Object(l.jsxs)(I.a.Footer,{className:"border-0 p-0",children:[Object(l.jsx)(O.a,{variant:"outline-secondary",size:"sm",onClick:g,"data-test":"btn-cancel",children:"Cancel"}),Object(l.jsx)(O.a,{variant:"primary",size:"sm",onClick:function(){0===u.length?c("Select at least one language to add"):(c(null),t(u.map((function(e){return{id:R.a.generate(),name:e.label,countryCode:e.countryCode,done:345,total:1e3,unverified:5e4}}))),h(!1))},"data-test":"btn-add",children:"Add"})]})]})]})},T=(a(84),function(){var e=f(),t=Object(s.a)(e,2),a=t[0],n=t[1],r=o.a.useCallback((function(e){n([].concat(Object(g.a)(a),Object(g.a)(e)))}),[a,n]),c=o.a.useCallback((function(e){var t=Object(g.a)(a);t.splice(e,1),n(t)}),[a,n]);return Object(l.jsxs)("div",{"data-test":"component-dashboard",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(O.a,{variant:"primary",size:"sm",children:"New project \u21e7-Ctrl-P"}),Object(l.jsx)(O.a,{variant:"outline-primary",size:"sm",className:"ml-2",children:"Expand All"}),Object(l.jsx)(O.a,{variant:"outline-primary",size:"sm",className:"ml-2",children:"Collapse All"})]}),Object(l.jsxs)("div",{className:"dashboard-container d-flex pt-4 pb-4",children:[Object(l.jsx)(S,{items:a,"data-test":"element-dashboard-sidebar"}),Object(l.jsxs)("div",{className:"languages",children:[a.map((function(e,t){return Object(l.jsx)(k,{info:e,removeLanguageInfo:function(){return c(t)},"data-test":"element-language-info-item"},e.id)})),Object(l.jsx)(G,{addLanguages:r})]})]})]})}),H=function(){return Object(l.jsx)("div",{className:"container p-3",style:{minWidth:"90%"},"data-test":"component-app",children:Object(l.jsx)(h,{children:Object(l.jsx)(T,{})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),z()}},[[85,1,2]]]);
//# sourceMappingURL=main.0e0c71e4.chunk.js.map