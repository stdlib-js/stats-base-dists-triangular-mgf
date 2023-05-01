// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor,p=Math.ceil;function v(r){return r<0?p(r):y(r)}var s=Number.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY,w=1023;function d(r){return r===b||r===s}var A,_=2147483647,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",j=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return g.call(r);t=r[U],i=U,n=null!=(o=r)&&h.call(o,i);try{r[U]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[U]=t:delete r[U],e}:function(r){return g.call(r)},N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=A,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,L="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,x=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:W,uint8:x};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n,t,e){return Q[0]=r,n[e]=R[X],n[e+t]=R[Z],n}function rr(r){return $(r,[0,0],1,0)}c(rr,"assign",$);var nr,tr,er=!0===J?1:0,or=new P(1),ir=new E(or.buffer);function ur(r){return or[0]=r,ir[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new P(1),cr=new E(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var vr=[0,0];function sr(r,n){var t,e;return rr.assign(r,vr,1,0),t=vr[0],t&=_,e=ur(n),pr(t|=e&=2147483648,vr[1])}function br(r){return Math.abs(r)}function wr(r,n,t,e){return l(r)||d(r)?(n[e]=r,n[e+t]=0,n):0!==r&&br(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var dr=[0,0],Ar=[0,0];function _r(r,n){var t,e;return 0===n||0===r||l(r)||d(r)?r:(wr(r,dr,1,0),n+=dr[1],n+=function(r){var n=ur(r);return(n=(2146435072&n)>>>20)-w|0}(r=dr[0]),n<-1074?sr(0,r):n>1023?r<0?s:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr.assign(r,Ar,1,0),t=Ar[0],t&=2148532223,e*pr(t|=n+w<<20,Ar[1])))}var mr=1.4426950408889634,gr=1/(1<<28);function hr(r){var n;return l(r)||r===b?r:r===s?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<gr?1+r:function(r,n,t){var e,o,i,u;return _r(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=v(r<0?mr*r-.5:mr*r+.5)),1.9082149292705877e-10*n,n)}function Ur(r){return y(r)===r}function jr(r){return Ur(r/2)}function Nr(r){return jr(r>0?r-1:r+1)}var Ir=Math.sqrt,Or=!0===J?0:1,Sr=new P(1),Er=new E(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===J?1:0,Gr=new P(1),Pr=new E(Gr.buffer);function Lr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var Mr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],xr=[0,1.350039202129749e-8],kr=1048575,Yr=1048576,qr=1083179008,Cr=1e300,zr=1e-300,Br=[0,0],Dr=[0,0];function Jr(r,n){var t,e,o,i,u,f,a,c,y,p,v,A,m,g;if(l(r)||l(n))return NaN;if(rr.assign(n,Br,1,0),u=Br[0],0===Br[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(d(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(n===b)?0:b}(r,n)}if(rr.assign(r,Br,1,0),i=Br[0],0===Br[1]){if(0===i)return function(r,n){return n===s?b:n===b?0:n>0?Nr(n)?r:0:Nr(n)?sr(b,r):b}(r,n);if(1===r)return 1;if(-1===r&&Nr(n))return-1;if(d(r))return r===s?Jr(-0,-n):n<0?0:b}if(r<0&&!1===Ur(n))return(r-r)/(r-r);if(o=br(r),t=i&_|0,e=u&_|0,a=u>>>31|0,f=(f=i>>>31|0)&&Nr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(ur(r)&_)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Cr*Cr:f*zr*zr;if(t>1072693248)return 0===a?f*Cr*Cr:f*zr*zr;v=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Dr,o)}else v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d,A,_,m,g,h,U,j;return g=0,t<Mr&&(g-=53,t=ur(n*=9007199254740992)),g+=(t>>20)-w|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,g+=1,t-=Mr),u=Fr(o=(_=(n=Lr(n,t))-(c=Vr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=U<<18),A=(i=o*o)*i*(0===(j=i)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Fr(a=3+(i=u*u)+(A+=(f=m*(_-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=Fr(y=(_=u*a)+(m=f*a+(A-(a-3-i))*o),0))+.9617966939259756*(m-(y-_))+xr[U])-((s=Fr(s=(p=.9617967009544373*y)+v+(l=Wr[U])+(d=g),0))-d-l-p),r[0]=s,r[1]=b,r}(Dr,o,t);if(A=(p=(n-(c=Fr(n,0)))*v[0]+n*v[1])+(y=c*v[0]),rr.assign(A,Br,1,0),m=Tr(Br[0]),g=Tr(Br[1]),m>=qr){if(0!=(m-qr|g))return f*Cr*Cr;if(p+8008566259537294e-32>A-y)return f*Cr*Cr}else if((m&_)>=1083231232){if(0!=(m-3230714880|g))return f*zr*zr;if(p<=A-y)return f*zr*zr}return A=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&_|0)>>20)-w|0,c=0,l>1071644672&&(o=Lr(0,((c=r+(Yr>>y+1)>>>0)&~(kr>>(y=((c&_)>>20)-w|0)))>>>0),c=(c&kr|Yr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Tr(r=ur(a=1-((a=(i=.6931471824645996*(o=Fr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?_r(a,c):Lr(a,r)}(m,y,p),f*A}function Kr(r,n,t,e){var o,i,u,f;return l(r)||l(n)||l(t)||l(e)||n>e||e>t?NaN:0===r?1:(i=t-n,u=e-n,f=(o=t-e)*hr(n*r)-i*hr(e*r),f+=u*hr(t*r),f*=2,f/=i*u*o*Jr(r,2))}return c(Kr,"factory",(function(r,n,t){var e,o,i,u;return l(r)||l(n)||l(t)||r>t||t>n?(u=NaN,function(){return u}):(e=n-t,o=n-r,i=t-r,function(u){var f;return l(u)?NaN:0===u?1:(f=e*hr(r*u)-o*hr(t*u),f+=i*hr(n*u),f*=2,f/=o*i*e*Jr(u,2))})})),Kr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=index.js.map
