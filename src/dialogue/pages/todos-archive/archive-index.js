import view from './archive-view';

export default (sources) => {
  const props$ = sources.Props;
  // const actions = intent(sources);
  // const state$ = model(actions, props$);

  return {
    DOM: view(props$),
    Props: props$
  };
}
