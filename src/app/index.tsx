/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from 'theme/defaultTheme';

import { useTranslation } from 'react-i18next';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { UserProfilePage } from 'app/pages/UserProfilePage/Loadable';
import { RegisterPage } from 'app/pages/RegisterPage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { SearchPage } from './pages/SearchPage/Loadable';
import { ListPage } from 'app/pages/ListPage/Loadable';
import { DetailPage } from 'app/pages/DetailPage/Loadable';
import { CartPage } from 'app/pages/CartPage/Loadable';
import { BuyPage } from 'app/pages/BuyPage/Loadable';
import PublicRoute from 'app/components/PublicRoute';
import { useGlobalSlice } from 'app/components/GlobalState';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import { useCartSlice } from './pages/CartPage/slice';
import { selectCart } from './pages/CartPage/slice/selector';
import { selectGlobal } from './components/GlobalState/selector';

export function App() {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  const { actions } = useGlobalSlice();

  const { actions: cartActions } = useCartSlice();

  const { user } = useSelector(selectGlobal);

  const { addStatus, removeStatus, paymentStatus } = useSelector(selectCart);

  React.useEffect(() => {
    if (user !== null) {
      dispatch(cartActions.getCurrentCart());
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      dispatch(actions.getUserProfileRequest());
    }

    dispatch(actions.getCategoryListRequest({ page: '', size: '' }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      return;
    }

    if (
      addStatus === 'success' ||
      removeStatus === 'success' ||
      paymentStatus === 'success'
    ) {
      dispatch(cartActions.getCurrentCart());
    }
  }, [addStatus, removeStatus, paymentStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>

      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute exact path="/register" component={RegisterPage} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/profile" component={UserProfilePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/product-list/:id" component={ListPage} />
          <Route exact path="/product-detail/:id" component={DetailPage} />
          <ProtectedRoute exact path="/cart" component={CartPage} />
          <ProtectedRoute exact path="/buy" component={BuyPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
