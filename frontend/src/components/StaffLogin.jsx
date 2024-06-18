import React, { useState } from 'react';
import { Card, Typography, Button, Modal } from 'antd';
import { issues } from '../constants'; // Import the issues array from the correct path

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
};

const assignedContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
  height: '400px', // Set a fixed height for the container
  overflowY: 'auto', // Enable vertical scrollbar if needed
  border: '1px solid black', // Add border
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5', // Light background color
};

const cardStyle = {
  flex: '0 0 calc(50% - 16px)', // Adjust width to fit two cards side by side with margin
  border: '1px solid black', // Add border
  borderRadius: '8px',
  backgroundColor: 'white',
  padding: '16px',
};

const assignedCardStyle = {
  flex: '0 0 calc(33.33% - 8px)', // Adjust width to fit three cards side by side with margin
  border: '1px solid black', // Add border
  borderRadius: '8px',
  backgroundColor: 'rgba(128, 0, 128, 0.1)', // Purple color with opacity
  padding: '16px',
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '100px', // Set maximum width for the image
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

const inputStyle = {
  backgroundColor: 'purple',
  color: 'white',
  border: '1px solid black', // Add border
  borderRadius: '4px',
  padding: '8px',
  marginTop: '8px',
};

const titleStyle = {
  color: 'black',
  marginBottom: '16px',
};

const textStyle = {
  color: 'black',
};

const StaffLogin = () => {
  const [selectedImages, setSelectedImages] = useState(Array(issues.length).fill(null));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...selectedImages];
      newImages[index] = URL.createObjectURL(file);
      setSelectedImages(newImages);
    }
  };

  const handleCloseTicket = (index) => {
    const newImages = [...selectedImages];
    newImages[index] = null;
    setSelectedImages(newImages);
    console.log(`Ticket ${index + 1} closed!`);
  };

  const handleAssignTicket = (issue) => {
    setSelectedIssue(issue);
    setModalVisible(true);
  };

  const handleModalOk = () => {
    console.log(`Assigning ticket for ${selectedIssue.issueName}`);
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Typography.Title level={2}>Pending Tickets and Issues</Typography.Title>

      <div style={cardContainerStyle}>
        {issues.map((issue, index) => (
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
              <h3 style={textStyle}>{issue.issueName}</h3>
              <p style={textStyle}>{issue.description}</p>
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

      <Typography.Title level={2} style={{ marginTop: '32px' }}>Assigned Tickets</Typography.Title>
      <div style={assignedContainerStyle}>
        {issues.map((issue, index) => (
          <Card
            key={index}
            hoverable
            style={assignedCardStyle}
            bodyStyle={{
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography.Title level={4} style={titleStyle}>{issue.buildingName}</Typography.Title>
            <div>
              <h3 style={textStyle}>{issue.issueName}</h3>
              <p style={textStyle}>{issue.description}</p>
            </div>
            <input type="file" className="bg-purple-800 text-white-400 rounded-md mt-2" style={inputStyle} onChange={(e) => handleImageChange(e, index)} />
            {selectedImages[index] && (
              <img
                alt={`uploaded-${index}`}
                src={selectedImages[index]}
                style={imgStyle}
              />
            )}
            <Button
              type="primary"
              className="mt-2"
              style={buttonStyle}
              disabled={!selectedImages[index]} // Disable button if no image is uploaded
              onClick={() => handleCloseTicket(index)}
            >
              Close Ticket
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
          Are you sure you want to assign the ticket for {selectedIssue && selectedIssue.issueName}?
        </Typography.Paragraph>
      </Modal>
    </div>
  );
};

export default StaffLogin;


// import React, { useState } from 'react';
// import { Card, Typography, Button, Modal } from 'antd';
// import { issues } from '../constants'; // Import the issues array from the correct path

// const cardContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
// };

// const cardStyle = {
//   width: 'calc(50% - 8px)', // Adjust width to fit two cards side by side with margin
// };

// const imgStyle = {
//   width: '100%',
//   height: 'auto',
//   maxWidth: '100px', // Set maximum width for the image
// };

// const buttonStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   transition: 'background-color 0.3s ease-in-out',
// };

// const StaffLogin = () => {
//   const [selectedImages, setSelectedImages] = useState(Array(issues.length).fill(null));
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newImages = [...selectedImages];
//       newImages[index] = URL.createObjectURL(file);
//       setSelectedImages(newImages);
//     }
//   };

//   const handleCloseTicket = (index) => {
//     // Perform ticket closing logic here, e.g., send API request, update state, etc.
//     console.log(`Ticket ${index + 1} closed!`);
//   };

//   const handleAssignTicket = (issue) => {
//     setSelectedIssue(issue);
//     setModalVisible(true);
//   };

//   const handleModalOk = () => {
//     // Perform ticket assigning logic here, e.g., open a modal, update state, etc.
//     console.log(`Assigning ticket for ${selectedIssue.issueName}`);
//     setModalVisible(false);
//   };

//   const handleModalCancel = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div>
//       <Typography.Title level={2}>Assigned Tickets</Typography.Title>
//       {/* Add content for assigned tickets below this heading */}

//       <Typography.Title level={2}>Pending Tickets and Issues</Typography.Title>

//       <div style={cardContainerStyle}>
//         {/* Issues Cards */}
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
//             <Typography.Title level={4}>{issue.buildingName}</Typography.Title>
//             <div>
//               <h3>{issue.issueName}</h3>
//               <p>{issue.description}</p>
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

//       {/* Modal for Assign Ticket */}
//       <Modal
//         title="Assign Ticket"
//         visible={modalVisible}
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
 
// export default StaffLogin;

// import React from 'react';
// import { Card, Typography, Button } from 'antd';
// import { issues } from '../constants'; // Import the issues array from the correct path

// const cardContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
// };

// const cardStyle = {
//   width: 'calc(50% - 8px)', // Adjust width to fit two cards side by side with margin
// };

// const buttonStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   transition: 'background-color 0.3s ease-in-out',
// };

// const StaffLogin = () => {
//   const handleAssignTicket = (issue) => {
//     // Perform ticket assigning logic here, e.g., open a modal, update state, etc.
//     console.log(`Assigning ticket for ${issue.issueName}`);
//   };

//   return (
//     <div>
//       <Typography.Title level={2}>Pending Tickets and Issues</Typography.Title>

//       <div style={cardContainerStyle}>
//         {/* Issues Cards */}
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
//             <Typography.Title level={4}>{issue.buildingName}</Typography.Title>
//             <div>
//               <h3>{issue.issueName}</h3>
//               <p>{issue.description}</p>
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
//     </div>
//   );
// };

// export default StaffLogin;

// import React, { useState } from 'react';
// import { Card, Flex, Typography, Button } from 'antd';
// import { issues } from '../constants'; // Import the issues array

// const cardContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
// };

// const cardStyle = {
//   width: 'calc(50% - 8px)', // Adjust width to fit two cards side by side with margin
// };

// const imgStyle = {
//   width: '100%',
//   height: 'auto',
//   maxWidth: '100px', // Set maximum width for the image
// };

// const StaffLogin = () => {
//   const [selectedImages, setSelectedImages] = useState(Array(issues.length).fill(null));

//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newImages = [...selectedImages];
//       newImages[index] = URL.createObjectURL(file);
//       setSelectedImages(newImages);
//     }
//   };

//   const handleCloseTicket = (index) => {
//     // Perform ticket closing logic here, e.g., send API request, update state, etc.
//     console.log(`Ticket ${index + 1} closed!`);
//   };

//   return (
//     <div>
//       <Typography.Title level={2}>Pending Tickets and Issues</Typography.Title>

//       <div style={cardContainerStyle}>
//         {/* Issues Cards */}
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
//             <Typography.Title level={4}>{issue.buildingName}</Typography.Title>
//             <div>
//               <h3>{issue.issueName}</h3>
//               <p>{issue.description}</p>
//             </div>
//             <input type="file" className="bg-purple-800 text-white-400 rounded-md mt-2" onChange={(e) => handleImageChange(e, index)} />
//             {selectedImages[index] && (
//               <img
//                 alt={`uploaded-${index}`}
//                 src={selectedImages[index]}
//                 style={imgStyle}
//               />
//             )}
//             <Button
//               type="primary"
//               className="mt-2"
//               disabled={!selectedImages[index]} // Disable button if no image is uploaded
//               onClick={() => handleCloseTicket(index)}
//             >
//               Close Ticket
//             </Button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StaffLogin;

