<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Triangular][triangular-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 2\frac{(b\!-\!c)e^{at}\!-\!(b\!-\!a)e^{ct}\!+\!(c\!-\!a)e^{bt}} {(b-a)(c-a)(b-c)t^2}" alt="Moment-generating function (MGF) for a triangular distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 2\frac{(b\!-\!c)e^{at}\!-\!(b\!-\!a)e^{ct}\!+\!(c\!-\!a)e^{bt}} {(b-a)(c-a)(b-c)t^2}" data-equation="eq:triangular_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/mgf/docs/img/equation_triangular_mgf_function.svg" alt="Moment-generating function (MGF) for a triangular distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit, and `c` is the mode of the distribution. The parameters must satisfy `b > a` and `a <= b <= c`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-triangular-mgf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-triangular-mgf' );
```

#### mgf( t, a, b, c )

Evaluates the [moment-generating function][mgf] (MGF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```javascript
var y = mgf( 0.5, -1.0, 1.0, 0.0 );
// returns ~1.021

y = mgf( 0.5, -1.0, 1.0, 0.5 );
// returns ~1.111

y = mgf( -0.3, -20.0, 0.0, -2.0 );
// returns ~24.334

y = mgf( -2.0, -1.0, 1.0, 0.0 );
// returns ~1.381
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 1.0, 0.5 );
// returns NaN

y = mgf( 0.0, 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 2.0, 1.0, 0.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 1.0, 0.0, 1.5 );
// returns NaN

y = mgf( 2.0, 1.0, 0.0, -1.0 );
// returns NaN

y = mgf( 2.0, 0.0, -1.0, 0.5 );
// returns NaN
```

#### mgf.factory( a, b, c )

Returns a function for evaluating the [moment-generating function][mgf] of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```javascript
var mymgf = mgf.factory( 0.0, 2.0, 1.0 );

var y = mymgf( -1.0 );
// returns ~0.3996

y = mymgf( 2.0 );
// returns ~10.205
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var mgf = require( '@stdlib/stats-base-dists-triangular-mgf' );

var a;
var b;
var c;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 5.0;
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + (( b - a ) * randu());
    v = mgf( t, a, b, c );
    console.log( 't: %d, a: %d, b: %d, c: %d, M_X(t;a,b,c): %d', t.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular-mgf/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular-mgf/main/LICENSE

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
