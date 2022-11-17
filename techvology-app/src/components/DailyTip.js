import { React, useState, useEffect } from 'react'
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import BASE_URL from '../utilities/constants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DailyTip = () => {
  const [tip, setTip] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchTip = async () => {
    const response = await axios.get(`${BASE_URL}/daily_tips`);
    console.log(response.data);
    setTip(response.data);
  }


  useEffect(() => {
    fetchTip();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Daily Tip</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button 
          onClick={handleClose}
          style={{float: "right", marginBottom: "10px"}}
        >
          <CloseIcon />
        </Button>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {tip.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {tip.description}
        </Typography>
      </Box>
    </Modal>
    </div>
  )
}

export default DailyTip