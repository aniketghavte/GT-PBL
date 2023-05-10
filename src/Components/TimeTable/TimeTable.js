import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './TimeTable.css'; 

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const TimeTable = () => {
  const [modalShow, setModalShow] = React.useState(false);
    // define an array of days of the week
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const classes = [  ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
    ];
    
    const data = [  [    { subject: 'Maths', teacher: 'Mr. A' },    { subject: 'Science', teacher: 'Ms. B' },    { subject: 'English', teacher: 'Mrs. C' },    { subject: 'History', teacher: 'Mr. D' },    { subject: 'Geography', teacher: 'Ms. E' },  ],
      [    { subject: 'Maths', teacher: 'Mr. A' },    { subject: 'Science', teacher: 'Ms. B' },    { subject: 'English', teacher: 'Mrs. C' },    { subject: 'History', teacher: 'Mr. D' },    { subject: 'Geography', teacher: 'Ms. E' },  ],
      [    { subject: 'Maths', teacher: 'Mr. A' },    { subject: 'Science', teacher: 'Ms. B' },    { subject: 'English', teacher: 'Mrs. C' },    { subject: 'History', teacher: 'Mr. D' },    { subject: 'Geography', teacher: 'Ms. E' },  ],
      [    { subject: 'Maths', teacher: 'Mr. A' },    { subject: 'Science', teacher: 'Ms. B' },    { subject: 'English', teacher: 'Mrs. C' },    { subject: 'History', teacher: 'Mr. D' },    { subject: 'Geography', teacher: 'Ms. E' },  ],
      [    { subject: 'Maths', teacher: 'Mr. A' },    { subject: 'Science', teacher: 'Ms. B' },    { subject: 'English', teacher: 'Mrs. C' },    { subject: 'History', teacher: 'Mr. D' },    { subject: 'Geography', teacher: 'Ms. E' },  ],
    ];


    const handleClickClass = (classes) => {
      setModalShow(true)
    }
  return (
    <div className='app__tt'>
      <h1 style={{color: "#141414", fontWeight: "500", marginTop: "2rem"}}>SE CS B TimeTable</h1>
      <h2 style={{color: "#141414", fontWeight: "400"}}>Created By</h2>
      <h3 style={{color: "#141414", fontWeight: "300"}}>Aniket Ghavte</h3>
      <h5 style={{color: "#141414", fontWeight: "300"}}>On, 11th May 2023</h5>
       <div style={{minWidth: "90%", maxWidth: "90%", backgroundColor: "#ffffff", height: "80%"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="tableBox tableIndex">
                  classes
                </div>
                <div className="tableBox tableIndex">
                  Class1
                </div>
                <div className="tableBox tableIndex">
                  Class2
                </div>
                <div className="tableBox tableIndex">
                  Class3
                </div>
                <div className="tableBox tableIndex">
                  Class4
                </div>
                <div className="tableBox tableIndex">
                  Class5
                </div>
            </div>

            {/* //DAYS */}

         
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="tableBox tableIndex">
                  Monday
                </div>
                <div className="tableBox" onClick={() => handleClickClass("Class")}>
                  Class1
                </div>
                <div className="tableBox">
                  Class2
                </div>
                <div className="tableBox">
                  Class3
                </div>
                <div className="tableBox">
                  Class4
                </div>
                <div className="tableBox">
                  Class5
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="tableBox tableIndex">
                  Thuesday
                </div>
                <div className="tableBox">
                  Class1
                </div>
                <div className="tableBox">
                  Class2
                </div>
                <div className="tableBox">
                  Class3
                </div>
                <div className="tableBox">
                  Class4
                </div>
                <div className="tableBox">
                  Class5
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="tableBox tableIndex">
                  Wednesday
                </div>
                <div className="tableBox">
                  Class1
                </div>
                <div className="tableBox">
                  Class2
                </div>
                <div className="tableBox">
                  Class3
                </div>
                <div className="tableBox">
                  Class4
                </div>
                <div className="tableBox">
                  Class5
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="tableBox tableIndex">
                  Friday
                </div>
                <div className="tableBox">
                  Class1
                </div>
                <div className="tableBox">
                  Class2
                </div>
                <div className="tableBox">
                  Class3
                </div>
                <div className="tableBox">
                  Class4
                </div>
                <div className="tableBox">
                  Class5
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div className="tableBox tableIndex" >
                  Saturday
                </div>
                <div className="tableBox">
                  Class1
                </div>
                <div className="tableBox">
                  Class2
                </div>
                <div className="tableBox">
                  Class3
                </div>
                <div className="tableBox">
                  Class4
                </div>
                <div className="tableBox">
                  Class5
                </div>
            </div>
       </div>

       <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}

export default TimeTable
    
    
    
    
    