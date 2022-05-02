import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import { Helmet } from 'react-helmet-async';
import { BreadcumbItem, DetailPageWrapper, ImageBox, InforBox } from './style';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import List from 'app/components/List';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'app/components/GlobalState';
import { selectGlobal } from 'app/components/GlobalState/selector';
import _ from 'lodash';
import { useCartSlice } from '../CartPage/slice';
import { selectCart } from '../CartPage/slice/selector';

export function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const dispatch = useDispatch();

  const { actions: globalActions } = useGlobalSlice();

  const { actions: cartActions } = useCartSlice();

  const { product, user } = useSelector(selectGlobal);

  const { detailCart, addStatus } = useSelector(selectCart);

  const isBooked = detailCart.orderItems
    .map(e => e.product.id)
    .includes(product.detail.id);

  const handleAddCart = () => {
    if (product.detail.currentNumber === 1 && isBooked) {
      return;
    }

    if (product.detail.id > -1 && product.detail.currentNumber >= 1) {
      dispatch(
        cartActions.addToCartRequest({
          productId: product.detail.id,
          quantity: 1,
        }),
      );
    }
  };

  React.useEffect(() => {
    dispatch(
      globalActions.setDetailProduct({
        id: -1,
        title: '',
        longDescription: '',
        categoryId: -1,
        category: '',
        price: 0,
        author: '',
        currentNumber: 0,
        numberOfPage: 0,
        quantitySelled: 0,
        images: [{ link: '' }],
      }),
    );

    dispatch(globalActions.getProductDetailRequest(id));

    window.scrollTo(0, 0);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setTimeout(() => {
      if (addStatus) {
        dispatch(cartActions.setAddStatus(''));
      }
    }, 1000);
  }, [addStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>{product.detail.title}</title>
      </Helmet>
      <OneColumnLayout>
        <DetailPageWrapper>
          <Box sx={{ pt: '30px', pb: '50px' }}>
            <BreadcumbItem onClick={() => history.push('/')}>
              Trang chủ
            </BreadcumbItem>{' '}
            /{' '}
            <BreadcumbItem
              onClick={() => {
                dispatch(globalActions.setProductPage(1));
                history.push(`/product-list/${product.detail.categoryId}`);
              }}
            >
              {product.detail.category}
            </BreadcumbItem>{' '}
            /{' '}
            <BreadcumbItem className="selected">
              {product.detail.title}
            </BreadcumbItem>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <ImageBox>
                <img
                  src={
                    !_.isEmpty(
                      product.detail.images[product.detail.images.length - 1],
                    )
                      ? product.detail.images[product.detail.images.length - 1]
                          .link
                      : ''
                  }
                  alt={product.detail.title}
                />
              </ImageBox>
            </Grid>
            <Grid item xs={12} md={7}>
              <InforBox>
                <Box className="title">{product.detail.title}</Box>
                <hr />
                <Grid container rowSpacing={2} className="infor">
                  <Grid item md={6} className="left">
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Giá bán:{' '}
                      <span className="price">
                        {Number(product.detail.price).toLocaleString('en-US')}{' '}
                        VNĐ
                      </span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Tác giả: <span>{product.detail.author}</span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Số trang: <span>{product.detail.numberOfPage}</span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Số lượng: <span>{product.detail.currentNumber}</span>
                    </Typography>
                  </Grid>
                  <Grid item md={6} className="right">
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="contained"
                        disabled={
                          user === null ||
                          product.detail.id === -1 ||
                          product.detail.currentNumber === 0 ||
                          (product.detail.currentNumber === 1 && isBooked)
                        }
                        startIcon={<AddShoppingCartIcon fontSize="large" />}
                        onClick={handleAddCart}
                        sx={{
                          fontWeight: 'bold',
                          color: '#FFF',
                          padding: '10px 20px',
                        }}
                      >
                        Thêm vào giỏ hàng
                      </Button>

                      {user === null && (
                        <Typography
                          component="p"
                          sx={{
                            mt: '10px',
                            color: 'red',
                          }}
                        >
                          Bạn chưa đăng nhập!
                        </Typography>
                      )}

                      {addStatus !== '' && (
                        <Typography
                          component="p"
                          sx={{
                            mt: '10px',
                            color: `${
                              addStatus === 'success' ? '#28CE7E' : 'red'
                            }`,
                          }}
                        >
                          {addStatus === 'success'
                            ? 'Thêm vào giỏ hàng thành công!'
                            : 'Thêm vào giỏ hàng thất bại!'}
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                </Grid>
                <hr />
                <Box className="description">
                  <Typography component="p" className="descTitle">
                    Giới thiệu sách
                  </Typography>
                  <Typography component="p" className="descContent">
                    {product.detail.longDescription}
                  </Typography>
                </Box>
              </InforBox>
            </Grid>
          </Grid>

          {product.detail.categoryId > -1 && (
            <List
              title="Sách cùng chủ đề"
              categoryId={product.detail.categoryId}
            />
          )}
        </DetailPageWrapper>
      </OneColumnLayout>
    </>
  );
}
