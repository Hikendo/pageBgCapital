import{$ as oe,F as ee,I as ne,J as O,M as N,O as w,P as m,U as te,Va as ce,W as re,X as se,Xa as le,ba as ie,c as X,db as de,ga as ae,j as Y,k as J,o as x,t as Z,v as Q,z as H}from"./chunk-MAEJGKCN.js";import{a as q,d as S}from"./chunk-AIZVJUQQ.js";var F=class{},_=class{},g=class t{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let s=e.slice(0,r),i=s.toLowerCase(),o=e.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.setHeaderEntries(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let s=(n.op==="a"?this.headers.get(e):void 0)||[];s.push(...r),this.headers.set(e,s);break;case"d":let i=n.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(d=>i.indexOf(d)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var V=class{encodeKey(n){return he(n)}encodeValue(n){return he(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ve(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,d]=i==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],a=e.get(o)||[];a.push(d),e.set(o,a)}),e}var Re=/%(\d[a-f0-9])/gi,be={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function he(t){return encodeURIComponent(t).replace(Re,(n,e)=>be[e]??n)}function U(t){return`${t}`}var v=class t{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new V,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ve(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],s=Array.isArray(r)?r.map(U):[U(r)];this.map.set(e,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:s,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(U(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(U(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var $=class{constructor(){this.map=new Map}set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Pe(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ue(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function fe(t){return typeof Blob<"u"&&t instanceof Blob}function pe(t){return typeof FormData<"u"&&t instanceof FormData}function Ne(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var k=class t{constructor(n,e,r,s){this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let i;if(Pe(this.method)||s?(this.body=r!==void 0?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new g,this.context??=new $,!this.params)this.params=new v,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),a=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ue(this.body)||fe(this.body)||pe(this.body)||Ne(this.body)?this.body:this.body instanceof v?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||pe(this.body)?null:fe(this.body)?this.body.type||null:ue(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,d=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,f=n.headers||this.headers,p=n.params||this.params,y=n.context??this.context;return n.setHeaders!==void 0&&(f=Object.keys(n.setHeaders).reduce((b,h)=>b.set(h,n.setHeaders[h]),f)),n.setParams&&(p=Object.keys(n.setParams).reduce((b,h)=>b.set(h,n.setParams[h]),p)),new t(e,r,o,{params:p,headers:f,context:y,reportProgress:a,responseType:s,withCredentials:d,transferCache:i})}},R=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(R||{}),L=class{constructor(n,e=200,r="OK"){this.headers=n.headers||new g,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},B=class t extends L{constructor(n={}){super(n),this.type=R.ResponseHeader}clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},j=class t extends L{constructor(n={}){super(n),this.type=R.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},E=class extends L{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Te=200,Ae=204;function C(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Oe=(()=>{class t{constructor(e){this.handler=e}request(e,r,s={}){let i;if(e instanceof k)i=e;else{let a;s.headers instanceof g?a=s.headers:a=new g(s.headers);let f;s.params&&(s.params instanceof v?f=s.params:f=new v({fromObject:s.params})),i=new k(e,r,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=J(i).pipe(Q(a=>this.handler.handle(a)));if(e instanceof k||s.observe==="events")return o;let d=o.pipe(Z(a=>a instanceof j));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe(x(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return d.pipe(x(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return d.pipe(x(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return d.pipe(x(a=>a.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new v().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,s={}){return this.request("PATCH",e,C(s,r))}post(e,r,s={}){return this.request("POST",e,C(s,r))}put(e,r,s={}){return this.request("PUT",e,C(s,r))}static{this.\u0275fac=function(r){return new(r||t)(w(F))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})(),Ie=/^\)\]\}',?\n/,Me="X-Request-URL";function ye(t){if(t.url)return t.url;let n=Me.toLocaleLowerCase();return t.headers.get(n)}var De=(()=>{class t{constructor(){this.fetchImpl=m(G,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e)),this.ngZone=m(ie)}handle(e){return new X(r=>{let s=new AbortController;return this.doRequest(e,s.signal,r).then(W,i=>r.error(new E({error:i}))),()=>s.abort()})}doRequest(e,r,s){return S(this,null,function*(){let i=this.createRequestInit(e),o;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,q({signal:r},i)));xe(h),s.next({type:R.Sent}),o=yield h}catch(h){s.error(new E({error:h,status:h.status??0,statusText:h.statusText,url:e.urlWithParams,headers:h.headers}));return}let d=new g(o.headers),a=o.statusText,f=ye(o)??e.urlWithParams,p=o.status,y=null;if(e.reportProgress&&s.next(new B({headers:d,status:p,statusText:a,url:f})),o.body){let h=o.headers.get("content-length"),I=[],c=o.body.getReader(),l=0,T,A,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>S(this,null,function*(){for(;;){let{done:P,value:D}=yield c.read();if(P)break;if(I.push(D),l+=D.length,e.reportProgress){A=e.responseType==="text"?(A??"")+(T??=new TextDecoder).decode(D,{stream:!0}):void 0;let K=()=>s.next({type:R.DownloadProgress,total:h?+h:void 0,loaded:l,partialText:A});u?u.run(K):K()}}}));let M=this.concatChunks(I,l);try{let P=o.headers.get("Content-Type")??"";y=this.parseBody(e,M,P)}catch(P){s.error(new E({error:P,headers:new g(o.headers),status:o.status,statusText:o.statusText,url:ye(o)??e.urlWithParams}));return}}p===0&&(p=y?Te:0),p>=200&&p<300?(s.next(new j({body:y,headers:d,status:p,statusText:a,url:f})),s.complete()):s.error(new E({error:y,headers:d,status:p,statusText:a,url:f}))})}parseBody(e,r,s){switch(e.responseType){case"json":let i=new TextDecoder().decode(r).replace(Ie,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(e){let r={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((i,o)=>r[i]=o.join(",")),e.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let i=e.detectContentTypeHeader();i!==null&&(r["Content-Type"]=i)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:s}}concatChunks(e,r){let s=new Uint8Array(r),i=0;for(let o of e)s.set(o,i),i+=o.length;return s}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})(),G=class{};function W(){}function xe(t){t.then(W,W)}function ke(t,n){return n(t)}function Fe(t,n,e){return(r,s)=>se(e,()=>n(r,i=>t(i,s)))}var we=new N(""),Le=new N(""),je=new N("",{providedIn:"root",factory:()=>!0});var me=(()=>{class t extends F{constructor(e,r){super(),this.backend=e,this.injector=r,this.chain=null,this.pendingTasks=m(oe),this.contributeToStability=m(je)}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(we),...this.injector.get(Le,[])]));this.chain=r.reduceRight((s,i)=>Fe(s,i,this.injector),ke)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe(H(()=>this.pendingTasks.remove(r)))}else return this.chain(e,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||t)(w(_),w(re))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})();var Ue=/^\)\]\}',?\n/;function _e(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var ge=(()=>{class t{constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new ne(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Y(r.\u0275loadImpl()):J(null)).pipe(ee(()=>new X(i=>{let o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let c=e.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(e.responseType){let c=e.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let d=e.serializeBody(),a=null,f=()=>{if(a!==null)return a;let c=o.statusText||"OK",l=new g(o.getAllResponseHeaders()),T=_e(o)||e.url;return a=new B({headers:l,status:o.status,statusText:c,url:T}),a},p=()=>{let{headers:c,status:l,statusText:T,url:A}=f(),u=null;l!==Ae&&(u=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=u?Te:0);let M=l>=200&&l<300;if(e.responseType==="json"&&typeof u=="string"){let P=u;u=u.replace(Ue,"");try{u=u!==""?JSON.parse(u):null}catch(D){u=P,M&&(M=!1,u={error:D,text:u})}}M?(i.next(new j({body:u,headers:c,status:l,statusText:T,url:A||void 0})),i.complete()):i.error(new E({error:u,headers:c,status:l,statusText:T,url:A||void 0}))},y=c=>{let{url:l}=f(),T=new E({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});i.error(T)},b=!1,h=c=>{b||(i.next(f()),b=!0);let l={type:R.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),e.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),i.next(l)},I=c=>{let l={type:R.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),i.next(l)};return o.addEventListener("load",p),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),e.reportProgress&&(o.addEventListener("progress",h),d!==null&&o.upload&&o.upload.addEventListener("progress",I)),o.send(d),i.next({type:R.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",p),o.removeEventListener("timeout",y),e.reportProgress&&(o.removeEventListener("progress",h),d!==null&&o.upload&&o.upload.removeEventListener("progress",I)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(r){return new(r||t)(w(de))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})(),Ee=new N(""),Be="XSRF-TOKEN",ze=new N("",{providedIn:"root",factory:()=>Be}),Se="X-XSRF-TOKEN",Xe=new N("",{providedIn:"root",factory:()=>Se}),z=class{},Je=(()=>{class t{constructor(e,r,s){this.doc=e,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=le(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.\u0275fac=function(r){return new(r||t)(w(ce),w(ae),w(ze))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})();function Ce(t,n){let e=t.url.toLowerCase();if(!m(Ee)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return n(t);let r=m(z).getToken(),s=m(Xe);return r!=null&&!t.headers.has(s)&&(t=t.clone({headers:t.headers.set(s,r)})),n(t)}function pn(...t){let n=[Oe,ge,me,{provide:F,useExisting:me},{provide:_,useFactory:()=>m(De,{optional:!0})??m(ge)},{provide:we,useValue:Ce,multi:!0},{provide:Ee,useValue:!0},{provide:z,useClass:Je}];for(let e of t)n.push(...e.\u0275providers);return te(n)}export{v as a,Oe as b,pn as c};
