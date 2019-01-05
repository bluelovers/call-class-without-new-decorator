/**
 * Created by user on 2019/1/6/006.
 */
/**
 * @todo better typescript support
 */
declare function _CallClassWithoutNewDecorator<C extends {
    new (...args: A): T;
}, A extends any[], T>(Class: C & {
    new (...args: A): T;
}): C & ((...args: A) => T);
declare namespace _CallClassWithoutNewDecorator {
    export function callClassWithoutNewDecorator<C extends {
        new (...args: A): T;
    }, A extends any[], T>(Class: C & {
        new (...args: A): T;
    }): C & ((...args: A) => T);
    export { callClassWithoutNewDecorator as default };
}
export = _CallClassWithoutNewDecorator;
