import React, { useState } from 'react';
import { Card, Typography, Button, Modal } from 'antd';
import { issues } from '../constants'; // Import the issues array from the correct path

const assignedContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'space-between',
  padding: '16px',
  backgroundColor: '#f5f5f5', // Light background color
};

const assignedCardStyle = {
  flex: '1 1 calc(33.33% - 16px)', // Adjust width to fit three cards side by side with gap
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
  const [expandedIssue, setExpandedIssue] = useState(null);

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

  const handleExpandAddress = (index) => {
    setExpandedIssue(expandedIssue === index ? null : index);
  };

  return (
    <div>
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

// const assignedContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   gap: '16px',
//   justifyContent: 'space-between',
//   padding: '16px',
//   backgroundColor: '#f5f5f5', // Light background color
// };

// const assignedCardStyle = {
//   flex: '1 1 calc(33.33% - 16px)', // Adjust width to fit three cards side by side with gap
//   border: '1px solid black', // Add border
//   borderRadius: '8px',
//   backgroundColor: 'rgba(128, 0, 128, 0.1)', // Purple color with opacity
//   padding: '16px',
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
//   border: 'none',
//   borderRadius: '4px',
//   padding: '8px 16px',
//   marginTop: '8px',
// };

// const inputStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   border: '1px solid black', // Add border
//   borderRadius: '4px',
//   padding: '8px',
//   marginTop: '8px',
// };

// const titleStyle = {
//   color: 'black',
//   marginBottom: '16px',
// };

// const textStyle = {
//   color: 'black',
// };

// const StaffLogin = () => {
//   const [selectedImages, setSelectedImages] = useState(Array(issues.length).fill(null));
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedIssue, setSelectedIssue] = useState(null);
//   const [expandedIssue, setExpandedIssue] = useState(null);

//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newImages = [...selectedImages];
//       newImages[index] = URL.createObjectURL(file);
//       setSelectedImages(newImages);
//     }
//   };

//   const handleCloseTicket = (index) => {
//     const newImages = [...selectedImages];
//     newImages[index] = null;
//     setSelectedImages(newImages);
//     console.log(`Ticket ${index + 1} closed!`);
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
//     <div>
//       <Typography.Title level={2} style={{ marginTop: '32px' }}>Assigned Tickets</Typography.Title>
//       <div style={assignedContainerStyle}>
//         {issues.map((issue, index) => (
//           <Card
//             key={index}
//             hoverable
//             style={assignedCardStyle}
//             bodyStyle={{
//               padding: 16,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//             }}
//           >
//             <Typography.Title level={4} style={titleStyle}>{issue.buildingName}</Typography.Title>
//             <div>
//             <h3 style={textStyle}> <strong>Building Name:</strong> {issue.buildingName}</h3>
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
//             <input type="file" className="bg-purple-800 text-white-400 rounded-md mt-2" style={inputStyle} onChange={(e) => handleImageChange(e, index)} />
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
//               style={buttonStyle}
//               disabled={!selectedImages[index]} // Disable button if no image is uploaded
//               onClick={() => handleCloseTicket(index)}
//             >
//               Close Ticket
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

// export default StaffLogin;

