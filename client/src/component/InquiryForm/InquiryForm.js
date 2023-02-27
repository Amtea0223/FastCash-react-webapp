import { useState } from 'react';
import css from './inquiryForm.module.css';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function InquiryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const SubmitButton = styled(Button)({
    backgroundColor: "#77BF27",
    width: "120px",
    height: "50px",
    fontSize: "22px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#707070",
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={css.container}>

   <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item xs={12}>
          <TextField
                id="name_id"
                label="姓名"
                value={name}
                variant="outlined"
                required
                sx={{width:"100%"}}
                onChange={(e) => setName(e.target.value)}
                name="name"
            />   
        </Grid>
       
        <Grid item xs={6}>
          <TextField
                id="email_id"
                label="電子郵件"
                value={email}
                variant="outlined"                
                required
                sx={{width:"296px"}}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
            />    
        </Grid>
        <Grid item xs={6}>
          <TextField
                id="phone_id"
                label="聯絡電話"
                value={phone}
                variant="outlined"
                required
                sx={{width:"100%"}}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
            />  
        </Grid>
        
        <Grid item xs={12}>
            <TextField
                    id="message_id"
                    label="查詢內容"
                    multiline
                    maxRows={10}
                    rows={10}                        
                    name="message"
                    value={message}
                    sx={{width:"100%"}}
                    onChange={(e) => setMessage(e.target.value)}
                    
            />      
        </Grid>
    
        <Grid item xs={12} mdOffset={9} >
        
        <SubmitButton
                variant="contained"
                onClick={handleSubmit}
                type="submit"
              >
                提交
            </SubmitButton>
        </Grid>        
      </Grid>
    </Box> 
   
  
    <Box
      component="div"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
       
    </Box>
           
    
    </div>
  );
}

export default InquiryForm;
