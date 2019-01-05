/**
 * Created by user on 2019/1/6/006.
 */

const _cache = new WeakSet();

function callClassWithoutNewDecorator<C extends { new(...args: A): T }, A extends any[], T>(
	Class: C & { new(...args: A): T },
): C & ((...args: A) => T)
{
	if (_cache.has(Class))
	{
		// @ts-ignore
		return Class;
	}

	const _Class = function _Class(...rest)
	{
		return new (Function.prototype.bind.apply(Class, [null].concat(rest)))();
	};
	_Class.prototype = Class.prototype;

	_cache.add(_Class);

	// @ts-ignore
	return _Class;
}

callClassWithoutNewDecorator.callClassWithoutNewDecorator = callClassWithoutNewDecorator;

callClassWithoutNewDecorator.default = callClassWithoutNewDecorator;

/**
 * @todo better typescript support
 */
function _CallClassWithoutNewDecorator<C extends { new(...args: A): T }, A extends any[], T>(
	Class: C & { new(...args: A): T },
): C & ((...args: A) => T)
{
	return null;
}

declare namespace _CallClassWithoutNewDecorator {
	export function callClassWithoutNewDecorator<C extends { new(...args: A): T }, A extends any[], T>(
		Class: C & { new(...args: A): T },
	): C & ((...args: A) => T)

	// @ts-ignore
	export { callClassWithoutNewDecorator as default }
}

// @ts-ignore
_CallClassWithoutNewDecorator = callClassWithoutNewDecorator

export = _CallClassWithoutNewDecorator
