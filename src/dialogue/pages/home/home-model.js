import { Observable } from 'rx';

const homeModel = ({inc$, dec$, props$}) => {
  return Observable.merge(
    // props$.take(1).map((counter) => parseFloat(counter)),
    inc$,
    dec$
  )
  .scan((x, y) =>  x + y)
  .shareReplay(1);
}

export default homeModel;
