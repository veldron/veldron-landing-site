export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/data/credits.json","assets/images/Journey-amico.svg","assets/images/digital_products.gif","assets/images/digital_products.svg","assets/images/facility_spot.svg","assets/images/food_steps.png","assets/images/logo_transparent.png","assets/images/team_collaboration.svg","assets/images/wezoo_logo.svg","dream_castle.jpg","favicon.ico"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml",".gif":"image/gif",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DRal87od.js",app:"_app/immutable/entry/app.DHLv4gI2.js",imports:["_app/immutable/entry/start.DRal87od.js","_app/immutable/chunks/DOaUOAZz.js","_app/immutable/chunks/57sTgZHh.js","_app/immutable/chunks/b0BHz6G6.js","_app/immutable/entry/app.DHLv4gI2.js","_app/immutable/chunks/57sTgZHh.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
