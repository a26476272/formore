(function(){var t={6906:function(t,e,o){"use strict";var s=o(9242),n=o(3396),l=o(7139),a=o(2962),i=o(678),r=o(4870);const c=(t,e)=>({"nav-link":!0,active:t.value.some((t=>t===e))}),d=t=>Number(t).toLocaleString(),p=t=>{const e=new Intl.RelativeTimeFormat("zh-TW",{style:"narrow"});return e.format(-t,"day").replace(" ","")},m=t=>{const e=new Intl.RelativeTimeFormat("zh-TW",{style:"narrow"});return t<=7?p(t):t<=30?e.format(-Math.floor(t/7),"week").replace("週","星期").replace(" ",""):e.format(-Math.floor(t/30),"month").replace(" ","")},g=(t,e,o)=>{let s=JSON.parse(JSON.stringify(t[e]));s=s.replaceAll(/\n/gi,"<br>"),s=s.replaceAll(/([#@](?:[^\x00-\x7F]|\w)+)/gi,(t=>`<span class="hash-tag">${t}</span>`)),s=s.replaceAll(/!\[show_more\]/gi,o),t[e]=s.replaceAll(/!\[img src='[^\]]*'[^\]]*\]/gi,(e=>u(e,t)))},u=(t,e)=>{const s=t.match(/src='([^']*)'/i),n=s?s[1]:"",l=t.match(/width='([^']*)'/i),a=l?l[1]:"";let i="";if(""!==n){try{i=o(7173)(`./${n}`)}catch(r){i=n}e.coverimg||(e.coverimg=i)}return`<img src="${i}" width="${a}" class="img-fluid" />`},v=t=>{if(t?.preview)return t?.preview;if(t.preview=t?.content,!t.preview)return"";const e="…<b>顯示更多</b>";g(t,"preview",e);let o=t.preview.indexOf(e);return o>0&&(t.preview=t.preview.substring(0,o+e.length)),t.preview},h=t=>t?.content_parsed?t?.content:t?.content?(g(t,"content",""),t.content_parsed=!0,t.content):"",f=()=>{let t={};document.querySelectorAll(".modal-backdrop").forEach(((t,e)=>{t.style["z-index"]=1050+10*e})),document.querySelectorAll(".modal").forEach(((e,o)=>{t[e.id]=e.scrollTop,e.style["z-index"]=1055+10*o})),console.log(t),setTimeout((()=>{for(let e in t)document.getElementById(e).scrollTop=t[e]}),500)},w={class:"navbar fixed-top navbar-expand-lg navbar-dark bg-light-green py-0"},_={class:"container-fluid"},x=(0,n._)("i",{class:"fas fa-align-left"},null,-1),C=(0,n._)("span",{class:"navbar-toggler-icon"},null,-1),b=[x,C],k=(0,n.uE)('<a class="navbar-brand p-0" href="/"><img src="'+a+'" height="65"></a><div class="row collapse navbar-collapse justify-content-between py-3 py-lg-0"><div class="col text-start"><label id="search-area"><input class="form-control me-2" type="search" placeholder="搜尋more貼文"></label></div><div class="col-auto"><button id="login-btn" class="btn bg-dark-green text-white me-0 me-lg-5">登入</button></div></div><div id="spacer"></div>',3),y={id:"main",class:"container-fluid"},M=(0,n._)("input",{id:"sidebar-toggle",type:"checkbox",hidden:"true"},null,-1),D={id:"wrapper",class:"row flex-nowrap"},H={id:"sidebar",class:"col-auto text-white min-vh-100 bg-light1 py-3"},j={class:"nav flex-column align-items-start"},S=["width","height","viewBox","fill"],P=["d","fill","stroke","stroke-width"],U={class:"ms-2"},z=(0,n._)("hr",{class:"my-4 opacity-75"},null,-1),L=(0,n._)("div",{class:"text-start text-light-green font-sz-16 mt-2 mb-3 ps-3"}," Formore精選版 ",-1),O={class:"nav flex-column align-items-start"},Z=["width","height","viewBox","fill"],B=["d","fill","stroke","stroke-width"],F={class:"ms-2"},T={class:"col"};var V={setup(t){(0,n.f3)("redrawVueMasonry");const e=(0,r.iH)([{name:"home",path:"/hot",text:"首頁",icon:{width:23,height:24,viewBox:"0 0 23 24",fill:"none",paths:[{d:"M12.5814 1.08927C12.1485 0.709876 11.5871 0.5 11.0051 0.5C10.4232 0.5 9.86182 0.709876 9.42894 1.08927L0.781421 8.66892C0.535553 8.8846 0.338927 9.1483 0.204305 9.44291C0.0696835 9.73753 7.57174e-05 10.0565 0 10.379V21.1994C0 21.8096 0.248475 22.3947 0.690764 22.8262C1.13305 23.2576 1.73292 23.5 2.35841 23.5H5.50297C6.12846 23.5 6.72833 23.2576 7.17062 22.8262C7.61291 22.3947 7.86138 21.8096 7.86138 21.1994V15.0645C7.86138 14.8611 7.94421 14.6661 8.09164 14.5223C8.23907 14.3785 8.43902 14.2977 8.64752 14.2977H13.3643C13.5728 14.2977 13.7728 14.3785 13.9202 14.5223C14.0677 14.6661 14.1505 14.8611 14.1505 15.0645V21.1994C14.1505 21.8096 14.399 22.3947 14.8413 22.8262C15.2835 23.2576 15.8834 23.5 16.5089 23.5H19.6535C20.2789 23.5 20.8788 23.2576 21.3211 22.8262C21.7634 22.3947 22.0119 21.8096 22.0119 21.1994V10.379C22.0118 10.0565 21.9422 9.73753 21.8076 9.44291C21.6729 9.1483 21.4763 8.8846 21.2304 8.66892L12.5829 1.08927H12.5814Z",fill:"#303030",stroke:null,strokeWidth:null}]}},{name:"about",path:"/about",text:"發文規定",icon:{width:23,height:24,viewBox:"0 0 23 24",fill:"none",paths:[{d:"M11.5 0.5C9.22552 0.5 7.00211 1.17446 5.11095 2.4381C3.21978 3.70174 1.7458 5.49779 0.87539 7.59914C0.00498273 9.70049 -0.222756 12.0128 0.220974 14.2435C0.664704 16.4743 1.75997 18.5234 3.36828 20.1317C4.97658 21.74 7.02568 22.8353 9.25646 23.279C11.4872 23.7228 13.7995 23.495 15.9009 22.6246C18.0022 21.7542 19.7983 20.2802 21.0619 18.3891C22.3255 16.4979 23 14.2745 23 12C23 8.95001 21.7884 6.02494 19.6317 3.86827C17.4751 1.7116 14.55 0.5 11.5 0.5ZM10.4938 5.31562C10.4938 5.04875 10.5998 4.79281 10.7885 4.6041C10.9772 4.41539 11.2331 4.30937 11.5 4.30937C11.7669 4.30937 12.0228 4.41539 12.2115 4.6041C12.4002 4.79281 12.5063 5.04875 12.5063 5.31562V13.9406C12.5063 14.2075 12.4002 14.4634 12.2115 14.6521C12.0228 14.8409 11.7669 14.9469 11.5 14.9469C11.2331 14.9469 10.9772 14.8409 10.7885 14.6521C10.5998 14.4634 10.4938 14.2075 10.4938 13.9406V5.31562ZM11.5 19.5469C11.2441 19.5469 10.994 19.471 10.7812 19.3288C10.5685 19.1867 10.4027 18.9846 10.3047 18.7482C10.2068 18.5118 10.1812 18.2517 10.2311 18.0007C10.281 17.7498 10.4042 17.5192 10.5852 17.3383C10.7661 17.1574 10.9966 17.0341 11.2476 16.9842C11.4986 16.9343 11.7587 16.9599 11.9951 17.0579C12.2315 17.1558 12.4336 17.3216 12.5757 17.5344C12.7179 17.7471 12.7938 17.9972 12.7938 18.2531C12.7938 18.5962 12.6574 18.9253 12.4148 19.1679C12.1722 19.4106 11.8431 19.5469 11.5 19.5469Z",fill:"#303030",stroke:null,strokeWidth:null}]}}]),o=(0,r.iH)([{name:"xx",path:"#",text:"For 知識",icon:{width:23,height:20,viewBox:"0 0 31 27",fill:"none",paths:[{d:"M26.1666 9.875V7.125C26.1666 5.6125 24.9666 4.375 23.4999 4.375H19.4999C19.4999 2.0925 17.7133 0.25 15.4999 0.25C13.2866 0.25 11.4999 2.0925 11.4999 4.375H7.49992C6.03325 4.375 4.83325 5.6125 4.83325 7.125V9.875C2.61992 9.875 0.833252 11.7175 0.833252 14C0.833252 16.2825 2.61992 18.125 4.83325 18.125V23.625C4.83325 25.1375 6.03325 26.375 7.49992 26.375H23.4999C24.9666 26.375 26.1666 25.1375 26.1666 23.625V18.125C28.3799 18.125 30.1666 16.2825 30.1666 14C30.1666 11.7175 28.3799 9.875 26.1666 9.875ZM23.4999 23.625H7.49992V7.125H23.4999V23.625ZM11.4999 15.375C10.3933 15.375 9.49992 14.4537 9.49992 13.3125C9.49992 12.1713 10.3933 11.25 11.4999 11.25C12.6066 11.25 13.4999 12.1713 13.4999 13.3125C13.4999 14.4537 12.6066 15.375 11.4999 15.375ZM21.4999 13.3125C21.4999 14.4537 20.6066 15.375 19.4999 15.375C18.3933 15.375 17.4999 14.4537 17.4999 13.3125C17.4999 12.1713 18.3933 11.25 19.4999 11.25C20.6066 11.25 21.4999 12.1713 21.4999 13.3125ZM10.1666 18.125H20.8333V20.875H10.1666V18.125Z",fill:"#303030",stroke:null,strokeWidth:null}]}},{name:"xx",path:"#",text:"For 靠背",icon:{width:23,height:21,viewBox:"0 0 28 26",fill:"none",paths:[{d:"M0.631836 14.8816C0.552734 14.2723 0.5 13.6527 0.5 13.023C0.5 7.48789 3.64824 2.66875 8.30996 0.114456L9.18008 1.88164V13.9523L8.21504 14.8816H0.631836ZM27.5 13.9523C27.5 14.8816 26.535 15.8109 25.5699 15.8109H17.8549C18.3348 17.6695 18.8199 19.523 18.8199 20.4523C18.8199 22.3109 17.8549 24.1645 17.375 24.6316C17.3645 24.6418 16.8951 25.0938 15.9301 25.0938C14.4852 25.0938 14.4852 23.7023 14.4852 23.7023C14.4852 23.677 14.0053 21.3816 14.0053 20.4523C14.0053 19.523 12.0752 15.8109 11.1102 14.8816L10.1451 14.4195V1.41953L11.1102 0.957424H21.715C23.6451 0.957424 24.6102 1.88672 24.6102 2.81602C24.6102 3.74531 23.6451 4.67461 22.6801 4.67461C24.6102 4.67461 25.5752 5.60391 25.5752 6.53321C25.5752 7.4625 24.6102 8.3918 23.6451 8.3918C25.5752 8.3918 26.5402 9.3211 26.5402 10.2504C26.5402 11.1797 25.5752 12.109 24.6102 12.109C26.535 12.0938 27.5 13.023 27.5 13.9523Z",fill:"#303030",stroke:null,strokeWidth:null}]}},{name:"xx",path:"#",text:"For 告白",icon:{width:23,height:21,viewBox:"0 0 27 24",fill:"none",paths:[{d:"M13.9571 3.90545C9.51874 -2.95029 0.535645 0.784498 0.535645 8.25269C0.535645 13.8607 12.851 22.6332 13.9571 23.7739C15.0709 22.6332 26.7737 13.8607 26.7737 8.25269C26.7737 0.841117 18.4038 -2.95029 13.9571 3.90545V3.90545Z",fill:"#303030",stroke:null,strokeWidth:null}]}}]),s=(0,i.yj)(),a=(0,n.Fl)((()=>s.matched.map((t=>t.name)))),d=t=>({...c(a,t),"d-flex":!0,"align-items-center":!0});return(t,s)=>{const a=(0,n.up)("router-link"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",w,[(0,n._)("div",_,[(0,n._)("label",{for:"sidebar-toggle",type:"button",id:"sidebarCollapse",class:"navbar-toggler",onClick:s[0]||(s[0]=(...e)=>t.updateM&&t.updateM(...e))},b),k])]),(0,n._)("div",y,[M,(0,n._)("div",D,[(0,n._)("div",H,[(0,n._)("ul",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.value,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.name,class:"nav-item"},[(0,n.Wm)(a,{class:(0,l.C_)(d(t.name)),to:t.path},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.icon.width,height:t.icon.height,viewBox:t.icon.viewBox,fill:t.icon.fill},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.icon.paths,((e,o)=>((0,n.wg)(),(0,n.iD)("path",{key:o,d:e.d,fill:d(t.name).active?"#3C8585":e.fill,stroke:e.stroke,"stroke-width":e.strokeWidth},null,8,P)))),128))],8,S)),(0,n._)("span",U,(0,l.zw)(t.text),1)])),_:2},1032,["class","to"])])))),128))]),z,L,(0,n._)("ul",O,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.value,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.name,class:"nav-item"},[(0,n._)("a",{class:(0,l.C_)(d(t.name)),href:"javascript:void(0)"},[((0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.icon.width,height:t.icon.height,viewBox:t.icon.viewBox,fill:t.icon.fill},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.icon.paths,((e,o)=>((0,n.wg)(),(0,n.iD)("path",{key:o,d:e.d,fill:d(t.name).active?"#3C8585":e.fill,stroke:e.stroke,"stroke-width":e.strokeWidth},null,8,B)))),128))],8,Z)),(0,n._)("span",F,(0,l.zw)(t.text),1)],2)])))),128))])]),(0,n._)("div",T,[(0,n.Wm)(i)])])])],64)}}};const J=V;var W=J,A=o(5890),E=o(7474),I=o(8937),K=o(4080);const N=t=>((0,n.dD)("data-v-1a852648"),t=t(),(0,n.Cn)(),t),R=N((()=>(0,n._)("hr",{class:"opacity-75 my-3"},null,-1))),Y={class:"row align-items-center"},$={class:"col-auto"},q={key:0,src:K,class:"img-fluid"},G={key:1},Q={class:"col-auto px-0 text-start info-area"},X={class:"info-text text-truncate"},tt={class:"info-text"},et=["innerHTML"];var ot={props:["comment"],setup(t){const e=t,o=(0,n.f3)("toggleEnvelopeDialogModal"),s=(0,n.Fl)((()=>`bg-${e["comment"].is_formore?"light":"dark"}-green`));return(e,a)=>((0,n.wg)(),(0,n.iD)("div",null,[R,(0,n._)("div",{class:"cursor-pointer",onClick:a[0]||(a[0]=(...t)=>(0,r.SU)(o)&&(0,r.SU)(o)(...t))},[(0,n._)("div",Y,[(0,n._)("div",$,[(0,n._)("div",{class:(0,l.C_)(`avatar rounded-circle d-flex justify-content-center align-items-center ${(0,r.SU)(s)}`)},[t.comment.is_formore?((0,n.wg)(),(0,n.iD)("img",q)):((0,n.wg)(),(0,n.iD)("span",G,(0,l.zw)(t.comment.user?t.comment.user[0]:""),1))],2)]),(0,n._)("div",Q,[(0,n._)("div",X," @"+(0,l.zw)(t.comment.user),1),(0,n._)("div",tt,(0,l.zw)(t.comment.date_ago?(0,r.SU)(p)(t.comment.date_ago):""),1)]),(0,n._)("div",{class:"col ps-0 text-start",innerHTML:(0,r.SU)(h)(t.comment)},null,8,et)])])]))}},st=o(89);const nt=(0,st.Z)(ot,[["__scopeId","data-v-1a852648"]]);var lt=nt;const at=t=>((0,n.dD)("data-v-18f426c0"),t=t(),(0,n.Cn)(),t),it={class:"modal-dialog modal-lg"},rt={class:"modal-content border-0"},ct={class:"modal-header border-0 d-block"},dt={class:"row align-items-center px-4 mt-5"},pt={class:"col-auto"},mt={class:"avatar rounded-circle d-flex justify-content-center align-items-center"},gt={class:"col text-start"},ut={class:"d-flex align-items-center"},vt={class:"info-text me-2"},ht=at((()=>(0,n._)("svg",{width:"10",height:"10",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("circle",{cx:"3.13794",cy:"3.5",r:"3",fill:"#C4C4C4"})],-1))),ft={class:"info-text ms-2"},wt={class:"info-text"},_t=at((()=>(0,n._)("div",{class:"col-auto btn-close-wrapper"},[(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),xt={class:"modal-body"},Ct={class:"text-start mb-3 px-4"},bt=["innerHTML"],kt={class:"modal-footer d-block border-0 p-5 bg-light2"},yt={class:"row"},Mt={class:"col text-start"},Dt={class:"text-light-black"},Ht={class:"col"},jt={class:"row mx-auto justify-content-between gx-2 gx-lg-3"},St={class:"col-auto d-flex justify-content-center align-items-center"},Pt=["fill"],Ut=["stroke"],zt={class:"ps-2"},Lt={class:"col-auto d-flex justify-content-center align-items-center"},Ot=at((()=>(0,n._)("svg",{width:"21",height:"20",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M23.0184 22.5L17.9262 21.2373C6.72914 24.553 2.33132 18.2306 1.57907 14.7725C0.763854 11.025 1.57907 -0.558311 14.7725 1.8185C22.9571 3.29296 25.1594 12.161 22.1793 17.3876L23.0184 22.5Z",stroke:"black","stroke-width":"2"})],-1))),Zt={class:"ps-2"},Bt={class:"col-auto d-flex justify-content-center align-items-center"},Ft=at((()=>(0,n._)("svg",{width:"21",height:"20",viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M23.8235 1.71558H2.73828L11.2885 9.71128L13.6107 20.2845L23.8235 1.71558Z",stroke:"black","stroke-width":"2"}),(0,n._)("path",{d:"M23.8233 1.71558L11.5669 9.4742",stroke:"black","stroke-width":"2"})],-1))),Tt={class:"ps-2"},Vt={components:{PostComment:lt}};var Jt=Object.assign(Vt,{props:["post"],setup(t,{expose:e}){const o=(0,r.iH)();let s;(0,n.bv)((()=>{s=new I.u_(o.value,{})}));const a=()=>{s.toggle(),f()};return e({togglePostDialogModal:a}),(e,s)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"thisModalRef",ref:o,class:"post_dialog modal fade",id:"postDialogModal",tabindex:"-1"},[(0,n._)("div",it,[(0,n._)("div",rt,[(0,n._)("div",ct,[(0,n._)("div",dt,[(0,n._)("div",pt,[(0,n._)("div",mt,(0,l.zw)(t.post?.user?t.post.user[0]:""),1)]),(0,n._)("div",gt,[(0,n._)("div",ut,[(0,n._)("span",vt,(0,l.zw)(t.post?.department),1),ht,(0,n._)("span",ft,"@"+(0,l.zw)(t.post?.user),1)]),(0,n._)("div",wt,(0,l.zw)(t.post?.date_ago?(0,r.SU)(m)(t.post.date_ago):""),1)]),_t])]),(0,n._)("div",xt,[(0,n._)("h4",Ct,(0,l.zw)(t.post?.title),1),(0,n._)("div",{class:"card-text text-start px-4 pb-4",innerHTML:(0,r.SU)(h)(t.post)},null,8,bt)]),(0,n._)("div",kt,[(0,n._)("div",yt,[(0,n._)("div",Mt,[(0,n._)("div",Dt,"共"+(0,l.zw)((0,r.SU)(d)(t.post?.comments))+"留言",1)]),(0,n._)("div",Ht,[(0,n._)("div",jt,[(0,n._)("div",St,[((0,n.wg)(),(0,n.iD)("svg",{width:"23",height:"20",viewBox:"0 0 26 23",fill:t.post.liked?"red":"none",onClick:s[0]||(s[0]=e=>{t.post.liked=!t.post?.liked,t.post?.liked?t.post.likes++:t.post.likes--}),xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M1.23437 8.50347C0.440508 4.789 1.56252 1.69007 6.15635 1.07453C10.7502 0.45899 12.6396 3.81588 12.5602 5.27514C12.5602 3.55057 15.8362 0.522666 19.5197 1.07453C24.1242 1.76436 24.6677 6.24825 23.6743 9.06064C22.6809 11.873 16.3795 17.9577 12.5602 21C8.78491 18.108 2.02824 12.2179 1.23437 8.50347Z",stroke:t.post?.liked?"red":"black","stroke-width":"2"},null,8,Ut)],8,Pt)),(0,n._)("span",zt,(0,l.zw)((0,r.SU)(d)(t.post?.likes)),1)]),(0,n._)("div",Lt,[Ot,(0,n._)("span",Zt,(0,l.zw)((0,r.SU)(d)(t.post?.comments))+"則",1)]),(0,n._)("div",Bt,[Ft,(0,n._)("span",Tt,(0,l.zw)((0,r.SU)(d)(t.post?.shares)),1)])])])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.post?.comment_details,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n.Wm)(lt,{comment:t},null,8,["comment"])])))),128))])])])],512))}});const Wt=(0,st.Z)(Jt,[["__scopeId","data-v-18f426c0"]]);var At=Wt,Et=o(8235);const It=t=>((0,n.dD)("data-v-2a55d18e"),t=t(),(0,n.Cn)(),t),Kt={class:"modal-dialog modal-dialog-centered"},Nt={class:"modal-content border-0"},Rt={class:"modal-body p-0 align-items-center justify-content-center text-center"},Yt=It((()=>(0,n._)("img",{src:Et,class:"img-fluid deco-radius"},null,-1))),$t={class:"py-4"},qt=It((()=>(0,n._)("div",{class:"text-light-green pb-1"},"題目：_ _r _ _re",-1))),Gt={id:"input-area"};var Qt={setup(t,{expose:e}){const o=(0,n.f3)("toggleAdminPostDialogModal"),l=(0,n.f3)("setAdminPostKey"),a=(0,r.iH)(),i=(0,r.iH)(""),c=()=>{"FOMO"===i.value&&(l("envelope"),p(),o())};let d;(0,n.bv)((()=>{d=new I.u_(a.value,{})}));const p=()=>{d.toggle(),f()};return e({toggleEnvelopeDialogModal:p}),(t,e)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"thisModalRef",ref:a,class:"envelope_dialog modal fade",id:"envelopeDialogModal",tabindex:"-1"},[(0,n._)("div",Kt,[(0,n._)("div",Nt,[(0,n._)("div",Rt,[Yt,(0,n._)("div",$t,[qt,(0,n._)("label",Gt,[(0,n.wy)((0,n._)("input",{class:"form-control me-2 text-center",type:"search",placeholder:"請輸入空格中的4個文字","onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t)},null,512),[[s.nr,i.value]])]),(0,n._)("div",{class:"py-4"},[(0,n._)("button",{id:"confirm-btn",class:"btn bg-light-green text-white",onClick:c},"確定")])])])])])],512))}};const Xt=(0,st.Z)(Qt,[["__scopeId","data-v-2a55d18e"]]);var te=Xt,ee=o(5630);const oe=t=>((0,n.dD)("data-v-91a9ee20"),t=t(),(0,n.Cn)(),t),se={class:"modal-dialog modal-lg"},ne={class:"modal-content border-0"},le={class:"modal-header border-0 d-block position-relative"},ae={class:"row align-items-center px-4 mt-5"},ie=oe((()=>(0,n._)("div",{class:"col-auto"},[(0,n._)("div",{class:"avatar rounded-circle d-flex justify-content-center align-items-center"},[(0,n._)("img",{src:K,class:"img-fluid"})])],-1))),re={class:"col text-start"},ce=(0,n.uE)('<div class="d-flex align-items-center" data-v-91a9ee20><span class="info-text me-2" data-v-91a9ee20>管理員</span><svg width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-91a9ee20><circle cx="3.13794" cy="3.5" r="3" fill="#C4C4C4" data-v-91a9ee20></circle></svg><span class="info-text ms-2" data-v-91a9ee20>@Formore_2021</span></div>',1),de={class:"info-text"},pe=oe((()=>(0,n._)("div",{class:"col-auto btn-close-wrapper"},[(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),me=oe((()=>(0,n._)("svg",{id:"admin-logo",width:"200",height:"226",viewBox:"0 0 266 300",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,n._)("rect",{width:"266",height:"300",fill:"url(#pattern0)"}),(0,n._)("defs",null,[(0,n._)("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},[(0,n._)("use",{"xlink:href":"#image0_382_582",transform:"translate(-0.0639098) scale(0.000275347)"})]),(0,n._)("image",{id:"image0_382_582",width:"4096",height:"4096","xlink:href":ee})])],-1))),ge={class:"modal-body"},ue=["innerHTML"],ve={components:{PostComment:lt}};var he=Object.assign(ve,{props:["adminPostKey"],setup(t,{expose:e}){const o=t,s=(0,n.f3)("adminPosts"),a=(0,r.iH)(),i=(0,n.Fl)((()=>s[o["adminPostKey"]]));let c;(0,n.bv)((()=>{c=new I.u_(a.value,{})}));const d=()=>{c.toggle(),f()};return e({toggleAdminPostDialogModal:d}),(t,e)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"thisModalRef",ref:a,class:"admin_post_dialog modal fade",id:"adminPostDialogModal",tabindex:"-1"},[(0,n._)("div",se,[(0,n._)("div",ne,[(0,n._)("div",le,[(0,n._)("div",ae,[ie,(0,n._)("div",re,[ce,(0,n._)("div",de,(0,l.zw)((0,r.SU)(i)?.date_ago?(0,r.SU)(m)((0,r.SU)(i).date_ago):""),1)]),pe]),me]),(0,n._)("div",ge,[(0,n._)("div",{class:"card-text text-start px-4 pb-4",innerHTML:(0,r.SU)(h)((0,r.SU)(i))},null,8,ue)])])])],512))}});const fe=(0,st.Z)(he,[["__scopeId","data-v-91a9ee20"]]);var we=fe;const _e={id:"home-nav",class:"nav mt-2 mt-sm-5 mx-1 mx-sm-5 px-4"},xe={class:"mx-1 mx-sm-5 py-3 py-sm-5"},Ce={components:{PostDialog:At,EnvelopeDialog:te,AdminPostDialog:we}};var be=Object.assign(Ce,{setup(t){const e=(0,r.iH)([{name:"new",path:"/new",text:"最新"},{name:"hot",path:"/hot",text:"熱門"}]),o=(0,r.iH)(),s=(0,r.iH)(),a=(0,r.iH)(),d=(0,r.qj)(A),p=((0,n.Fl)((()=>[...d].sort(((t,e)=>e.likes-t.likes)))),(0,r.iH)({})),m=t=>p.value=t,g=(0,r.qj)(E),u=(0,r.iH)(),v=t=>u.value=t,h=(0,i.yj)(),f=(0,n.Fl)((()=>h.matched.map((t=>t.name)))),w=t=>c(f,t);return(0,n.JJ)("hotPosts",d),(0,n.JJ)("setCurrentPost",m),(0,n.JJ)("adminPosts",g),(0,n.JJ)("setAdminPostKey",v),(0,n.JJ)("togglePostDialogModal",(()=>o.value.togglePostDialogModal())),(0,n.JJ)("toggleEnvelopeDialogModal",(()=>s.value.toggleEnvelopeDialogModal())),(0,n.JJ)("toggleAdminPostDialogModal",(()=>a.value.toggleAdminPostDialogModal())),(t,i)=>{const r=(0,n.up)("router-link"),c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("ul",_e,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.value,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.name,class:"nav-item mx-3"},[(0,n.Wm)(r,{class:(0,l.C_)(w(t.name)),to:t.path},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.text),1)])),_:2},1032,["class","to"])])))),128))]),(0,n._)("div",xe,[(0,n.Wm)(c)]),(0,n.Wm)(At,{ref_key:"postDialogRef",ref:o,post:p.value},null,8,["post"]),(0,n.Wm)(te,{ref_key:"envelopeDialogRef",ref:s},null,512),(0,n.Wm)(we,{ref_key:"adminPostDialogRef",ref:a,"admin-post-key":u.value},null,8,["admin-post-key"])],64)}}});const ke=(0,st.Z)(be,[["__scopeId","data-v-94d9ab6e"]]);var ye=ke;const Me=t=>((0,n.dD)("data-v-35468bcb"),t=t(),(0,n.Cn)(),t),De={class:"card"},He={class:"card-header border-0 bg-transparent px-2 pt-3 pb-2"},je={class:"row flex-nowrap align-items-center px-4"},Se={class:"col-auto"},Pe={class:"avatar rounded-circle d-flex justify-content-center align-items-center"},Ue={class:"col text-start"},ze=Me((()=>(0,n._)("svg",{class:"mx-2",width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("circle",{cx:"3.13794",cy:"3.5",r:"3",fill:"#303030"})],-1))),Le=Me((()=>(0,n._)("div",{class:"col-auto d-flex",style:{height:"40px"}},[(0,n._)("div",{class:"vr"})],-1))),Oe={class:"col-auto"},Ze=Me((()=>(0,n._)("hr",{class:"mb-0 opacity-75"},null,-1))),Be={class:"card-body"},Fe={class:"text-start mb-3 px-3"},Te=["innerHTML"],Ve={class:"ratio ratio-16x9"},Je=["src"],We={class:"card-footer border-0 bg-transparent px-2 py-3"},Ae={class:"opacity-75"},Ee={class:"row mx-auto justify-content-center gx-2 gx-lg-4"},Ie={class:"col-auto d-flex justify-content-center align-items-center"},Ke=["fill"],Ne=["stroke"],Re={class:"ps-2"},Ye={class:"col-auto d-flex justify-content-center align-items-center"},$e=Me((()=>(0,n._)("svg",{width:"21",height:"20",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M23.0184 22.5L17.9262 21.2373C6.72914 24.553 2.33132 18.2306 1.57907 14.7725C0.763854 11.025 1.57907 -0.558311 14.7725 1.8185C22.9571 3.29296 25.1594 12.161 22.1793 17.3876L23.0184 22.5Z",stroke:"black","stroke-width":"2"})],-1))),qe={class:"ps-2"},Ge={class:"col-auto d-flex justify-content-center align-items-center"},Qe=Me((()=>(0,n._)("svg",{width:"21",height:"20",viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M23.8235 1.71558H2.73828L11.2885 9.71128L13.6107 20.2845L23.8235 1.71558Z",stroke:"black","stroke-width":"2"}),(0,n._)("path",{d:"M23.8233 1.71558L11.5669 9.4742",stroke:"black","stroke-width":"2"})],-1))),Xe={class:"ps-2"};var to={props:["post"],setup(t){const e=(0,n.f3)("setCurrentPost"),o=(0,n.f3)("togglePostDialogModal"),a=t=>{e(t),o()};return(e,o)=>((0,n.wg)(),(0,n.iD)("div",De,[(0,n._)("div",{class:"cursor-pointer",onClick:o[0]||(o[0]=e=>a(t.post))},[(0,n._)("div",He,[(0,n._)("div",je,[(0,n._)("div",Se,[(0,n._)("div",Pe,(0,l.zw)(t.post.user[0]),1)]),(0,n._)("div",Ue,[(0,n._)("span",null,(0,l.zw)(t.post.department),1),ze,(0,n._)("span",null,"@"+(0,l.zw)(t.post.user),1)]),Le,(0,n._)("div",Oe,(0,l.zw)((0,r.SU)(m)(t.post.date_ago)),1)]),Ze]),(0,n._)("div",Be,[(0,n._)("h4",Fe,(0,l.zw)(t.post.title),1),(0,n._)("div",{class:"card-text text-start px-3",innerHTML:(0,r.SU)(v)(t.post)},null,8,Te)]),(0,n.wy)((0,n._)("div",Ve,[(0,n._)("img",{src:t.post.coverimg,class:"img-fluid object-fit-cover"},null,8,Je)],512),[[s.F8,t.post.coverimg]])]),(0,n._)("div",We,[(0,n.wy)((0,n._)("hr",Ae,null,512),[[s.F8,!t.post.coverimg]]),(0,n._)("div",Ee,[(0,n._)("div",Ie,[((0,n.wg)(),(0,n.iD)("svg",{width:"23",height:"20",viewBox:"0 0 26 23",fill:t.post.liked?"red":"none",onClick:o[1]||(o[1]=e=>{t.post.liked=!t.post.liked,t.post.liked?t.post.likes++:t.post.likes--}),xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M1.23437 8.50347C0.440508 4.789 1.56252 1.69007 6.15635 1.07453C10.7502 0.45899 12.6396 3.81588 12.5602 5.27514C12.5602 3.55057 15.8362 0.522666 19.5197 1.07453C24.1242 1.76436 24.6677 6.24825 23.6743 9.06064C22.6809 11.873 16.3795 17.9577 12.5602 21C8.78491 18.108 2.02824 12.2179 1.23437 8.50347Z",stroke:t.post.liked?"red":"black","stroke-width":"2"},null,8,Ne)],8,Ke)),(0,n._)("span",Re,(0,l.zw)((0,r.SU)(d)(t.post.likes)),1)]),(0,n._)("div",Ye,[$e,(0,n._)("span",qe,(0,l.zw)((0,r.SU)(d)(t.post.comments))+"則",1)]),(0,n._)("div",Ge,[Qe,(0,n._)("span",Xe,(0,l.zw)((0,r.SU)(d)(t.post.shares)),1)])])])]))}};const eo=(0,st.Z)(to,[["__scopeId","data-v-35468bcb"]]);var oo=eo;const so={class:"hot"},no={"transition-duration":"0.1s","item-selector":".grid-item","percent-position":"true",class:"row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 g-sm-5"},lo={components:{PostCard:oo}};var ao=Object.assign(lo,{setup(t){const e=(0,n.f3)("hotPosts");return(t,o)=>{const s=(0,n.Q2)("masonry-tile"),l=(0,n.Q2)("masonry");return(0,n.wg)(),(0,n.iD)("div",so,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",no,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,r.SU)(e),((t,e)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{class:"col grid-item",key:e},[(0,n.Wm)(oo,{post:t},null,8,["post"])])),[[s]]))),128))])),[[l,"containerId"]])])}}});const io=ao;var ro=io;const co={class:"new"},po=(0,n._)("h1",null,"NEW",-1),mo=[po];function go(t,e){return(0,n.wg)(),(0,n.iD)("div",co,mo)}const uo={},vo=(0,st.Z)(uo,[["render",go]]);var ho=vo;const fo={class:"about"},wo=(0,n._)("h1",null,"This is an about page",-1),_o=[wo];function xo(t,e){return(0,n.wg)(),(0,n.iD)("div",fo,_o)}const Co={},bo=(0,st.Z)(Co,[["render",xo]]);var ko=bo;const yo=[{path:"/",redirect:"/hot",name:"home",component:ye,children:[{path:"hot",name:"hot",component:ro},{path:"new",name:"new",component:ho}]},{path:"/about",name:"about",component:ko}],Mo=(0,i.p7)({history:(0,i.PO)("/formore/"),routes:yo});var Do=Mo,Ho=o(65),jo=(0,Ho.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),So=o(8125),Po=o(8321),Uo=o(2274),zo=o(2234),Lo=o(7749),Oo=o(3693);So.vI.add(Po.mRB,Uo.NCV,zo.vnX),(0,s.ri)(W).component("font-awesome-icon",Lo.GN).use(jo).use(Do).use(Oo.Z).mount("#app")},7173:function(t,e,o){var s={"./admin_posts":7474,"./admin_posts.json":7474,"./banner.png":2962,"./envelope_deco.png":8235,"./formore_avatar.png":4080,"./formore_bg_transparent.png":5630,"./img0.png":7606,"./img1.png":3142,"./post_img.png":707,"./posts":5890,"./posts.json":5890};function n(t){var e=l(t);return o(e)}function l(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=l,t.exports=n,n.id=7173},2962:function(t,e,o){"use strict";t.exports=o.p+"img/banner.016a08a3.png"},8235:function(t,e,o){"use strict";t.exports=o.p+"img/envelope_deco.48a9df47.png"},4080:function(t,e,o){"use strict";t.exports=o.p+"img/formore_avatar.b46ab75d.png"},5630:function(t,e,o){"use strict";t.exports=o.p+"img/formore_bg_transparent.52cb77c4.png"},7606:function(t,e,o){"use strict";t.exports=o.p+"img/img0.e9a68d28.png"},3142:function(t,e,o){"use strict";t.exports=o.p+"img/img1.6314717e.png"},707:function(t,e,o){"use strict";t.exports=o.p+"img/post_img.f2d5f609.png"},7474:function(t){"use strict";t.exports=JSON.parse('{"envelope":{"date_ago":5,"content":"你好:\\n我是ForMore論壇的管理員，\\n當你成功破解我們的密碼時，\\n我們就相信你是有能力破案的天選之人!沒錯!就是你!\\n\\n恭喜你已經通過第一道關卡🎉\\n你來的真是時候，我們等你等了好久....\\n\\n事情是這樣的，最近因為舍焦焦的離奇失蹤案在論壇上吵得沸沸揚揚，\\nForMore論壇為此遭受波及，為了避免事件越鬧越大，\\n我們需要私下調查這起失蹤案，盡快讓案子水落石出...\\n雖然我們已經花費大量人力調查，卻始終無法破案，\\n所以需要聰明的你協助破解這起離奇失蹤案....\\n","hidden":{"tip_text":"","content":""}}}')},5890:function(t){"use strict";t.exports=JSON.parse('[{"department":"英文系","user":"GReeeeNGirl","date_ago":3,"title":"驚傳英文系大一「陳焦焦」失蹤!!!","content":"那天我去輔導室辦事情，偶然間聽到老師們在討論陳焦焦失蹤了....？！\\n\\n大家還記得陳焦焦是誰嗎?![show_more]\\n就是常常跟在韓芭比、林凡娜身邊的那位小跟班\\n聽說跨年完之後，她就沒有來學校了，身邊的人也連絡不到他...\\n不知道是不是跟前陣子有人在靠北版上酸他有關\\n但老實說...我覺得她那則貼文應該......沒有要「討拍」的意思吧~\\n大家是不是對她有所誤解(＞﹏＜)\\n\\n而且我感覺焦焦在大學變得開朗許多，宿營那天應該是她人生中最重要的一天吧？\\n自從認識其他兩個人後，覺得她終於找到知心朋友\\n沒想到大家卻處處拿她和芭比、凡娜比較，還把她說的那麼難聽，真為她感到不捨\\n\\n總之，希望焦焦平安🙏\\n如果大家有甚麼更多有關焦焦的線索請持續更新消息\\n\\n#弗莫大學 #英文系大一 #陳焦焦 #失蹤 #學校後巷  #迎新宿營 #酸民事件\\n\\n![img src=\'img0.png\' width=\'443\']","likes":10358,"liked":false,"comments":1004,"shares":356,"comment_details":[{"is_formore":true,"user":"Formore","date_ago":5,"content":"http://formore.com/help.us/find.out/the.truth?/"},{"is_formore":false,"user":"Amy_chen","date_ago":7,"content":"雖然我不認識這叫焦焦的同學，但每個人都有發文的權利吧"},{"is_formore":false,"user":"Jemmy_2613","date_ago":10,"content":"希望一切都順利...."}]},{"department":"會計系","user":"yuun_1024","date_ago":91,"title":"急!!! 歐趴糖可以買什麼?","content":"第一次送直屬歐趴糖，突然不知道可以買什麼...\\n還請有經驗的大家推薦我!!!\\n![show_more]","likes":302,"liked":false,"comments":12,"shares":102,"comment_details":[]},{"department":"電機系","user":"zn.yang","date_ago":125,"title":"選課系統有夠當!!!","content":"大家有覺得最近選課系統很當嗎?  只是想點開看「課程內容」\\n東間的圈圈就一直跑 ![show_more]","likes":1031,"liked":false,"comments":23,"shares":108,"comment_details":[]},{"department":"英文系","user":"ZPML","date_ago":8,"title":"不是很懂幹嘛一直蹭熱度？","content":"我不懂...\\n為什麼連沒到場的聖誕舞會都可以po文蹭熱度？\\n髮夾雖然是你送的，也不用特別截圖炫耀吧？\\n![show_more]","likes":2986,"liked":false,"comments":830,"shares":753,"comment_details":[]},{"department":"學生會","user":"FMU_SU","date_ago":15,"title":"2022 午夜12:00華麗變身","content":"還在擔心聖誕節要一個人過?\\n還在考慮要去耶誕城人擠人卻什麼也看不到?\\n不再那裡猶豫了，快來參加由學生會舉誕的\\n《More and More聖誕舞會》\\n![show_more]![img src=\'img1.png\' width=\'443\']","likes":1543,"liked":false,"comments":890,"shares":203,"comment_details":[]},{"department":"學生會","user":"FMU_SU","date_ago":15,"title":"學校友聯誼活動嗎??","content":"還在擔心聖誕節要一個人過?\\n還在考慮要去耶誕城人擠人卻什麼也看不到?\\n![show_more]","likes":1543,"liked":false,"comments":890,"shares":203,"comment_details":[]}]')}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var l=e[s]={exports:{}};return t[s].call(l.exports,l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,l){if(!s){var a=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],l=t[d][2];for(var i=!0,r=0;r<s.length;r++)(!1&l||a>=l)&&Object.keys(o.O).every((function(t){return o.O[t](s[r])}))?s.splice(r--,1):(i=!1,l<a&&(a=l));if(i){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[s,n,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/formore/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,l,a=s[0],i=s[1],r=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(r)var d=r(o)}for(e&&e(s);c<a.length;c++)l=a[c],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(d)},s=self["webpackChunkformore"]=self["webpackChunkformore"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(6906)}));s=o.O(s)})();
//# sourceMappingURL=app.3ac193ec.js.map