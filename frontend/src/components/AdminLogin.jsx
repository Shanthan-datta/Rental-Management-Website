import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6

import { Card, Typography, Button, Modal,Select  } from 'antd';
import { products} from '../constants'; // Import the issues and products array from the correct path
import PopularProductCard from '../components/PopularProductCard';
import { useEffect } from 'react';
import axios from 'axios';


const { Option } = Select;


const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
};

const cardStyle = {
  flex: '0 0 calc(50% - 16px)', // Adjust width to fit two cards side by side with margin
  border: '1px solid black', // Add border
  borderRadius: '8px',
  backgroundColor: 'white',
  padding: '16px',
};

const buttonStyle = {
  backgroundColor: 'purple',
  color: 'white',
  transition: 'background-color 0.3s ease-in-out',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 16px',
  marginTop: '8px',
};

const titleStyle = {
  color: 'black',
  marginBottom: '16px',
};

const textStyle = {
  color: 'black',
};

const AdminLogin = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
      const fetchTickets = async () => {
          try {
              const response = await axios.get('http://localhost:1000/api/allList/allTickets');
              setTickets(response.data.ticketslist);
          } catch (error) {
              console.error("There was an error fetching the tickets!", error);
          }
      };

      fetchTickets();
  }, []);
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [expandedIssue, setExpandedIssue] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleButtonClick = () => {
    navigate('/Newbuilding');
  };

  const handleAssignTicket = (issue) => {
    setSelectedIssue(issue);
    setDropdownVisible(true);
  };

  const handleStaffSelect = (staff) => {
    setSelectedStaff(staff);
    setDropdownVisible(false);
    setModalVisible(true);
  };

  const handleModalOk = () => {
    console.log(`Assigning ticket for ${selectedIssue.issueName} to ${selectedStaff}`);
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleExpandAddress = (index) => {
    setExpandedIssue(expandedIssue === index ? null : index);
  };

  return (
    <div className="max-container max-sm:mt-12 p-4">
      <section id="products">
        <div className="flex flex-col justify-start gap-5">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-palanquin font-bold">
              Available <span className="text-purple-800">Flats</span>
            </h2>
            <button
              onClick={handleButtonClick}
              className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
            >
              Add Building
            </button>
          </div>
        </div>
        <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <Typography.Title level={2} style={{ marginTop: '32px' }}>Pending Tickets and Issues</Typography.Title>

      <div style={cardContainerStyle}>
        {tickets.map((issue, index) => (
          <Card
            key={index}
            hoverable
            style={cardStyle}
            bodyStyle={{
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography.Title level={4} style={titleStyle}>{issue.buildingName}</Typography.Title>
            <div>
              <h3 style={textStyle}> <strong>Building Name:</strong> {issue.buildingName}</h3>
              <p style={textStyle}><strong>Flat No:</strong> {issue.flatNo}</p>
              <p style={textStyle}><strong>Contact No:</strong> {issue.contactNo}</p>
              <p style={textStyle}><strong>Issue:</strong> {issue.issue}</p>
              {(issue.street || issue.city || issue.postalCode) && (
                <p style={textStyle}>
                 
                  <span
                    style={{
                      display: 'inline-block',
                      maxWidth: expandedIssue === index ? 'none' : '150px', // Adjust max-width as needed
                      whiteSpace: expandedIssue === index ? 'normal' : 'nowrap',
                      overflow: expandedIssue === index ? 'visible' : 'hidden',
                      textOverflow: expandedIssue === index ? 'clip' : 'ellipsis',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleExpandAddress(index)}
                  >
                    {`${issue.street}, ${issue.city}, ${issue.postalCode}`}
                  </span>
                </p>
              )}
            </div>
            <Button
              type="primary"
              className="mt-2"
              style={buttonStyle}
              onClick={() => handleAssignTicket(issue)}
            >
              Assign Ticket
            </Button>
          </Card>
        ))}
      </div>

      <Modal
        title="Assign Ticket"
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Typography.Paragraph>
          Are you sure you want to assign the ticket for {selectedIssue && selectedIssue.issueName} to {selectedStaff}?
        </Typography.Paragraph>
      </Modal>

      <Modal
        title="Select Staff Member"
        open={dropdownVisible}
        onCancel={() => setDropdownVisible(false)}
        footer={null}
      >
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Select a staff member"
          optionFilterProp="children"
          onChange={handleStaffSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="Staff Member 1">Staff Member 1</Option>
          <Option value="Staff Member 2">Staff Member 2</Option>
          <Option value="Staff Member 3">Staff Member 3</Option>
          <Option value="Staff Member 4">Staff Member 4</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default AdminLogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { Card, Typography, Button, Modal } from 'antd';
// import { products, issues } from '../constants'; // Import the issues and products array from the correct path
// import PopularProductCard from '../components/PopularProductCard';

// const cardContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
// };

// const cardStyle = {
//   flex: '0 0 calc(50% - 16px)', // Adjust width to fit two cards side by side with margin
//   border: '1px solid black', // Add border
//   borderRadius: '8px',
//   backgroundColor: 'white',
//   padding: '16px',
// };

// const buttonStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   transition: 'background-color 0.3s ease-in-out',
//   border: 'none',
//   borderRadius: '4px',
//   padding: '8px 16px',
//   marginTop: '8px',
// };

// const titleStyle = {
//   color: 'black',
//   marginBottom: '16px',
// };

// const textStyle = {
//   color: 'black',
// };

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedIssue, setSelectedIssue] = useState(null);
//   const [expandedIssue, setExpandedIssue] = useState(null);

//   const handleButtonClick = () => {
//     navigate('/Newbuilding');
//   };

//   const handleAssignTicket = (issue) => {
//     setSelectedIssue(issue);
//     setModalVisible(true);
//   };

//   const handleModalOk = () => {
//     console.log(`Assigning ticket for ${selectedIssue.issueName}`);
//     setModalVisible(false);
//   };

//   const handleModalCancel = () => {
//     setModalVisible(false);
//   };

//   const handleExpandAddress = (index) => {
//     setExpandedIssue(expandedIssue === index ? null : index);
//   };

//   return (
//     <div className="max-container max-sm:mt-12 p-4">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <Typography.Title level={2} style={{ marginTop: '32px' }}>Pending Tickets and Issues</Typography.Title>

//       <div style={cardContainerStyle}>
//         {issues.map((issue, index) => (
//           <Card
//             key={index}
//             hoverable
//             style={cardStyle}
//             bodyStyle={{
//               padding: 16,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//             }}
//           >
//             <Typography.Title level={4} style={titleStyle}>{issue.buildingName}</Typography.Title>
//             <div>
//               <h3 style={textStyle}> <strong>Building Name:</strong> {issue.buildingName}</h3>
//               <p style={textStyle}><strong>Flat No:</strong> {issue.flatNo}</p>
//               <p style={textStyle}><strong>Contact No:</strong> {issue.contactNo}</p>
//               <p style={textStyle}><strong>Issue:</strong> {issue.issue}</p>
//               {(issue.street || issue.city || issue.postalCode) && (
//                 <p style={textStyle}>
                 
//                   <span
//                     style={{
//                       display: 'inline-block',
//                       maxWidth: expandedIssue === index ? 'none' : '150px', // Adjust max-width as needed
//                       whiteSpace: expandedIssue === index ? 'normal' : 'nowrap',
//                       overflow: expandedIssue === index ? 'visible' : 'hidden',
//                       textOverflow: expandedIssue === index ? 'clip' : 'ellipsis',
//                       cursor: 'pointer',
//                     }}
//                     onClick={() => handleExpandAddress(index)}
//                   >
//                     {`${issue.street}, ${issue.city}, ${issue.postalCode}`}
//                   </span>
//                 </p>
//               )}
//             </div>
//             <Button
//               type="primary"
//               className="mt-2"
//               style={buttonStyle}
//               onClick={() => handleAssignTicket(issue)}
//             >
//               Assign Ticket
//             </Button>
//           </Card>
//         ))}
//       </div>

//       <Modal
//         title="Assign Ticket"
//         open={modalVisible}
//         onOk={handleModalOk}
//         onCancel={handleModalCancel}
//       >
//         <Typography.Paragraph>
//           Are you sure you want to assign the ticket for {selectedIssue && selectedIssue.issueName}?
//         </Typography.Paragraph>
//       </Modal>
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { Card, Typography, Button, Modal } from 'antd';
// import { products, issues } from '../constants'; // Import the issues and products array from the correct path
// import PopularProductCard from '../components/PopularProductCard';

// const cardContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
// };

// const cardStyle = {
//   flex: '0 0 calc(50% - 16px)', // Adjust width to fit two cards side by side with margin
//   border: '1px solid black', // Add border
//   borderRadius: '8px',
//   backgroundColor: 'white',
//   padding: '16px',
// };

// const buttonStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   transition: 'background-color 0.3s ease-in-out',
//   border: 'none',
//   borderRadius: '4px',
//   padding: '8px 16px',
//   marginTop: '8px',
// };

// const titleStyle = {
//   color: 'black',
//   marginBottom: '16px',
// };

// const textStyle = {
//   color: 'black',
// };

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedIssue, setSelectedIssue] = useState(null);
//   const [expandedIssue, setExpandedIssue] = useState(null);

//   const handleButtonClick = () => {
//     navigate('/Newbuilding');
//   };

//   const handleAssignTicket = (issue) => {
//     setSelectedIssue(issue);
//     setModalVisible(true);
//   };

//   const handleModalOk = () => {
//     console.log(`Assigning ticket for ${selectedIssue.issueName}`);
//     setModalVisible(false);
//   };

//   const handleModalCancel = () => {
//     setModalVisible(false);
//   };

//   const handleExpandAddress = (index) => {
//     setExpandedIssue(expandedIssue === index ? null : index);
//   };

//   return (
//     <div className="max-container max-sm:mt-12 p-4">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <Typography.Title level={2} style={{ marginTop: '32px' }}>Pending Tickets and Issues</Typography.Title>

//       <div style={cardContainerStyle}>
//         {issues.map((issue, index) => (
//           <Card
//             key={index}
//             hoverable
//             style={cardStyle}
//             bodyStyle={{
//               padding: 16,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//             }}
//           >
//             <Typography.Title level={4} style={titleStyle}>{issue.buildingName}</Typography.Title>
//             <div>
//               <h3 style={textStyle}> <strong>Building Name:</strong>{issue.buildingName}</h3>
//               <p style={textStyle}><strong>Flat No:</strong>{issue.flatNo}</p>
//               <p style={textStyle}><strong>Issue:</strong>{issue.issue}</p>
//               {(issue.street || issue.city || issue.postalCode )&& (
//                 <p style={textStyle}>
//                   <strong>Address:</strong>
//                   <span
//                     style={{
//                       display: 'inline-block',
//                       maxWidth: expandedIssue === index ? 'none' : '150px', // Adjust max-width as needed
//                       whiteSpace: expandedIssue === index ? 'normal' : 'nowrap',
//                       overflow: expandedIssue === index ? 'visible' : 'hidden',
//                       textOverflow: expandedIssue === index ? 'clip' : 'ellipsis',
//                       cursor: 'pointer',
//                     }}
//                     onClick={() => handleExpandAddress(index)}
//                   >
//                     {issue.street}
//                   </span>
//                 </p>
//               )}
//             </div>
//             <Button
//               type="primary"
//               className="mt-2"
//               style={buttonStyle}
//               onClick={() => handleAssignTicket(issue)}
//             >
//               Assign Ticket
//             </Button>
//           </Card>
//         ))}
//       </div>

//       <Modal
//         title="Assign Ticket"
//         open={modalVisible}
//         onOk={handleModalOk}
//         onCancel={handleModalCancel}
//       >
//         <Typography.Paragraph>
//           Are you sure you want to assign the ticket for {selectedIssue && selectedIssue.issueName}?
//         </Typography.Paragraph>
//       </Modal>
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { Card, Typography, Button, Modal } from 'antd';
// import { products, issues } from '../constants'; // Import the issues and products array from the correct path
// import PopularProductCard from '../components/PopularProductCard';

// const cardContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
// };

// const cardStyle = {
//   flex: '0 0 calc(50% - 16px)', // Adjust width to fit two cards side by side with margin
//   border: '1px solid black', // Add border
//   borderRadius: '8px',
//   backgroundColor: 'white',
//   padding: '16px',
// };

// const buttonStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   transition: 'background-color 0.3s ease-in-out',
//   border: 'none',
//   borderRadius: '4px',
//   padding: '8px 16px',
//   marginTop: '8px',
// };

// const titleStyle = {
//   color: 'black',
//   marginBottom: '16px',
// };

// const textStyle = {
//   color: 'black',
// };

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleButtonClick = () => {
//     navigate('/Newbuilding');
//   };

//   const handleAssignTicket = (issue) => {
//     setSelectedIssue(issue);
//     setModalVisible(true);
//   };

//   const handleModalOk = () => {
//     console.log(`Assigning ticket for ${selectedIssue.issueName}`);
//     setModalVisible(false);
//   };

//   const handleModalCancel = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div className="max-container max-sm:mt-12 p-4">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <Typography.Title level={2} style={{ marginTop: '32px' }}>Pending Tickets and Issues</Typography.Title>

//       <div style={cardContainerStyle}>
//         {issues.map((issue, index) => (
//           <Card
//             key={index}
//             hoverable
//             style={cardStyle}
//             bodyStyle={{
//               padding: 16,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//             }}
//           >
//             <Typography.Title level={4} style={titleStyle}>{issue.buildingName}</Typography.Title>
//             <div>
//               <h3 style={textStyle}>{issue.issueName}</h3>
//               <p style={textStyle}>{issue.description}</p>
//             </div>
//             <Button
//               type="primary"
//               className="mt-2"
//               style={buttonStyle}
//               onClick={() => handleAssignTicket(issue)}
//             >
//               Assign Ticket
//             </Button>
//           </Card>
//         ))}
//       </div>

//       <Modal
//         title="Assign Ticket"
//         open={modalVisible}
//         onOk={handleModalOk}
//         onCancel={handleModalCancel}
//       >
//         <Typography.Paragraph>
//           Are you sure you want to assign the ticket for {selectedIssue && selectedIssue.issueName}?
//         </Typography.Paragraph>
//       </Modal>
//     </div>
//   );
// };

//export default AdminLogin;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { products } from "../constants";
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/newbuilding');
//   };

//   const handleAssignTicket = (ticketId) => {
//     // Handle the assign ticket logic here
//     console.log(`Assigning ticket ${ticketId}`);
//   };

//   return (
//     <div className="max-container max-sm:mt-12 p-4">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <section className="flex flex-col lg:flex-row mt-16 gap-4">
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64 lg:h-auto max-h-80">
//           <h3 className="text-xl font-bold">Pending Tickets</h3>
//           <div className="overflow-y-auto max-h-56">
//             {/* Add your pending tickets content here */}
//             {Array.from(Array(10).keys()).map((index) => (
//               <div key={index} className="flex justify-between items-center mb-2">
//                 <p>Pending Ticket {index + 1}</p>
//                 <button
//                   onClick={() => handleAssignTicket(index + 1)}
//                   className="bg-purple-500 text-white py-1 px-3 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//                 >
//                   Assign Ticket
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64 lg:h-auto max-h-80">
//           <h3 className="text-xl font-bold">Completed Tickets</h3>
//           <div className="overflow-y-auto max-h-56">
//             {/* Add your completed tickets content here */}
//             {Array.from(Array(10).keys()).map((index) => (
//               <p key={index}>Completed Ticket {index + 1}</p>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminLogin;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { products } from "../constants";
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/newbuilding');
//   };

//   return (
//     <div className="max-container max-sm:mt-12 p-4">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <section className="flex flex-col lg:flex-row mt-16 gap-4">
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64 lg:h-auto max-h-80">
//           <h3 className="text-xl font-bold">Pending Tickets</h3>
//           <div className="overflow-y-auto max-h-56">
//             {/* Add your pending tickets content here */}
//             {Array.from(Array(10).keys()).map((index) => (
//               <p key={index}>Pending Ticket {index + 1}</p>
//             ))}
//           </div>
//         </div>
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64 lg:h-auto max-h-80">
//           <h3 className="text-xl font-bold">Completed Tickets</h3>
//           <div className="overflow-y-auto max-h-56">
//             {/* Add your completed tickets content here */}
//             {Array.from(Array(10).keys()).map((index) => (
//               <p key={index}>Completed Ticket {index + 1}</p>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminLogin;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { products } from "../constants";
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/newbuilding');
//   };

//   return (
//     <div className="max-container max-sm:mt-12">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 w-120 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <section className="flex mt-16 gap-4">
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64">
//           <h3 className="text-xl font-bold">Pending Tickets</h3>
//           {/* Add your pending tickets content here */}
//         </div>
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64">
//           <h3 className="text-xl font-bold">Completed Tickets</h3>
//           {/* Add your completed tickets content here */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminLogin;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { products } from "../constants";
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/Newbuilding');
//   };

//   return (
//     <div>
//       <section id="products" className="max-container max-sm:mt-12">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 w-120 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminLogin;

// import { products } from "../constants"
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   return (
//     <div>
//       <section id="products"
//        className="max-container max-sm:mt-12
//        ">
//         <div className="flex flex-col
//         justify-start gap-5">
//           <h2 className="text-4xl font-palanquin
//           font-bold">Available 
//           <span className="text-purple-800">Flats </span>
//           </h2>
          


//         </div>
//         <div className="flex mt-16 w-120 flex-row  flex-shrink-0 gap-4 py-2 overflow-x-auto 
//         scrollbar-webkit scrollbar-thin
//           ">
//           {products.map((product)=>(
//             <PopularProductCard key={product.name}
//             {...product}/>
//           ))}


//         </div>

//       </section>

//     </div>
//   )
// }

// export default AdminLogin