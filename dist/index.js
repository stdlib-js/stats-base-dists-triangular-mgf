"use strict";var a=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var p=a(function(z,N){
var d=require('@stdlib/math-base-special-expm1/dist');function l(r){return r===0?1:2*(d(r)-r)/(r*r)}N.exports=l
});var y=a(function(A,m){
var t=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-exp/dist'),s=p();function F(r,i,e,u){return t(r)||t(i)||t(e)||t(u)||i>u||u>e?NaN:i<u?u<e?f(u*r)*((u-i)*s((i-u)*r)+(e-u)*s((e-u)*r))/(e-i):f(u*r)*s((i-u)*r):u<e?f(u*r)*s((e-u)*r):f(u*r)}m.exports=F
});var x=a(function(B,h){
var O=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),v=p();function R(r,i,e){if(o(r)||o(i)||o(e)||r>e||e>i)return O(NaN);return u;function u(n){return o(n)?NaN:r<e?e<i?q(e*n)*((e-r)*v((r-e)*n)+(i-e)*v((i-e)*n))/(i-r):q(e*n)*v((r-e)*n):e<i?q(e*n)*v((i-e)*n):q(e*n)}}h.exports=R
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),k=x();j(g,"factory",k);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
