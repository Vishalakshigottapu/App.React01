import React from 'react'

function Doctorcard({name,age,specialization,gender}) {
  return (
    <div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFA6SM6AucvA8cvpG4XfQrHydtxffZ4YLfYffXTxHtZQ&s=10" alt="" />
        </div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button>View Details</button>
    </div>
  )
}
// props: props is a immutable objects.It is used to pass from parent to child class
//Destructuring: It is a way to extract values from objects or arrays and assign them to variables in a more concise and readable manner.

export default Doctorcard