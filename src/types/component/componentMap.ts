export enum COMPONENT_TYPE_ENUM {
	BUTTON = "button",
	TEXT = "text",
	SPACE = "space",
	SELF = "self"
}

export const COMPONENTS_SET: Set<COMPONENT_TYPE_ENUM> = new Set([
	...Object.values(COMPONENT_TYPE_ENUM),
]);
