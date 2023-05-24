import { Box, CardContent, Card, Typography } from '@mui/material';
import UserLoginForm from '../UserLoginForm';



const LoginForm = () => {


  return (
    
    <div>
      <Typography color="text.primary" variant="h6" align="center" sx={{ textAlign: 'center', alignItems: 'center', my: { sm: 5 } }}>
        FAÇA O LOGIN NA SUA CONTA!
      </Typography>

      <Box width="100vw" height="70vh" display="flex" alignItems="center" justifyContent="center" sx={{ textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' } }}>
        <Card>
          <CardContent>
            <Box sx={{ p: 1, my: 1 }}>
               <UserLoginForm/>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default LoginForm;
