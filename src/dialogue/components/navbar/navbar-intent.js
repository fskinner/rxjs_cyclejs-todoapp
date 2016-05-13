import { getUrl, extractValue, events } from '../../utils'

const intent = ({DOM}) => ({
  click$: events(
    DOM.select('.link a'), [
      `click`,
      `touchstart`,
    ])
});

export default intent;
