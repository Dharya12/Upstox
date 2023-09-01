import { Typography ,IconButton, Box} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector , useDispatch } from "react-redux"
import { removeToWatchList } from "../App/slice";
import "./watchList.css";
export const WatchListData =() =>{
    const getWatchListData = useSelector((state)=>state.upstox.value);
    const dispatch = useDispatch();
    console.log("getWatchList data : " , getWatchListData);
    return( 
        <Grid>
        {
            getWatchListData.map((element)=>{
                return(
                
                <Box  width={500} sx={{ mb:2,display:"flex" , justifyContent:"space-between"}}>
                    <Grid xs={6}>
                        <Typography>
                            {element.name}
                            <IconButton color='secondary' ><FavoriteBorderIcon sx={{color : "black"}}  onClick={()=>{ dispatch(removeToWatchList(element))}}/></IconButton>
                        </Typography>
                        <Typography sx={{width: "80px",textAlign:'center' ,bgcolor:"grey"}}>{element.stockExchange}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography>{element.stockPrice}</Typography>
                        <Typography color={element.stockValueChange.includes("-") ? "green" : "red" }>{element.stockValueChange}</Typography>
                    </Grid>
                </Box>
            )})
        }
        </Grid>
    )
}