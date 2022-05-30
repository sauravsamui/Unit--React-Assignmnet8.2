import React from 'react'
import styles from "./form.module.css"
import { useRef } from 'react'
const Form = ({updateDetails}) => {
   
    const [employee,setEmployee] = React.useState({
        name:"",
        age:"",
        address:"",
        department:"IT",
        salary:"",
        maritalstate:"Unmarried",
        profilePhoto:""
    });
   
     const ref = React.useRef()
    
let handleChange=(e)=>{
    let {checked,type,name,value,files}=e.target;
    
    if(type==="checkbox"){
        if(checked==true){
            setEmployee({
                ...employee,
                    [name]:"Married"
                }
            )
        }
       
    }else if(type==="file"){
        setEmployee({
            ...employee,
                [name]:files
            }
        )
    }
    else{
        setEmployee({
            ...employee,
                [name]:value
            }
        )
    }
}


let handleSubmit=(e)=>{
    e.preventDefault();
   
    if(!employee.name || !employee.age || !employee.address || !employee.salary ){
        ref.current.focus()
        return}
        else{
            updateDetails(employee)
            setEmployee({
              
                name:"",
                age:"",
                address:"",
                department:"IT",
                salary:"",
                maritalstate:"Unmarried",
                profilePhoto:""
            })
        }
       
    }
   



  return (
      <>
    <div className={styles.big_div}>
      {/* <img src={URL.createObjectURL(a)}/> */}
      <div className={styles.form_div}>
      <h1>Form</h1>
       
       <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input ref={ref} name="name" type="text" placeholder="Enter name.." value={employee.name}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Age: </label>
            <input  name='age' type="number" placeholder="Enter age.." value={employee.age}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Address: </label>
            <input name='address' type="text" placeholder="Enter Address.." value={employee.address}
            onChange={handleChange}
            />
        </div>
        <div>
        <label>Department: </label>
           <select name="department" id=""
           onChange={handleChange}
           >
               <option value="IT">IT</option>
               <option value="Mechanical">Mechanical</option>
               <option value="Software Developer">Software Developer</option>
               <option value="Civil">Civil</option>
           </select>
        </div>
        <div>
            <label>Salary: </label>
            <input name="salary" type="number" placeholder="Enter salary.." value={employee.salary}
             onChange={handleChange}
            />
        </div>
        <div>
            
            <input name='maritalstate' type="checkbox" 
             onChange={handleChange}
            />
            <label> :Marital state </label>
        </div>
        <div>
            <label> Profile Photo:  </label>
            <input name='profilePhoto' type="file" 
             onChange={handleChange}
            />
            
        </div>
           <button className='button'
           type='submit'>Submit</button>

       </form>




      </div>
    
    </div>
    
    </>
  )
}

export default Form