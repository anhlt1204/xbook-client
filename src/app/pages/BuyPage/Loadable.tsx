/**
 * Asynchronously loads the component for CartPage
 */

import { lazyLoad } from 'utils/loadable';

export const BuyPage = lazyLoad(
  () => import('./index'),
  module => module.BuyPage,
);
