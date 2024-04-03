"use strict";(self.webpackChunkfortesys_doc=self.webpackChunkfortesys_doc||[]).push([[922],{4086:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(4848),i=s(8453);const o={authors:"jay",description:"Questions raised on 2024-04-01"},r="Questions on 2024-04-01",c={id:"questions/question-2024-04-01",title:"Questions on 2024-04-01",description:"Questions raised on 2024-04-01",source:"@site/docs/questions/question-2024-04-01.md",sourceDirName:"questions",slug:"/questions/question-2024-04-01",permalink:"/fortesys-docs/docs/questions/question-2024-04-01",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{authors:"jay",description:"Questions raised on 2024-04-01"},sidebar:"tutorialSidebar",previous:{title:"Questions",permalink:"/fortesys-docs/docs/category/questions"},next:{title:"Create Attachment Flow",permalink:"/fortesys-docs/docs/create-attachment"}},d={},l=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"questions-on-2024-04-01",children:"Questions on 2024-04-01"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.del,{children:"Asset Template Live and Staging is Not Same."})," [",(0,t.jsx)(n.strong,{children:"Resolved"}),"]"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Live Got Serial No./ Model/ Brand for Asset --\x3e Which Fields from SAP to Map with those fields?"}),"\n",(0,t.jsx)(n.admonition,{title:"Answer",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Item No."})," and ",(0,t.jsx)(n.code,{children:"Model"})," are the same thing. We can just maintain 1 field. In SAP, it is ",(0,t.jsx)(n.code,{children:"ItemCode"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Brand"})," in SC is ",(0,t.jsx)(n.code,{children:"U_ProductBrand"})," in SAP Sales Order under each ",(0,t.jsx)(n.code,{children:"DocumentLines"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Warranty"})," in SC is ",(0,t.jsx)(n.code,{children:"U_wst"})," in SAP Item Master"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If value is ",(0,t.jsx)(n.code,{children:"null"})," or ",(0,t.jsx)(n.code,{children:"-"})," treat the value as ",(0,t.jsx)(n.code,{children:"NA"})," in SC"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Serial No."})," (This is the asset name in SC), it should map to ",(0,t.jsx)(n.code,{children:"U_SB_No"})]}),"\n",(0,t.jsx)(n.admonition,{title:"Example",type:"note",children:(0,t.jsxs)(n.p,{children:["E.g. ",(0,t.jsx)(n.code,{children:"U_SB_No"})," is ",(0,t.jsx)(n.code,{children:"S0001,S0002,S0003"}),". You will need to split the string to obtain each serial number."]})}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Based on all conversations earlier, Can we conclude that we only need to call handle-activity for SAP on Activity Completed?"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If Yes, in Number 3 --\x3e Can we use Reminder to Call ",(0,t.jsx)(n.code,{children:"SAP_NODE_JS/handle-activity?activity_id=ref_id_encoded"}),"?"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assume this scenario, Completed an ACTIVITY --\x3e We created the ACTIVITY IN SAP. Then, again IN_PROGRESS the ACTIVITY --\x3e then COMPLETED again. How to handle? Based on current logic, ACTIVITY will be creatd again on SAP."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If No, in Number 3 --\x3e Where to call the SAP_HANDLE_ACTIVITY API?"}),"\n",(0,t.jsxs)(n.admonition,{title:"Answer for question 3, 4, 5 and 6",type:"tip",children:[(0,t.jsx)(n.p,{children:"No need to create any activity in SAP side. Fortesys engineers will create and manage the activities in SC only."}),(0,t.jsxs)(n.p,{children:["The only automation needed is upon activity status ",(0,t.jsx)(n.strong,{children:"Closed"})," and update the UAT and SR DF as an ",(0,t.jsx)(n.em,{children:"Attachment"})," in SAP Service Call level. See ",(0,t.jsx)(n.a,{href:"/docs/create-attachment",children:"create attachment document"})," on the process of creating attachment."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Asset & Products Exists chekcing cannot use search API. So I used /fortesys/exists. Are we going to use search API later?"}),"\n",(0,t.jsx)(n.admonition,{title:"Answer",type:"tip",children:(0,t.jsxs)(n.p,{children:["Do not use ",(0,t.jsx)(n.strong,{children:"/fortesys/exists"})," API to handle asset and product checking. Instea, use the APIs listed in ",(0,t.jsx)(n.a,{href:"/docs/asset-product-checking",children:"this page"})," to handle."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If Asset & Products not exists in SC, we created those. Do we also need to attach those?"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If Yes in Number 8, Where to attach Assests? To both End User & Service Call?"}),"\n",(0,t.jsx)(n.admonition,{title:"Answer for question 8 and 9",type:"tip",children:(0,t.jsx)(n.p,{children:"Yes, we need to attach the asset and products. Attach assets to both customer and project level. As for product, attach to project level only."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If Yes in Number 8, Which are the Quantity/Price/Notes fields for Products?"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);