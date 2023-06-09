import React from 'react'

const Popup = ({ showModal, onClose }) => {

  const popup= {
    position: "fixed",
    top:" 0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
  // .popup:target {
  //   display: flex,
  // }
  
  const popupC ={
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius:" 5px",
    maxWidth: "400px",
    textAlign: "center"
  }
  
  const closeButton ={
    marginTop: "10px"}
  



  return (
    <div style={popup}>
      <div style={popupC}>
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button style={closeButton} onClick={onClose} >Close</button>
      </div>
    </div>
  )
}

export default Popup