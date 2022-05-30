
import './App.css';
import axios from "axios"
import Form from './Components/Form';
import ShowTable from './Components/Table'
import React, { useEffect, useState } from 'react';
import data from "./data.json"
function App() {
  const [details,setDetails] = React.useState(data.data)
  const [flag,setFlag] = useState(false)
  const [page,setPage] = useState(1)

useEffect(() => {
  axios.get(`http://localhost:3004/data?_page=${page}&_limit=5`)
  .then((res)=>{
    setDetails(res.data)
   
})

  return () => {
    
  }
}, [page,flag])



  let updateDetails =(value)=>{
    axios.post("http://localhost:3004/data",{
        name:value.name,
        department:value.department,
        salary:value.salary,
        address:value.address,
        maritalstate:value.maritalstate,
        profilePhoto:"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
    }).then((res)=>( setFlag(!flag)))
  }
    let sbySalary=(s)=>{
      
       if(s==1){
        details.sort((a,b)=>(Number(b.salary)-Number(a.salary)))
         setDetails([...details])
       }else{
        details.sort((a,b)=>(Number(a.salary)-Number(b.salary)))
         setDetails([...details])
      }
    }
    
    let filterBy =(value)=>{
      switch(value){
        case "I":
          let it = (data.data).filter((el)=>(el.department === "IT"));
          setDetails(it);
          break;

          case "M":
          let m = (data.data).filter((el)=>(el.department === "Mechanical"));
          setDetails(m);
          break;
          case "C":
          let c = (data.data).filter((el)=>(el.department === "Civil"));
          setDetails(c);
          break;

          case "S":
            let s = (data.data).filter((el)=>(el.department === "Software Developer"));
          setDetails(s);
          break;

          default:setFlag(!flag)
          
      }
    }
    let deleteDetail=(value)=>{
      axios.delete(`http://localhost:3004/data/${value}`)
      .then((res)=>(setFlag(!flag)))
    }
  
  return (
    
    <div className="App">
     <Form updateDetails={updateDetails}/>
     <div className='button_div'>
     <button className='btn' onClick={()=>{setPage(1)}}>1</button>
       <button className='btn' onClick={()=>{setPage(2)}}>2</button>
       <button className='btn' onClick={()=>{setPage(3)}}>3</button>
     </div>
     
     <div className='small_div'> 
         <div>Sort by Salary
         <button className='button' onClick={()=>{sbySalary(1)}}>high to low</button>
         <button className='button' onClick={()=>{sbySalary(0)}} >low to high</button>
         </div>
         <div>Filter by Department
         <select onChange={(e)=>{filterBy(e.target.value)}}>
           <option value="I">IT</option>
           <option value="M">Mechanical</option>
           <option value="S">Software Developer</option>
           <option value="C">Civil</option>
           <option value="SA">Show All</option>
         </select>
         
         </div>
       </div>
      
     <ShowTable details={details} deleteDetail={deleteDetail}/>
       
    </div>
  );
}

export default App;
