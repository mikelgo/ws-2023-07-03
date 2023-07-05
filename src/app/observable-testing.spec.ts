import {of} from "rxjs";
import {delay, map} from "rxjs/operators";
import {fakeAsync, tick, waitForAsync} from "@angular/core/testing";
import {subscribeSpyTo} from "@hirez_io/observer-spy";

const source$ = of(1, 2).pipe(
  map(v => v * 10),
  //delay(10)
)



fdescribe('Observable Testing', () => {
  it('should return the correct values',  (done) => {
    source$.subscribe(result => {
      expect(result).toEqual(20)
      done()
    })

  });

  it('should return the correct values',  fakeAsync(() => {
    let result = []
    source$.subscribe(v => {
      result.push(v)
    })

    tick(100)
    expect(result).toEqual([10, 20])

  }));

  it('should return the correct values',  waitForAsync(() => {
    let result = []
    source$.subscribe(v => {
      result.push(v)
    })
    expect(result).toEqual([10, 20])

  }));

  it('should return the correct values',  () => {
    const result = subscribeSpyTo(source$);
    expect(result.getValues).toEqual([10, 20])

  });

})
