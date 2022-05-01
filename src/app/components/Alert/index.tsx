import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import success from './assets/success2.svg';
import error from './assets/Error.svg';
import ButtonCustom from 'app/components/ButtonCustom';
import { Dialog, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  type?: 'error' | 'success';
  text: string;
  handle: Function;
  isOpen: boolean;
  onClose: Function;
}

export default function Alert(props: Props) {
  const theme = useTheme();

  const handleDoSomething = () => {
    props.handle();
    props.onClose();
  };

  const handleClosePopup = () => {
    props.onClose();
  };
  return (
    <>
      <ModalAlert
        open={props.isOpen}
        onClose={handleClosePopup}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle
          sx={{
            [theme.breakpoints.down('sm')]: {
              img: {
                width: '32px',
              },
            },
          }}
        >
          {props.type === 'success' && <img src={success} alt="" />}
          {props.type === 'error' && <img src={error} alt="" />}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonCustom variant="contained" onClick={handleDoSomething}>
            OK
          </ButtonCustom>
        </DialogActions>
      </ModalAlert>
    </>
  );
}

const ModalAlert = styled(Dialog)(({ theme }) => ({
  h2: {
    img: {
      width: '62px',
      height: '62px',
    },
    [theme.breakpoints.down('sm')]: {
      img: {
        width: '32px',
        height: '32px',
      },
    },
    padding: '0',
    marginBottom: '20px',
  },

  '.MuiDialogContent-root': {
    padding: '0px',

    p: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '27px',
      color: '#000',

      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        lineHeight: '15px',
      },
    },
  },

  '.MuiPaper-root': {
    borderRadius: '24px',
    maxWidth: '505px',
    width: '100%',
    minHeight: '286px',
    padding: '40px',
    backgroundImage: 'none',
    '.MuiTypography-root': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.MuiDialogActions-root': {
      marginTop: '24px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
      button: {
        width: '100%',
        backgroundColor: [theme.palette.primary.main],
        '&:hover': {
          backgroundColor: [theme.palette.primary.main],
          opacity: '0.8',
        },
      },
    },
    '.MuiDialogContent-root': {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
}));
