import  React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
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


const HisTory= () => {
  const [age, setAge] = React.useState('');
  const [page, setPage] = React.useState(2);
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
 
const handleChange = (event) => {
    setAge(event.target.value);
  };
const [data,setData]=useState([])
    useEffect(()=>{
     // console.log(count)
        axios.get(`http://localhost:4000/history/getdata`).then(response=>{
            console.log(response.data)
            setData(response["data"].data)
            calcualateTotal(data)
    
        }
        ).catch(err=>{
            console.log(err)
        })
        
        
    },[data])
   
  return (
    <div><h2>Order History:</h2>
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
            
          </TableRow>
         
        </TableHead>
        <TableBody>
          {data.map((row) => (
            // <StyledTableRow key={row.itemid}>
                    <TableRow>
              
              <StyledTableCell align="right">{row.itemname}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.unit}</StyledTableCell>
              <StyledTableCell align="right">{row.itemprice}</StyledTableCell>
              
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
    </div>
  )
}

export default HisTory