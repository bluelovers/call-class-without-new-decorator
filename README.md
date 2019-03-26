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
A []
A []
A []
A []
instanceof [ true, true, true, true ]
B []
B [ 1, 2, 3 ]
B { name: 'B', argv: [] } [ 1, 2, 3 ]
B []
instanceof true
C []
C [ 1, 2, 3 ]
C { name: 'C', argv: [] } [ 1, 2, 3 ]
C []
C []
C []
C []
instanceof [ true, true, true, true ]
```

```ts
import { callClassWithoutNewDecorator } from 'call-class-without-new-decorator';
import callClassWithoutNewDecorator from 'call-class-without-new-decorator';
import callClassWithoutNewDecorator = require('call-class-without-new-decorator');
const callClassWithoutNewDecorator = require('call-class-without-new-decorator');
```

```ts
/**
 * Created by user on 2019/1/6/006.
 */

import c, { callClassWithoutNewDecorator as callClassWithoutNewDecorator2 } from 'call-class-without-new-decorator';
//import c, { callClassWithoutNewDecorator2 } from 'call-class-without-new-decorator';
import callClassWithoutNewDecorator from 'call-class-without-new-decorator';

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
```

## other

- [callable-instance2](https://www.npmjs.com/package/callable-instance2) - https://www.npmjs.com/package/callable-instance2
