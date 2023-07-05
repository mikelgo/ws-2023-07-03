Ziel: 

1. Operator: onlyValid()
Custom Operator, der null und undefined values filtert:

const source$ = of(1,2, null, undefined, 3).pipe(
  onlyValid()
).subsribe(console.log)
//  --> 1, 2, 3

2. Operator isEven()
const source$ = of(1,2, 3, 4).pipe(
//onlyValid(),
isEven()
).subsribe(console.log)
// --> 2, 4
Tipp:
function isEven(n) {
   return n % 2 == 0;
   }

Möglichkeiten, um Operator zu schreiben:
MonoTypeOperatorFunction muss implementiert werden:
- entweder vorhandene RxJs Operatoren kombinieren 
- oder über new Observable()

interface MonoTypeOperatorFunction<T> extends OperatorFunction<T, T> {
// source ist ein Observable
(source: T): R
}
