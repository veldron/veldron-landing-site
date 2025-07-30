type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined
};

export type RouteId = "/";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/assets/data/credits.json" | "/assets/images/Journey-amico.svg" | "/assets/images/digital_products.gif" | "/assets/images/digital_products.svg" | "/assets/images/facility_spot.svg" | "/assets/images/food_steps.png" | "/assets/images/logo_transparent.png" | "/assets/images/team_collaboration.svg" | "/assets/images/wezoo_logo.svg" | "/dream_castle.jpg" | "/favicon.ico";