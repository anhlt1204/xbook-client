import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Item from 'app/components/Item';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from '../GlobalState';
import { selectGlobal } from '../GlobalState/selector';

interface Props {
  title: string;
  categoryId?: number;
  type?: string;
  value?: string;
}

export default function List(props: Props) {
  const { title, categoryId, type, value } = props;

  const dispatch = useDispatch();

  const { actions: globalActions } = useGlobalSlice();

  const { product } = useSelector(selectGlobal);

  React.useEffect(() => {
    dispatch(
      globalActions.getProductListRequest({
        categoryId,
        key: type,
        value,
        page: 0,
        size: 4,
      }),
    );
  }, [categoryId, type, value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ListWrapper>
      <Typography component="h2">{title}</Typography>
      <Grid container spacing={8}>
        {product.list.map((e, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={4}
            lg={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Item
              id={e.id}
              image={!_.isEmpty(e.images[0]?.link) ? e.images[0].link : ''}
              title={e.title}
              author={e.author}
              price={e.price}
            />
          </Grid>
        ))}
      </Grid>
    </ListWrapper>
  );
}

const ListWrapper = styled(Box)(({ theme }) => ({
  marginTop: '150px',
  marginBottom: '50px',

  '& > h2': {
    marginBottom: '50px',
    textAlign: 'center',
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
