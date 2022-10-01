// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=t;function y(r){return r!=r}var p=Math.floor,v=Math.ceil;function b(r){return r<0?v(r):p(r)}var d=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY,s=1023;function _(r){return r===w||r===d}var A,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"";A=m&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return h.call(r);n=r[g],u=g,t=null!=(o=r)&&U.call(o,u);try{r[g]=void 0}catch(t){return h.call(r)}return e=h.call(r),t?r[g]=n:delete r[g],e}:function(r){return h.call(r)};var j,N=A,I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(I&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=j,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H([1,3.14,-3.14,NaN]),n=t,r=(T&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,M=E,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,256,257]),n=t,r=(x&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,t,n;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Y&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:W,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new M(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,t){return R[0]=t,r[0]=X[Z],r[1]=X[$],r}function tr(r,t){return 1===arguments.length?rr([0,0],r):rr(r,t)}var nr,er,or=!0===K?1:0,ur=new M(1),ir=new F(ur.buffer);function fr(r){return ur[0]=r,ir[or]}!0===K?(nr=1,er=0):(nr=0,er=1);var ar={HIGH:nr,LOW:er},cr=new M(1),lr=new F(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,t){return lr[yr]=r,lr[pr]=t,cr[0]}var br=[0,0];function dr(r,t){var n,e;return tr(br,r),n=br[0],n&=2147483647,e=fr(t),vr(n|=e&=2147483648,br[1])}function wr(r){return Math.abs(r)}function sr(r,t){return y(t)||_(t)?(r[0]=t,r[1]=0,r):0!==t&&wr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var _r=[0,0],Ar=[0,0];function mr(r,t){var n,e;return 0===t||0===r||y(r)||_(r)?r:(function(r,t){1===arguments.length?sr([0,0],r):sr(r,t)}(_r,r),t+=_r[1],t+=function(r){var t=fr(r);return(t=(2146435072&t)>>>20)-s|0}(r=_r[0]),t<-1074?dr(0,r):t>1023?r<0?d:w:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,tr(Ar,r),n=Ar[0],n&=2148532223,e*vr(n|=t+s<<20,Ar[1])))}var hr=1.4426950408889634,Ur=1/(1<<28);function gr(r){var t;return y(r)||r===w?r:r===d?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ur?1+r:function(r,t,n){var e,o,u,i;return mr(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=b(r<0?hr*r-.5:hr*r+.5)),1.9082149292705877e-10*t,t)}function jr(r){return p(r)===r}function Nr(r){return jr(r/2)}function Ir(r){return Nr(r>0?r-1:r+1)}var Or=Math.sqrt,Sr=!0===K?0:1,Er=new M(1),Fr=new F(Er.buffer);function Tr(r,t){return Er[0]=r,Fr[Sr]=t>>>0,Er[0]}function Hr(r){return 0|r}var Gr=!0===K?1:0,Pr=new M(1),Mr=new F(Pr.buffer);function xr(r,t){return Pr[0]=r,Mr[Gr]=t>>>0,Pr[0]}var Lr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],kr=[0,1.350039202129749e-8],Yr=2147483647,qr=1048575,Cr=1048576,zr=2147483647,Br=1083179008,Dr=1e300,Jr=1e-300,Kr=[0,0],Qr=[0,0];function Rr(r,t){var n,e,o,u,i,f,a,c,l,p,v,b,A,m;if(y(r)||y(t))return NaN;if(tr(Kr,t),i=Kr[0],0===Kr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Or(r);if(-.5===t)return 1/Or(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:wr(r)<1==(t===w)?0:w}(r,t)}if(tr(Kr,r),u=Kr[0],0===Kr[1]){if(0===u)return function(r,t){return t===d?w:t===w?0:t>0?Ir(t)?r:0:Ir(t)?dr(w,r):w}(r,t);if(1===r)return 1;if(-1===r&&Ir(t))return-1;if(_(r))return r===d?Rr(-0,-t):t<0?0:w}if(r<0&&!1===jr(t))return(r-r)/(r-r);if(o=wr(r),n=u&zr|0,e=i&zr|0,a=i>>>31|0,f=(f=u>>>31|0)&&Ir(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&fr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*Dr*Dr:f*Jr*Jr;if(n>1072693248)return 0===a?f*Dr*Dr:f*Jr*Jr;v=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Tr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Qr,o)}else v=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,_,A,m,h,U,g,j;return h=0,n<Lr&&(h-=53,n=fr(t*=9007199254740992)),h+=(n>>20)-s|0,n=1072693248|(U=1048575&n|0),U<=235662?g=0:U<767610?g=1:(g=0,h+=1,n-=Lr),i=Tr(o=(A=(t=xr(t,n))-(c=Vr[g]))*(m=1/(t+c)),0),e=524288+(n>>1|536870912),a=xr(0,e+=g<<18),_=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Tr(a=3+(u=i*i)+(_+=(f=m*(A-i*a-i*(t-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Tr(y=(A=i*a)+(m=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(m-(y-A))+kr[g])-((b=Tr(b=(p=.9617967009544373*y)+v+(l=Wr[g])+(w=h),0))-w-l-p),r[0]=b,r[1]=d,r}(Qr,o,n);if(p=(t-(c=Tr(t,0)))*v[0]+t*v[1],l=c*v[0],tr(Kr,b=p+l),A=Hr(Kr[0]),m=Hr(Kr[1]),A>=Br){if(0!=(A-Br|m))return f*Dr*Dr;if(p+8008566259537294e-32>b-l)return f*Dr*Dr}else if((A&zr)>=1083231232){if(0!=(A-3230714880|m))return f*Jr*Jr;if(p<=b-l)return f*Jr*Jr}return b=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Yr|0)>>20)-s|0,c=0,l>1071644672&&(o=xr(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&Yr)>>20)-s|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=Hr(r=fr(a=1-((a=(u=.6931471824645996*(o=Tr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?mr(a,c):xr(a,r)}(A,l,p),f*b}function Xr(r,t,n,e){var o,u,i,f;return y(r)||y(t)||y(n)||y(e)||t>e||e>n?NaN:0===r?1:(u=n-t,i=e-t,f=(o=n-e)*gr(t*r)-u*gr(e*r),f+=i*gr(n*r),f*=2,f/=u*i*o*Rr(r,2))}function Zr(r,t,n){var e,o,u,i;return y(r)||y(t)||y(n)||r>n||n>t?(i=NaN,function(){return i}):(e=t-n,o=t-r,u=n-r,function(i){var f;return y(i)?NaN:0===i?1:(f=e*gr(r*i)-o*gr(n*i),f+=u*gr(t*i),f*=2,f/=o*u*e*Rr(i,2))})}l(Xr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Zr}),r.default=Xr,r.factory=Zr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).mgf={});
//# sourceMappingURL=index.js.map
