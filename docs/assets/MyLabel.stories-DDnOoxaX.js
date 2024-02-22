import{j as e}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=({label:s,size:n="normal",color:c,AllCaps:_=!1,fontColor:p})=>e.jsx(e.Fragment,{children:_?e.jsx("span",{style:{color:p},className:`${n} ${c}`,children:s.toUpperCase()}):e.jsx("span",{style:{color:p},className:`${n} ${c} `,children:s})});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Label",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:null,description:"Color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},AllCaps:{defaultValue:{value:"false"},description:"Capitalize all the letters",name:"AllCaps",required:!1,type:{name:"Boolean"}},fontColor:{defaultValue:null,description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const j={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:{type:"inline-radio",options:["normal","h1","h2","h3"]}},color:{control:{type:"inline-radio",options:["text-primary","text-secondary","text-tertiary"]}},AllCaps:{control:{type:"boolean"}}}},a={args:{label:"Hello World"}},r={args:{label:"All caps model",AllCaps:!0}},l={args:{label:"Secondary Label",color:"text-secondary"}},o={args:{label:"Custom color label",fontColor:"#81d8d0"}};var d,i,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Hello World'
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,y,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'All caps model',
    AllCaps: true
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,C,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    fontColor: '#81d8d0'
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{r as AllCaps,a as Basic,o as CustomColor,l as Secondary,q as __namedExportsOrder,j as default};
