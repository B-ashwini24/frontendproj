import  React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import {ShoppingCartOutlined} from '@ant-design/icons'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BuyersNSupliers() {
    const [age, setAge] = React.useState('');
    const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data,setData]=useState([])
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(()=>{
    axios.get(`http://localhost:4000/stock/getbuyersdata`).then(response=>{
        console.log(response.data)
        setData(response["data"].data)
    }
    ).catch(err=>{
        console.log(err)
    })
},[])


const clickhandler=(item)=>{
  console.log(item)
 
    item.quantity=1
    axios.post("http://localhost:4000/customer/",item).then(res=>{
      console.log("data added")
      alert("data Added")
    }).catch(err=>{
      console.log(err)
    })
}
  
  return (
    <>
     <div style={{ height:'50px',display:'flex',flexDirection:'row',marginTop:'10px',marginLeft:'100px',justifyContent:'space-between'}}>
    <h2 style={{color:'blue'}}> BUYERS</h2>  
    <Stack spacing={2} direction="row">
     
    <Button variant="contained">UPLOAD ITEMS</Button>
      <Button variant="contained">ACTIONS</Button>
     
    </Stack>
    
    </div>
    <div style={{height:'50px',display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:'20px'}}>
     
    <Box sx={{width:'200px',height:'50px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Data</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{width:'200px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{width:'200px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{display:'flex',marginLeft:'100px',marginTop:'20px'}}>
    <Stack spacing={2} direction="row">
     
      <Button variant="contained">ADD ITEMS</Button>
      <Button variant="contained">UPDATE STOCK</Button>
      
     
    </Stack>
    </div>
    <div style={{marginLeft:'10px',height:'50px'}}>
    <Stack spacing={0} direction="row">
     
    <Button variant="outlined" disabled>STOCK VALUE<br/>25000 </Button>
    
     
    </Stack>
    </div>
    <div>
    <Box sx={{width:'200px'}}>
      <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">status</InputLabel>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </Box>
    </div>
    </div>
    <div style={{marginTop:'20px'}}>
    <TableContainer component={Paper}>
    
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          
          <TableRow>
            <StyledTableCell align="right">ITEM NAME</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">QUANTITY</StyledTableCell>
            <StyledTableCell align="right">UNIT</StyledTableCell>
            <StyledTableCell align="right">PRICE</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            
          </TableRow>
         
        </TableHead>
        <TableBody>
          {data.map((row) => (
            // <StyledTableRow key={row.itemid}>
                    <TableRow>
              
              <StyledTableCell align="right">{row.itemname}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">1</StyledTableCell>
              <StyledTableCell align="right">{row.unit}</StyledTableCell>
              <StyledTableCell align="right">{row.itemprice}</StyledTableCell>
              <StyledTableCell align="right">{row.itemtype}</StyledTableCell>
              <StyledTableCell align="right">      <Button onClick={()=>clickhandler(row)}>Add to cart</Button> </StyledTableCell>
              </TableRow>
                   ))}
            {/* </StyledTableRow> */}
     
        </TableBody>
      </Table>
      
    </TableContainer>
    
    <div style={{marginLeft:'70%'}}>
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </div>
    </div>
    </>
  );
}