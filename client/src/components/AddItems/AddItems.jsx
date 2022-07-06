import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';




const AddItems = () => {
    const [age, setAge] = React.useState('');
    const [categry,setCategry]=useState([]);
    const [compnyname,setCompnyname]=useState([]);
    const [unt,setUnt]=useState([]);
const [items,setItems]=useState({
    itemid:0,
    itemname:"",
    itemprice:"",
    companyname:"",
    category:"",
    quantity:0,
    unit:"",
    itemtype:""

})
  const handleChange = (event) => {
    setItems({...items,[event.target.name]:event.target.value})
   
  };
  const clickhander=()=>{
    console.log(items)
    axios.post("http://localhost:4000/stock/",items).then(res=>{
      console.log("data added")
    }).catch(err=>{
      console.log(err)
    })
  }
 useEffect(()=>{
  axios.get("http://localhost:4000/addlist/getcat").then(res=>{
console.log(res.data.data[0].category)
setCategry(res.data.data[0].category)
setCompnyname(res.data.data[0].companyname)
setUnt(res.data.data[0].unit)

  }).catch(err=>{
    console.log(err)
  })
 },[])

  return (
    <div style={{ height:'50px',display:'flex',flexDirection:'column',marginTop:'10px',marginLeft:'40%',justifyContent:'space-between'}}>
    <h2 style={{color:'blue'}}>Add Items</h2>  

        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
   <TextField id="outlined-basic" name="itemid" label="Enter Item ID" variant="outlined" onChange={handleChange} /><br/>
   <TextField id="outlined-basic" name="itemname" label="Enter Item Name" variant="outlined" onChange={handleChange} /><br/>
  <TextField id="outlined-basic" name="itemprice" label="Enter Itemprice" variant="outlined" onChange={handleChange} /><br/>
  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="company"
          name="companyname"
          onChange={handleChange}
        >
            {
        compnyname.map(ele=>{

        return <MenuItem value={ele.companyname}>{ele.companyname}</MenuItem>
        })
      }
         
        </Select>
      </FormControl><br/>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="category"
          name="category"
          onChange={handleChange}
        >
           {
        categry.map(ele=>{

        return <MenuItem value={ele.category}>{ele.category}</MenuItem>
        })
      }
        </Select>
         
      </FormControl><br/>
     
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="unit"
          name="unit"
          onChange={handleChange}
        > 
          {
        unt.map(ele=>{

        return <MenuItem value={ele.unit}>{ele.unit}</MenuItem>
        })
      }
        </Select>
      </FormControl><br/>
      <TextField id="outlined-basic" label="Quantity" name="Quantity" variant="outlined" onChange={handleChange}/><br/>
     
       <TextField id="outlined-basic" label="Quantity" name="Enter Itemtype" variant="outlined" onChange={handleChange}/><br/>
      <Button variant="contained" onClick={clickhander}>Add Item</Button>
    
  </Box></div>
  )
}

export default AddItems