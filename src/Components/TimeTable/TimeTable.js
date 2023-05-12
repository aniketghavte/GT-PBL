import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import './TimeTable.css'; 


const TimeTable = () => {
  const [timeTable, setTimeTable] = useState();


    const getTimeTable = () => {
      axios.get('http://localhost:4000/api/timetable/getTimeTable',{
        params: {
          timeTableId: "645ea5ac3d8cb00241422936"
        }
      })
      .then((response) => {
        toast.success('TimeTable');
        console.log(response.data.timeTable);
        setTimeTable(response.data.timeTable);

      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error.response.data);
      });
    }

    useEffect(() => {
      getTimeTable()
    }, [])
    


  return (
    <div className='app__tt'>
      <h1 style={{color: "#141414", fontWeight: "500", marginTop: "2rem"}}>SE CS B TimeTable</h1>
      <h2 style={{color: "#141414", fontWeight: "400"}}>Created By</h2>
      <h3 style={{color: "#141414", fontWeight: "300"}}>Aniket Ghavte</h3>
      <h5 style={{color: "#141414", fontWeight: "300"}}>On, 11th May 2023</h5>
                  <div style={{minWidth: "90%", maxWidth: "90%", height: "80%"}}>
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
                    {
                      timeTable?.content?.map((item, key) => {
                        return(<div key={key}>
                                 <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                    <div className="tableBox tableIndex">
                                      {item?.day}
                                    </div>
                                    {
                                      item?.classes?.map((classBox, key) => {
                                        return( <div className="tableBox" key={key}>
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

    </div>
  )
}

export default TimeTable
    
    
    
    
    