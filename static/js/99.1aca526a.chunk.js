"use strict";(self.webpackChunk_2mstudio_v1=self.webpackChunk_2mstudio_v1||[]).push([[99],{5099:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var s=a(4270),o=a(8956),r=a(5658),c=a(2791),n=a(7689),i=a(8810);const w="PostDetails_wp-post__WnIRd";var d=a(184);const h=()=>{const{postId:t}=(0,n.UO)(),[e,a]=(0,c.useState)(null);return(0,c.useEffect)((()=>{(async()=>{try{const e=await(0,i.xl)(t);a(e)}catch(e){console.error("Error fetching post:",e)}})()}),[t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.q,{children:(0,d.jsx)("title",{children:"2m Studio Pracownia Projektowa"})}),(0,d.jsx)(o.$0,{children:(0,d.jsx)(o.W2,{children:e&&(0,d.jsxs)("div",{className:w,children:[(0,d.jsx)("span",{children:new Date(e.date).toLocaleDateString("pl-PL",{year:"numeric",month:"long",day:"numeric"})}),(0,d.jsx)("h2",{children:e.title.rendered}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{children:(0,r.ZP)(e.content.rendered)})]})})})]})}},8810:(t,e,a)=>{a.d(e,{_6:()=>k,$h:()=>m,u3:()=>g,Q3:()=>y,_z:()=>x,VR:()=>j,HL:()=>f,xl:()=>u});var s=a(5294);const o="https://www.2mstudio.org.pl/wordpress/wp-json/wp/v2/",r="posts",c="posts?categories=5",n="posts?categories=16",i="posts?categories=17",w="posts?categories=18",d="posts?categories=19",h="media/",l="pages/112";s.Z.defaults.baseURL=o;const p=async t=>{try{const e=await s.Z.get("".concat(o).concat(t),{headers:{accept:"application/json"}});if(200===e.status)return e.data;throw new Error("Network response was not ok")}catch(e){throw console.error("An error occurred while fetching data:",e),e}},u=async t=>await p("".concat(r,"/").concat(t)),g=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;const a="".concat(c,"&page=").concat(t,"&per_page=").concat(e);try{const t=await s.Z.get(a,{headers:{accept:"application/json"}});if(200===t.status){const a=t.headers["x-wp-total"],s=t.data;return{posts:s,lastPage:Math.ceil(parseInt(a)/e)}}throw new Error("Network response was not ok")}catch(o){throw console.error("An error occurred while fetching blog posts:",o),o}},y=async()=>await p(n),f=async()=>await p(i),j=async()=>await p(w),x=async()=>await p(d),m=async()=>await p(l),k=async t=>{try{const e=await s.Z.get("".concat(h).concat(t));if(200!==e.status)throw new Error("Network response was not ok");return e.data}catch(e){throw console.error("There was a problem fetching the media:",e),e}}}}]);
//# sourceMappingURL=99.1aca526a.chunk.js.map