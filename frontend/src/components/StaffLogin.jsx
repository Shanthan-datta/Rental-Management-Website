

import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Staff from './Staff';

const StaffLogin = () => {
    const [TicketValue, setTicket] = useState([]);

    const CreateTicket = ticket => {
        setTicket([...TicketValue, { id: uuidv4(), task: ticket, isEditing: false }]);
    };

    const deleteTicket = (id) => {
        setTicket(TicketValue.filter(ticket => ticket.id !== id));
    };

    return (
        <div className='container bg-pink-300 mt-20 p-8 rounded-md'>
            <Form CreateTicket={CreateTicket} />
            {
                TicketValue.map((ticket, idx) => (
                    <Staff task={ticket} key={idx} deleteTicket={deleteTicket} />
                ))
            }
        </div>
    );
}

export default StaffLogin;


// import React, { useState } from 'react'
// import Form from './Form'
// import { v4 as uuidv4 } from 'uuid';
// import Staff from './Staff';



// const StaffLogin = () => {
//     const[TicketValue,setTicket]=useState([]);

//     const CreateTicket = ticket => {
//         setTicket([...TicketValue,{id:uuidv4(),task:ticket,isEditing:false}])
//     }
//     const deleteTicket=(id) => {
//       setTicket(TicketValue.filter(ticket=>ticket.id!==id))
//     }
//   return (
//     <div className='container bg-pink-300 mt-20 p-8 rounded-md'>

//         <Form CreateTicket = {CreateTicket}/>
//         {
//           TicketValue.map((ticket,idx) => (

//             <Staff task={ticket} key={idx} deleteTicket ={deleteTicket}/>
//           ))
//         }

//     </div>
//   )
// }

// export default StaffLogin
