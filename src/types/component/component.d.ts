export interface ComponentV1 {
	id: string | number;
	name: string;
	type: COMPONENT_TYPE_ENUM;
	props: Record<string, unknown>;
	children?: (ComponentV1 | string)[] | ComponentV1;
}
