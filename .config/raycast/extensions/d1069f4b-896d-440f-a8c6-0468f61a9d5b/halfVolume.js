"use strict";var pn=Object.create;var L=Object.defineProperty;var mn=Object.getOwnPropertyDescriptor;var hn=Object.getOwnPropertyNames;var Sn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),yn=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},be=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of hn(t))!gn.call(e,s)&&s!==r&&L(e,s,{get:()=>t[s],enumerable:!(n=mn(t,s))||n.enumerable});return e};var ve=(e,t,r)=>(r=e!=null?pn(Sn(e)):{},be(t||!e||!e.__esModule?L(r,"default",{value:e,enumerable:!0}):r,e)),xn=e=>be(L({},"__esModule",{value:!0}),e);var Ce=c((Ss,Pe)=>{Pe.exports=Te;Te.sync=bn;var Ee=require("fs");function wn(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var s=r[n].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ie(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:wn(t,r)}function Te(e,t,r){Ee.stat(e,function(n,s){r(n,n?!1:Ie(s,e,t))})}function bn(e,t){return Ie(Ee.statSync(e),e,t)}});var qe=c((gs,Oe)=>{Oe.exports=Ae;Ae.sync=vn;var Ge=require("fs");function Ae(e,t,r){Ge.stat(e,function(n,s){r(n,n?!1:Re(s,t))})}function vn(e,t){return Re(Ge.statSync(e),t)}function Re(e,t){return e.isFile()&&En(e,t)}function En(e,t){var r=e.mode,n=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),f=a|l,h=r&d||r&l&&s===i||r&a&&n===o||r&f&&o===0;return h}});var _e=c((xs,Ne)=>{var ys=require("fs"),M;process.platform==="win32"||global.TESTING_WINDOWS?M=Ce():M=qe();Ne.exports=Z;Z.sync=In;function Z(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,s){Z(e,t||{},function(o,i){o?s(o):n(i)})})}M(e,t||{},function(n,s){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,s=!1),r(n,s)})}function In(e,t){try{return M.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Fe=c((ws,je)=>{var v=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",$e=require("path"),Tn=v?";":":",ke=_e(),Be=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Le=(e,t)=>{let r=t.colon||Tn,n=e.match(/\//)||v&&e.match(/\\/)?[""]:[...v?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],s=v?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=v?s.split(r):[""];return v&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:s}},Me=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:s,pathExtExe:o}=Le(e,t),i=[],a=d=>new Promise((f,h)=>{if(d===n.length)return t.all&&i.length?f(i):h(Be(e));let m=n[d],S=/^".*"$/.test(m)?m.slice(1,-1):m,g=$e.join(S,e),y=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;f(l(y,d,0))}),l=(d,f,h)=>new Promise((m,S)=>{if(h===s.length)return m(a(f+1));let g=s[h];ke(d+g,{pathExt:o},(y,b)=>{if(!y&&b)if(t.all)i.push(d+g);else return m(d+g);return m(l(d,f,h+1))})});return r?a(0).then(d=>r(null,d),r):a(0)},Pn=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:s}=Le(e,t),o=[];for(let i=0;i<r.length;i++){let a=r[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=$e.join(l,e),f=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let h=0;h<n.length;h++){let m=f+n[h];try{if(ke.sync(m,{pathExt:s}))if(t.all)o.push(m);else return m}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Be(e)};je.exports=Me;Me.sync=Pn});var ee=c((bs,J)=>{"use strict";var Ue=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};J.exports=Ue;J.exports.default=Ue});var Ke=c((vs,Xe)=>{"use strict";var De=require("path"),Cn=Fe(),Gn=ee();function He(e,t){let r=e.options.env||process.env,n=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Cn.sync(e.command,{path:r[Gn({env:r})],pathExt:t?De.delimiter:void 0})}catch{}finally{o&&process.chdir(n)}return i&&(i=De.resolve(s?e.options.cwd:"",i)),i}function An(e){return He(e)||He(e,!0)}Xe.exports=An});var We=c((Es,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function Rn(e){return e=e.replace(te,"^$1"),e}function On(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=Rn;ne.exports.argument=On});var Ve=c((Is,ze)=>{"use strict";ze.exports=/^#!(.*)/});var Qe=c((Ts,Ye)=>{"use strict";var qn=Ve();Ye.exports=(e="")=>{let t=e.match(qn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),s=r.split("/").pop();return s==="env"?n:n?`${s} ${n}`:s}});var Je=c((Ps,Ze)=>{"use strict";var re=require("fs"),Nn=Qe();function _n(e){let r=Buffer.alloc(150),n;try{n=re.openSync(e,"r"),re.readSync(n,r,0,150,0),re.closeSync(n)}catch{}return Nn(r.toString())}Ze.exports=_n});var rt=c((Cs,nt)=>{"use strict";var $n=require("path"),et=Ke(),tt=We(),kn=Je(),Bn=process.platform==="win32",Ln=/\.(?:com|exe)$/i,Mn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function jn(e){e.file=et(e);let t=e.file&&kn(e.file);return t?(e.args.unshift(e.file),e.command=t,et(e)):e.file}function Fn(e){if(!Bn)return e;let t=jn(e),r=!Ln.test(t);if(e.options.forceShell||r){let n=Mn.test(t);e.command=$n.normalize(e.command),e.command=tt.command(e.command),e.args=e.args.map(o=>tt.argument(o,n));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Un(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Fn(n)}nt.exports=Un});var it=c((Gs,ot)=>{"use strict";var se=process.platform==="win32";function oe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Dn(e,t){if(!se)return;let r=e.emit;e.emit=function(n,s){if(n==="exit"){let o=st(s,t,"spawn");if(o)return r.call(e,"error",o)}return r.apply(e,arguments)}}function st(e,t){return se&&e===1&&!t.file?oe(t.original,"spawn"):null}function Hn(e,t){return se&&e===1&&!t.file?oe(t.original,"spawnSync"):null}ot.exports={hookChildProcess:Dn,verifyENOENT:st,verifyENOENTSync:Hn,notFoundError:oe}});var ut=c((As,E)=>{"use strict";var at=require("child_process"),ie=rt(),ae=it();function ct(e,t,r){let n=ie(e,t,r),s=at.spawn(n.command,n.args,n.options);return ae.hookChildProcess(s,n),s}function Xn(e,t,r){let n=ie(e,t,r),s=at.spawnSync(n.command,n.args,n.options);return s.error=s.error||ae.verifyENOENTSync(s.status,n),s}E.exports=ct;E.exports.spawn=ct;E.exports.sync=Xn;E.exports._parse=ie;E.exports._enoent=ae});var dt=c((Rs,lt)=>{"use strict";lt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var mt=c((Os,q)=>{"use strict";var O=require("path"),ft=ee(),pt=e=>{e={cwd:process.cwd(),path:process.env[ft()],execPath:process.execPath,...e};let t,r=O.resolve(e.cwd),n=[];for(;t!==r;)n.push(O.join(r,"node_modules/.bin")),t=r,r=O.resolve(r,"..");let s=O.resolve(e.cwd,e.execPath,"..");return n.push(s),n.concat(e.path).join(O.delimiter)};q.exports=pt;q.exports.default=pt;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=ft({env:t});return e.path=t[r],t[r]=q.exports(e),t}});var St=c((qs,ce)=>{"use strict";var ht=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ce.exports=ht;ce.exports.default=ht});var yt=c((Ns,F)=>{"use strict";var Kn=St(),j=new WeakMap,gt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(j.set(o,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return r};return Kn(o,e),j.set(o,n),o};F.exports=gt;F.exports.default=gt;F.exports.callCount=e=>{if(!j.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return j.get(e)}});var xt=c(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.SIGNALS=void 0;var Wn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];U.SIGNALS=Wn});var ue=c(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.SIGRTMAX=I.getRealtimeSignals=void 0;var zn=function(){let e=bt-wt+1;return Array.from({length:e},Vn)};I.getRealtimeSignals=zn;var Vn=function(e,t){return{name:`SIGRT${t+1}`,number:wt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},wt=34,bt=64;I.SIGRTMAX=bt});var vt=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.getSignals=void 0;var Yn=require("os"),Qn=xt(),Zn=ue(),Jn=function(){let e=(0,Zn.getRealtimeSignals)();return[...Qn.SIGNALS,...e].map(er)};D.getSignals=Jn;var er=function({name:e,number:t,description:r,action:n,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Yn.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:s,standard:o}}});var It=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.signalsByNumber=T.signalsByName=void 0;var tr=require("os"),Et=vt(),nr=ue(),rr=function(){return(0,Et.getSignals)().reduce(sr,{})},sr=function(e,{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}}},or=rr();T.signalsByName=or;var ir=function(){let e=(0,Et.getSignals)(),t=nr.SIGRTMAX+1,r=Array.from({length:t},(n,s)=>ar(s,e));return Object.assign({},...r)},ar=function(e,t){let r=cr(e,t);if(r===void 0)return{};let{name:n,description:s,supported:o,action:i,forced:a,standard:l}=r;return{[e]:{name:n,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},cr=function(e,t){let r=t.find(({name:n})=>tr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},ur=ir();T.signalsByNumber=ur});var Pt=c((Ls,Tt)=>{"use strict";var{signalsByName:lr}=It(),dr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",fr=({stdout:e,stderr:t,all:r,error:n,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let m=s===void 0?void 0:lr[s].description,S=n&&n.code,y=`Command ${dr({timedOut:l,timeout:h,errorCode:S,signal:s,signalDescription:m,exitCode:o,isCanceled:d})}: ${i}`,b=Object.prototype.toString.call(n)==="[object Error]",k=b?`${y}
${n.message}`:y,B=[k,t,e].filter(Boolean).join(`
`);return b?(n.originalMessage=n.message,n.message=B):n=new Error(B),n.shortMessage=k,n.command=i,n.escapedCommand=a,n.exitCode=o,n.signal=s,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!l,n.isCanceled=d,n.killed=f&&!l,n};Tt.exports=fr});var Gt=c((Ms,le)=>{"use strict";var H=["stdin","stdout","stderr"],pr=e=>H.some(t=>e[t]!==void 0),Ct=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return H.map(n=>e[n]);if(pr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${H.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,H.length);return Array.from({length:r},(n,s)=>t[s])};le.exports=Ct;le.exports.node=e=>{let t=Ct(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var At=c((js,X)=>{X.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&X.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&X.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var _t=c((Fs,G)=>{var u=global.process;typeof u!="object"||!u?G.exports=function(){}:(Rt=require("assert"),P=At(),Ot=/^win/i.test(u.platform),N=require("events"),typeof N!="function"&&(N=N.EventEmitter),u.__signal_exit_emitter__?p=u.__signal_exit_emitter__:(p=u.__signal_exit_emitter__=new N,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),G.exports=function(e,t){if(global.process===u){Rt.equal(typeof e,"function","a callback must be provided for exit handler"),C===!1&&de();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n}},K=function(){!C||global.process!==u||(C=!1,P.forEach(function(t){try{u.removeListener(t,W[t])}catch{}}),u.emit=z,u.reallyExit=fe,p.count-=1)},G.exports.unload=K,w=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},W={},P.forEach(function(e){W[e]=function(){if(u===global.process){var r=u.listeners(e);r.length===p.count&&(K(),w("exit",null,e),w("afterexit",null,e),Ot&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),G.exports.signals=function(){return P},C=!1,de=function(){C||u!==global.process||(C=!0,p.count+=1,P=P.filter(function(t){try{return u.on(t,W[t]),!0}catch{return!1}}),u.emit=Nt,u.reallyExit=qt)},G.exports.load=de,fe=u.reallyExit,qt=function(t){u===global.process&&(u.exitCode=t||0,w("exit",u.exitCode,null),w("afterexit",u.exitCode,null),fe.call(u,u.exitCode))},z=u.emit,Nt=function(t,r){if(t==="exit"&&u===global.process){r!==void 0&&(u.exitCode=r);var n=z.apply(this,arguments);return w("exit",u.exitCode,null),w("afterexit",u.exitCode,null),n}else return z.apply(this,arguments)});var Rt,P,Ot,N,p,K,w,W,C,de,fe,qt,z,Nt});var kt=c((Us,$t)=>{"use strict";var mr=require("os"),hr=_t(),Sr=1e3*5,gr=(e,t="SIGTERM",r={})=>{let n=e(t);return yr(e,t,r,n),n},yr=(e,t,r,n)=>{if(!xr(t,r,n))return;let s=br(r),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},xr=(e,{forceKillAfterTimeout:t},r)=>wr(e)&&t!==!1&&r,wr=e=>e===mr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",br=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Sr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},vr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Er=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Ir=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Er(e,r,l)},t)}),i=n.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Tr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Pr=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let s=hr(()=>{e.kill()});return n.finally(()=>{s()})};$t.exports={spawnedKill:gr,spawnedCancel:vr,setupTimeout:Ir,validateTimeout:Tr,setExitHandler:Pr}});var Lt=c((Ds,Bt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Bt.exports=x});var jt=c((Hs,Mt)=>{"use strict";var{PassThrough:Cr}=require("stream");Mt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",s=!1;t?s=!(r||n):r=r||"utf8",n&&(r=null);let o=new Cr({objectMode:s});r&&o.setEncoding(r);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Ft=c((Xs,_)=>{"use strict";var{constants:Gr}=require("buffer"),Ar=require("stream"),{promisify:Rr}=require("util"),Or=jt(),qr=Rr(Ar.pipeline),V=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function pe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=Or(t);return await new Promise((s,o)=>{let i=a=>{a&&n.getBufferedLength()<=Gr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),o(a)};(async()=>{try{await qr(e,n),s()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new V)})}),n.getBufferedValue()}_.exports=pe;_.exports.buffer=(e,t)=>pe(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>pe(e,{...t,array:!0});_.exports.MaxBufferError=V});var Dt=c((Ks,Ut)=>{"use strict";var{PassThrough:Nr}=require("stream");Ut.exports=function(){var e=[],t=new Nr({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(r),t;function r(o){return Array.isArray(o)?(o.forEach(r),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function n(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Wt=c((Ws,Kt)=>{"use strict";var Xt=Lt(),Ht=Ft(),_r=Dt(),$r=(e,t)=>{t===void 0||e.stdin===void 0||(Xt(t)?t.pipe(e.stdin):e.stdin.end(t))},kr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=_r();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},me=async(e,t)=>{if(e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},he=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Ht(e,{encoding:t,maxBuffer:n}):Ht.buffer(e,{maxBuffer:n})},Br=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:s,maxBuffer:o},i)=>{let a=he(e,{encoding:n,buffer:s,maxBuffer:o}),l=he(t,{encoding:n,buffer:s,maxBuffer:o}),d=he(r,{encoding:n,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},me(e,a),me(t,l),me(r,d)])}},Lr=({input:e})=>{if(Xt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Kt.exports={handleInput:$r,makeAllStream:kr,getSpawnedResult:Br,validateInputSync:Lr}});var Vt=c((zs,zt)=>{"use strict";var Mr=(async()=>{})().constructor.prototype,jr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Mr,e)]),Fr=(e,t)=>{for(let[r,n]of jr){let s=typeof t=="function"?(...o)=>Reflect.apply(n.value,t(),o):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:s})}return e},Ur=e=>new Promise((t,r)=>{e.on("exit",(n,s)=>{t({exitCode:n,signal:s})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});zt.exports={mergePromise:Fr,getSpawnedPromise:Ur}});var Zt=c((Vs,Qt)=>{"use strict";var Yt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Dr=/^[\w.-]+$/,Hr=/"/g,Xr=e=>typeof e!="string"||Dr.test(e)?e:`"${e.replace(Hr,'\\"')}"`,Kr=(e,t)=>Yt(e,t).join(" "),Wr=(e,t)=>Yt(e,t).map(r=>Xr(r)).join(" "),zr=/ +/g,Vr=e=>{let t=[];for(let r of e.trim().split(zr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Qt.exports={joinCommand:Kr,getEscapedCommand:Wr,parseCommand:Vr}});var on=c((Ys,A)=>{"use strict";var Yr=require("path"),Se=require("child_process"),Qr=ut(),Zr=dt(),Jr=mt(),es=yt(),Y=Pt(),en=Gt(),{spawnedKill:ts,spawnedCancel:ns,setupTimeout:rs,validateTimeout:ss,setExitHandler:os}=kt(),{handleInput:is,getSpawnedResult:as,makeAllStream:cs,validateInputSync:us}=Wt(),{mergePromise:Jt,getSpawnedPromise:ls}=Vt(),{joinCommand:tn,parseCommand:nn,getEscapedCommand:rn}=Zt(),ds=1e3*1e3*100,fs=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:s})=>{let o=t?{...process.env,...e}:e;return r?Jr.env({env:o,cwd:n,execPath:s}):o},sn=(e,t,r={})=>{let n=Qr._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:ds,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=fs(r),r.stdio=en(r),process.platform==="win32"&&Yr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},$=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?Zr(t):t,Q=(e,t,r)=>{let n=sn(e,t,r),s=tn(e,t),o=rn(e,t);ss(n.options);let i;try{i=Se.spawn(n.file,n.args,n.options)}catch(S){let g=new Se.ChildProcess,y=Promise.reject(Y({error:S,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return Jt(g,y)}let a=ls(i),l=rs(i,n.options,a),d=os(i,n.options,l),f={isCanceled:!1};i.kill=ts.bind(null,i.kill.bind(i)),i.cancel=ns.bind(null,i,f);let m=es(async()=>{let[{error:S,exitCode:g,signal:y,timedOut:b},k,B,fn]=await as(i,n.options,d),ge=$(n.options,k),ye=$(n.options,B),xe=$(n.options,fn);if(S||g!==0||y!==null){let we=Y({error:S,exitCode:g,signal:y,stdout:ge,stderr:ye,all:xe,command:s,escapedCommand:o,parsed:n,timedOut:b,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return we;throw we}return{command:s,escapedCommand:o,exitCode:0,stdout:ge,stderr:ye,all:xe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return is(i,n.options.input),i.all=cs(i,n.options),Jt(i,m)};A.exports=Q;A.exports.sync=(e,t,r)=>{let n=sn(e,t,r),s=tn(e,t),o=rn(e,t);us(n.options);let i;try{i=Se.spawnSync(n.file,n.args,n.options)}catch(d){throw Y({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=$(n.options,i.stdout,i.error),l=$(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=Y({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};A.exports.command=(e,t)=>{let[r,...n]=nn(e);return Q(r,n,t)};A.exports.commandSync=(e,t)=>{let[r,...n]=nn(e);return Q.sync(r,n,t)};A.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=en.node(r),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=r;return Q(o,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var ms={};yn(ms,{default:()=>ps});module.exports=xn(ms);var R=require("@raycast/api");var an=ve(require("node:process"),1),cn=ve(on(),1);async function un(e){if(an.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,cn.default)("osascript",["-e",e]);return t}function ln(e){return`
    tell application "Spotify"
      if not application "Spotify" is running then
        activate

        set _maxOpenWaitTimeInSeconds to 5
        set _openCounter to 1
        repeat until application "Spotify" is running
          delay 1
          set _openCounter to _openCounter + 1
          if _openCounter > _maxOpenWaitTimeInSeconds then exit repeat
        end repeat
      end if
      ${e}
    end tell`}async function dn(e){if(await(0,R.closeMainWindow)(),!(await(0,R.getApplications)()).some(n=>n.name==="Spotify")){await(0,R.showHUD)("Spotify is not installed");return}await un(e)}var ps=async()=>{let e=ln("set sound volume to 50");await dn(e)};
