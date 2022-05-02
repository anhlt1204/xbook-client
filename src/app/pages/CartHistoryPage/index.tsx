import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useCartSlice } from '../CartPage/slice';
import { selectCart } from '../CartPage/slice/selector';
import moment from 'moment';

const configDelivery = value => {
  switch (value) {
    case 1:
      return { text: 'Đặt hàng', color: '#000' };
    case 2:
      return { text: 'Chờ xác nhận', color: '#ff9800' };
    case 3:
      return { text: 'Đang giao hàng', color: '#03a9f4' };
    case 4:
      return { text: 'Hoàn thành', color: '#4caf50' };

    default:
      return { text: 'Mới', color: '#000' };
  }
};

export function CartHistoryPage() {
  const dispatch = useDispatch();

  const { actions: cartActions } = useCartSlice();

  const { listCart, page, size, total_page } = useSelector(selectCart);

  const [id, setID] = React.useState(-1);

  React.useEffect(() => {
    dispatch(cartActions.getListCart({ page, size }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Lịch sử đặt hàng</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ minHeight: 'calc(100vh - 205px)' }}>
          <TitleStyle>
            <FormatListBulletedIcon />
            <Typography component="h2">Lịch sử đặt hàng</Typography>
          </TitleStyle>
          <Box>
            {listCart.length > 0 ? (
              <>
                <Box sx={{ display: `${id === -1 ? 'block' : 'none'}` }}>
                  <TableContainer
                    component={Paper}
                    sx={{ mb: '40px !important' }}
                  >
                    <Table>
                      <TableHead>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            ID
                          </StyledTableCell>
                          <StyledTableCell>Người nhận</StyledTableCell>
                          <StyledTableCell>Địa chỉ</StyledTableCell>
                          <StyledTableCell>Ngày tạo</StyledTableCell>
                          <StyledTableCell>Tổng tiền (VNĐ)</StyledTableCell>
                          <StyledTableCell>Trạng thái</StyledTableCell>
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        {listCart.map((e, i) => (
                          <StyledTableRow onClick={() => setID(i)} key={i}>
                            <StyledTableCell component="th" scope="row">
                              {e.id}
                            </StyledTableCell>
                            <StyledTableCell>{e.name}</StyledTableCell>
                            <StyledTableCell>
                              {e.customerAddress}
                            </StyledTableCell>
                            <StyledTableCell>
                              {moment(e.createAt)
                                .format('DD/MM/YYYY')
                                .toString()}
                            </StyledTableCell>
                            <StyledTableCell>
                              {e.totalPrice.toLocaleString('en-US')}
                            </StyledTableCell>
                            <StyledTableCell
                              sx={{
                                color: `${configDelivery(e.delivery.id).color}`,
                              }}
                            >
                              {configDelivery(e.delivery.id).text}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <PaginationCustom>
                    <Box>
                      <Box
                        onClick={
                          page === 1
                            ? () => {}
                            : () => dispatch(cartActions.setPage(page - 1))
                        }
                        className={page === 1 ? 'disable' : 'active'}
                      >
                        <ArrowBackIosNewIcon fontSize="small" />
                      </Box>
                      <Box>{page}</Box>
                      <Box
                        onClick={
                          page === total_page
                            ? () => {}
                            : () => dispatch(cartActions.setPage(page + 1))
                        }
                        className={page === total_page ? 'disable' : 'active'}
                      >
                        <ArrowForwardIosIcon fontSize="small" />
                      </Box>
                    </Box>
                  </PaginationCustom>
                </Box>

                <Box
                  sx={{
                    display: `${id > -1 ? 'block' : 'none'}`,
                  }}
                >
                  <TitleBox>
                    <Typography component="span">Chi tiết đơn hàng</Typography>
                    <Button variant="outlined" onClick={() => setID(-1)}>
                      Quay lại
                    </Button>
                  </TitleBox>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <StyledTableRow>
                          <StyledTableCell>Sản phẩm</StyledTableCell>
                          <StyledTableCell>Số lượng</StyledTableCell>
                          <StyledTableCell>Giá tiền (VNĐ)</StyledTableCell>
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        {listCart[id]?.orderItems.map((e, i) => (
                          <StyledTableRow key={i}>
                            <StyledTableCell component="th" scope="row">
                              {e.product.title}
                            </StyledTableCell>
                            <StyledTableCell>{e.quantity}</StyledTableCell>
                            <StyledTableCell>{e.product.price}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            ) : (
              <Typography
                component="p"
                sx={{
                  textAlign: 'center',
                  fontSize: '16px',
                  lineHeight: '22px',
                  fontWeight: 700,
                }}
              >
                Không có lịch sử đặt hàng!
              </Typography>
            )}
          </Box>
        </Box>
      </OneColumnLayout>
    </>
  );
}

const TitleBox = styled(Box)(({ theme }) => ({
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& span': {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 700,
  },

  '& button': { padding: '0px', height: '40px', width: '145px' },
}));

const TitleStyle = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  marginBottom: '70px',
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#bb0000',

  '& .MuiSvgIcon-root': {
    width: '36px',
    height: '36px',
  },

  '& h2': {
    fontSize: '27px',
    lineHeight: '34px',
    fontWeight: 700,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#bb0000',
    color: '#FFF',
  },

  '&.MuiTableCell-body': {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgb(224, 224, 224)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PaginationCustom = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  paddingBottom: '30px',

  display: 'flex',
  justifyContent: 'center',

  '& > div': {
    height: '30px',
    display: 'flex',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30px',
      width: '30px',
      padding: '0px',
      border: '1px solid #000',
      color: '#000',
      cursor: 'pointer',

      '&.active': {
        '&:hover': {
          background: '#bb0000',

          '& .MuiSvgIcon-root': {
            color: '#FFF',
          },
        },
      },

      '&.disable': {
        background: 'rgba(234,231,231,0.9)',
        border: '1px solid rgba(234,231,231,0.9)',
        cursor: 'unset',

        '& .MuiSvgIcon-root': {
          color: '#FFF',
        },
      },
    },
  },
}));
