(()=>{"use strict";var e,t={851:(e,t,r)=>{const o=window.wp.blocks,a=window.React,s=window.wp.apiFetch;var l=r.n(s);const n=window.wp.blockEditor,i=window.wp.i18n,c=window.wp.components,d=function({attributes:e,setAttributes:t,postCategories:r}){const{postsToShow:o,categories:s,order:l,orderBy:d}=e;return(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(c.PanelBody,{title:(0,i.__)("Posts Query","masud-core"),initialOpen:!0},(0,a.createElement)(c.TextControl,{label:(0,i.__)("Number of Posts","masud-core"),value:o,onChange:e=>t({postsToShow:Number(e)})}),(0,a.createElement)(c.SelectControl,{multiple:!0,label:"Category",value:s,options:r.map((e=>({label:e.name,value:e.id}))),onChange:e=>{t({categories:e})}}),(0,a.createElement)(c.SelectControl,{label:(0,i.__)("Order","masud-core"),value:l,options:[{label:(0,i.__)("Ascending","masud-core"),value:"asc"},{label:(0,i.__)("Descending","masud-core"),value:"desc"}],onChange:e=>t({order:e})}),(0,a.createElement)(c.SelectControl,{label:(0,i.__)("Order By","masud-core"),value:d,options:[{label:(0,i.__)("Date","masud-core"),value:"date"},{label:(0,i.__)("Title","masud-core"),value:"title"}],onChange:e=>t({orderBy:e})})))},u=window.wp.element,p=window.wp.url,m=JSON.parse('{"UU":"masud-core/posts-list","Kk":"grid-view"}');(0,o.registerBlockType)(m.UU,{edit:function({attributes:e,setAttributes:t}){const{order:r,orderBy:o,postsToShow:s,categories:w}=e,[b,v]=(0,u.useState)(null),[g,_]=(0,u.useState)(!0),[h,f]=(0,u.useState)([]);return(0,u.useEffect)((()=>{(async()=>{_(!0);const e={per_page:s,orderby:o,order:r,categories:w,_embed:"wp:featuredmedia, author, wp:term"},t=(0,p.addQueryArgs)("/wp/v2/posts",e);try{const e=await l()({path:t});v(e)}catch(e){console.error(e)}finally{_(!1)}})(),(async()=>{const e=(0,p.addQueryArgs)("/wp/v2/categories",{per_page:-1});try{const t=await l()({path:e});f(t)}catch(e){console.error(e)}})()}),[r,o,s,w]),!!b?.length>0&&!g?(0,a.createElement)("div",{...(0,n.useBlockProps)()},(0,a.createElement)(d,{attributes:e,setAttributes:t,postCategories:h}),(0,a.createElement)("div",{className:"posts-list"},b?.map((e=>{const t=e?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large?.source_url,r=e?.title?.rendered;return(0,a.createElement)("div",{key:e.id,id:e.id,className:"post"},t?(0,a.createElement)("img",{src:t,alt:r}):null,(0,a.createElement)("h3",{className:"post-title"},e.title.rendered),(0,a.createElement)("p",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}))})))):(0,a.createElement)("div",{...(0,n.useBlockProps)()},(0,a.createElement)(d,{attributes:e,setAttributes:t,postCategories:h}),(0,a.createElement)(c.Placeholder,{icon:m.Kk,label:(0,i.__)("Masud: Posts List")},g?(0,a.createElement)(c.Spinner,null):(0,i.__)("No posts found.")))}})}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,a,s)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,a,s]=e[d],n=!0,i=0;i<r.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(n=!1,s<l&&(l=s));if(n){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={607:0,359:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,[l,n,i]=r,c=0;if(l.some((t=>0!==e[t]))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(i)var d=i(o)}for(t&&t(r);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=globalThis.webpackChunkmasud_core=globalThis.webpackChunkmasud_core||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[359],(()=>o(851)));a=o.O(a)})();