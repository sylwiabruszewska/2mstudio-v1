"use strict";(self.webpackChunk_2mstudio_v1=self.webpackChunk_2mstudio_v1||[]).push([[285],{1331:(e,a,t)=>{t.d(a,{J:()=>o});var s=t(8810),r=t(9253);const o=async(e,a,t)=>{if(e)try{const c={...a};for(const a of e)if(null===a.featured_media||c[a.featured_media])null===a.featured_media||c[a.featured_media]||(c[a.featured_media]=r);else try{const e=await(0,s._6)(a.featured_media);c[a.featured_media]=e.source_url}catch(o){console.error("There was a problem fetching media for post:",a.id,o),c[a.featured_media]=r}t(c)}catch(o){console.error("There was a problem updating images state:",o)}}},7285:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var s=t(4270),r=t(2791),o=t(7689),c=t(1087),n=t(4420);const i="BlogPage_blog-list__FhnfV",l="BlogPage_blog-post__4Rp8X",d="BlogPage_blog-card__Yx2Dp",h="BlogPage_box__+pPxV",g="BlogPage_post-img__C6DEb",p="BlogPage_blog-date__WTLjp",u="BlogPage_blog-title__k+MSP",_="BlogPage_overlay__QkxZR",w="BlogPage_btn-group__0U9TC",m="BlogPage_btn-pag__4ry92";var f=t(8956),x=t(1331),j=t(8810),y=t(9874),P=t(184);const b=()=>{const[e,a]=(0,r.useState)(),[t,b]=(0,r.useState)({}),[v,N]=(0,r.useState)(1),[k,S]=(0,r.useState)(null),B=(0,n.I0)(),E=(0,o.TH)();(0,r.useEffect)((()=>{T()}),[v]),(0,r.useEffect)((()=>{const e=new URLSearchParams(E.search),a=parseInt(e.get("page")||"1");N(a)}),[E]);const L=e=>{const a=new URLSearchParams(E.search);a.set("page",e);const t="".concat(E.pathname,"?").concat(a.toString());window.history.pushState({},"",t)},T=async()=>{B((0,y.wt)(!0));try{const{posts:e,lastPage:t}=await(0,j.u3)(v);a(e),null===k&&S(t)}catch(e){console.error("Error fetching data:",e)}finally{B((0,y.wt)(!1))}};return(0,r.useEffect)((()=>{(0,x.J)(e,t,b,x.J)}),[e]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s.q,{children:(0,P.jsx)("title",{children:"2m Studio Pracownia Projektowa - Portfolio - Blog"})}),(0,P.jsx)(f.$0,{children:(0,P.jsxs)(f.W2,{children:[(0,P.jsx)("div",{className:i,children:e&&e.map((e=>(0,P.jsxs)("article",{className:d,children:[(0,P.jsx)("div",{className:l,children:(0,P.jsxs)(c.rU,{to:"/".concat(e.id),children:[(0,P.jsx)("p",{className:p,children:new Date(e.date).toLocaleDateString("pl-PL",{year:"numeric",month:"long",day:"numeric"})}),(0,P.jsx)("h2",{className:u,children:e.title.rendered}),(0,P.jsx)("p",{className:"blog-excerpt",dangerouslySetInnerHTML:{__html:e.excerpt.rendered}})]})}),(0,P.jsx)("div",{className:_,children:(0,P.jsx)(c.rU,{to:"/".concat(e.id),children:0!==e.featured_media&&t[e.featured_media]&&(0,P.jsxs)("div",{children:[(0,P.jsx)("img",{src:t[e.featured_media],alt:e.title.rendered,className:g}),(0,P.jsx)("div",{className:h,children:"zobacz post"})]})})})]},e.id)))}),(0,P.jsxs)("div",{className:w,children:[(0,P.jsx)("div",{children:e&&v>1&&(0,P.jsx)(f.zx,{className:m,onClick:()=>{const e=v-1;N(e),L(e)},children:"Poprzednia strona"})}),(0,P.jsx)("div",{children:v<k&&e&&(0,P.jsx)(f.zx,{className:m,onClick:()=>{const e=v+1;N(e),L(e)},children:"Nast\u0119pna strona"})})]})]})})]})}},8810:(e,a,t)=>{t.d(a,{_6:()=>y,$h:()=>j,u3:()=>_,Q3:()=>w,_z:()=>x,VR:()=>f,HL:()=>m,xl:()=>u});var s=t(5294);const r="https://www.2mstudio.org.pl/wordpress/wp-json/wp/v2/",o="posts",c="posts?categories=5",n="posts?categories=16",i="posts?categories=17",l="posts?categories=18",d="posts?categories=19",h="media/",g="pages/112";s.Z.defaults.baseURL=r;const p=async e=>{try{const a=await s.Z.get("".concat(r).concat(e),{headers:{accept:"application/json"}});if(200===a.status)return a.data;throw new Error("Network response was not ok")}catch(a){throw console.error("An error occurred while fetching data:",a),a}},u=async e=>await p("".concat(o,"/").concat(e)),_=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;const t="".concat(c,"&page=").concat(e,"&per_page=").concat(a);try{const e=await s.Z.get(t,{headers:{accept:"application/json"}});if(200===e.status){const t=e.headers["x-wp-total"],s=e.data;return{posts:s,lastPage:Math.ceil(parseInt(t)/a)}}throw new Error("Network response was not ok")}catch(r){throw console.error("An error occurred while fetching blog posts:",r),r}},w=async()=>await p(n),m=async()=>await p(i),f=async()=>await p(l),x=async()=>await p(d),j=async()=>await p(g),y=async e=>{try{const a=await s.Z.get("".concat(h).concat(e));if(200!==a.status)throw new Error("Network response was not ok");return a.data}catch(a){throw console.error("There was a problem fetching the media:",a),a}}},9253:(e,a,t)=>{e.exports=t.p+"static/media/photo-home.b28ed9eea3b77cd2ca9c.jpg"}}]);
//# sourceMappingURL=285.fd545fc1.chunk.js.map