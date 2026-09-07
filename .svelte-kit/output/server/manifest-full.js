export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BbeSuJBf.js",app:"_app/immutable/entry/app.9qnCMrkM.js",imports:["_app/immutable/entry/start.BbeSuJBf.js","_app/immutable/chunks/BnUNuAoI.js","_app/immutable/chunks/oPhACd5r.js","_app/immutable/chunks/rT77PjNg.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/entry/app.9qnCMrkM.js","_app/immutable/chunks/BnUNuAoI.js","_app/immutable/chunks/DJDQ8-C8.js","_app/immutable/chunks/Hp--vKbm.js","_app/immutable/chunks/rT77PjNg.js","_app/immutable/chunks/fAyqCvjl.js","_app/immutable/chunks/BzzW2Nnb.js","_app/immutable/chunks/B0zqnGNS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/runes",
				pattern: /^\/runes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sveltekit",
				pattern: /^\/sveltekit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/telemetry",
				pattern: /^\/telemetry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
