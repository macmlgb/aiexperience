import{C as D,D as c,E as f,k as E,r as A,G as r,F as B,H as g,I as L,J as N,K as H,L as M,M as s,j as C,N as d,b as O,f as R,x as P}from"./@vue-380b440a.js";import{u as h,a as V,c as z,b as G}from"./vue-router-6eaa21ed.js";import{I as b,D as v,T as x,B as y,a as K}from"./vant-30e27a25.js";import"./@vant-bb344f53.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const e of u)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(u){const e={};return u.integrity&&(e.integrity=u.integrity),u.referrerpolicy&&(e.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?e.credentials="include":u.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(u){if(u.ep)return;u.ep=!0;const e=a(u);fetch(u.href,e)}})();const _=(n,o)=>{const a=n.__vccOpts||n;for(const[i,u]of o)a[i]=u;return a},T={};function j(n,o){const a=f("router-view");return c(),D(a)}const q=_(T,[["render",j]]),J="/aiexperience/public/assets/AIEX-a323e51c.png",w="/aiexperience/public/assets/panel-img1-073adb99.png",k="/aiexperience/public/assets/panel-img2-4c270d37.png",I="/aiexperience/public/assets/panel-img3-d4833465.png",$="/aiexperience/public/assets/panel-img4-968d52a4.png",U=n=>(H("data-v-b4bea2f1"),n=n(),M(),n),W=L('<div class="header" data-v-b4bea2f1><a href="" data-v-b4bea2f1><img src="'+J+'" class="logo" data-v-b4bea2f1></a><h2 style="margin-bottom:2rem;" data-v-b4bea2f1>\u7B97\u6CD5\u4F53\u9A8C</h2><h4 style="margin-bottom:1rem;color:crimson;" data-v-b4bea2f1>\u9700\u8981\u767B\u5F55\u673A\u623FVPN</h4></div>',1),X={class:"panel"},Y={class:"panel-img"},Q={class:"panel-title"},Z={class:"panel-desc"},uu=U(()=>s("p",{class:"footer-p"},"@\u5927\u6570\u636E\u4EA7\u54C1\u56E2\u961F",-1)),eu=E({__name:"Index",setup(n){A(0);const o=A([{title:"\u8BED\u97F3\u80FD\u529B",desc:"\u5B9E\u73B0\u8BED\u97F3\u8BC6\u522B\u3001\u8BED\u97F3\u5408\u6210\u3001\u97F3\u9891\u5206\u7C7B\u3001\u8BED\u97F3\u964D\u566A\u3001\u56DE\u58F0\u6D88\u9664...",icon:w,id:"/list/audio"},{title:"\u81EA\u7136\u8BED\u8A00\u5904\u7406",desc:"\u5B9E\u73B0\u6587\u672C\u5185\u5BB9\u7684\u5206\u8BCD\u3001\u60C5\u611F\u5206\u6790\u3001\u6587\u672C\u6458\u8981\u3001\u95EE\u7B54\u5BF9\u8BDD\u3001\u7FFB\u8BD1....",icon:$,id:"/list/nlp"},{title:"\u56FE\u5F62\u56FE\u50CF",desc:"\u9488\u5BF9\u56FE\u5F62\u56FE\u50CF\u5B9E\u73B0\u76EE\u6807\u68C0\u6D4B\u3001\u6587\u5B57\u8BC6\u522B\u3001\u4EBA\u4F53\u68C0\u6D4B\u3001\u884C\u4E3A\u8BC6\u522B...",icon:I,id:"/list/cv"},{title:"\u591A\u6001\u6A21\u578B",desc:"\u4E3B\u8981\u7ED3\u5408\u591A\u79CD\u7B97\u6CD5\u5B9E\u73B0\uFF0C\u6587\u751F\u56FE\u3001\u89C6\u89C9\u95EE\u7B54\u3001\u56FE\u6587\u68C0\u7D22\u3001\u56FE\u50CF\u63CF\u8FF0...",icon:k,id:"/list/big"}]);return(a,i)=>{const u=b,e=f("router-link");return c(),r(B,null,[W,(c(!0),r(B,null,g(o.value,t=>(c(),D(e,{key:t.title,to:t.id},{default:N(()=>[s("div",X,[s("div",Y,[C(u,{src:t.icon,class:"img"},null,8,["src"])]),s("div",Q,d(t.title),1),s("div",Z,d(t.desc),1)])]),_:2},1032,["to"]))),128)),uu],64)}}});const tu=_(eu,[["__scopeId","data-v-b4bea2f1"]]),su="/aiexperience/public/assets/waiting-6a9def82.png",ou={style:{"text-align":"left","padding-left":"0.8rem"}},au=["src"],iu={style:{"margin-bottom":"2rem"}},nu={class:"module-list"},cu=["onClick"],lu={class:"module-list__item-title"},ru={class:"module-list__item-content"},du=E({__name:"AIList",setup(n){const o=h(),a=V(),i=o.params.id;O(()=>{});const u=R({audio:{title:"\u8BED\u97F3\u80FD\u529B",icon:w,datas:[{name:"unisar",title:"\u8BED\u97F3\u8BC6\u522B",desc:"\u5C06\u8BED\u97F3\u8BC6\u522B\u4E3A\u6587\u5B57",type:"local"},{name:"",title:"\u8BED\u97F3\u5408\u6210",desc:"\u8BED\u97F3\u5408\u6210",type:"local"},{name:"",title:"\u8BED\u97F3\u5524\u9192",desc:"\u8BED\u97F3\u5524\u9192",type:"local"},{name:"",title:"\u97F3\u9891\u5206\u7C7B",desc:"\u97F3\u9891\u5206\u7C7B",type:"local"},{name:"",title:"\u8BED\u97F3\u964D\u566A",desc:"\u6D88\u9664\u566A\u97F3",type:"local"},{name:"",title:"\u56DE\u58F0\u6D88\u9664",desc:"\u56DE\u58F0\u6D88\u9664",type:"local"}]},nlp:{title:"\u81EA\u7136\u8BED\u8A00\u5904\u7406",icon:$,datas:[{name:"split",title:"\u5206\u8BCD",desc:"\u5C06\u53E5\u5B50\u5206\u8BCD",type:"local"},{name:"",title:"\u6587\u672C\u751F\u6210",desc:"\u57FA\u7840\u529F\u80FD",type:"local"},{name:"",title:"\u6587\u672C\u6458\u8981",desc:"\u57FA\u7840\u529F\u80FD",type:"local"},{name:"",title:"\u6587\u672C\u76F8\u4F3C\u5EA6",desc:"\u5224\u65AD\u6587\u672C\u76F8\u4F3C\u5EA6",type:"local"},{name:"",title:"\u60C5\u611F\u5206\u7C7B",desc:"\u5206\u6790\u8BED\u4E49\u60C5\u611F",type:"local"},{name:"",title:"\u7FFB\u8BD1",desc:"\u6587\u672C\u7FFB\u8BD1",type:"local"},{name:"",title:"\u6587\u672C\u5206\u7C7B",desc:"\u6B63\u8D1F\u5411\u5206\u7C7B",type:"local"}]},cv:{title:"\u56FE\u5F62\u56FE\u50CF",icon:I,datas:[{name:"multi_style_portrait_stylization",title:"\u5361\u901A\u5316",desc:"\u5361\u901A\u5316\u4EBA\u50CF",type:"modelscope"},{title:"\u4EBA\u50CF\u62A0\u56FE",desc:"\u5C06\u4EBA\u50CF\u4ECE\u56FE\u7247\u4E2D\u62A0\u51FA",name:"bshm",type:"local"},{title:"\u4EBA\u50CF\u4FEE\u590D",desc:"\u4FEE\u590D\u4EBA\u50CF",name:"gpen",type:"local"},{title:"\u76EE\u6807\u68C0\u6D4B",desc:"\u901A\u7528\u76EE\u6807\u68C0\u6D4B",name:"damoyoyo",type:"local"},{name:"",title:"\u6587\u5B57\u8BC6\u522B",desc:"\u8BC6\u522B\u56FE\u50CF\u4E2D\u6587\u672C",type:"local"},{name:"",title:"\u6587\u5B57\u68C0\u6D4B",desc:"\u68C0\u6D4B\u6587\u5B57\u6240\u5728\u533A\u57DF",type:"local"},{name:"",title:"\u4EBA\u8138\u68C0\u6D4B",desc:"\u68C0\u6D4B\u4EBA\u8138\u4F4D\u7F6E",type:"local"},{name:"",title:"\u4EBA\u8138\u8BC6\u522B",desc:"\u8BC6\u522B\u4EBA\u8138\u529F\u80FD",type:"local"},{name:"",title:"\u4EBA\u8138\u751F\u6210",desc:"\u4EBA\u8138\u751F\u6210",type:"local"},{name:"",title:"\u4EBA\u50CF\u7F8E\u989C",desc:"\u4EBA\u50CF\u7F8E\u989C",type:"local"},{name:"",title:"\u56FE\u50CF\u4E0A\u8272",desc:"\u56FE\u50CF\u4E0A\u8272",type:"local"},{name:"",title:"\u884C\u4E3A\u8BC6\u522B",desc:"\u884C\u4E3A\u8BC6\u522B",type:"local"},{name:"",title:"\u4EBA\u7FA4\u5BC6\u5EA6\u9884\u4F30",desc:"\u4EBA\u7FA4\u5BC6\u5EA6\u9884\u4F30",type:"local"},{name:"",title:"\u52A8\u7269\u8BC6\u522B",desc:"\u52A8\u7269\u8BC6\u522B",type:"local"}]},big:{title:"\u591A\u6001\u6A21\u578B",icon:k,datas:[{title:"\u6587\u751F\u56FE",desc:"\u6587\u5B57\u751F\u6210\u56FE\u7247",name:"ai_artist",type:"modelscope"},{title:"AI\u5168\u80FD\u5199\u624B",desc:"\u4F5C\u6587\u751F\u6210..",name:"ai_writer",type:"modelscope"},{title:"\u4E2D\u6587\u56FE\u6587\u68C0\u7D22",desc:"\u4E2D\u6587\u56FE\u6587\u68C0\u7D22..",name:"chinese_clip_applications",type:"modelscope"},{name:"",title:"\u89C6\u89C9\u5B9A\u4F4D",desc:"\u89C6\u89C9\u5B9A\u4F4D",type:"local"},{name:"",title:"\u56FE\u50CF\u63CF\u8FF0",desc:"\u56FE\u50CF\u63CF\u8FF0",type:"local"},{name:"",title:"\u89C6\u89C9\u95EE\u7B54",desc:"\u89C6\u89C9\u95EE\u7B54",type:"local"},{name:"",title:"\u89C6\u89C9\u8574\u542B",desc:"\u89C6\u89C9\u8574\u542B",type:"local"},{name:"",title:"\u76F8\u4F3C\u5EA6",desc:"\u591A\u6A21\u6001\u76F8\u4F3C\u5EA6",type:"local"}]}}),e=()=>{if(i==="audio")return v.alert({title:"\u91CD\u8981\u63D0\u793A(\u5F55\u97F3\u6743\u9650)",message:`chrome\u5F55\u97F3\u6388\u6743:

 1\u3001google\u6D4F\u89C8\u5668\u8BF7\u8F93\u5165: chrome://flags/#unsafely-treat-insecure-origin-as-secure 

