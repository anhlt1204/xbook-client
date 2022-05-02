/**
 * Asynchronously loads the component for CartHistoryPage
 */

import { lazyLoad } from 'utils/loadable';

export const CartHistoryPage = lazyLoad(
  () => import('./index'),
  module => module.CartHistoryPage,
);
