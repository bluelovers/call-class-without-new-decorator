/**
 * Created by user on 2019/1/6/006.
 */

import c, { callClassWithoutNewDecorator } from '..';

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

console.log(A1(), A1(1, 2, 3).test());

console.log('A1 === A', A1 === A);

/**
 * this is work on runtime, but fail type in typescript
 */
// @ts-ignore
console.log(B(), B(1, 2, 3).test());

/**
 * if C already warped
 * will not warped again, and return C
 */
export const C1 = callClassWithoutNewDecorator(C);

console.log(C1(), C1(1, 2, 3).test());

console.log('C1 === C', C1 === C);

export default callClassWithoutNewDecorator(C)
