import latestObj from 'rx-combine-latest-obj';

const model = ({actions}) => {
  return latestObj({
    url: actions.click$
      .map(evt => {
        evt.preventDefault();
        return evt.target.href.replace(location.origin, '');
      }),
  }).startWith()

};

export default model;
