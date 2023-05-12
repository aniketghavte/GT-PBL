import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import './GT.css'

const GT = () => {

  const navigate = useNavigate()
  const [generatedTimeTable, setGeneratedTimeTable] = useState();  
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
  
    axios
      .post('http://localhost:4000/api/timetable/createTimeTable', {
        title: 'demo',
        description: 'demo',
        content: generatedTimeTable,
        creator: localStorage.getItem('userId'),
        tags: []
      })
      .then((response) => {
        toast.success('TimeTable Successfully Generated');
        console.log(response);
        // Reset the form data
        // setFormData({
        //   class1: {
        //     teacher: '',
        //     subject: ''
        //   },
        //   class2: {
        //     teacher: '',
        //     subject: ''
        //   },
        //   class3: {
        //     teacher: '',
        //     subject: ''
        //   },
        //   class4: {
        //     teacher: '',
        //     subject: ''
        //   },
        //   class5: {
        //     teacher: '',
        //     subject: ''
        //   }
        // });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error.response.data);
      });
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
                
      

          <div className='app__tt' style={{marginTop: "5rem"}}>
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

                
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <div className="tableBox tableIndex">
                          Monday
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
          </div>
    </div>
  </>
  )
}

export default GT