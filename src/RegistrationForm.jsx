import React, { useState } from 'react'
import { TextField,Button,Box,Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel,InputLabel,Select,MenuItem,FormHelperText } from '@mui/material'


const RegistrationForm = () => {
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[address,setAddress]=useState("")
    const[phoneNumber,setPhoneNumber]=useState("")
    const [email, setEmail] = useState("");
    const[dob ,setDob]=useState("")
    const[gender,setGender]=useState("")
    const[course,setCourse]=useState("")

    const [invalidPhone, setInvalidPhone] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    // console.log(fname);
    // console.log(lname);
    // console.log(address);
    // console.log(phoneNumber);
    // console.log(email);
    // console.log(dob);
    // console.log(gender);
    // console.log(course);
    
    const userInputValidate = (validInput) => {
      const { name, value } = validInput;
      if (name === "phone") {
        setPhoneNumber(value);
        !!value.match(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/) ? setInvalidPhone(false) : setInvalidPhone(true);
      }
      if (name === "email") {
        setEmail(value);
        !!value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ? setInvalidEmail(false) : setInvalidEmail(true);      }
    };
    
    const handleReset=()=>{
      setFname("")
      setLname("")
      setAddress("")
      setPhoneNumber("")
      setEmail("")
      setDob("")
      setGender("")
      setCourse("")
      setInvalidEmail(false)
      setInvalidPhone(false)
    }

    const handleSubmit=()=>{
      if(fname && lname && address && phoneNumber && email && dob && gender && course){
        alert(` STUDENT DETAILS

          Full Name : ${fname} ${lname}
          Address : ${address}
          Phone Number : ${phoneNumber}
          Email : ${email}
          Date Of Birth : ${dob}
          Gender : ${gender}
          Course : ${course}`)

          handleReset()
      }
      else{
        alert("please fill the form completely")
      }
    }


  return (
    <>
    <Box
      sx={{
        minHeight: '700px',
        
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/04/09/14/33/abstract-3304213_1280.png")',
        backgroundRepeat: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#008080',
          color: 'white',
          width: '800px',
          padding: '32px',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', paddingBottom: '24px' }}>
          STUDENT REGISTRATION FORM
        </Typography>
        <form action="">
         <Box sx={{display:'flex',justifyContent:'space-around'}}>
         <TextField 
                required
                id="outlined-required"
                label="FIRST NAME"
                variant="outlined"
                value={fname}
                onChange={(e)=>setFname(e.target.value)}
                sx={{
                  input: { 
                    color: 'white' // Input text color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'gray', // Default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // Hover border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // Focused border color
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', // Label color
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white', // Label color when focused
                  },
                }}/> 
          <TextField 
                  required
                  id="outlined-required"
                  label="LAST NAME"
                  variant="outlined"
                  value={lname}
                  onChange={(e)=>setLname(e.target.value)}
                  sx={{
                    input: { 
                      color: 'white' // Input text color
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Focused border color
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Label color when focused
                    },
                  }}/>
         </Box>
         <TextField
          id="outlined-textarea"
          label="Address"
          placeholder="Address"
          multiline
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Input text color for multiline
              },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Hover border color
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Focused border color
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
              padding:'20px 90px' // Label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Label color when focused
            },
            width:'100%',
            padding:'20px 70px'
          }}/>
          <Box sx={{display:'flex',justifyContent:'space-around'}}>
         <TextField 
                required
                id="outlined-required"
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e)=>userInputValidate({ name: "phone", value: e.target.value })}
                error={invalidPhone}
                helperText={invalidPhone ? "Invalid phone number" : ""}
                sx={{
                  input: { 
                    color: 'white' // Input text color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'gray', // Default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // Hover border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // Focused border color
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', // Label color
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white', // Label color when focused
                  },
                }}/> 
          <TextField 
                  required
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  value={email}
                  onChange={(e) => userInputValidate({ name: "email", value: e.target.value })}
                  error={invalidEmail}
                  helperText={invalidEmail ? "Invalid email address" : ""}
                  sx={{
                    input: { 
                      color: 'white' // Input text color
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Focused border color
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Label color when focused
                    },
                  }}/>
         </Box>
        <Box sx={{display:'flex',justifyContent:'space-around',paddingTop:'20px'}}>
        <TextField
            label="Date of Birth"
            type="date"
            value={dob}
            slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            onChange={(e)=>setDob(e.target.value)}
            variant="outlined"
            name="dob"
            sx={{ input: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } }, '& .MuiInputLabel-root': { color: 'white' }, '& .MuiInputLabel-root.Mui-focused': { color: 'white' } }}
          />
          <FormControl
      sx={{
        '& .MuiFormLabel-root': {
          color: 'white', // Label color
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: 'white', // Label color when focused
        },
        '& .MuiRadio-root': {
          color: 'white',
          '&.Mui-checked': {
            color: 'white', // Radio button color when selected
          },
        },
        '& .MuiFormControlLabel-label': {
          color: 'white', // Label color of the radio options
        },
      }}
    >
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
        </Box>
        
        <FormControl
      required
      sx={{
        '& .MuiInputLabel-root': {
          color: 'white', // Label color
          padding:'20px 100px'
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'white', // Label color when focused
        },
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Hover border color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
             // Focused border color
          },
          '& .MuiSvgIcon-root': {
            color: 'white', // Arrow color
          },
        },
        '& .MuiFormHelperText-root': {
          color: 'white', // Helper text color
        },
        '& .MuiMenuItem-root': {
          color: 'black', // Option text color
        },
        width:'100%',
        padding:'20px 80px'
      }}
    >
      <InputLabel id="demo-simple-select-required-label">Course</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        label="Course *"
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
      >
        <MenuItem value="">
          {/* <em>None</em> */}

        </MenuItem>
        <MenuItem value="Biology">Biology</MenuItem>
        <MenuItem value="Computer Science">Computer Science</MenuItem>
        <MenuItem value="Commerce">Commerce</MenuItem>
        <MenuItem value="Humanities">Humanities</MenuItem>
      </Select>
      <FormHelperText>Required</FormHelperText>
    </FormControl>
    <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
    <Button 
        variant="contained" 
        onClick={handleSubmit}
        sx={{ 
          backgroundColor: '#f0f0f0', 
          color: '#008080',
          '&:hover': {
            backgroundColor: '#FF7F50',
          },
          m: 1 
        }}
      >
        Register
      </Button>
      <Button 
        variant="contained" 
        onClick={handleReset}
        sx={{ 
          backgroundColor: '#f0f0f0', 
          color: '#008080',
          '&:hover': {
            backgroundColor: '#FF7F50',
          },
          m: 1 
        }}
      >
        Cancel
      </Button>
    </Box>
       </form>
      </Box>
    </Box>
    </>
  )
}

export default RegistrationForm