import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import moment from 'moment'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const [timeTables, setTimeTables] = useState();

    const getTimeTables = () => {
        axios.get('http://localhost:4000/api/timetable/getTimeTables')
          .then(async function (response) {
            toast.success("TimeTables Fetched");
            console.log(response?.data?.blog?.data?.timeTables?.docs);
            setTimeTables(response?.data?.blog?.data?.timeTables?.docs)
          })
          .catch(function (error) {
            toast.error(error.response.data.message);
            console.log(error.response.data);
          })
          .finally(function () {
          });
    }

    useEffect(() => {
      getTimeTables();
    }, [])
    
  return (
    <>
    <div className='app__home'>
            {
                timeTables?.map((item, key) => {
                    return(<>
                    <div className='gt_timetable'>
                        <Link to={`/timetable?id=${item?._id}`}>
                            <div>
                                <p>{item?.title}</p>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>Time Generated</p>
                                <p>{moment(item?.createdAt).format("MMM Do YY")} </p>
                            </div>
                        </Link>
                    </div>
                    </>)
                })
            }
    </div>
    <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default Home