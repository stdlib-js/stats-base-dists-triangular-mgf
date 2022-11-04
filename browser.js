// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor,p=Math.ceil;function v(r){return r<0?p(r):y(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY,d=1023;function s(r){return r===w||r===b}var A,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",g=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return m.call(r);t=r[U],u=U,n=null!=(o=r)&&h.call(o,u);try{r[U]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[U]=t:delete r[U],e}:function(r){return m.call(r)},j="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===g(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=A,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(E&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(P&&t instanceof Uint8Array||"[object Uint8Array]"===g(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V,W=H,x="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===g(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,C={uint16:V,uint8:W};(q=new C.uint16(1))[0]=4660;var z,B,D=52===new C.uint8(q.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new S(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,n){return K[0]=n,r[0]=Q[R],r[1]=Q[X],r}function $(r,n){return 1===arguments.length?Z([0,0],r):Z(r,n)}var rr,nr,tr=!0===D?1:0,er=new G(1),or=new S(er.buffer);function ur(r){return er[0]=r,or[tr]}!0===D?(rr=1,nr=0):(rr=0,nr=1);var ir={HIGH:rr,LOW:nr},fr=new G(1),ar=new S(fr.buffer),cr=ir.HIGH,lr=ir.LOW;function yr(r,n){return ar[cr]=r,ar[lr]=n,fr[0]}var pr=[0,0];function vr(r,n){var t,e;return $(pr,r),t=pr[0],t&=2147483647,e=ur(n),yr(t|=e&=2147483648,pr[1])}function br(r){return Math.abs(r)}function wr(r,n,t,e){return l(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&br(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var dr=[0,0],sr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||l(r)||s(r)?r:(wr(r,dr,1,0),n+=dr[1],n+=function(r){var n=ur(r);return(n=(2146435072&n)>>>20)-d|0}(r=dr[0]),n<-1074?vr(0,r):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$(sr,r),t=sr[0],t&=2148532223,e*yr(t|=n+d<<20,sr[1])))}var _r=1.4426950408889634,mr=1/(1<<28);function hr(r){var n;return l(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<mr?1+r:function(r,n,t){var e,o,u,i;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=v(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}function Ur(r){return y(r)===r}function gr(r){return Ur(r/2)}function jr(r){return gr(r>0?r-1:r+1)}var Nr=Math.sqrt,Ir=!0===D?0:1,Or=new G(1),Sr=new S(Or.buffer);function Er(r,n){return Or[0]=r,Sr[Ir]=n>>>0,Or[0]}function Fr(r){return 0|r}var Tr=!0===D?1:0,Hr=new G(1),Gr=new S(Hr.buffer);function Pr(r,n){return Hr[0]=r,Gr[Tr]=n>>>0,Hr[0]}var Lr=1048576,Mr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],xr=2147483647,kr=1048575,Yr=1048576,qr=2147483647,Cr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(r,n){var t,e,o,u,i,f,a,c,y,p,v,A,_,m;if(l(r)||l(n))return NaN;if($(Dr,n),i=Dr[0],0===Dr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nr(r);if(-.5===n)return 1/Nr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(n===w)?0:w}(r,n)}if($(Dr,r),u=Dr[0],0===Dr[1]){if(0===u)return function(r,n){return n===b?w:n===w?0:n>0?jr(n)?r:0:jr(n)?vr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&jr(n))return-1;if(s(r))return r===b?Kr(-0,-n):n<0?0:w}if(r<0&&!1===Ur(n))return(r-r)/(r-r);if(o=br(r),t=u&qr|0,e=i&qr|0,a=i>>>31|0,f=(f=u>>>31|0)&&jr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*zr*zr:f*Br*Br;if(t>1072693248)return 0===a?f*zr*zr:f*Br*Br;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Er(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Jr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,w,s,A,_,m,h,U,g,j;return h=0,t<Lr&&(h-=53,t=ur(n*=9007199254740992)),h+=(t>>20)-d|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,h+=1,t-=Lr),i=Er(o=(_=(n=Pr(n,t))-(c=Mr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Pr(0,e+=g<<18),A=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Er(a=3+(u=i*i)+(A+=(f=m*(_-i*a-i*(n-(a-c))))*(i+o)),0),w=(v=-7.028461650952758e-9*(y=Er(y=(_=i*a)+(m=f*a+(A-(a-3-u))*o),0))+.9617966939259756*(m-(y-_))+Wr[g])-((b=Er(b=(p=.9617967009544373*y)+v+(l=Vr[g])+(s=h),0))-s-l-p),r[0]=b,r[1]=w,r}(Jr,o,t);if(p=(n-(c=Er(n,0)))*v[0]+n*v[1],y=c*v[0],$(Dr,A=p+y),_=Fr(Dr[0]),m=Fr(Dr[1]),_>=Cr){if(0!=(_-Cr|m))return f*zr*zr;if(p+8008566259537294e-32>A-y)return f*zr*zr}else if((_&qr)>=1083231232){if(0!=(_-3230714880|m))return f*Br*Br;if(p<=A-y)return f*Br*Br}return A=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&xr|0)>>20)-d|0,c=0,l>1071644672&&(o=Pr(0,((c=r+(Yr>>y+1)>>>0)&~(kr>>(y=((c&xr)>>20)-d|0)))>>>0),c=(c&kr|Yr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Fr(r=ur(a=1-((a=(u=.6931471824645996*(o=Er(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ar(a,c):Pr(a,r)}(_,y,p),f*A}function Qr(r,n,t,e){var o,u,i,f;return l(r)||l(n)||l(t)||l(e)||n>e||e>t?NaN:0===r?1:(u=t-n,i=e-n,f=(o=t-e)*hr(n*r)-u*hr(e*r),f+=i*hr(t*r),f*=2,f/=u*i*o*Kr(r,2))}return c(Qr,"factory",(function(r,n,t){var e,o,u,i;return l(r)||l(n)||l(t)||r>t||t>n?(i=NaN,function(){return i}):(e=n-t,o=n-r,u=t-r,function(i){var f;return l(i)?NaN:0===i?1:(f=e*hr(r*i)-o*hr(t*i),f+=u*hr(n*i),f*=2,f/=o*u*e*Kr(i,2))})})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=browser.js.map
