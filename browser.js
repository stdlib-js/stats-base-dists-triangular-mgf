// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,v,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,g,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,f,s,l,p,g,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,y=t.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=t.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var j=Object.prototype,N=j.toString,T=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Math.floor,L=Math.ceil;function P(r){return r<0?L(r):C(r)}var R=Number.NEGATIVE_INFINITY,M=Number.POSITIVE_INFINITY,Z=1023,X=1023,Y=-1023,q=-1074;function z(r){return r===M||r===R}var B,D=2147483648,J=2147483647,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,cr=B,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,gr=ur,yr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:vr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Ur,Sr,Ir=52===new Er.uint8(_r.buffer)[0];!0===Ir?(Ur=1,Sr=0):(Ur=0,Sr=1);var xr={HIGH:Ur,LOW:Sr},kr=new gr(1),Fr=new cr(kr.buffer),jr=xr.HIGH,Nr=xr.LOW;function Tr(r,e,n,t){return kr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Nr],e}function Or(r){return Tr(r,[0,0],1,0)}H(Or,"assign",Tr);var Vr,$r,Gr=!0===Ir?1:0,Hr=new gr(1),Wr=new cr(Hr.buffer);function Cr(r){return Hr[0]=r,Wr[Gr]}!0===Ir?(Vr=1,$r=0):(Vr=0,$r=1);var Lr={HIGH:Vr,LOW:$r},Pr=new gr(1),Rr=new cr(Pr.buffer),Mr=Lr.HIGH,Zr=Lr.LOW;function Xr(r,e){return Rr[Mr]=r,Rr[Zr]=e,Pr[0]}var Yr=[0,0];function qr(r,e){var n,t;return Or.assign(r,Yr,1,0),n=Yr[0],n&=J,t=Cr(e),Xr(n|=t&=D,Yr[1])}var zr=22250738585072014e-324;function Br(r){return Math.abs(r)}var Dr=4503599627370496;function Jr(r,e,n,t){return W(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Br(r)<zr?(e[t]=r*Dr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=2146435072,Qr=2220446049250313e-31,re=2148532223,ee=[0,0],ne=[0,0];function te(r,e){var n,t;return 0===e||0===r||W(r)||z(r)?r:(Jr(r,ee,1,0),r=ee[0],e+=ee[1],e+=function(r){var e=Cr(r);return(e=(e&Kr)>>>20)-Z|0}(r),e<q?qr(0,r):e>X?r<0?R:M:(e<=Y?(e+=52,t=Qr):t=1,Or.assign(r,ne,1,0),n=ne[0],n&=re,t*Xr(n|=e+Z<<20,ne[1])))}var ie=.6931471803691238,ae=1.9082149292705877e-10,oe=1.4426950408889634,ue=709.782712893384,ce=-745.1332191019411,fe=1/(1<<28),se=-fe;function le(r){var e;return W(r)||r===M?r:r===R?0:r>ue?M:r<ce?0:r>se&&r<fe?1+r:function(r,e,n){var t,i,a,o;return te(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=P(r<0?oe*r-.5:oe*r+.5))*ie,e*ae,e)}function pe(r){return C(r)===r}function ge(r){return pe(r/2)}function ye(r){return ge(r>0?r-1:r+1)}var de=Math.sqrt,he=!0===Ir?0:1,ve=new gr(1),we=new cr(ve.buffer);function be(r,e){return ve[0]=r,we[he]=e>>>0,ve[0]}function me(r){return 0|r}var Ae=1072693247,_e=1e300,Ee=1e-300,Ue=!0===Ir?1:0,Se=new gr(1),Ie=new cr(Se.buffer);function xe(r,e){return Se[0]=r,Ie[Ue]=e>>>0,Se[0]}var ke=1048575,Fe=1048576,je=1072693248,Ne=536870912,Te=524288,Oe=20,Ve=9007199254740992,$e=.9617966939259756,Ge=.9617967009544373,He=-7.028461650952758e-9,We=[1,1.5],Ce=[0,.5849624872207642],Le=[0,1.350039202129749e-8],Pe=1.4426950408889634,Re=1.4426950216293335,Me=1.9259629911266175e-8,Ze=.6931471805599453,Xe=1048575,Ye=1048576,qe=1071644672,ze=20,Be=.6931471824645996,De=-1.904654299957768e-9,Je=1072693247,Ke=1105199104,Qe=1139802112,rn=1083179008,en=1072693248,nn=1083231232,tn=3230714880,an=31,on=1e300,un=1e-300,cn=8008566259537294e-32,fn=[0,0],sn=[0,0];function ln(r,e){var n,t,i,a,o,u,c,f,s,l,p,g,y,d;if(W(r)||W(e))return NaN;if(Or.assign(e,fn,1,0),o=fn[0],0===fn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return de(r);if(-.5===e)return 1/de(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Br(r)<1==(e===M)?0:M}(r,e)}if(Or.assign(r,fn,1,0),a=fn[0],0===fn[1]){if(0===a)return function(r,e){return e===R?M:e===M?0:e>0?ye(e)?r:0:ye(e)?qr(M,r):M}(r,e);if(1===r)return 1;if(-1===r&&ye(e))return-1;if(z(r))return r===R?ln(-0,-e):e<0?0:M}if(r<0&&!1===pe(e))return(r-r)/(r-r);if(i=Br(r),n=a&J|0,t=o&J|0,c=o>>>an|0,u=(u=a>>>an|0)&&ye(e)?-1:1,t>Ke){if(t>Qe)return function(r,e){return(Cr(r)&J)<=Ae?e<0?_e*_e:Ee*Ee:e>0?_e*_e:Ee*Ee}(r,e);if(n<Je)return 1===c?u*on*on:u*un*un;if(n>en)return 0===c?u*on*on:u*un*un;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Me-a*Pe)-((t=be(t=(o=Re*i)+u,0))-o),r[0]=t,r[1]=n,r}(sn,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,d,h,v,w,b,m,A,_,E;return m=0,n<Fe&&(m-=53,n=Cr(e*=Ve)),m+=(n>>Oe)-Z|0,n=(A=n&ke|0)|je|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=Fe),o=be(i=(w=(e=xe(e,n))-(f=We[_]))*(b=1/(e+f)),0),t=(n>>1|Ne)+Te,c=xe(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=be(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=be(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0),p=Ge*l,d=(g=He*l+(b-(l-w))*$e+Le[_])-((y=be(y=p+g+(s=Ce[_])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(sn,i,n);if(g=(l=(e-(f=be(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Or.assign(g,fn,1,0),y=me(fn[0]),d=me(fn[1]),y>=rn){if(0!=(y-rn|d))return u*on*on;if(l+cn>g-s)return u*on*on}else if((y&J)>=nn){if(0!=(y-tn|d))return u*un*un;if(l<=g-s)return u*un*un}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&J|0)>>ze)-Z|0,f=0,s>qe&&(i=xe(0,((f=r+(Ye>>l+1)>>>0)&~(Xe>>(l=((f&J)>>ze)-Z|0)))>>>0),f=(f&Xe|Ye)>>ze-l>>>0,r<0&&(f=-f),e-=i),r=me(r=Cr(c=1-((c=(a=(i=be(i=n+e,0))*Be)+(o=(n-(i-e))*Ze+i*De))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<ze>>>0)>>ze<=0?te(c,f):xe(c,r)}(y,s,l),u*g}function pn(r,e,n,t){var i,a,o,u;return W(r)||W(e)||W(n)||W(t)||e>t||t>n?NaN:0===r?1:(a=n-e,o=t-e,u=(i=n-t)*le(e*r)-a*le(t*r),u+=o*le(n*r),u*=2,u/=a*o*i*ln(r,2))}return H(pn,"factory",(function(r,e,n){var t,i,a,o;return W(r)||W(e)||W(n)||r>n||n>e?(o=NaN,function(){return o}):(t=e-n,i=e-r,a=n-r,function(o){var u;return W(o)?NaN:0===o?1:(u=t*le(r*o)-i*le(n*o),u+=a*le(e*o),u*=2,u/=i*a*t*ln(o,2))})})),pn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
