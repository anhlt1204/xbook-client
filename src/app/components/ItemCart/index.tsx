import React from 'react';
import {
  ItemCartImage,
  ItemCartName,
  ItemCartNumber,
  ItemCartPrice,
  ItemCartWrapper,
} from './style';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useCartSlice } from 'app/pages/CartPage/slice';
import { useHistory } from 'react-router-dom';

interface Props {
  product_id: number;
  image: string;
  title: string;
  price: number;
  numb: number;
  current: number;
}

export default function CartItem(props: Props) {
  const { product_id, image, title, price, numb, current } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  const { actions } = useCartSlice();

  const handleAdd = () => {
    if (numb < current) {
      dispatch(
        actions.addToCartRequest({
          productId: product_id,
          quantity: 1,
        }),
      );
    }
  };

  const handleRemove = () => {
    if (numb > 1) {
      dispatch(
        actions.removeFromCartRequest({
          productId: product_id,
          quantity: 1,
        }),
      );
    }
  };

  const handleDeleteItem = () => {
    dispatch(
      actions.removeFromCartRequest({
        productId: product_id,
        quantity: numb,
      }),
    );
  };

  const handleOnClick = () => {
    history.push(`/product-detail/${product_id}`);
  };

  return (
    <ItemCartWrapper>
      <ItemCartImage onClick={handleOnClick}>
        <img src={image} alt="Ảnh" />
      </ItemCartImage>
      <ItemCartName onClick={handleOnClick}>{title}</ItemCartName>
      <ItemCartPrice>{price.toLocaleString('en-US')}</ItemCartPrice>
      <ItemCartNumber>
        <Box onClick={handleRemove} className={numb > 1 ? 'active' : 'disable'}>
          <RemoveIcon fontSize="small" />
        </Box>
        <Box>{numb}</Box>
        <Box
          onClick={handleAdd}
          className={numb < current ? 'active' : 'disable'}
        >
          <AddIcon fontSize="small" />
        </Box>
      </ItemCartNumber>
      <CloseIcon
        onClick={handleDeleteItem}
        sx={{ color: 'red', cursor: 'pointer' }}
      />
    </ItemCartWrapper>
  );
}
