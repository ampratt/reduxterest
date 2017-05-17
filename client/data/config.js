import Raven from 'raven-js';
import sentry from '../docs/sentry'

export const sentry_url = `https://${sentry.sentry_key}@app.getsentry.com/${sentry.sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
