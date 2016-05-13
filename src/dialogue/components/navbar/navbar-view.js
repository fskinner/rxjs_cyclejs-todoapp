import { h, div, ul, li, a, nav, h1, h2 } from '@cycle/dom'

const view = () => {
  return div([
    h1('.brand-title', ['APP for']),
    h2('.brand-tagline', ['Experimenting with Cycle.js']),
    nav('.nav', [
      ul('.nav-list', [
        li('.nav-item .link', [
          a('.pure-button', {href: '/todos'}, ['Todos'])
        ]),
      ])
    ])])
};

export default view;
