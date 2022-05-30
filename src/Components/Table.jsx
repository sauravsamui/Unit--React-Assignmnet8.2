import React from 'react'
import styles from "./table.module.css"
import TableItem from './TableItem'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const ShowTable = ({details,deleteDetail}) => {
  
  return (
    <>
     <div className={styles.table_div}>
       
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Employee Details</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th >Age</Th>
        <Th>Address</Th>
        <Th>Department</Th>
        <Th>Salary</Th>
        <Th> Marital State</Th>
        <Th>Profile Photo</Th>
        <Th>Delete</Th>
       
      </Tr>
    </Thead>
    <Tbody>
    {details.map((item)=>(
        <TableItem key={item.id} item={item} deleteDetail={deleteDetail}/>
      ))}
     
    </Tbody>
    
  </Table>
</TableContainer>
   
      
      
    </div>
    </>
  )
}

export default ShowTable