import{J as r,y as c,a as n,o as s,b as t,d,e as _,z as l}from"./vendor.a541e2dd.js";import{_ as m,b as p,A as i}from"./index.f69d0857.js";const h={setup(){return r(async()=>{try{await p.getAllBooks()}catch(e){console.error("[COULDNT_LOAD_BOOKS]",e.message),Pop.toast(e.message,"error")}}),{myBooks:c(()=>i.myBooks)}}},k={class:"container"},u={class:"row"},B={key:0,class:"col-12"};function f(e,y,S,o,v,b){const a=n("ScheduleSpreadsheet");return s(),t("div",k,[d("div",u,[o.myBooks.length?(s(),t("div",B,[_(a,{books:o.myBooks},null,8,["books"])])):l("",!0)])])}var A=m(h,[["render",f]]);export{A as default};
