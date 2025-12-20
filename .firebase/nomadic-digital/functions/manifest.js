export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["content/abstract-dark.jpg","content/abstract-gradient.png","content/communication.png","content/dev-gradient-2.jpg","content/dev-gradient-3.jpg","content/dev-gradient.jpg","content/dev-working.png","content/grain-dark.jpg","content/nomad-horse.jpg","content/portrait-left-bar-grey.png","content/portrait-left-bar.png","content/services/abstract-architecture.jpg","content/services/app-development.jpg","content/services/close-up-laptop.jpg","content/services/coding.png","content/services/design.jpg","content/services/dev-gradient-3.jpg","content/services/fluxum-mobile-pricing.png","content/services/fluxum-mobile.png","content/services/fluxum.png","content/services/mockup-open-laptop.jpg","content/services/monitors.jpg","content/services/product-design.jpg","content/services/saas-code-2.jpg","content/services/saas-code.jpg","content/services/web-dashboard.jpg","content/services/web-view.jpg","content/team/mihai-portrait.jpg","content/team/stefan-dulca-portrait.png","content/team/stefan-portrait.jpg","content/team/stefan.jpg","content/team/teodora-portrait.jpeg","content/team-working.jpg","content/teodora-3.jpeg","content/teodora.jpeg","content/wheel.png","logos/clients/adedari.png","logos/clients/conte-white.png","logos/clients/conte.png","logos/clients/filicori.png","logos/clients/kron-imobiliare.png","logos/clients/kronburg-white.png","logos/clients/kronburg.png","logos/clients/natscent-logo-white.png","logos/clients/natscent.png","logos/clients/qbs.png","logos/clients/softone.png","logos/landscape-minimal-logo-white.png","logos/landscape-minimal-logo.png","portfolio/conte/cover-3.png","portfolio/conte/cover-4.png","portfolio/conte/logo-brand-conte-2.jpeg","portfolio/conte/logo-brand-conte-3.jpg","portfolio/conte/logo-brand-conte-4.jpg","portfolio/conte/logo-brand-conte.jpeg","portfolio/conte/videos/video-1.mp4","portfolio/conte/videos/video-2.mp4","portfolio/conte/videos/video-3.mp4","portfolio/fluxum/fight-style.jpg","portfolio/fluxum/fluxum-product.png","portfolio/fluxum/fluxum.png","portfolio/kronburg/content-2.png","portfolio/kronburg/content.png","portfolio/kronburg/cover-2.png","portfolio/kronburg/cover.png","portfolio/kronburg/videos/video-1.mp4","portfolio/kronburg/videos/video-2.mp4","portfolio/locallia/abstract-skeleton.jpg","portfolio/locallia/dashboard-2.png","portfolio/locallia/dashboard.png","portfolio/locallia/locallia-logo-white.png","portfolio/locallia/locallia-logo.png","portfolio/locallia/mockup-dashboard-cover-2.jpg","portfolio/locallia/mockup-dashboard-cover-3.jpg","portfolio/locallia/mockup-dashboard-cover.jpg","portfolio/locallia/mockup-dashboard.png","portfolio/locallia/videos/video-1.mp4","portfolio/locallia/videos/video-2.mp4","portfolio/natscent/content-1.png","portfolio/natscent/content-2.png","portfolio/natscent/content-3.png","portfolio/natscent/content-4.jpg","portfolio/natscent/cover-2.jpg","portfolio/natscent/cover.png","portfolio/natscent/videos/video-1.mp4","portfolio/natscent/videos/video-2.mp4","portfolio/viorica/content-1.png","portfolio/viorica/content-2.png","portfolio/viorica/content-3.png","portfolio/viorica/cover.jpg","portfolio/viorica/logo.png","portfolio/viorica/videos/video-1.mp4","portfolio/viorica/videos/video-2.mp4","robots.txt","videos/hero-video.mov"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".mp4":"video/mp4",".txt":"text/plain",".mov":"video/quicktime"},
	_: {
		client: {start:"_app/immutable/entry/start.eLPZsMxW.js",app:"_app/immutable/entry/app.CIW5_oNe.js",imports:["_app/immutable/entry/start.eLPZsMxW.js","_app/immutable/chunks/CZybaMnJ.js","_app/immutable/chunks/DJex4Egb.js","_app/immutable/chunks/Dp31bc8l.js","_app/immutable/entry/app.CIW5_oNe.js","_app/immutable/chunks/DJex4Egb.js","_app/immutable/chunks/BO31yyOu.js","_app/immutable/chunks/Dp31bc8l.js","_app/immutable/chunks/D_k2vD4p.js","_app/immutable/chunks/CIohvUPJ.js","_app/immutable/chunks/DmzyNAxf.js","_app/immutable/chunks/4mRZs3QK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/email",
				pattern: /^\/api\/email\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/email/_server.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/legals/privacy-policy",
				pattern: /^\/legals\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/legals/terms-and-conditions",
				pattern: /^\/legals\/terms-and-conditions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/portfolio","/portfolio/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
