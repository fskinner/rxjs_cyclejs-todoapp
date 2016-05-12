import Rx from 'rx';
import view from './home-view';
import intent from './home-intent';
import model from './home-model';

const Home = (sources) => {
  // const props$ = sources.Props;
  const actions = intent(sources);
  const state$ = model({...actions,props$});

  return {
    DOM: view(state$),
    // Props: state$,
  }
};

export default Home
