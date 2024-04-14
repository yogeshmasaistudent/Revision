import { useState } from "react";

function App() {

  const [val,setVal] = useState(0);

  const handleAdd = ()=>{
    setVal(val+1);
  }

  const handleSub = ()=>{
    setVal(val-1);
  }

   function isPrime(n){
     if(n<=1) return false
      for(let i=2;i<n;i++){
        if(n%i===0){
          return false;
        }
      }
      return true;
   }

  return (
    <>
      <div style={{ alignItems: "center", marginInline: "400px" }}>
        <div
          className="Counter"
          style={{
            textAlign: "center",
            backgroundColor: "#e0b021",
            width: "700px",
            height: "400px",
          }}
        >
          <h1>Welcome to Counter 2.0</h1>
          <button
            style={{
              width: "50px",
              border: "none",
              padding: "5px",
              margin: "2px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={handleSub}
            disabled={val==0}
 
          >
            -1
          </button>
          <button
            style={{
              width: "50px",
              border: "none",
              padding: "5px",
              margin: "2px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={handleAdd}
          >
            +1
          </button>
          <br></br>
          <button
            style={{
              width: "80px",
              border: "none",
              padding: "5px",
              marginTop: "2px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={()=>{
              setVal(0)
            }}
          >
            Reset Count
          </button>

          <div>
            <h1>
              Count:<span style={{ color: "green" }}>{val}</span>
            </h1>
            <h1>
              This Number is:<span style={{ color: "green" }}>{val%2==0?"Even":"Odd"}</span>
            </h1>
            <h1>
              Prime Number: <span style={{ color: "green" }}>{isPrime(val)==false?"false":"true"}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
