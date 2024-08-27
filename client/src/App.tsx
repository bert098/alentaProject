
import "./index.css"
import ItemList from './CardDisplay/ItemList'
import heroimage from "./assets/images.jfif"
import fetchJobs from './utils/fetchJobs'
import ChangeModal from './CardDisplay/ChangeJobData'
import { useEffect, useState } from 'react';
function App() {
  const [data, setJobs] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetchJobs()
      setJobs(res);
    } catch (err: any) {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Get timezone offset in minutes and convert to hours and minutes

  const todayDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  return (
    <div>
      <div className="image-container">
        <img className="heroImage" src={heroimage}></img>
        <div className="overlay-text">
          <h1>Let us manage your Tasks!</h1>
          <p>The most intuitive task management system</p>
        </div>
      </div>
      <div>
        <p className='intro'>Here at Dumitru task management we strive to provide the best way to manage your tasks, use our easy to understand portal where you can see all the tasks you have available as well as add new tasks. See any issues with your current tasks? update or delete them anytime you want!</p>
        <div className='greyBackground'>
          <div className='container'>
            <h1 >Task Managment Dashboard</h1>
            <ItemList items={data} setJobs={setJobs} />

          </div>

        </div>
        <div className="newCrad">
          <h2 >Add New Task</h2>
          <ChangeModal children={{
            "name": "",
            "type": "",
            "status": "",
            "dueDate": todayDate,
            "assignee": ""
          }} setJobs={setJobs} command='post' onClose={() => { }} />
        </div>
      </div>
    </div>
  );
}

export default App
