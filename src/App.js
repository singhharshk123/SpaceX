import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Button } from 'react-bootstrap';
import Launch from "./Launch";
import SpaceX from "./SpaceX";
import { useState , useEffect} from "react";
import Pagination from './Pagination';
// import Window from "./Window";
import Filter from "./Filter";
import { Fragment } from "react";


function App() {

  const [data, setData] = useState([]);
  const fetchDetails = () => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((result) => setData(result));
  };

  useEffect(() => {
    fetchDetails();
  }, []);


// function for changing page
const paginate =( pageNumbers)=> {
  setCurrentPage(pageNumbers)
}


  //Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

 // Filter logic
 
 const [filterLaunch,setFilterLaunch]=useState([]);


const handleChange = (e) => {
 setFilterLaunch({filterLaunch: e.target.value});
 console.log(e.target.value);
 }

const rocketFilter = data.filter((items) => 
items.upcoming && items.launch_success !== filterLaunch
);

  return (
    <div className="App">
     <Fragment><SpaceX /><h6>This Site is created by :- Harsh Singh</h6></Fragment>
      <Filter  onChange={handleChange} filterLaunch={filterLaunch} setFilterLaunch={setFilterLaunch} />
      
        {/* <Launch data={currentPost}  /> */}
        <Launch data={currentPost} rocketFilter={rocketFilter} />
      <Pagination postPerPage={postPerPage} totalPosts={data.length} paginate={paginate} />
       
    </div>
  );
}

export default App;
