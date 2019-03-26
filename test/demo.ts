/**
 * Created by user on 2019/1/6/006.
 */

import c, { callClassWithoutNewDecorator as callClassWithoutNewDecorator2 } from '..';
//import c, { callClassWithoutNewDecorator2 } from '..';
import callClassWithoutNewDecorator from '..';

export class A
{
	name = 'A';
	argv;

	constructor(...argv)
	{
		console.log(this.name, this.argv = argv);
	}

	test()
	{
		return this.argv;
	}

}

@callClassWithoutNewDecorator
export class B
{
	name = 'B';
	argv;

	constructor(...argv)
	{
		console.log(this.name, this.argv = argv);
	}

	test()
	{
		return this.argv;
	}
}

@callClassWithoutNewDecorator
export class C
{
	name = 'C';
	argv;

	constructor(...argv)
	{
		console.log(this.name, this.argv = argv);
	}

	test()
	{
		return this.argv;
	}
}

export const A1 = callClassWithoutNewDecorator(A);
export const A2 = callClassWithoutNewDecorator2(A);

//export default callClassWithoutNewDecorator2

console.log(A1(), A1(1, 2, 3).test());

console.assert(A1 !== A, 'A1 === A, should return false');

console.log('instanceof', [A1() instanceof A, A1() instanceof A1, new A1 instanceof A, new A1 instanceof A1]);
// => // => instanceof [ true, true, true, true ]

/**
 * this is work on runtime, but fail type in typescript
 */
// @ts-ignore
console.log(B(), B(1, 2, 3).test());

// @ts-ignore
console.log('instanceof', B() instanceof B);
// => instanceof true

/**
 * if C already warped
 * will not warped again, and return C
 */
export const C1 = callClassWithoutNewDecorator(C);
export const C2 = callClassWithoutNewDecorator2(C);

console.log(C1(), C1(1, 2, 3).test());

console.assert(C1 === C, 'C1 === C, should return true');

console.log('instanceof', [C1() instanceof C, C1() instanceof C1, new C1 instanceof C, new C1 instanceof C1]);
// => instanceof [ true, true, true, true ]

export default callClassWithoutNewDecorator(C)
