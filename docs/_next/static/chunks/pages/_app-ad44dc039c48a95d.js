(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		2147: () => {},
		4626: (a, e, s) => {
			a.exports = s(5274);
		},
		6404: (a, e, s) => {
			'use strict';
			(s.r(e), s.d(e, { default: () => o }));
			var l = s(5640);
			s(2147);
			var t = s(7332),
				n = s.n(t),
				_ = s(8580),
				r = s.n(_),
				c = s(4626),
				i = s.n(c);
			let o = (a) => {
				let { Component: e, pageProps: s } = a;
				return (0, l.jsxs)(l.Fragment, {
					children: [
						(0, l.jsx)(i(), { children: (0, l.jsx)('title', { children: 'Strings' }) }),
						(0, l.jsx)('div', {
							className: ''.concat(n().className, ' ').concat(r().className),
							children: (0, l.jsx)(e, { ...s }),
						}),
					],
				});
			};
		},
		7332: (a) => {
			a.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_3999c6',
				variable: '__variable_3999c6',
			};
		},
		8462: (a, e, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return s(6404);
				},
			]);
		},
		8580: (a) => {
			a.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_217432',
				variable: '__variable_217432',
			};
		},
	},
	(a) => {
		var e = (e) => a((a.s = e));
		(a.O(0, [593, 792], () => (e(8462), e(8231))), (_N_E = a.O()));
	},
]);
