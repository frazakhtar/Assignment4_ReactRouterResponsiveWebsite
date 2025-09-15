import React from 'react'
import {Box, IconButton, Input, InputAdornment} from "@mui/material";
import { Search } from '@mui/icons-material';


const SearchBar = () => {
  return (
    <Box sx={{mb:2,display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Input 
    disableUnderline  
    sx={{border:"1px solid black", borderRadius:"10rem", p:1,m:1, width:"80%"}} 
    placeholder="Search for books"
    endAdornment={
          <InputAdornment position="end">
            <IconButton type="submit" sx={{ p: "8px" }}>
              <Search />
            </IconButton>
          </InputAdornment>
        }
    />
    </Box>
  )
}

export default SearchBar