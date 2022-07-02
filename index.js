// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=o,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=function(n){return n!=n},w=Math.floor,d=Math.ceil,A=w,s=d,_=function(n){return n<0?s(n):A(n)},m=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,U=h,g=m,j=function(n){return n===U||n===g},N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),I=Object.prototype.toString,O=I,S=function(n){return O.call(n)},E=Object.prototype.hasOwnProperty,F=function(n,r){return null!=n&&E.call(n,r)},T="function"==typeof Symbol?Symbol.toStringTag:"",H=F,G=T,P=I,L=S,M=function(n){var r,t,e;if(null==n)return P.call(n);t=n[G],r=H(n,G);try{n[G]=void 0}catch(r){return P.call(n)}return e=P.call(n),r?n[G]=t:delete n[G],e},V=N&&"symbol"==typeof Symbol.toStringTag?M:L,W=V,x="function"==typeof Uint32Array,k="function"==typeof Uint32Array?Uint32Array:null,Y=function(n){return x&&n instanceof Uint32Array||"[object Uint32Array]"===W(n)},q=k,C=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,4294967296,4294967297]),n=Y(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=V,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,R=function(n){return K&&n instanceof Float64Array||"[object Float64Array]"===J(n)},X=Q,Z=function(){var n,r;if("function"!=typeof X)return!1;try{r=new X([1,3.14,-3.14,NaN]),n=R(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},$="function"==typeof Float64Array?Float64Array:void 0,nn=function(){throw new Error("not implemented")},rn=Z()?$:nn,tn=V,en="function"==typeof Uint8Array,on="function"==typeof Uint8Array?Uint8Array:null,un=function(n){return en&&n instanceof Uint8Array||"[object Uint8Array]"===tn(n)},fn=on,cn=function(){var n,r;if("function"!=typeof fn)return!1;try{r=new fn(r=[1,3.14,-3.14,256,257]),n=un(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},an="function"==typeof Uint8Array?Uint8Array:void 0,ln=function(){throw new Error("not implemented")},yn=cn()?an:ln,pn=V,bn="function"==typeof Uint16Array,vn="function"==typeof Uint16Array?Uint16Array:null,wn=function(n){return bn&&n instanceof Uint16Array||"[object Uint16Array]"===pn(n)},dn=vn,An=function(){var n,r;if("function"!=typeof dn)return!1;try{r=new dn(r=[1,3.14,-3.14,65536,65537]),n=wn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},sn="function"==typeof Uint16Array?Uint16Array:void 0,_n=function(){throw new Error("not implemented")},mn={uint16:An()?sn:_n,uint8:yn};(n=new mn.uint16(1))[0]=4660;var hn,Un,gn=52===new mn.uint8(n.buffer)[0];!0===gn?(hn=1,Un=0):(hn=0,Un=1);var jn,Nn,In=D,On={HIGH:hn,LOW:Un},Sn=new rn(1),En=new In(Sn.buffer),Fn=On.HIGH,Tn=On.LOW,Hn=function(n,r){return Sn[0]=r,n[0]=En[Fn],n[1]=En[Tn],n},Gn=function(n,r){return 1===arguments.length?Hn([0,0],n):Hn(n,r)},Pn=Gn,Ln=D,Mn=!0===gn?1:0,Vn=new rn(1),Wn=new Ln(Vn.buffer),xn=function(n){return Vn[0]=n,Wn[Mn]};!0===gn?(jn=1,Nn=0):(jn=0,Nn=1);var kn=D,Yn={HIGH:jn,LOW:Nn},qn=new rn(1),Cn=new kn(qn.buffer),zn=Yn.HIGH,Bn=Yn.LOW,Dn=function(n,r){return Cn[zn]=n,Cn[Bn]=r,qn[0]},Jn=Pn,Kn=xn,Qn=Dn,Rn=[0,0],Xn=function(n,r){var t,e;return Jn(Rn,n),t=Rn[0],t&=2147483647,e=Kn(r),Qn(t|=e&=2147483648,Rn[1])},Zn=function(n){return Math.abs(n)},$n=j,nr=v,rr=Zn,tr=function(n,r){return nr(r)||$n(r)?(n[0]=r,n[1]=0,n):0!==r&&rr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},er=function(n,r){return 1===arguments.length?tr([0,0],n):tr(n,r)},or=xn,ur=function(n){var r=or(n);return(r=(2146435072&r)>>>20)-1023|0},ir=h,fr=m,cr=v,ar=j,lr=Xn,yr=er,pr=ur,br=Pn,vr=Dn,wr=[0,0],dr=[0,0],Ar=function(n,r){var t,e;return 0===r||0===n||cr(n)||ar(n)?n:(yr(wr,n),r+=wr[1],(r+=pr(n=wr[0]))<-1074?lr(0,n):r>1023?n<0?fr:ir:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,br(dr,n),t=dr[0],t&=2148532223,e*vr(t|=r+1023<<20,dr[1])))},sr=Ar,_r=sr,mr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},hr=v,Ur=_,gr=m,jr=h,Nr=function(n,r,t){var e,o,u;return u=(e=n-r)-(o=e*e)*mr(o),_r(1-(r-e*u/(2-u)-n),t)},Ir=1.4426950408889634,Or=1/(1<<28),Sr=function(n){var r;return hr(n)||n===jr?n:n===gr?0:n>709.782712893384?jr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Or?1+n:(r=Ur(n<0?Ir*n-.5:Ir*n+.5),Nr(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},Er=w,Fr=function(n){return Er(n)===n},Tr=Fr,Hr=function(n){return Tr(n/2)},Gr=function(n){return Hr(n>0?n-1:n+1)},Pr=Math.sqrt,Lr=D,Mr=!0===gn?0:1,Vr=new rn(1),Wr=new Lr(Vr.buffer),xr=function(n,r){return Vr[0]=n,Wr[Mr]=r>>>0,Vr[0]},kr=xr,Yr=function(n){return 0|n},qr=Gr,Cr=Xn,zr=m,Br=h,Dr=function(n,r){return r===zr?Br:r===Br?0:r>0?qr(r)?n:0:qr(r)?Cr(Br,n):Br},Jr=xn,Kr=function(n,r){return(2147483647&Jr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},Qr=Zn,Rr=h,Xr=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Qr(n)<1==(r===Rr)?0:Rr},Zr=D,$r=!0===gn?1:0,nt=new rn(1),rt=new Zr(nt.buffer),tt=function(n,r){return nt[0]=n,rt[$r]=r>>>0,nt[0]},et=xn,ot=kr,ut=tt,it=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},ft=1048576,ct=[1,1.5],at=[0,.5849624872207642],lt=[0,1.350039202129749e-8],yt=kr,pt=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},bt=xn,vt=tt,wt=kr,dt=Yr,At=sr,st=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},_t=2147483647,mt=1048575,ht=1048576,Ut=v,gt=Gr,jt=j,Nt=Fr,It=Pr,Ot=Zn,St=Pn,Et=kr,Ft=Yr,Tt=m,Ht=h,Gt=Dr,Pt=Kr,Lt=Xr,Mt=function(n,r,t){var e,o,u,i,f,c,a,l,y,p,b,v,w,d,A,s,_,m,h,U;return m=0,t<ft&&(m-=53,t=et(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=ft),e=524288+(t>>1|536870912),f=(_=1/((r=ut(r,t))+(a=ct[U])))*((s=r-a)-(i=ot(o=s*_,0))*(c=ut(0,e+=U<<18))-i*(r-(c-a))),A=(u=o*o)*u*it(u),c=ot(c=3+(u=i*i)+(A+=f*(i+o)),0),w=(b=-7.028461650952758e-9*(y=ot(y=(s=i*c)+(_=f*c+(A-(c-3-u))*o),0))+.9617966939259756*(_-(y-s))+lt[U])-((v=ot(v=(p=.9617967009544373*y)+b+(l=at[U])+(d=m),0))-d-l-p),n[0]=v,n[1]=w,n},Vt=function(n,r){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=r-1)-o*o*pt(o)*1.4426950408889634)-((e=yt(e=(u=1.4426950216293335*o)+i,0))-u),n[0]=e,n[1]=t,n},Wt=function(n,r,t){var e,o,u,i,f,c,a,l,y;return y=((l=n&_t|0)>>20)-1023|0,a=0,l>1071644672&&(o=vt(0,((a=n+(ht>>y+1)>>>0)&~(mt>>(y=((a&_t)>>20)-1023|0)))>>>0),a=(a&mt|ht)>>20-y>>>0,n<0&&(a=-a),r-=o),f=(i=.6931471805599453*(t-((o=wt(o=t+r,0))-r))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*st(o),n=bt(c=1-(c*e/(e-2)-(f+c*f)-c)),n=dt(n),c=(n+=a<<20>>>0)>>20<=0?At(c,a):vt(c,n)},xt=2147483647,kt=1083179008,Yt=1e300,qt=1e-300,Ct=[0,0],zt=[0,0],Bt=function n(r,t){var e,o,u,i,f,c,a,l,y,p,b,v,w,d;if(Ut(r)||Ut(t))return NaN;if(St(Ct,t),f=Ct[0],0===Ct[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return It(r);if(-.5===t)return 1/It(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(jt(t))return Lt(r,t)}if(St(Ct,r),i=Ct[0],0===Ct[1]){if(0===i)return Gt(r,t);if(1===r)return 1;if(-1===r&&gt(t))return-1;if(jt(r))return r===Tt?n(-0,-t):t<0?0:Ht}if(r<0&&!1===Nt(t))return(r-r)/(r-r);if(u=Ot(r),e=i&xt|0,o=f&xt|0,a=f>>>31|0,c=(c=i>>>31|0)&&gt(t)?-1:1,o>1105199104){if(o>1139802112)return Pt(r,t);if(e<1072693247)return 1===a?c*Yt*Yt:c*qt*qt;if(e>1072693248)return 0===a?c*Yt*Yt:c*qt*qt;b=Vt(zt,u)}else b=Mt(zt,u,e);if(p=(t-(l=Et(t,0)))*b[0]+t*b[1],y=l*b[0],St(Ct,v=p+y),w=Ft(Ct[0]),d=Ft(Ct[1]),w>=kt){if(0!=(w-kt|d))return c*Yt*Yt;if(p+8008566259537294e-32>v-y)return c*Yt*Yt}else if((w&xt)>=1083231232){if(0!=(w-3230714880|d))return c*qt*qt;if(p<=v-y)return c*qt*qt}return c*(v=Wt(w,y,p))},Dt=Bt;function Jt(n,r,t,e){var o,u,i,f;return v(n)||v(r)||v(t)||v(e)||r>e||e>t?NaN:0===n?1:(u=t-r,i=e-r,f=(o=t-e)*Sr(r*n)-u*Sr(e*n),f+=i*Sr(t*n),f*=2,f/=u*i*o*Dt(n,2))}var Kt=function(n){return function(){return n}};return b(Jt,"factory",(function(n,r,t){var e,o,u;return v(n)||v(r)||v(t)||n>t||t>r?Kt(NaN):(e=r-t,o=r-n,u=t-n,function(i){var f;return v(i)?NaN:0===i?1:(f=e*Sr(n*i)-o*Sr(t*i),f+=u*Sr(r*i),f*=2,f/=o*u*e*Dt(i,2))})})),Jt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).mgf=r();
//# sourceMappingURL=index.js.map
