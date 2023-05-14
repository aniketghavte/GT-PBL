import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import './GT.css'

const GT = () => {

  const navigate = useNavigate()
  const [generatedTimeTable, setGeneratedTimeTable] = useState();  
  const [timeTableName, setTimeTableName] = useState();
  const [timeTableDesc, setTimeTableDesc] = useState();
  const [formData, setFormData] = useState({
    class1: {
      teacher: '',
      subject: ''
    },
    class2: {
      teacher: '',
      subject: ''
    },
    class3: {
      teacher: '',
      subject: ''
    },
    class4: {
      teacher: '',
      subject: ''
    },
    class5: {
      teacher: '',
      subject: ''
    }
  });



  const handleSubmit = (e) => {
    e.preventDefault();
  
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const timetable = days.map((day) => {
      const classOrder = ['class1', 'class2', 'class3', 'class4', 'class5'].sort(() => Math.random() - 0.5);
      const classes = classOrder.map((classKey) => {
        return {
          subject: formData[classKey].subject,
          teacher: formData[classKey].teacher,
          topic: ''
        };
      });
  
      return {
        day: day,
        classes: classes
      };
    });
  
    console.log(timetable);
    setGeneratedTimeTable(timetable);
  
    {
      generatedTimeTable ?
                axios
                  .post('http://localhost:4000/api/timetable/createTimeTable', {
                    title: timeTableName,
                    description: timeTableDesc,
                    content: generatedTimeTable,
                    creator: localStorage.getItem('userId'),
                    tags: []
                  })
                  .then(async function (response) {
                    // handle success
                    toast.success('TimeTable Successfully Generated');
                    console.log(response);
                    await new Promise((resolve) => setTimeout(resolve, 1400));
                    console.log(response);
                    navigate('/');
                  })
                  .catch(function (error) {
                    toast.error(error.response.data.message);
                    console.log(error.response.data);
                  })
                  .finally(function () {
                  })
      
      : toast.error("ServerError Please Try Again")
    }
  };
  


  
  
  return (<>
  
      {localStorage.getItem("userId") === null && (
          <Navigate to="/login" replace={true} />
        )
      }
    <div className='app__gt'>
          <h1>Hey, Hii {localStorage.getItem("userName")}</h1>
          <h3>Generate The New Time Table</h3>
          <p style={{fontSize: "1.2rem"}}>Please Fill classes Information Below</p>
          <p style={{fontSize: "1.2rem",marginTop: "-1rem"}}>Rest we will Take care</p>

   
            <form style={{display: "flex", flexDirection: "column", justifyContent: "cneter", alignItems: "center", gap: "5rem 0"}}>
              <div className='app_class_card'>

                <div className='class_card'>
                      <h5>Details</h5>
                      <p>TimeTable Name</p>
                      <input type='text' placeholder='TimeTable Name' required value={timeTableName}
                          onChange={(e) =>
                            setTimeTableName(e.target.value)
                          }
                      />
                      <p>TimeTable Description</p>
                      <input type='text' placeholder='TimeTable Description' required value={timeTableDesc}
                          onChange={(e) =>
                            setTimeTableDesc(e.target.value)
                          } 
                      />
                </div>
                <div className='class_card'>
                      <h5>Class 1</h5>
                      <p>Teacher Name</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class1.teacher}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              class1: { ...formData.class1, teacher: e.target.value }
                            })
                          }
                      />
                      <p>Subject</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class1.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              class1: { ...formData.class1, subject: e.target.value }
                            })
                          } 
                      />
                </div>
                <div className='class_card'>
                      <h5>Class 2</h5>
                      <p>Teacher Name</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class2.teacher}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            class2: { ...formData.class2, teacher: e.target.value }
                          })
                        }/>
                      <p>Subject</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class2.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              class2: { ...formData.class2, subject: e.target.value }
                            })
                          }
                      />
                </div>
                <div className='class_card'>
                      <h5>Class 3</h5>
                      <p>Teacher Name</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class3.teacher}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            class3: { ...formData.class3, teacher: e.target.value }
                          })
                        }/>
                      <p>Subject</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class3.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              class3: { ...formData.class3, subject: e.target.value }
                            })
                          }
                      />
                </div>
                <div className='class_card'>
                      <h5>Class 4</h5>
                      <p>Teacher Name</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class4.teacher}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            class4: { ...formData.class4, teacher: e.target.value }
                          })
                        }/>
                      <p>Subject</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class4.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              class4: { ...formData.class4, subject: e.target.value }
                            })
                          }
                      />
                </div>
                <div className='class_card'>
                      <h5>Class 5</h5>
                      <p>Teacher Name</p>
                      <input type='text' placeholder='Teacher Name' required value={formData.class5.teacher}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            class5: { ...formData.class5, teacher: e.target.value }
                          })
                        }/>
                      <p>Subject</p>
                      <input type='text' placeholder='Teacher Name' requiredvalue={formData.class5.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              class5: { ...formData.class5, subject: e.target.value }
                            })
                          }
                      />
                </div>
              </div>
              
              <button type='submit' className='generateBtn' onClick={handleSubmit}>Generate TimeTable</button>
            </form>
                
      

        
    </div>
    <Toaster
        position="top-right"
        reverseOrder={false}
      />
  </>
  )
}

export default GT