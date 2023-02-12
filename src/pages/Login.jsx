import React from 'react'

// ** MUI IMPORTS
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"


import LoginForm from "src/features/login/form"

const Login = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center' sx={{height:"100vh"}}>
    <Box maxWidth='sm' sx={{border:'1px solid',borderColor:'grey.200',borderRadius:4,overflow:'hidden'}}>
    <LoginForm/>
    </Box> 
    </Stack>
  )
}

export default Login