function logClass(target: unknown) {
    console.log("Class:", target);
}

function logMethod(target: unknown, key: string, descriptor: PropertyDescriptor) {
    console.log("Method:", target, key, descriptor);
}

function logProperty(target: unknown, key: string) {
    console.log("Property:", target, key);
}

function logParameter(target: unknown, key: string, index: number) {
    console.log("Parameter:", target, key, index);
}


@logClass
class MyClass {
    @logProperty
    myProperty!: string;

    @logMethod
    myMethod(@logParameter arg1: string, @logParameter arg2: number) {
        // 方法的定义
    }
}

new MyClass();