# call-class-without-new-decorator

    Call class constructor without new on TypeScript

this module make u without see this error

> TypeError: Class constructor A cannot be invoked without 'new'

## install

```bash
npm install call-class-without-new-decorator
```

## todo / help wanted

- better typescript support

## demo

```
A []
A [ 1, 2, 3 ]
A { name: 'A', argv: [] } [ 1, 2, 3 ]
A1 === A false
B []
B [ 1, 2, 3 ]
B { name: 'B', argv: [] } [ 1, 2, 3 ]
C []
C [ 1, 2, 3 ]
C { name: 'C', argv: [] } [ 1, 2, 3 ]
C1 === C true
```

```ts
import { callClassWithoutNewDecorator } from 'call-class-without-new-decorator';
import callClassWithoutNewDecorator from 'call-class-without-new-decorator';
import callClassWithoutNewDecorator = require('call-class-without-new-decorator');
const callClassWithoutNewDecorator = require('call-class-without-new-decorator');
```

```ts
import c, { callClassWithoutNewDecorator } from 'call-class-without-new-decorator';

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
```

## other

- [callable-instance2](https://www.npmjs.com/package/callable-instance2) - https://www.npmjs.com/package/callable-instance2
