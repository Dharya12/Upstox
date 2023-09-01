import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import './App.css';
import  CustomTabPanel from './componet/Tab';
import { Typography } from '@mui/material';

function App() {
  return (
    <Grid2>
      <Grid2 sx={{display : 'flex' , flexDirection:'column', justifyContent:'center' , alignItems :'center'}}>
          <Typography variant='h4' sx={{marginTop : 2}} >Welcome To Upstox</Typography>
          <Typography variant='h5' sx={{marginTop : 2}}>Start trading to see some magic happen!</Typography>
      </Grid2>
      
      <CustomTabPanel/>
    </Grid2>
  );
}

export default App;
