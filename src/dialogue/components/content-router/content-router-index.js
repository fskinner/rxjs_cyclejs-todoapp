import switchPath from 'switch-path';
import Rx from 'rx';
import isolate from '@cycle/isolate';
import Page404 from 'pages/page404/page404-index';
import Todos from 'pages/todos/todos-index';
import TodosArchive from 'pages/todos-archive/archive-index';

function ContentRouter(sources) {
  const sinks$ = sources.History.map(({pathname}) => {

    const pathAndValue = switchPath(pathname, {
      '/': Todos,
      '/todos': Todos,
      '/todos/archive': TodosArchive,
      '*': Page404,
    });

    const component = pathAndValue.value;

    const Component$ = component(sources);

    const Props$ = Component$.Props ? sources.Props = Component$.Props : sources.Props;

    return {
      Comp: Component$,
      Props: Props$.share()
    };
  }).shareReplay(1);
  
  return {
    DOM: sinks$.flatMapLatest(s => s.Comp.DOM),
    History: sinks$.flatMapLatest(s => s.Comp.link),
    Props: sinks$.flatMapLatest(s => s.Props),
  };
}

export default ContentRouter;
