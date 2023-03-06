import { useState, useRef, useEffect } from 'react';
import '../estimateForm.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { FormDatatext } from '../../codeHelper/useFormatDatatext';
import { useMediaQuery } from 'react-responsive';
import { isMobilePhone } from 'validator';
import moment from 'moment';
import { ENV } from '../../config';
import css from './applicationForm.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import square from '../../images/form_square.png';

const ApplicationForm = () => {
  const SubmitButton = styled(Button)({
    backgroundColor: '#77BF27',
    width: '50px',
    height: '35px',
    fontSize: '15px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#707070',
    },
  });

  const FormLabel = styled(Typography)({
    fontFamily: 'pingFangSmall!important',
  });

  const TextInput = styled(TextField)({
    fontFamily: 'pingFangSmall!important',
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const [appliciantname, setAppliciantname] = useState('');
  const [phoneNumb, setPhoneNumb] = useState('');
  const [appliciantid, setAppliciantid] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [purpose, setPurpose] = useState('');
  const [amount, setAmount] = useState('');
  const [confirm1, setConfirm1] = useState(false);

  const CleanData = () => {
    setConfirm1(false);
    setAppliciantname('');
    setAppliciantid('');
    setPhoneNumb('');
    setPaymentMethod('');
    setPurpose('');
    setAmount('');
  };

  const handleSubmit = () => {
    const data = {
      name: appliciantname,
      phone: phoneNumb,
      id: appliciantid,
      paymentMethod: paymentMethod,
      purpose: purpose,
      amount: amount,
      agreeTerms1: confirm1,
      timestamp: moment()
        .utcOffset(8)
        .format('YYYY-MM-DD HH:mm:ss'),
    };

    try {
      fetch(ENV + '/api/v1/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
          }
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          CleanData();
        });
    } catch (error) {
    } finally {
      CleanData();
    }
  };

  const validatePhoneInput = (val) => {
    if (val === '') {
      return false;
    } else {
      const result = isMobilePhone(val, 'en-HK');
      return result;
    }
  };

  const ValidateData = () => {
    if (!!!confirm1) {
      return alert('請確認條款');
    } else if (appliciantname.replace(/\s/g, '') === '') {
      return alert('請填寫個人姓名');
    } else if (validatePhoneInput(phoneNumb) === false) {
      return alert('請填寫正確的電話號碼');
    } else if (amount === '' || isNaN(amount)) {
      return alert('請填寫正確的貸款金額');
    } else {
      handleSubmit();
    }
  };

  return (
    <>
      {isDesktopOrLaptop && (
        <div className={css.container}>
          <img src={square} className={css.square} />
          <Box
            sx={{
              '& > :not(style)': {
                m: 2,
                maxWidth: '1000px',
                minWidth: '320px',
              },
            }}
            //selector selects all direct children of the Box component that are not style elements
          >
            <div className={css.outer_border}>
              <div className={css.inner_border}>
                <div className={css.title}>
                  <h2>立即申請</h2>
                </div>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  padding="1.5rem"
                >
                  <Grid item xs={6}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <FormLabel variant="subtitle1">姓名</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextInput
                          fullWidth
                          size="small"
                          value={appliciantname}
                          onChange={(e) => setAppliciantname(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <FormLabel variant="subtitle1">支薪方式</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextInput
                          fullWidth
                          size="small"
                          value={paymentMethod}
                          onChange={(e) => {
                            setPaymentMethod(e.target.value);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <FormLabel variant="subtitle1">聯絡電話</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextInput
                          fullWidth
                          size="small"
                          value={phoneNumb}
                          onChange={(e) => setPhoneNumb(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <FormLabel variant="subtitle1">貸款目的</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextInput
                          fullWidth
                          size="small"
                          value={purpose}
                          onChange={(e) => {
                            setPurpose(e.target.value);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <FormLabel variant="subtitle1">身分證號碼</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextInput
                          fullWidth
                          size="small"
                          value={appliciantid}
                          onChange={(e) => setAppliciantid(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <FormLabel variant="subtitle1">貸款金額</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextInput
                          fullWidth
                          size="small"
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={11}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={confirm1}
                                size="small"
                                sx={{ marginTop: '1rem' }}
                                onChange={(e) => {
                                  setConfirm1(e.target.checked);
                                }}
                              />
                            }
                            label={
                              <Typography
                                fontSize={'0.5rem'}
                                color="#77bf27"
                                style={{ paddingTop: '1rem' }}
                              >
                                *本人已年滿18歲，閱讀並同意此網上的貸款細節及條款。
                                本人明白和同意，在此申請表提供的個人資料將記錄於資料系統作申請用途，在未獲得您同意前，不會向第三方披露你的個人資料。
                              </Typography>
                            }
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} textAlign="right" paddingRight="40px">
                        <SubmitButton
                          variant="contained"
                          onClick={ValidateData}
                          type="submit"
                        >
                          提交
                        </SubmitButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};

export default ApplicationForm;
