import sampleData from '../sample.json';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './stockDataItem.css';
import { useDispatch } from 'react-redux';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { addToWatchList } from '../App/slice';
import { useState } from 'react';
export const StockDataList =()=>{
    const [flag, setFlag] =useState(true);
    //const [isHovering, setIsHovering] = useState(false);
    console.log("Sample data  is :  " ,  sampleData);
    const dispatch =useDispatch();
    const handleClick = () => {
        setFlag(!flag);
      };
    //   const handleMouseOver = () => {
    //     setIsHovering(true);
    //   };
    
    //   const handleMouseOut = () => {
    //     setIsHovering(false);
    //   };
    
    return(
        <Grid2>
            {
                sampleData.map((element)=>
       
                    <Box id="stockDataItem" width={500}  sx={{mb:2}}>
                        <Grid2 xs={6} sx={{ display:'flex' , flexDirection:"column"  }} >
                            <Typography sx={{display: 'flex'}}>
                                <Typography sx={{marginRight:10}}>{element.name}</Typography>
                                <IconButton   onClick={()=>{ dispatch(addToWatchList(element))}} ><FavoriteBorderIcon  onClick={handleClick} sx={{color : "black"}}  /></IconButton> 
                            </Typography>
                
                            <Typography sx={{mt:-1, width: "80px",textAlign:'center' ,bgcolor:"grey"}}>{element.stockExchange}</Typography>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Grid2  sx={{display:'flex' , flexDirection:"column" , justifyContent:'center' , textAlign:'center'}}>
                                <Typography>Rs{element.stockPrice}</Typography>
                                <Typography color={element.stockValueChange.includes("-") ? "green" : "red" }>{element.stockValueChange}</Typography>
                            </Grid2>
                        </Grid2>
            
                    </Box>
            
                )
            }
        </Grid2>
        
    )

}