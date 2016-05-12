import { run } from '@cycle/core';
import { makeDOMDriver } from '@cycle/dom';
import { makeHistoryDriver } from '@cycle/history';
import { useQueries, createHistory } from 'history';
import Rx from 'rx';
import Main from './main'
import { rerunner, restartable } from 'cycle-restart';

import 'styles/pure-min.css';
import 'styles/layout.css';
import 'styles/grids-responsive-min.css';

const history = useQueries(createHistory)();
const drivers = {
  DOM: makeDOMDriver('#app'),
  History: makeHistoryDriver(history),
  Props: () => Rx.Observable.just(0)
};

const rerun = rerunner(run);
rerun(Main, drivers);

if (module && module.hot) {
  module.hot.accept('./main', () => {
    const main = require('./main').default;
    rerun(main, drivers);
  });
  module.hot.accept();
}
