import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TableItem = ({item,deleteDetail}) => {
  return (
      <>
    <Tr key={item.id}>
    <Td>{item.name}</Td>
    <Td>{item.age}</Td>
    <Td>{item.address}</Td>
    <Td>{item.department}</Td>
    <Td>{item.salary}</Td>
    <Td>{item.maritalstate}</Td>
    <Td><img width="80px" height="50px" src={item.profilePhoto} alt="" /></Td>
    <Td><button onClick={()=>{deleteDetail(item.id)}}>Delete</button></Td>
  </Tr>
  </>
    
  )
}

export default TableItem