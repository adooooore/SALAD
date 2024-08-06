import{s as w,h as e,i as B,j as k,_ as S,u as T,T as I,o as N,r as x,a as h,c as f,b as t,d as _,w as y,f as b,t as r,e as c,m as $,F,p as P,g as C}from"./index-BBwjlpjS.js";const D=w("ingredients",()=>{const o=e([{name:"파프리카",image:"menu1.png",weight:50,calories:10,carbs:2.35,protein:.45,fat:.1,quantity:e(0),more:e(!1)},{name:"토마토",image:"../assets/menu2.png",weight:50,calories:9,carbs:2.7,protein:.4,fat:.1,quantity:e(0),more:e(!1)},{name:"양상추",image:"../assets/menu3.png",weight:50,calories:7.5,carbs:1.45,protein:.7,fat:.1,quantity:e(0),more:e(!1)},{name:"오이",image:"../assets/menu4.png",weight:50,calories:8,carbs:1.8,protein:.35,fat:.05,quantity:e(0),more:e(!1)},{name:"당근",image:"../assets/menu5.png",weight:50,calories:20.5,carbs:5,protein:.45,fat:.1,quantity:e(0),more:e(!1)},{name:"적양배추",image:"../assets/menu6.png",weight:50,calories:15.5,carbs:3.7,protein:.7,fat:.1,quantity:e(0),more:e(!1)},{name:"아보카도",image:"../assets/menu8.png",weight:50,calories:80,carbs:4,protein:1,fat:7,quantity:e(0),more:e(!1)},{name:"단호박",image:"../assets/menu9.png",weight:50,calories:22.5,carbs:6,protein:.5,fat:.05,quantity:e(0),more:e(!1)},{name:"브로콜리",image:"../assets/menu10.png",weight:50,calories:17,carbs:3.3,protein:1.4,fat:.2,quantity:e(0),more:e(!1)},{name:"스위트 콘",image:"../assets/menu10.png",weight:50,calories:43,carbs:9.5,protein:1.5,fat:.6,quantity:e(0),more:e(!1)},{name:"적양파",image:"../assets/menu7.png",weight:50,calories:20,carbs:4.65,protein:.45,fat:.05,quantity:e(0),more:e(!1)},{name:"바나나",image:"../assets/menu10.png",weight:50,calories:45,carbs:11.5,protein:.55,fat:.15,quantity:e(0),more:e(!1)},{name:"믹스베리",image:"../assets/menu10.png",weight:50,calories:25,carbs:6,protein:.5,fat:.1,quantity:e(0),more:e(!1)},{name:"블루베리",image:"../assets/menu10.png",weight:50,calories:29,carbs:7.2,protein:.4,fat:.15,quantity:e(0),more:e(!1)}]),s=e([]),l=B(()=>s.value.reduce((a,n)=>a+n.quantity*n.calories,0)),u=a=>{const n=s.value.findIndex(g=>g.name===a.name);if(n===-1){if(s.value.length>=5){alert("최대 5개의 재료만 선택할 수 있습니다.");return}s.value.push(a)}else s.value.splice(n,1);d()},i=(a,n)=>{const g=s.value.findIndex(m=>m.name===a.name);console.log("updateQuantity 함수 실행"),g!==-1?(s.value[g].quantity=n,console.log(`재료: ${a.name}, 수량: ${n}`)):s.value.push({...a,quantity:n}),d()},d=()=>{localStorage.setItem("totalCalories",l.value),localStorage.setItem("selectedIngredients",JSON.stringify(s.value.map(a=>({name:a.name,quantity:a.quantity}))))};return k(s,()=>{d()},{deep:!0}),{ingredients:o,selectedIngredients:s,totalCalories:l,toggleIngredient:u,updateQuantity:i}}),p=o=>(P("data-v-f48d6619"),o=o(),C(),o),M={class:"GNB"},V=p(()=>t("h2",{class:"title"},"STEP.01",-1)),H={class:"txtBox"},O={style:{"margin-top":"12px",display:"flex","align-items":"center"}},j={style:{display:"flex",width:"100%","justify-content":"center","margin-bottom":"32px"}},E={key:0,class:"caloriesDate"},L={class:"dateBox"},Q=p(()=>t("h5",{class:"dateBoxTitle"},"탄수화물",-1)),z={class:"date"},A={class:"dateBox"},G=p(()=>t("h5",{class:"dateBoxTitle"},"단백질",-1)),J={class:"date"},R={class:"dateBox"},K=p(()=>t("h5",{class:"dateBoxTitle"},"지방",-1)),U={class:"date"},W={__name:"OrderHeader",setup(o){const s=T(),l=D(),u=I(),i=e(!1),d=()=>{i.value=!i.value},a=()=>{u.push("/")};return N(()=>{s.loadFromLocalStorage()}),(n,g)=>{const m=x("v-icon"),q=x("v-progress-linear");return h(),f(F,null,[t("div",M,[_(m,{onClick:a},{default:y(()=>[b("mdi-arrow-left")]),_:1}),V]),t("div",H,[t("h1",null,r(c(l).totalCalories)+"kcal",1),t("span",O,[t("h4",null,"/ "+r(c(s).perMealCalories)+"kcal",1),_(m,{onClick:d},{default:y(()=>[b(r(i.value?"mdi-menu-up":"mdi-menu-down"),1)]),_:1})])]),t("div",j,[_(q,{class:"progress"})]),i.value?(h(),f("div",E,[t("div",L,[Q,t("div",z,[t("h4",null,r(c(s).carbs)+"g / "+r(c(s).perMealCarbs)+"g",1)])]),t("div",A,[G,t("div",J,[t("h4",null,r(c(s).protein)+"g / "+r(c(s).perMealProtein)+"g",1)])]),t("div",R,[K,t("div",U,[t("h4",null,r(c(s).fats)+"g / "+r(c(s).perMealFats)+"g",1)])])])):$("",!0)],64)}}},re=S(W,[["__scopeId","data-v-f48d6619"]]),X=w("navigation",{state:()=>({pages:["/orderSelect","/orderSelectSub","/orderDressing","/orderFinal","/orderSheet"],currentPageIndex:0}),actions:{goToNextPage(){this.currentPageIndex<this.pages.length-1&&this.currentPageIndex++},goToPreviousPage(){this.currentPageIndex>0&&this.currentPageIndex--},getCurrentPage(){return this.pages[this.currentPageIndex]}}}),v=o=>(P("data-v-f58e4d2a"),o=o(),C(),o),Y={style:{padding:"12px 20px  38px 20px",width:"100%","background-color":"#fff","z-index":"100",display:"flex","flex-direction":"column",gap:"18px"}},Z=v(()=>t("div",{class:"inputBox"},[t("h5",null,"총 결제금액")],-1)),ee=v(()=>t("h4",null,"이전으로",-1)),te=[ee],se=v(()=>t("h4",null,"다음으로",-1)),ae=[se],oe={__name:"OrderFooter",setup(o){const s=X(),l=I(),u=()=>{s.goToPreviousPage(),l.push(s.getCurrentPage())},i=()=>{s.goToNextPage(),l.push(s.getCurrentPage())};return(d,a)=>(h(),f("div",Y,[Z,t("div",{class:"btnBox"},[t("div",{class:"btn",onClick:u},te),t("div",{class:"btn",style:{"background-color":"#52CA19"},onClick:i},ae)])]))}},ie=S(oe,[["__scopeId","data-v-f58e4d2a"]]);export{ie as a,re as o,D as u};