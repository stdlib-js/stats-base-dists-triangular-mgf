/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var mediumRange = require( './fixtures/julia/medium_range.json' );
var largeRange = require( './fixtures/julia/large_range.json' );


// VARIABLES //

var mgf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mgf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = mgf( NaN, 0.0, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, NaN, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, 1.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided parameters not satisfying `a <= c <= b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mgf( 2.0, -1.0, -1.1, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 3.0, 2.0, 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 0.0, 1.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 0.0, 1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the MGF for `x` given a small range `b - a`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = smallRange.expected;
	x = smallRange.x;
	a = smallRange.a;
	b = smallRange.b;
	c = smallRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );

			// FIXME: the tolerance for the C implementation is widely different from the JavaScript implementation, and it is not clear why.
			tol = 1.0e7 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given a medium range `b - a`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = mediumRange.expected;
	x = mediumRange.x;
	a = mediumRange.a;
	b = mediumRange.b;
	c = mediumRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );

			// FIXME: the tolerance for the C implementation is widely different from the JavaScript implementation, and it is not clear why.
			tol = 1.0e7 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given a large range `b - a`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = largeRange.expected;
	x = largeRange.x;
	a = largeRange.a;
	b = largeRange.b;
	c = largeRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );

			// FIXME: the tolerance for the C implementation is widely different from the JavaScript implementation, and it is not clear why.
			tol = 1.0e7 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
