"use strict";var h=Object.create;var l=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var S=(e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})},f=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of b(t))!N.call(e,n)&&n!==a&&l(e,n,{get:()=>t[n],enumerable:!(o=A(t,n))||o.enumerable});return e};var y=(e,t,a)=>(a=e!=null?h(T(e)):{},f(t||!e||!e.__esModule?l(a,"default",{value:e,enumerable:!0}):a,e)),$=e=>f(l({},"__esModule",{value:!0}),e);var L={};S(L,{default:()=>P});module.exports=$(L);var i=require("@raycast/api");var g=y(require("crypto")),m=new Uint8Array(256),u=m.length;function p(){return u>m.length-16&&(g.default.randomFillSync(m),u=0),m.slice(u,u+=16)}var r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function x(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}var I=y(require("crypto")),d={randomUUID:I.default.randomUUID};function C(e,t,a){if(d.randomUUID&&!t&&!e)return d.randomUUID();e=e||{};let o=e.random||(e.rng||p)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){a=a||0;for(let n=0;n<16;++n)t[a+n]=o[n];return t}return x(o)}var c=C;var D=1e4,P=async e=>{let{numberOfUUIDsToGenerate:t}=e.arguments,{upperCaseLetters:a,defaultAction:o}=(0,i.getPreferenceValues)();t||(t="1");try{let n=parseInt(t,10);if(isNaN(n))throw new Error("INVALID_NUMBER");if(n<=D){let s=Array.from(Array(n)).map(()=>c());a&&(s=s.map(v=>v.toUpperCase())),o==="copy"?await i.Clipboard.copy(s.join(`\r
`)):o==="paste"&&await i.Clipboard.paste(s.join(`\r
`));let U=o==="copy"?"Copied":"Pasted",w=s.length>1?`${U} ${s.length} new UUIDs.`:`${U} new UUID: ${s}`;await(0,i.showHUD)(`\u2705 ${w}`)}else await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Too many UUIDs requested.",message:`${n} exceeds maximum UUIDs of ${D}. Try a lower number.`})}catch{await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Invalid number.",message:"An invalid number has been provided. Try an actual number."})}};