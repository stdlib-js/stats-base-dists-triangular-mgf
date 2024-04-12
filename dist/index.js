"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=p(function(k,N){
var o=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),w=require('@stdlib/math-base-special-pow/dist');function d(e,r,a,u){var n,t,v,i;return o(e)||o(r)||o(a)||o(u)||r>u||u>a?NaN:e===0?1:(n=a-u,t=a-r,v=u-r,i=n*q(r*e)-t*q(u*e),i+=v*q(a*e),i*=2,i/=t*v*n*w(e,2),i)}N.exports=d
});var y=p(function(z,x){
var l=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-exp/dist'),F=require('@stdlib/math-base-special-pow/dist');function O(e,r,a){var u,n,t;if(s(e)||s(r)||s(a)||e>a||a>r)return l(NaN);return u=r-a,n=r-e,t=a-e,v;function v(i){var f;return s(i)?NaN:i===0?1:(f=u*m(e*i)-n*m(a*i),f+=t*m(r*i),f*=2,f/=n*t*u*F(i,2),f)}}x.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),h=y();R(g,"factory",h);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
