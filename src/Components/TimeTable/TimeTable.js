import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import { saveAs } from 'file-saver';
import pdf from './timetable.pdf'
import './TimeTable.css'; 



const TimeTable = () => {
  const location = useLocation();
  const searchParams =  new URLSearchParams(location.search);
  const [timeTable, setTimeTable] = useState();
  const [creator, setCreator] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedClassBox, setSelectedClassBox] = useState(null);



    const handleBoxClick = (classBox) => {
        console.log("box clicked")
        setShowModal(true);
        setSelectedClassBox(classBox);
    }
    const getCreator = () => {
      axios.get(`http://localhost:4000/api/auth/user/${timeTable?.creator}`)
      .then((response) => {
        console.log(response.data.user);
        setCreator(response.data.user)
      })
      .catch((error) => {
        console.log(error.response.data);

      });
    }
    const getTimeTable = () => {
      axios.get('http://localhost:4000/api/timetable/getTimeTable',{
        params: {
          timeTableId: searchParams.get("id")
        }
      })
      .then(async function (response) {
        toast.success('TimeTable Fetched');
        console.log(response.data.timeTable);
        await setTimeTable(response.data.timeTable);
        // getCreator()
      })
      .catch(function (error) {
        console.log(error.response.data);
      })
      .finally(function () {
      });

    }
    const DownloadTimeTable = () => {
      // axios({
      //   url: 'http://localhost:4000/api/timetable/downloadTimeTable',
      //   method: 'GET',
      //   responseType: 'blob', // Set the response type to 'blob'
      //   params: {
      //     timeTableId: searchParams.get('id')
      //   }
      // })
      //   .then(function (response) {
      //     // Create a URL object from the response data
      //     const url = window.URL.createObjectURL(new Blob([response.data]));
    
      //     // Create a temporary link element to initiate the download
      //     const link = document.createElement('a');
      //     link.href = url;
      //     link.setAttribute('download', 'timetable.pdf');
      //     document.body.appendChild(link);
      //     link.click();
    
      //     // Clean up the temporary objects
      //     document.body.removeChild(link);
      //     window.URL.revokeObjectURL(url);
    
      //     toast.success('TimeTable Downloaded');
      //   })
      //   .catch(function (error) {
      //     console.log(error.response.data);
      //   }); 

      const fileUrl = pdf;
      saveAs(fileUrl, 'downloaded_file.pdf');
    };
    
    
    

    useEffect(() => {
      getTimeTable();


    }, [])
    useEffect(() => {
      getCreator();
    }, [timeTable]);

    


  return (
    <>
    <div className='app__tt'>
      <h1 style={{color: "#141414", fontWeight: "500", marginTop: "2rem"}}>{timeTable?.title}</h1>
      <h2 style={{color: "#141414", fontWeight: "400"}}>Created By</h2>
      <h3 style={{color: "#141414", fontWeight: "300"}}>{creator?.name}</h3>
      <h5 style={{color: "#141414", fontWeight: "300"}}>On, {moment(timeTable?.createdAt).format("LLL")}</h5>
      <div style={{position: "absolute", top: "0", right: "15rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer"}} onClick={() => DownloadTimeTable()}>
      <lord-icon
          src="https://cdn.lordicon.com/bgywtgwo.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{height: "50px", fontWeight: "700"}}>
      </lord-icon>
      <p style={{marginTop: "0", fontWeight: "600"}}>Download</p>
      </div>
                  <div style={{minWidth: "90%", maxWidth: "90%", height: "80%"}}>
                    {/* <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
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
                    </div> */}

                    {/* //DAYS */}
                    {
                      timeTable?.content?.map((item, key) => {
                        return(<div key={key}>
                                 <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                    <div className="tableBox tableIndex">
                                      {item?.day}
                                    </div>
                                    {
                                      item?.classes?.map((classBox, key) => {
                                        return( <div className="tableBox" key={key} onClick={() => handleBoxClick(classBox)}>
                                         <h4>{classBox?.subject}</h4>
                                         <h5>{classBox?.teacher}</h5>
                                      </div>)
                                      })
                                    }
                                </div>
                        </div>)
                      })
                    }
                
                 
             
              </div>

    <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             {timeTable?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: "center"}}>
          <h5>This is Held By</h5>
          <h5>{selectedClassBox?.teacher}</h5>
          <h5>For The Subject</h5>
          <h5>{selectedClassBox?.subject}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

    <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default TimeTable
    
    
    
    
    