"use strict";var _=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var ce=Object.prototype.hasOwnProperty;var ue=(e,t)=>{for(var n in t)_(e,n,{get:t[n],enumerable:!0})},de=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of le(t))!ce.call(e,a)&&a!==n&&_(e,a,{get:()=>t[a],enumerable:!(s=me(t,a))||s.enumerable});return e};var pe=e=>de(_({},"__esModule",{value:!0}),e);var Se={};ue(Se,{default:()=>ae});module.exports=pe(Se);var i=require("@raycast/api"),se=require("react");var J=require("react");var c=require("@raycast/api"),Q=require("child_process"),z=require("crypto"),m=require("fs"),K=require("path");var O=e=>{let t=Math.floor(e/3600),n=String(Math.floor(e%3600/60)).padStart(2,"0"),s=String(Math.floor(e%60)).padStart(2,"0");return`${t===0?"":t+":"}${n}:${s}`},q=e=>{let t=new Date(e),n=[t.getFullYear().toString(),t.getMonth().toString().padStart(2,"0"),t.getDate().toString().padStart(2,"0")],s=[t.getHours(),t.getMinutes(),t.getSeconds()].map(f=>f.toString().padStart(2,"0")),a=n.join("-"),p=s.join(":");return`${a} ${p}`},H=e=>(e.d1=e.d1=="----"?void 0:e.d1,e.d2=e.d2=="----"?void 0:e.d2,Math.round((e.d1?new Date(e.d1):new Date).getTime()-(e.d2?new Date(e.d2):new Date).getTime())/1e3);var w=c.environment.supportPath+"/customTimers.json",ye=c.environment.supportPath+"/defaultPresetVisibles.json",G=e=>{try{(0,m.unlinkSync)(e)}catch(t){if(t instanceof Error&&!t.message.includes("ENOENT"))throw t}},A=(e=!1)=>{let t=(0,c.getPreferenceValues)();if(parseFloat(t.volumeSetting)>5){let n="\u26A0\uFE0F Timer alert volume should not be louder than 5 (it can get quite loud!)";return e?(0,c.showHUD)(n):(0,c.showToast)({style:c.Toast.Style.Failure,title:n}),!1}return!0};async function E(e,t="Untitled",n="default"){(0,c.popToRoot)();let a=(c.environment.supportPath+"/"+new Date().toISOString()+"---"+e+".timer").replace(/:/g,"__");(0,m.writeFileSync)(a,t);let p=(0,c.getPreferenceValues)(),f=`${c.environment.assetsPath+"/"+(n==="default"?p.selectedSound:n)}`,h=[`sleep ${e}`];h.push(`if [ -f "${a}" ]; then osascript -e 'display notification "Timer \\"${t}\\" complete" with title "Ding!"'`);let b=`afplay "${f}" --volume ${p.volumeSetting.replace(",",".")}`;if(p.selectedSound==="speak_timer_name"?h.push(`say "${t}"`):h.push(b),p.ringContinuously){let g=`${a}`.replace(".timer",".dismiss");(0,m.writeFileSync)(g,".dismiss file for Timers"),h.push(`while [ -f "${g}" ]; do ${b}; done`)}h.push(`rm "${a}"; else echo "Timer deleted"; fi`),(0,Q.exec)(h.join(" && "),(g,P)=>{if(g){console.log(`error: ${g.message}`);return}if(P){console.log(`stderr: ${P}`);return}}),await(0,c.showHUD)(`Timer "${t}" started for ${O(e)}! \u{1F389}`)}function X(e){let t=c.environment.supportPath+"/"+e,n=t.replace(".timer",".dismiss");G(t),G(n)}function Z(){let e=[];return(0,m.readdirSync)(c.environment.supportPath).forEach(n=>{if((0,K.extname)(n)==".timer"){let s={name:"",secondsSet:-99,timeLeft:-99,originalFile:n,timeEnds:new Date};s.name=(0,m.readFileSync)(c.environment.supportPath+"/"+n).toString();let a=n.split("---");s.secondsSet=Number(a[1].split(".")[0]);let p=a[0].replace(/__/g,":");s.timeLeft=Math.max(0,Math.round(s.secondsSet-H({d2:p}))),s.timeEnds=new Date(p),s.timeEnds.setSeconds(s.timeEnds.getSeconds()+s.secondsSet),e.push(s)}}),e.sort((n,s)=>n.timeLeft-s.timeLeft),e}function ee(e,t){let n=c.environment.supportPath+"/"+e;(0,m.writeFileSync)(n,t)}function C(){(0,m.existsSync)(w)||(0,m.writeFileSync)(w,JSON.stringify({}))}function L(e){C();let t=JSON.parse((0,m.readFileSync)(w,"utf8"));t[(0,z.randomUUID)()]=e,(0,m.writeFileSync)(w,JSON.stringify(t))}function $(){C();let e=JSON.parse((0,m.readFileSync)(w,"utf8"));return Object.fromEntries(Object.entries(e).map(([t,n])=>n.showInMenuBar===void 0?[t,{...n,showInMenuBar:!0}]:[t,n]))}function te(e,t){C();let n=JSON.parse((0,m.readFileSync)(w,"utf8"));n[e].name=t,(0,m.writeFileSync)(w,JSON.stringify(n))}function ne(e){C();let t=JSON.parse((0,m.readFileSync)(w,"utf8"));delete t[e],(0,m.writeFileSync)(w,JSON.stringify(t))}function re(e){C();let t=JSON.parse((0,m.readFileSync)(w,"utf8")),n=t[e].showInMenuBar;t[e].showInMenuBar=n===void 0?!1:!n,(0,m.writeFileSync)(w,JSON.stringify(t))}var F=require("@raycast/api");function j(){let[e,t]=(0,J.useState)(void 0),[n,s]=(0,J.useState)({}),[a,p]=(0,J.useState)(e===void 0),f=()=>{C();let r=Z();t(r);let u=$();s(u),p(!1)};return{timers:e,customTimers:n,isLoading:a,refreshTimers:f,handleStartTimer:(r,u,B=!1)=>{A(B)&&(E(r,u),f())},handleStopTimer:r=>{t(e?.filter(u=>u.originalFile!==r.originalFile)),X(r.originalFile),f()},handleStartCT:(r,u=!1)=>{A(u)&&(E(r.timeInSeconds,r.name,r.selectedSound),f())},handleCreateCT:r=>{let u={name:r.name,timeInSeconds:r.secondsSet,selectedSound:"default",showInMenuBar:!0};L(u),f()},handleDeleteCT:async r=>{let u={title:"Delete this preset?",icon:F.Icon.Trash,message:"You won't be able to recover it.",dismissAction:{title:"Cancel",style:F.Alert.ActionStyle.Cancel},primaryAction:{title:"Delete",style:F.Alert.ActionStyle.Destructive}};await(0,F.confirmAlert)(u)&&(ne(r),f())},handleToggleCTVisibility:async r=>{re(r),f()}}}var S=require("@raycast/api");var R=require("@raycast/api");var N=require("fs");var M=R.environment.supportPath+"/raycast-stopwatches.json",fe=()=>{(!(0,N.existsSync)(M)||(0,N.readFileSync)(M).toString()=="")&&(0,N.writeFileSync)(M,"[]")};var oe=(e,t)=>{fe();let s=JSON.parse((0,N.readFileSync)(M,"utf8")).map(a=>a.swID==e?{...a,name:t}:a);(0,N.writeFileSync)(M,JSON.stringify(s))};var k=require("react/jsx-runtime");function V(e){let t=n=>{if(n===""||n===e.currentName)new S.Toast({style:S.Toast.Style.Failure,title:"No new name given!"}).show();else{switch((0,S.popToRoot)(),e.originalFile){case"customTimer":te(e.ctID?e.ctID:"-99",n);break;case"stopwatch":oe(e.ctID?e.ctID:"-99",n);break;default:ee(e.originalFile,n);break}new S.Toast({style:S.Toast.Style.Success,title:`Renamed to ${n}!`}).show()}};return(0,k.jsx)(S.Form,{actions:(0,k.jsx)(S.ActionPanel,{children:(0,k.jsx)(S.Action.SubmitForm,{title:"Rename",onSubmit:n=>t(n.newName)})}),children:(0,k.jsx)(S.Form.TextField,{id:"newName",title:"New name",placeholder:e.currentName})})}var d=require("@raycast/api"),x=require("react");var D=require("@raycast/api"),ie=[{title:"Alarm Clock",icon:D.Icon.Alarm,value:"alarmClock.wav"},{title:"Dismembered Woodpecker",icon:D.Icon.Bird,value:"dismemberedWoodpecker.wav"},{title:"Flute Riff",icon:D.Icon.Music,value:"fluteRiff.wav"},{title:"Level Up",icon:D.Icon.Trophy,value:"levelUp.wav"},{title:"Piano Chime",icon:D.Icon.Music,value:"pianoChime.wav"},{title:"Terminator",icon:D.Icon.BarCode,value:"terminator.wav"},{title:"Speak Timer Name",icon:D.Icon.Person,value:"speak_timer_name"}];var y=require("react/jsx-runtime");function W(e){let t=Object.values(e.arguments).some(o=>o!==""),[n,s]=(0,x.useState)(),[a,p]=(0,x.useState)(),[f,h]=(0,x.useState)(),b=(0,d.getPreferenceValues)(),g=o=>{if(C(),o.hours===""&&o.minutes===""&&o.seconds==="")new d.Toast({style:d.Toast.Style.Failure,title:"No values set for timer length!"}).show();else if(isNaN(Number(o.hours)))s("Hours must be a number!");else if(isNaN(Number(o.minutes)))p("Minutes must be a number!");else if(isNaN(Number(o.seconds)))h("Seconds must be a number!");else{if(!A())return;(0,d.closeMainWindow)();let T=o.name?o.name:"Untitled",Y=3600*Number(o.hours)+60*Number(o.minutes)+Number(o.seconds);E(Y,T,o.selectedSound),o.willBeSaved&&L({name:o.name,timeInSeconds:Y,selectedSound:o.selectedSound,showInMenuBar:!0})}},P=()=>{n&&n.length>0&&s(void 0)},I=()=>{a&&a.length>0&&p(void 0)},v=()=>{f&&f.length>0&&h(void 0)},U=[{id:"hours",title:"Hours",placeholder:"0",err:n,drop:P,validator:o=>{let T=o.target.value;isNaN(Number(T))?s("Hours must be a number!"):P()}},{id:"minutes",title:"Minutes",placeholder:"00",err:a,drop:I,validator:o=>{let T=o.target.value;isNaN(Number(T))?p("Minutes must be a number!"):I()}},{id:"seconds",title:"Seconds",placeholder:"00",err:f,drop:v,validator:o=>{let T=o.target.value;isNaN(Number(T))?h("Seconds must be a number!"):v()}}];return b.newTimerInputOrder!=="hhmmss"&&U.reverse(),(0,y.jsxs)(d.Form,{actions:(0,y.jsx)(d.ActionPanel,{children:(0,y.jsx)(d.Action.SubmitForm,{title:"Start Custom Timer",onSubmit:o=>g(o)})}),children:[U.map((o,T)=>(0,y.jsx)(d.Form.TextField,{id:o.id,title:o.title,placeholder:o.placeholder,defaultValue:e.arguments[o.id],error:o.err,onChange:o.drop,onBlur:o.validator},T)),(0,y.jsxs)(d.Form.Dropdown,{id:"selectedSound",defaultValue:"default",title:"Sound",children:[(0,y.jsx)(d.Form.Dropdown.Item,{value:"default",title:"Default"}),ie.map((o,T)=>(0,y.jsx)(d.Form.Dropdown.Item,{title:o.value===b.selectedSound?`${o.title} (currently selected)`:o.title,value:o.value,icon:o.icon},T))]}),(0,y.jsx)(d.Form.TextField,{id:"name",title:"Name",placeholder:"Pour Tea",autoFocus:t}),(0,y.jsx)(d.Form.Checkbox,{id:"willBeSaved",label:"Save as preset"})]})}var l=require("react/jsx-runtime");function ae(e){if(e.launchContext?.timerID){let u=$()[e.launchContext.timerID];if(u==null)(0,i.showToast)({style:i.Toast.Style.Failure,title:"This custom timer no longer exists!"});else{E(u.timeInSeconds,u.name,u.selectedSound);return}}let{timers:t,customTimers:n,isLoading:s,refreshTimers:a,handleStopTimer:p,handleStartCT:f,handleCreateCT:h,handleDeleteCT:b}=j(),{push:g}=(0,i.useNavigation)();(0,se.useEffect)(()=>{a(),setInterval(()=>{a()},1e3)},[]);let P={tag:{value:"Running",color:i.Color.Yellow}},I={tag:{value:"Finished!",color:i.Color.Green}},v=r=>`raycast://extensions/ThatNerd/timers/manageTimers?context=${encodeURIComponent(JSON.stringify({timerID:r}))}`;return(0,l.jsxs)(i.List,{isLoading:s,children:[(0,l.jsxs)(i.List.Section,{title:t?.length!==0&&t!=null?"Currently Running":"No Timers Running",children:[t?.map(r=>(0,l.jsx)(i.List.Item,{icon:{source:i.Icon.Clock,tintColor:r.timeLeft===0?i.Color.Green:i.Color.Yellow},title:r.name,subtitle:O(r.timeLeft)+" left",accessories:[{text:O(r.secondsSet)+" originally"},{text:`${r.timeLeft===0?"Ended":"Ends"} at ${q(r.timeEnds)}`},r.timeLeft===0?I:P],actions:(0,l.jsxs)(i.ActionPanel,{children:[(0,l.jsx)(i.Action,{title:"Stop Timer",onAction:()=>p(r)}),(0,l.jsx)(i.Action,{title:"Rename Timer",onAction:()=>g((0,l.jsx)(V,{currentName:r.name,originalFile:r.originalFile,ctID:null}))}),(0,l.jsx)(i.Action,{title:"Save Timer as Preset",shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>h(r)})]})},r.originalFile)),(0,l.jsx)(i.List.Item,{icon:i.Icon.Clock,title:"Create a new timer",subtitle:"Press Enter to start a timer",actions:(0,l.jsx)(i.ActionPanel,{children:(0,l.jsx)(i.Action,{title:"Start Timer",onAction:()=>g((0,l.jsx)(W,{arguments:{hours:"",minutes:"",seconds:""}}))})})},0)]}),(0,l.jsx)(i.List.Section,{title:"Custom Timers",children:Object.keys(n)?.sort((r,u)=>n[r].timeInSeconds-n[u].timeInSeconds).map(r=>(0,l.jsx)(i.List.Item,{icon:i.Icon.Clock,title:n[r].name,subtitle:O(n[r].timeInSeconds),actions:(0,l.jsxs)(i.ActionPanel,{children:[(0,l.jsx)(i.Action,{title:"Start Timer",onAction:()=>f(n[r])}),(0,l.jsx)(i.Action,{title:"Rename Timer",onAction:()=>g((0,l.jsx)(V,{currentName:n[r].name,originalFile:"customTimer",ctID:r}))}),(0,l.jsx)(i.Action,{title:"Delete Custom Timer",shortcut:{modifiers:["ctrl"],key:"x"},onAction:()=>b(r)}),(0,l.jsx)(i.Action.CreateQuicklink,{quicklink:{name:n[r].name,link:v(r)},title:"Add Preset to Root Search"})]})},r))})]})}