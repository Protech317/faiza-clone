import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./menuInformation.css"


  

export default function AlertDialog({menu}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='main-container'>
      <Button variant="primary" onClick={handleClickOpen}>
     info
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      
      

        <DialogTitle id="alert-dialog-title">
          {menu.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <div className='img-container'>
            <img src={menu.img} />
            <p>{menu.desc}</p>
           </div>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
    
      </Dialog>
    </div>
  );
}