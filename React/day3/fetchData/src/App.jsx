import { useEffect, useState } from "react";

function App() {
  const [Posts, setPosts] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [PostsPerPage] = useState(10); // Corrected variable name
  const [TotalPost, setTotalPost] = useState(0);
  useEffect(() => {
    fetchData();
  }, [currentPage]); // Use the corrected variable name in the dependency array

  useEffect(() => {
    fetchTotalPost();
  }, []);

  const fetchTotalPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTotalPost(data.length);
      });
  };

  const fetchData = () => {
    const startIndex = (currentPage - 1) * PostsPerPage; // Use the corrected variable name
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=${PostsPerPage}`
    ) // Use the corrected variable name
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const TotalCount = Math.ceil(TotalPost / PostsPerPage);
  const isLast = TotalCount === currentPage;

 
  const posts = {
    border:"5px solid green",
    textAlign:"center",
    width:"100%",
    height:"200px"
    
  }

  // const containerStyles = {
  //   display: "flex",
  //   flexWrap: "wrap",
  // };

   const containerStyles = {
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    gap:"10px",
    padding:"5px"
   }
  return (
    <>
      <h1 style={{color:"red"}}>Welcome To Data Fetching App</h1>

      <div style={containerStyles}>
        {Posts.map((ele) => (
          <div key={ele.id}>
            <div>
              <div style={posts}>
                <h1>{ele.id}</h1>
                <h3>{ele.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{alignContent:"center"}}>
        <button onClick={handleNext} disabled={isLast}>
          Next
        </button>
        {currentPage}
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
      </div>
    </>
  );
}

export default App;
