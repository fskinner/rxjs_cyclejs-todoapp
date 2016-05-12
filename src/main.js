import Rx from 'rx';
import navbar from './dialogue/components/navbar/navbar-index';
import contentRouter from './dialogue/components/content-router/content-router-index';
import { div } from '@cycle/dom';

const view = (content) => {
  return div('#layout .pure-g', [
    div('.content .pure-u-1 .pure-u-md-3-4', [content])
  ])
};

function main(sources) {

  const Content = contentRouter(sources);
  const Nav = navbar(sources);
  const Props = Content.Props;
  const Http = Content.HTTP || {};

  const view$ = Rx.Observable.just(
    view(
      Content.DOM
    )
  );

  return {
    DOM: view$,
    HTTP: Http,
    History: Nav.url$,
    Props: Props,
  }
};

export default main
