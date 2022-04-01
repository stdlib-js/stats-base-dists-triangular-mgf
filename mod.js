// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor,w=Math.ceil,A=b,_=w;var m=function(r){return r<0?_(r):A(r)},d=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,h=s,U=d;var N=function(r){return r===h||r===U};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return j&&"symbol"==typeof Symbol.toStringTag},I=Object.prototype.toString,O=I;var S=function(r){return O.call(r)},E=Object.prototype.hasOwnProperty;var F=function(r,n){return null!=r&&E.call(r,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",T=F,G=H,P=I;var L=S,M=function(r){var n,t,e;if(null==r)return P.call(r);t=r[G],n=T(r,G);try{r[G]=void 0}catch(n){return P.call(r)}return e=P.call(r),n?r[G]=t:delete r[G],e},V=g()?M:L,W=V,k="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===W(r)},q=x;var C=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,4294967296,4294967297]),r=Y(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=V,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),r=R(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var $="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=V,er="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null,or=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===tr(r)},ir=ur;var ar=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,256,257]),r=or(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},vr=ar()?fr:cr,lr=V,yr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,br=function(r){return yr&&r instanceof Uint16Array||"[object Uint16Array]"===lr(r)},wr=pr;var Ar=function(){var r,n;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),r=br(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var _r,mr="function"==typeof Uint16Array?Uint16Array:void 0,dr=function(){throw new Error("not implemented")},sr={uint16:Ar()?mr:dr,uint8:vr};(_r=new sr.uint16(1))[0]=4660;var hr,Ur,Nr=52===new sr.uint8(_r.buffer)[0];!0===Nr?(hr=1,Ur=0):(hr=0,Ur=1);var jr=D,gr={HIGH:hr,LOW:Ur},Ir=new nr(1),Or=new jr(Ir.buffer),Sr=gr.HIGH,Er=gr.LOW;var Fr=function(r,n){return Ir[0]=n,r[0]=Or[Sr],r[1]=Or[Er],r};var Hr=function(r,n){return 1===arguments.length?Fr([0,0],r):Fr(r,n)},Tr=D,Gr=!0===Nr?1:0,Pr=new nr(1),Lr=new Tr(Pr.buffer);var Mr,Vr,Wr=function(r){return Pr[0]=r,Lr[Gr]};!0===Nr?(Mr=1,Vr=0):(Mr=0,Vr=1);var kr=D,xr={HIGH:Mr,LOW:Vr},Yr=new nr(1),qr=new kr(Yr.buffer),Cr=xr.HIGH,zr=xr.LOW;var Br=function(r,n){return qr[Cr]=r,qr[zr]=n,Yr[0]},Dr=Hr,Jr=Wr,Kr=Br,Qr=[0,0];var Rr=function(r,n){var t,e;return Dr(Qr,r),t=Qr[0],t&=2147483647,e=Jr(n),Kr(t|=e&=2147483648,Qr[1])};var Xr=function(r){return Math.abs(r)},Zr=N,$r=p,rn=Xr;var nn=function(r,n){return $r(n)||Zr(n)?(r[0]=n,r[1]=0,r):0!==n&&rn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var tn=Wr;var en=function(r){var n=tn(r);return(n=(2146435072&n)>>>20)-1023|0},un=s,on=d,an=p,fn=N,cn=Rr,vn=function(r,n){return 1===arguments.length?nn([0,0],r):nn(r,n)},ln=en,yn=Hr,pn=Br,bn=[0,0],wn=[0,0];var An=function(r,n){var t,e;return 0===n||0===r||an(r)||fn(r)?r:(vn(bn,r),n+=bn[1],(n+=ln(r=bn[0]))<-1074?cn(0,r):n>1023?r<0?on:un:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yn(wn,r),t=wn[0],t&=2148532223,e*pn(t|=n+1023<<20,wn[1])))},_n=An;var mn=_n,dn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var sn=p,hn=m,Un=d,Nn=s,jn=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*dn(u),mn(1-(n-e*o/(2-o)-r),t)};var gn=function(r){var n;return sn(r)||r===Nn?r:r===Un?0:r>709.782712893384?Nn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=hn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),jn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},In=b;var On=function(r){return In(r)===r},Sn=On;var En=function(r){return Sn(r/2)};var Fn=function(r){return En(r>0?r-1:r+1)},Hn=Math.sqrt,Tn=D,Gn=!0===Nr?0:1,Pn=new nr(1),Ln=new Tn(Pn.buffer);var Mn=function(r,n){return Pn[0]=r,Ln[Gn]=n>>>0,Pn[0]},Vn=Mn;var Wn=function(r){return 0|r},kn=Fn,xn=Rr,Yn=d,qn=s;var Cn=function(r,n){return n===Yn?qn:n===qn?0:n>0?kn(n)?r:0:kn(n)?xn(qn,r):qn},zn=Wr;var Bn=function(r,n){return(2147483647&zn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},Dn=Xr,Jn=s;var Kn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Dn(r)<1==(n===Jn)?0:Jn},Qn=D,Rn=!0===Nr?1:0,Xn=new nr(1),Zn=new Qn(Xn.buffer);var $n=function(r,n){return Xn[0]=r,Zn[Rn]=n>>>0,Xn[0]};var rt=Wr,nt=Vn,tt=$n,et=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ut=[1,1.5],ot=[0,.5849624872207642],it=[0,1.350039202129749e-8];var at=Vn,ft=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ct=Wr,vt=$n,lt=Vn,yt=Wn,pt=_n,bt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var wt=p,At=Fn,_t=N,mt=On,dt=Hn,st=Xr,ht=Hr,Ut=Vn,Nt=Wn,jt=d,gt=s,It=Cn,Ot=Bn,St=Kn,Et=function(r,n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A,_,m,d,s,h,U;return s=0,t<1048576&&(s-=53,t=rt(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=tt(n,t))+(c=ut[U])))*((m=n-c)-(i=nt(u=m*d,0))*(f=tt(0,e+=U<<18))-i*(n-(f-c))),_=(o=u*u)*o*et(o),f=nt(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(l=nt(l=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(l-m))+it[U])-((b=nt(b=(y=.9617967009544373*l)+p+(v=ot[U])+(A=s),0))-A-v-y),r[0]=b,r[1]=w,r},Ft=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*ft(u)))-((e=at(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},Ht=function(r,n,t){var e,u,o,i,a,f,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=o=vt(0,e)),f=(a=.6931471805599453*(t-((o=lt(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*bt(o),r=ct(c=1-(c*u/(u-2)-(f+c*f)-c)),r=yt(r),c=(r+=v<<20>>>0)>>20<=0?pt(c,v):vt(c,r)},Tt=1e300,Gt=1e-300,Pt=[0,0],Lt=[0,0];var Mt=function r(n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A;if(wt(n)||wt(t))return NaN;if(ht(Pt,t),a=Pt[0],0===Pt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return dt(n);if(-.5===t)return 1/dt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(_t(t))return St(n,t)}if(ht(Pt,n),i=Pt[0],0===Pt[1]){if(0===i)return It(n,t);if(1===n)return 1;if(-1===n&&At(t))return-1;if(_t(n))return n===jt?r(-0,-t):t<0?0:gt}if(n<0&&!1===mt(t))return(n-n)/(n-n);if(o=st(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&At(t)?-1:1,u>1105199104){if(u>1139802112)return Ot(n,t);if(e<1072693247)return 1===c?f*Tt*Tt:f*Gt*Gt;if(e>1072693248)return 0===c?f*Tt*Tt:f*Gt*Gt;p=Ft(Lt,o)}else p=Et(Lt,o,e);if(y=(t-(v=Ut(t,0)))*p[0]+t*p[1],l=v*p[0],ht(Pt,b=y+l),w=Nt(Pt[0]),A=Nt(Pt[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*Tt*Tt;if(y+8008566259537294e-32>b-l)return f*Tt*Tt}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*Gt*Gt;if(y<=b-l)return f*Gt*Gt}return f*(b=Ht(w,l,y))},Vt=p,Wt=gn,kt=Mt;var xt=function(r){return function(){return r}},Yt=p,qt=gn,Ct=Mt;var zt=function(r,n,t,e){var u,o,i,a;return Vt(r)||Vt(n)||Vt(t)||Vt(e)||n>e||e>t?NaN:0===r?1:(o=t-n,i=e-n,a=(u=t-e)*Wt(n*r)-o*Wt(e*r),a+=i*Wt(t*r),a*=2,a/=o*i*u*kt(r,2))},Bt=function(r,n,t){var e,u,o;return Yt(r)||Yt(n)||Yt(t)||r>t||t>n?xt(NaN):(e=n-t,u=n-r,o=t-r,function(i){var a;if(Yt(i))return NaN;if(0===i)return 1;return a=e*qt(r*i)-u*qt(t*i),a+=o*qt(n*i),a*=2,a/=u*o*e*Ct(i,2)})};y(zt,"factory",Bt);var Dt=zt;export{Dt as default,Bt as factory};
//# sourceMappingURL=mod.js.map
