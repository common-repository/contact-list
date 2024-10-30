(()=>{"use strict";var e,t={862:(e,t,n)=>{const o=window.React,a=window.wp.blocks,r=window.wp.blockEditor,c=window.wp.i18n,l=window.wp.element,i=window.wp.components,s=window.wp.serverSideRender;var d=n.n(s);const p=window.wp.apiFetch;var u=n.n(p);const h=JSON.parse('{"UU":"contact-list/contacts-default"}');(0,a.registerBlockType)(h.UU,{edit:({attributes:e,setAttributes:t})=>{const{contactId:n,hideSearch:a,hideFilters:s}=e,p=(0,r.useBlockProps)(),[h,b]=(0,l.useState)([]),[v,w]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{u()({path:"/wp/v2/contact-list?per_page=100"}).then((e=>{b(e.map((e=>{const t=e.last_name||"";return{label:`${e.first_name||""} ${t}`.trim()||"",value:e.id}}))),w(!1)}))}),[]),(0,o.createElement)("div",{...p},(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,c.__)("Select options","contact-list")},(0,o.createElement)(i.CheckboxControl,{label:(0,c.__)("Hide search","contact-list"),checked:a,onChange:e=>t({hideSearch:e})}),(0,o.createElement)(i.CheckboxControl,{label:(0,c.__)("Hide filters","contact-list"),checked:s,onChange:e=>t({hideFilters:e})}),!v&&(0,o.createElement)(i.ComboboxControl,{label:(0,c.__)("Contact","contact-list"),value:n,options:[{label:(0,c.__)("Select a contact","contact-list"),value:0},...h],onChange:e=>{t({contactId:e?parseInt(e,10):0})}}))),(0,o.createElement)(i.Disabled,null,(0,o.createElement)(d(),{block:"contact-list/contacts-default",attributes:{contactId:n,hideSearch:a,hideFilters:s}})))},save:()=>null})}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var c=1/0;for(d=0;d<e.length;d++){for(var[n,a,r]=e[d],l=!0,i=0;i<n.length;i++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(l=!1,r<c&&(c=r));if(l){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[c,l,i]=n,s=0;if(c.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(i)var d=i(o)}for(t&&t(n);s<c.length;s++)r=c[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=globalThis.webpackChunkcontact_list=globalThis.webpackChunkcontact_list||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[350],(()=>o(862)));a=o.O(a)})();