import{u as U,g as ae,h as te,i as Y,j as ue,P as le,t as se,k as ne,l as A,m as x,n as ce,w as B,p as t,q as re,R as O,s as ie,v as oe,x as ge,C as pe,y as he,z as de,A as me,B as ve,D as ke,E as ye,F as _e,G as T,H as $,I as ze,J as w,K as fe}from"./app-Bi6i2abl.js";const He=["/","/model_guide/","/zh/","/gunpack/","/model_guide/model/","/model_guide/setting/","/model_guide/texture/","/zh/gunpack/-2_convert_from_legacy.html","/zh/gunpack/01_before_start.html","/zh/gunpack/02_first_pack.html","/zh/gunpack/03_pack_info.html","/zh/gunpack/04_lang.html","/zh/gunpack/60_recipe.html","/zh/gunpack/","/zh/model_guide/","/zh/model_guide/model.html","/zh/model_guide/setting.html","/zh/model_guide/texture.html","/zh/user_guide/","/zh/user_guide/attachment_lock.html","/zh/user_guide/dummy_ammo.html","/zh/user_guide/hide_tooltip.html","/zh/user_guide/install_gunpack.html","/zh/user_guide/welcome.html","/gunpack/ammo/","/gunpack/animation/","/gunpack/attachment/","/gunpack/bolt_type/","/gunpack/first_gun/","/gunpack/first_gunpack/","/gunpack/gun_extra_damage/","/gunpack/gun_positioning/","/gunpack/gun_refit/","/gunpack/gun_sound/","/gunpack/hand_pos/","/gunpack/hud_icon/","/gunpack/ica/","/gunpack/language/","/gunpack/lod/","/gunpack/muzzle_flash/","/gunpack/recipe/","/gunpack/render_text/","/gunpack/shell_ejection/","/zh/gunpack/ammo/","/zh/gunpack/attachment/","/zh/gunpack/block/01_prepare.html","/zh/gunpack/block/02_new_block.html","/zh/gunpack/block/03_recipe_filter.html","/zh/gunpack/block/","/zh/gunpack/gun/01_simple_gun.html","/zh/gunpack/gun/02_first_gun.html","/zh/gunpack/gun/03_sp_group_name.html","/zh/gunpack/gun/04_hand_pos.html","/zh/gunpack/gun/05_gun_position.html","/zh/gunpack/gun/","/zh/gunpack/legacy/","/zh/gunpack/gun/animation/","/zh/gunpack/gun/animation/animation_group.html","/zh/gunpack/gun/animation/ica.html","/zh/gunpack/gun/animation/state_machine_script.html","/zh/gunpack/gun/data/","/zh/gunpack/gun/display/","/zh/gunpack/gun/display/hud_icon.html","/zh/gunpack/gun/display/sound.html","/zh/gunpack/legacy/ammo/","/zh/gunpack/legacy/animation/","/zh/gunpack/legacy/attachment/","/zh/gunpack/legacy/before_start/","/zh/gunpack/legacy/bolt_type/","/zh/gunpack/legacy/first_gun/","/zh/gunpack/legacy/first_gunpack/","/zh/gunpack/legacy/gun_extra_damage/","/zh/gunpack/legacy/gun_positioning/","/zh/gunpack/legacy/gun_refit/","/zh/gunpack/legacy/gun_sound/","/zh/gunpack/legacy/hand_pos/","/zh/gunpack/legacy/hud_icon/","/zh/gunpack/legacy/ica/","/zh/gunpack/legacy/language/","/zh/gunpack/legacy/lod/","/zh/gunpack/legacy/muzzle_flash/","/zh/gunpack/legacy/recipe/","/zh/gunpack/legacy/render_text/","/zh/gunpack/legacy/shell_ejection/","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",k=U(Re,[]),xe=()=>{const{queryHistoryCount:u}=w,l=u>0;return{enabled:l,queryHistory:k,addQueryHistory:s=>{l&&(k.value=Array.from(new Set([s,...k.value.slice(0,u-1)])))},removeQueryHistory:s=>{k.value=[...k.value.slice(0,s),...k.value.slice(s+1)]}}},E=u=>He[u.id]+("anchor"in u?`#${u.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=w,y=U(we,[]),be=()=>{const u=I>0;return{enabled:u,resultHistory:y,addResultHistory:l=>{if(u){const s={link:E(l),display:l.display};"header"in l&&(s.header=l.header),y.value=[s,...y.value.slice(0,I-1)]}},removeResultHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},Qe=u=>{const l=pe(),s=Y(),b=he(),c=A(0),f=x(()=>c.value>0),d=de([]);return me(()=>{const{search:m,terminate:Q}=ve(),_=ze(o=>{const z=o.join(" "),{searchFilter:q=h=>h,splitWord:S,suggestionsFilter:j,...v}=l.value;z?(c.value+=1,m(o.join(" "),s.value,v).then(h=>q(h,z,s.value,b.value)).then(h=>{c.value-=1,d.value=h}).catch(h=>{console.warn(h),c.value-=1,c.value||(d.value=[])})):d.value=[]},w.searchDelay-w.suggestDelay);B([u,s],([o])=>_(o),{immediate:!0}),ke(()=>{Q()})}),{isSearching:f,results:d}};var Se=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(u,{emit:l}){const s=te(),b=Y(),c=ue(le),{enabled:f,addQueryHistory:d,queryHistory:m,removeQueryHistory:Q}=xe(),{enabled:_,resultHistory:o,addResultHistory:z,removeResultHistory:q}=be(),S=f||_,j=se(u,"queries"),{results:v,isSearching:h}=Qe(j),n=ne({isQuery:!0,index:0}),g=A(0),p=A(0),F=x(()=>S&&(m.value.length>0||o.value.length>0)),C=x(()=>v.value.length>0),D=x(()=>v.value[g.value]||null),M=()=>{const{isQuery:e,index:a}=n;a===0?(n.isQuery=!e,n.index=e?o.value.length-1:m.value.length-1):n.index=a-1},G=()=>{const{isQuery:e,index:a}=n;a===(e?m.value.length-1:o.value.length-1)?(n.isQuery=!e,n.index=0):n.index=a+1},J=()=>{g.value=g.value>0?g.value-1:v.value.length-1,p.value=D.value.contents.length-1},K=()=>{g.value=g.value<v.value.length-1?g.value+1:0,p.value=0},V=()=>{p.value<D.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},L=e=>e.map(a=>fe(a)?a:t(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=ye[e.index]||"$content",[r,R=""]=_e(a)?a[b.value].split("$content"):a.split("$content");return e.display.map(i=>t("div",L([r,...i,R])))}return e.display.map(a=>t("div",L(a)))},H=()=>{g.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},c.value.queryHistory),m.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===a}],onClick:()=>{l("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:r=>{r.preventDefault(),r.stopPropagation(),Q(a)}})]))])):null,Z=()=>_?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},c.value.resultHistory),o.value.map((e,a)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===a}],onClick:()=>{H()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(r=>L(r)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:r=>{r.preventDefault(),r.stopPropagation(),q(a)}})]))])):null;return ce("keydown",e=>{if(u.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=D.value.contents[p.value];d(u.queries.join(" ")),z(a),s.push(E(a)),H()}}else if(_){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=n;n.isQuery?(l("updateQuery",m.value[a]),e.preventDefault()):(s.push(o.value[a].link),H())}}}}),B([g,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:u.queries.length?!C.value:!F.value}],id:"search-pro-results"},u.queries.length?h.value?t(re,{hint:c.value.searching}):C.value?t("ul",{class:"search-pro-result-list"},v.value.map(({title:e,contents:a},r)=>{const R=g.value===r;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||c.value.defaultTitle),a.map((i,ee)=>{const P=R&&p.value===ee;return t(O,{to:E(i),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{d(u.queries.join(" ")),z(i),H()}},()=>[i.type==="text"?null:t(i.type==="title"?ie:i.type==="heading"?oe:ge,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?t("div",{class:"content-header"},i.header):null,t("div",W(i))])])})])})):c.value.emptyResult:S?F.value?[X(),Z()]:c.value.emptyHistory:c.value.emptyResult)}});export{Se as default};