import React from 'react';
import { OneColumnLayout } from 'app/components/Layout';
import { Box, Grid, Typography } from '@mui/material';
import Item from 'app/components/Item';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'app/components/GlobalState';
import { selectGlobal } from 'app/components/GlobalState/selector';
import _ from 'lodash';
import { styled } from '@mui/system';

export function SearchPage() {
  const queryParams = new URLSearchParams(window.location.search);

  const keywords = queryParams.get('words');

  const dispatch = useDispatch();

  const { actions: globalActions } = useGlobalSlice();

  const { product } = useSelector(selectGlobal);

  React.useEffect(() => {
    dispatch(
      globalActions.getProductListRequest({
        key: 'title',
        value: keywords,
      }),
    );
  }, [keywords]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Trang tìm kiếm sản phẩm</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px' }}>
          <SearchDescription>
            Danh sách sản phẩm chứa từ khoá "<span>{keywords}</span>"{' '}
          </SearchDescription>
          <WrapperSearchList>
            {product.list.length > 0 ? (
              <Grid container spacing={8}>
                {product.list.map((e, i) => (
                  <Grid
                    key={i}
                    item
                    xs={6}
                    sm={4}
                    lg={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Item
                      id={e.id}
                      image={
                        !_.isEmpty(e.images[0]?.link) ? e.images[0].link : ''
                      }
                      title={e.title}
                      author={e.author}
                      price={e.price}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography
                component="p"
                sx={{
                  mt: '50px',
                  textAlign: 'center',
                  fontSize: '24px',
                  lineHeight: '27px',
                }}
              >
                Không tìm thấy sản phẩm nào!
              </Typography>
            )}
          </WrapperSearchList>
        </Box>
      </OneColumnLayout>
    </>
  );
}

const SearchDescription = styled(Box)(({ theme }) => ({
  marginBottom: '25px',
  paddingLeft: '5px',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: 700,

  '& span': { color: '#28CE7E' },
}));

const WrapperSearchList = styled(Box)(({ theme }) => ({
  margin: '25px 0px 50px 0px',
  padding: '30px 15px',
  width: '100%',
  minHeight: 'calc(100vh - 160px)',
  backgroundColor: 'rgba(0,0,0,0.04)',
  borderRadius: '15px',
}));