2\u3001\u627E\u5230 Insecure origins treated as secure\u72B6\u6001\u6539\u4E3A\u542F\u7528 

3\u3001\u6DFB\u52A0: http://192.168.108.154:8000 \u70B9\u51FBRelaunch\u5373\u53EF\u3002

`,messageAlign:"left"}).then(()=>{}),u.audio;if(i==="nlp")return u.nlp;if(i==="cv")return u.cv;if(i==="big")return u.big},t=()=>{a.back()},m=p=>{p.name?a.push({path:"/experience/"+p.type+"/"+p.name}):x({message:"\u656C\u8BF7\u671F\u5F85,\u7A0D\u540E\u4E0A\u7EBF",icon:su})};return(p,Au)=>{const S=y;return c(),r("div",null,[s("div",ou,[C(S,{class:"at-fab",icon:"arrow-left",onClick:t})]),s("img",{src:e().icon,class:"logo"},null,8,au),s("h2",iu,d(e().title),1),s("div",nu,[(c(!0),r(B,null,g(e().datas,F=>(c(),r("div",{class:"module-list__item",key:F.title,onClick:Du=>m(F)},[s("div",lu,d(F.title),1),s("div",ru,d(F.desc),1)],8,cu))),128))])])}}});const pu=_(du,[["__scopeId","data-v-9f063c1c"]]),Fu={style:{"max-width":"420px"}},_u=["src"],mu={style:{top:"1.2rem",left:"2rem",position:"absolute"}},Bu=E({__name:"Experience",setup(n){const o=h(),a=()=>{const e=String(o.params.name),t=String(o.params.type);return t=="local"?"http://192.168.108.154:8000/"+e:t=="modelscope"?u[e]:t=="huggingface"?"https://"+e+".hf.space/":""},i=()=>{console.log("\u8FD4\u56DE\u4E0A\u4E00\u7EA7"),history.back()},u={ai_artist:"https://www.modelscope.cn/inner/studio/gradio?backend_url=/api/v1/studio/damo/ai_artist/gradio/",ai_writer:"https://www.modelscope.cn/inner/studio/gradio?backend_url=/api/v1/studio/damo/ai_writer/gradio/",multi_style_portrait_stylization:"https://www.modelscope.cn/inner/studio/gradio?backend_url=/api/v1/studio/damo/multi-style_portrait_stylization/gradio/",chinese_clip_applications:"https://www.modelscope.cn/inner/studio/gradio?backend_url=/api/v1/studio/damo/chinese_clip_applications/gradio/"};return(e,t)=>{const m=y;return c(),r("div",null,[s("div",Fu,[s("iframe",{src:a(),allow:"camera;microphone",scrolling:"yes",frameborder:"0",width:"100%",height:"100%",style:{top:"0px",left:"0px",position:"absolute","font-family":`-apple-system, BlinkMacSystemFont, Helvetica Neue,
            Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui,
            Hiragino Sans GB, Microsoft Yahei, sans-serif`}},null,8,_u)]),s("div",mu,[C(m,{class:"at-fab",icon:"arrow-left",onClick:i})])])}}});const Eu=_(Bu,[["__scopeId","data-v-45d2473d"]]),Cu=[{path:"/",name:"index",component:tu,meta:{title:"AI\u7B97\u6CD5\u529F\u80FD\u4F53\u9A8C"}},{path:"/list/:id",name:"list",component:pu,meta:{title:"AI\u7B97\u6CD5\u529F\u80FD\u4F53\u9A8C"}},{path:"/experience/:type/:name",name:"experience",component:Eu,meta:{title:"AI\u7B97\u6CD5\u529F\u80FD\u4F53\u9A8C"}}],yu=z({history:G(),routes:Cu}),l=P(q);l.use(yu);l.use(y);l.use(b);l.use(K);l.use(x);l.use(v);l.mount("#app");
