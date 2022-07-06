import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
                                                                                                                                                                                                                                                        
const Settings = () => {
    const [category,setCategory]=useState()
    const [companyname,setCompanyname]=useState("")
    const [unit,setUnit]=useState("")
    const handleChange1=(event)=>{
        setCategory(event.target.value)
    }
    const clickhander1=()=>{
        console.log(category)
        axios.put("http://localhost:4000/addlist/category/",{category}).then(res=>{
          console.log("data added")
        }).catch(err=>{
          console.log(err)
        })
    }
    const handleChange2=(event)=>{
        setCompanyname(event.target.value)
    }
    const clickhander2=()=>{
        console.log(companyname)
        axios.put("http://localhost:4000/addlist/company",{companyname}).then(res=>{
          console.log("data added")
        }).catch(err=>{
          console.log(err)
        })
    }
    const handleChange3=(event)=>{
        setUnit(event.target.value)
    }
    const clickhander3=()=>{
        console.log(unit)
        axios.put("http://localhost:4000/addlist/unit",{unit}).then(res=>{
          console.log("data added")
        }).catch(err=>{
          console.log(err)
        })
    }
  return (
    <div style={{width:"300px", height:'50px',display:'flex',flexDirection:'column', marginTop:'10px',marginLeft:'30%',justifyContent:'space-between'}}>
        <div style={{width:"300px", height:'50px',display:'flex',flexDirection:'row', marginTop:'10px',marginLeft:'40%',justifyContent:'space-between'}}>
             <TextField  label="Add category" name="quantity" variant="outlined" onChange={handleChange1}/>
    <Button variant="contained" onClick={clickhander1}>Add category</Button><br/></div>
    <div style={{width:"300px", height:'50px',display:'flex',flexDirection:'row', marginTop:'10px',marginLeft:'40%',justifyContent:'space-between'}}>
         <TextField  label="Add company name" name="companyname" variant="outlined" onChange={handleChange2}/>
    <Button variant="contained" onClick={clickhander2}>Add company</Button><br/></div>
    <div style={{width:"300px", height:'50px',display:'flex',flexDirection:'row', marginTop:'10px',marginRight:'20px',  marginLeft:'40%',justifyContent:'space-between'}}> 
    <TextField  label="Add Unit" name="unit" variant="outlined" onChange={handleChange3}/>
    <Button variant="contained" onClick={clickhander3}>Add Unit</Button><br/></div>
  </div>
  )
}    

export default Settings