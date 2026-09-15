"use strict";var a=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(r){throw (i=0, r)}};};var p=a(function(z,N){
var d=require('@stdlib/math-base-special-expm1/dist');function l(e){return e===0?1:2*(d(e)-e)/(e*e)}N.exports=l
});var y=a(function(A,m){
var t=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-exp/dist'),s=p();function F(e,i,r,u){return t(e)||t(i)||t(r)||t(u)||i>u||u>r?NaN:i<u?u<r?f(u*e)*((u-i)*s((i-u)*e)+(r-u)*s((r-u)*e))/(r-i):f(u*e)*s((i-u)*e):u<r?f(u*e)*s((r-u)*e):f(u*e)}m.exports=F
});var x=a(function(B,h){
var O=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),v=p();function R(e,i,r){if(o(e)||o(i)||o(r)||e>r||r>i)return O(NaN);return u;function u(n){return o(n)?NaN:e<r?r<i?q(r*n)*((r-e)*v((e-r)*n)+(i-r)*v((i-r)*n))/(i-e):q(r*n)*v((e-r)*n):r<i?q(r*n)*v((i-r)*n):q(r*n)}}h.exports=R
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),k=x();j(g,"factory",k);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
