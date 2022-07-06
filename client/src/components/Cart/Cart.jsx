import  React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ButtonGroup from "@mui/material/ButtonGroup";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import {useNavigate} from "react-router-dom"
import { Modal } from '@mui/material';

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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Cart = () => {
  const [age, setAge] = React.useState('');
  const [page, setPage] = React.useState(2);
const navigate=useNavigate()
const [ismodelvisible,setIsmodelvisible]=useState(false)
  const [editdata,setEditdata]=useState({
    quantity:0,
  
})
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [total,setTotal]=useState(0)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const calcualateTotal=(data)=>{
    let totl=0
    console.log("data"+JSON.stringify(data))
      data.map((ele)=>{
          totl=totl+(parseInt(ele.quantity)*parseInt(ele.itemprice));
      })
      console.log(totl)
      setTotal(totl)
  
  }
  const deletedata=(id)=>{
    axios.delete(`http://localhost:4000/customer/delete/${id}`).then(response=>{
      alert("data deleted")
     
    }).catch(err=>{
      console.log(err)
    })
    
  }
const click1=(item)=>{
  setEditdata({
    
    quantity:item.quantity+1,
    _id:item._id
  })
 
}
const click2=(item)=>{
  setEditdata({
    
    quantity:item.quantity-1,
    _id:item._id
  })
  }
const handleChange = (event) => {
    setAge(event.target.value);
  };
const [data,setData]=useState([])
    useEffect(()=>{
     // console.log(count)
        axios.get(`http://localhost:4000/customer/getdata`).then(response=>{
            console.log(response.data)
            setData(response["data"].data)
            calcualateTotal(data)
    
        }
        ).catch(err=>{
            console.log(err)
        })
        
        
    },[data])
    useEffect(()=>{
      axios.put(`http://localhost:4000/customer/edit`,editdata).then(response=>{
        console.log("updated")
       
      }).catch(err=>{
        console.log(err)
      })
    },[editdata])
    const clickhandler=()=>{
      setIsmodelvisible(true)
    }
    const handlecancel=()=>{
      setIsmodelvisible(false)
    }
    const handleok=()=>{
    /*  axios.delete(`http://localhost:4000/customer/delete/${data._id}`).then(response=>{
    console.log("data deleted")
   
  }).catch(err=>{
    console.log(err)
  })*/
  alert(JSON.stringify(data))
  axios.post("http://localhost:4000/history/",data).then(res=>{
      console.log("data added")
      alert("data Added")
    }).catch(err=>{
      console.log(err)
    })
   // navigate("/history")
}
       
    
  return (
    <div><h2>Your Order is:</h2>
    <h1 style={{color:'red'}}>TOTAL BILL:{total}</h1>
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
            <StyledTableCell align="right"></StyledTableCell>
            
          </TableRow>
         
        </TableHead>
        <TableBody>
          {data.map((row) => (
            // <StyledTableRow key={row.itemid}>
                    <TableRow>
              
              <StyledTableCell align="right">{row.itemname}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={()=>click1(row)} >+</Button>
        <Button >{row.quantity}</Button>
         <Button onClick={()=>click2(row)}>-</Button>
      </ButtonGroup>
              <StyledTableCell align="right">{row.unit}</StyledTableCell>
              <StyledTableCell align="right">{row.itemprice}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>deletedata(row._id)}>Remove Item</Button></StyledTableCell>
              
              </TableRow>
                   ))}
            {/* </StyledTableRow> */}
     
        </TableBody>
      </Table>
      
    </TableContainer>
    <Modal
        open={ismodelvisible}
        onClose={handlecancel}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <p>Do You want to confirm</p>
        <Button onClick={handlecancel}>Cancel</Button>
        <Button onClick={handleok}>CONFIRM</Button>
        </Box>
       
      </Modal>
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
    <div style={{marginLeft:'10%'}}>
<Button variant="contained" onClick={clickhandler}>Proceed To PAYMENT</Button>
    </div>
    </div>
    </div>
  )
}

export default Cart