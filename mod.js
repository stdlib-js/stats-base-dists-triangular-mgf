// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function a(r,t,n){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=a(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=a(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,A=/(\..*[^0])0*e/;function b(r){var t,e,a=parseFloat(r.arg);if(!isFinite(a)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);a=r.arg}switch(r.specifier){case"e":case"E":e=a.toExponential(r.precision);break;case"f":case"F":e=a.toFixed(r.precision);break;case"g":case"G":c(a)<1e-4?((t=r.precision)>0&&(t-=1),e=a.toExponential(t)):e=a.toPrecision(r.precision),r.alternate||(e=s.call(e,A,"$1e"),e=s.call(e,h,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,d,"$1.e")),a>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function F(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function m(r,t,n){var e=t-r.length;return e<0?r:r=n?r+F(e):F(e)+r}var I=String.fromCharCode,N=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,n,e,i,o,c,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,N(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,N(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!N(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=N(o)?String(e.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=a(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=m(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,a;for(n=[],a=0,e=S.exec(r);e;)(t=r.slice(a,S.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),a=S.lastIndex,e=S.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function O(r){return"string"==typeof r}function V(r){var t,n;if(!O(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return T.apply(null,t)}var k=Object.prototype,x=k.toString,G=k.__defineGetter__,H=k.__defineSetter__,W=k.__lookupGetter__,L=k.__lookupSetter__;var P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,o="set"in n,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),o&&H&&H.call(r,t,n.set),r};function $(r,t,n){P(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(r){return r!=r}var C=Math.floor,M=Math.ceil;function R(r){return r<0?M(r):C(r)}var Z=Number,X=Z.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,z=Number.POSITIVE_INFINITY,B=Z.NEGATIVE_INFINITY,D=Number.POSITIVE_INFINITY,J=Z.NEGATIVE_INFINITY;function K(r){return r===D||r===J}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var rr=Object.prototype.toString;var tr=Object.prototype.hasOwnProperty;var nr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof nr?nr.toStringTag:"";var ar=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,i;if(null==r)return rr.call(r);n=r[er],i=er,t=null!=(a=r)&&tr.call(a,i);try{r[er]=void 0}catch(t){return rr.call(r)}return e=rr.call(r),t?r[er]=n:delete r[er],e}:function(r){return rr.call(r)},ir="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var sr,yr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr([1,3.14,-3.14,NaN]),n=t,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=sr,gr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,hr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),n=t,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var Ar=wr,br="function"==typeof Uint16Array;var Fr="function"==typeof Uint16Array?Uint16Array:null;var mr,Ir="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,n;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Nr,Er={uint16:mr,uint8:Ar};(Nr=new Er.uint16(1))[0]=4660;var _r,Tr,Sr=52===new Er.uint8(Nr.buffer)[0];!0===Sr?(_r=1,Tr=0):(_r=0,Tr=1);var Ur={HIGH:_r,LOW:Tr},jr=new vr(1),Or=new cr(jr.buffer),Vr=Ur.HIGH,kr=Ur.LOW;function xr(r,t,n,e){return jr[0]=r,t[e]=Or[Vr],t[e+n]=Or[kr],t}function Gr(r){return xr(r,[0,0],1,0)}$(Gr,"assign",xr);var Hr="function"==typeof Float64Array;var Wr="function"==typeof Float64Array?Float64Array:null;var Lr,Pr="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,n;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,NaN]),n=t,r=(Hr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var $r=!0===Sr?1:0,Yr=new Lr(1),Cr=new cr(Yr.buffer);function Mr(r){return Yr[0]=r,Cr[$r]}var Rr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Xr,qr,zr,Br="function"==typeof Float64Array?Float64Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Zr)return!1;try{t=new Zr([1,3.14,-3.14,NaN]),n=t,r=(Rr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")},!0===Sr?(qr=1,zr=0):(qr=0,zr=1);var Dr={HIGH:qr,LOW:zr},Jr=new Xr(1),Kr=new cr(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var nt=[0,0];function et(r,t){var n,e;return Gr.assign(r,nt,1,0),n=nt[0],n&=2147483647,e=Mr(t),tt(n|=e&=2147483648,nt[1])}function at(r,t,n,e){return Y(r)||K(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}$((function(r){return at(r,[0,0],1,0)}),"assign",at);var it="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var ut,ft,ct,lt="function"==typeof Float64Array?Float64Array:void 0;ut=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot([1,3.14,-3.14,NaN]),n=t,r=(it&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?lt:function(){throw new Error("not implemented")},!0===Sr?(ft=1,ct=0):(ft=0,ct=1);var pt={HIGH:ft,LOW:ct},st=new ut(1),yt=new cr(st.buffer),vt=pt.HIGH,gt=pt.LOW;function dt(r,t,n,e){return st[0]=r,t[e]=yt[vt],t[e+n]=yt[gt],t}function wt(r){return dt(r,[0,0],1,0)}$(wt,"assign",dt);var ht=[0,0],At=[0,0];function bt(r,t){var n,e;return 0===t||0===r||Y(r)||K(r)?r:(at(r,ht,1,0),t+=ht[1],t+=function(r){var t=Mr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ht[0]),t<-1074?et(0,r):t>1023?r<0?B:z:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,wt.assign(r,At,1,0),n=At[0],n&=2148532223,e*tt(n|=t+1023<<20,At[1])))}function Ft(r){var t;return Y(r)||r===q?r:r===X?0:r>709.782712893384?q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,a,i,o;return bt(1-(t-(e=r-t)*(i=e-(a=e*e)*(0===(o=a)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=R(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function mt(r){return C(r)===r}function It(r){return mt(r/2)}function Nt(r){return It(r>0?r-1:r+1)}var Et=Math.sqrt;function _t(r){return Math.abs(r)}var Tt="function"==typeof Float64Array;var St="function"==typeof Float64Array?Float64Array:null;var Ut,jt,Ot,Vt="function"==typeof Float64Array?Float64Array:void 0;Ut=function(){var r,t,n;if("function"!=typeof St)return!1;try{t=new St([1,3.14,-3.14,NaN]),n=t,r=(Tt&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Vt:function(){throw new Error("not implemented")},!0===Sr?(jt=1,Ot=0):(jt=0,Ot=1);var kt={HIGH:jt,LOW:Ot},xt=new Ut(1),Gt=new cr(xt.buffer),Ht=kt.HIGH,Wt=kt.LOW;function Lt(r,t,n,e){return xt[0]=r,t[e]=Gt[Ht],t[e+n]=Gt[Wt],t}function Pt(r){return Lt(r,[0,0],1,0)}$(Pt,"assign",Lt);var $t="function"==typeof Float64Array;var Yt="function"==typeof Float64Array?Float64Array:null;var Ct,Mt="function"==typeof Float64Array?Float64Array:void 0;Ct=function(){var r,t,n;if("function"!=typeof Yt)return!1;try{t=new Yt([1,3.14,-3.14,NaN]),n=t,r=($t&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Mt:function(){throw new Error("not implemented")};var Rt=!0===Sr?0:1,Zt=new Ct(1),Xt=new cr(Zt.buffer);function qt(r,t){return Zt[0]=r,Xt[Rt]=t>>>0,Zt[0]}function zt(r){return 0|r}var Bt=Z.NEGATIVE_INFINITY,Dt=Number.POSITIVE_INFINITY;var Jt="function"==typeof Float64Array;var Kt="function"==typeof Float64Array?Float64Array:null;var Qt,rn="function"==typeof Float64Array?Float64Array:void 0;Qt=function(){var r,t,n;if("function"!=typeof Kt)return!1;try{t=new Kt([1,3.14,-3.14,NaN]),n=t,r=(Jt&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var tn=!0===Sr?1:0,nn=new Qt(1),en=new cr(nn.buffer);function an(r,t){return nn[0]=r,en[tn]=t>>>0,nn[0]}var on=[1,1.5],un=[0,.5849624872207642],fn=[0,1.350039202129749e-8];var cn=1e300,ln=1e-300,pn=[0,0],sn=[0,0];function yn(r,t){var n,e,a,i,o,u,f,c,l,p,s,y,v,g;if(Y(r)||Y(t))return NaN;if(Pt.assign(t,pn,1,0),o=pn[0],0===pn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Et(r);if(-.5===t)return 1/Et(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(K(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:_t(r)<1==(t===Dt)?0:Dt}(r,t)}if(Pt.assign(r,pn,1,0),i=pn[0],0===pn[1]){if(0===i)return function(r,t){return t===Bt?Dt:t===Dt?0:t>0?Nt(t)?r:0:Nt(t)?et(Dt,r):Dt}(r,t);if(1===r)return 1;if(-1===r&&Nt(t))return-1;if(K(r))return r===Bt?yn(-0,-t):t<0?0:Dt}if(r<0&&!1===mt(t))return(r-r)/(r-r);if(a=_t(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,u=(u=i>>>31|0)&&Nt(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Mr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*cn*cn:u*ln*ln;if(n>1072693248)return 0===f?u*cn*cn:u*ln*ln;s=function(r,t){var n,e,a,i,o,u;return n=(o=1.9259629911266175e-8*(a=t-1)-a*a*(0===(u=a)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=qt(e=(i=1.4426950216293335*a)+o,0))-i),r[0]=e,r[1]=n,r}(sn,a)}else s=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y,v,g,d,w,h,A,b,F,m,I;return b=0,n<1048576&&(b-=53,n=Mr(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(F=1048575&n|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,n-=1048576),o=qt(a=(h=(t=an(t,n))-(c=on[m]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),f=an(0,e+=m<<18),w=(i=a*a)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=qt(f=3+(i=o*o)+(w+=(u=A*(h-o*f-o*(t-(f-c))))*(o+a)),0),g=(y=-7.028461650952758e-9*(p=qt(p=(h=o*f)+(A=u*f+(w-(f-3-i))*a),0))+.9617966939259756*(A-(p-h))+fn[m])-((v=qt(v=(s=.9617967009544373*p)+y+(l=un[m])+(d=b),0))-d-l-s),r[0]=v,r[1]=g,r}(sn,a,n);if(y=(p=(t-(c=qt(t,0)))*s[0]+t*s[1])+(l=c*s[0]),Pt.assign(y,pn,1,0),v=zt(pn[0]),g=zt(pn[1]),v>=1083179008){if(0!=(v-1083179008|g))return u*cn*cn;if(p+8008566259537294e-32>y-l)return u*cn*cn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|g))return u*ln*ln;if(p<=y-l)return u*ln*ln}return y=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y;return s=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(e=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),t-=i=an(0,e)),r=zt(r=Mr(c=1-((c=(o=.6931471824645996*(i=qt(i=n+t,0)))+(u=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(a=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?bt(c,l):an(c,r)}(v,l,p),u*y}function vn(r,t,n,e){var a,i,o,u;return Y(r)||Y(t)||Y(n)||Y(e)||t>e||e>n?NaN:0===r?1:(i=n-t,o=e-t,u=(a=n-e)*Ft(t*r)-i*Ft(e*r),u+=o*Ft(n*r),u*=2,u/=i*o*a*yn(r,2))}function gn(r,t,n){var e,a,i,o;return Y(r)||Y(t)||Y(n)||r>n||n>t?(o=NaN,function(){return o}):(e=t-n,a=t-r,i=n-r,function(o){var u;if(Y(o))return NaN;if(0===o)return 1;return u=e*Ft(r*o)-a*Ft(n*o),u+=i*Ft(t*o),u*=2,u/=a*i*e*yn(o,2)})}$(vn,"factory",gn);export{vn as default,gn as factory};
//# sourceMappingURL=mod.js.map
