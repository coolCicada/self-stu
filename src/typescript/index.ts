/**
 * 条件分发
 * 给定条件类型联合类型时，推断过程将变成分布式的。
 */
// type ToArray<Type> = Type extends any ? Type[] : never;
type ToArray<Type> = keyof Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;

/**
 * infer
 */
// 衍生出的 infer 类型变量可以在条件类型的 true 分支中引用
type ReturnType<T> = T extends (...args: never[]) => infer Return
	? Return
	: never;
type ReturnTypeRes = ReturnType<(arg: number[]) => string>;

// 同一个判断类型可以有多个推断位置
type ReverseFunction<T> = T extends (...args: infer Params) => infer Return
	? (a: Return) => Params
	: never;
type ReverseFunctionRes = ReverseFunction<(arg: number[]) => string>;
type ReverseFunctionRes2 = ReverseFunction<string>;

type Unpacked<T> = T extends (infer U)[]
	? U
	: T extends (...args: any[]) => infer U
	? U
	: T extends Promise<infer U>
	? U
	: T;

type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; // string
type T4 = Unpacked<Promise<string>[]>; // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string

export {};
