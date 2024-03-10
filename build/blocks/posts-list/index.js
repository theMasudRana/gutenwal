(()=>{"use strict";var e,t={570:(e,t,r)=>{const o=window.wp.blocks,l=window.React,a=window.wp.apiFetch;var n=r.n(a);const s=window.wp.blockEditor,c=window.wp.i18n,i=window.wp.components,d=[{color:"#f00",name:"Red"},{color:"#fff",name:"White"},{color:"#00f",name:"Blue"}],u=function({attributes:e,setAttributes:t,postCategories:r}){const{postsToShow:o,categories:a,order:n,orderBy:u,titleColor:p,titleBackgroundColor:m}=e;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.InspectorControls,null,(0,l.createElement)(i.PanelBody,{title:(0,c.__)("Posts Query","masud-core"),initialOpen:!0},(0,l.createElement)(i.TextControl,{label:(0,c.__)("Number of Posts","masud-core"),value:o,onChange:e=>t({postsToShow:Number(e)})}),(0,l.createElement)(i.SelectControl,{multiple:!0,label:"Category",value:a,options:r.map((e=>({label:e.name,value:e.id}))),onChange:e=>{const r=e.join(",");t({categories:r})}}),(0,l.createElement)(i.SelectControl,{label:(0,c.__)("Order","masud-core"),value:n,options:[{label:(0,c.__)("Ascending","masud-core"),value:"asc"},{label:(0,c.__)("Descending","masud-core"),value:"desc"}],onChange:e=>t({order:e})}),(0,l.createElement)(i.SelectControl,{label:(0,c.__)("Order By","masud-core"),value:u,options:[{label:(0,c.__)("Date","masud-core"),value:"date"},{label:(0,c.__)("Title","masud-core"),value:"title"}],onChange:e=>t({orderBy:e})}))),(0,l.createElement)(s.InspectorControls,{group:"styles"},(0,l.createElement)(i.PanelBody,{title:(0,c.__)("Title Style","masud-core"),initialOpen:!1,className:"full-width-control-wrapper"},(0,l.createElement)(i.ColorPicker,{label:(0,c.__)("Title Color","masud-core"),color:p,onChange:e=>t({titleColor:e})}),(0,l.createElement)(i.ColorPalette,{label:(0,c.__)("Title Background Color","masud-core"),colors:d,value:m,onChange:e=>t({titleBackgroundColor:e})}))))},p=window.wp.element,m=window.wp.url,g=JSON.parse('{"UU":"masud-core/posts-list","Kk":"grid-view"}');(0,o.registerBlockType)(g.UU,{edit:function({attributes:e,setAttributes:t}){const{order:r,orderBy:o,postsToShow:a,categories:d,titleColor:w}=e,[b,_]=(0,p.useState)(null),[v,h]=(0,p.useState)(!0),[f,y]=(0,p.useState)([]);return(0,p.useEffect)((()=>{(async()=>{h(!0);const e={per_page:a,orderby:o,order:r,categories:d,_embed:"wp:featuredmedia, author, wp:term"},t=(0,m.addQueryArgs)("/wp/v2/posts",e);try{const e=await n()({path:t});_(e)}catch(e){console.error(e)}finally{h(!1)}})(),(async()=>{const e=(0,m.addQueryArgs)("/wp/v2/categories",{per_page:-1});try{const t=await n()({path:e});y(t)}catch(e){console.error(e)}})()}),[r,o,a,d]),!!b?.length>0&&!v?(0,l.createElement)("div",{...(0,s.useBlockProps)()},(0,l.createElement)(u,{attributes:e,setAttributes:t,postCategories:f}),(0,l.createElement)("div",{className:"posts-list"},b?.map((e=>{const t=e?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large?.source_url,r=e?.title?.rendered;return(0,l.createElement)("div",{key:e.id,id:e.id,className:"post"},t?(0,l.createElement)("img",{src:t,alt:r}):null,(0,l.createElement)("h3",{className:"post-title",style:{color:w}},e.title.rendered),(0,l.createElement)("p",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}))})))):(0,l.createElement)("div",{...(0,s.useBlockProps)()},(0,l.createElement)(u,{attributes:e,setAttributes:t,postCategories:f}),(0,l.createElement)(i.Placeholder,{icon:g.Kk,label:(0,c.__)("Masud: Posts List")},v?(0,l.createElement)(i.Spinner,null):(0,c.__)("No posts found.")))}})}},r={};function o(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,l,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,l,a]=e[d],s=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(s=!1,a<n&&(n=a));if(s){e.splice(d--,1);var i=l();void 0!==i&&(t=i)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,l,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={607:0,359:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[n,s,c]=r,i=0;if(n.some((t=>0!==e[t]))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(c)var d=c(o)}for(t&&t(r);i<n.length;i++)a=n[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},r=globalThis.webpackChunkmasud_core=globalThis.webpackChunkmasud_core||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[359],(()=>o(570)));l=o.O(l)})();