import { Box, Container } from '@mui/material';
import UserLoginForm from '../UserLoginForm';
 

const LoginForm = () => {
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box sx={{ mt: 12, mb: 12, justifyContent: 'center'}}>
                    <UserLoginForm/>

        </Box>        
        </Container>

    </>
  );
};

export default LoginForm;
