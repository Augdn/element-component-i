import{d as f,a as o,o as v,f as b,w as e,b as a,e as n,t as s,g as d,_ as x}from"./index-d7d42342.js";const w=f({__name:"index",setup(N){const _=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],c=[{label:"日期",prop:"date",align:"center",slot:"date"},{label:"名字",prop:"name",align:"center",slot:"name"},{label:"地址",prop:"address",align:"center"},{label:"操作",align:"center",actions:!0}],p=l=>{console.log(l)};return(l,y)=>{const m=o("el-icon-timer"),i=o("el-tag"),g=o("el-popover"),r=o("el-button"),u=o("m-table");return v(),b(u,{data:_,options:c},{date:e(({scope:t})=>[a(m),n(" "+s(t.row.date),1)]),name:e(({scope:t})=>[a(g,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:e(()=>[d("div",null,"name: "+s(t.row.name),1),d("div",null,"address: "+s(t.row.address),1)]),reference:e(()=>[a(i,null,{default:e(()=>[n(s(t.row.name),1)]),_:2},1024)]),_:2},1024)]),action:e(({scope:t})=>[a(r,{type:"primary",onClick:h=>p(t)},{default:e(()=>[n("asd")]),_:2},1032,["onClick"]),a(r,{type:"danger"},{default:e(()=>[n("xss")]),_:1})]),_:1})}}});const S=x(w,[["__scopeId","data-v-8267b2f7"]]);export{S as default};
