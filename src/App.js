import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(59);
  const [min, setMin] = useState(5);
  const [hour, Sethour] = useState(0);
  const [pauser, SetPauser] = useState(true);
  const [texti, Settext] = useState("Stop");
  const deter = useRef(true)

  useEffect(() => {
    worker()
  }, [time]);


  const worker = ()=>{
    const timer = setTimeout(() => {
      console.log(deter.current);
      if (deter.current) {
        setTime(time - 1);
        if (time === 0) {
          setTime(59);
          setMin(min - 1);
          console.log(min);
        }
        console.log(time);
      }
    }, 1000);

    if (time === 0 && min === 0) {
      clearTimeout(timer);
    }
  }

  const starter = () => {

    deter.current = !deter.current
    if(deter.current){
      worker()
    }
    if (texti === "Stop") {
      Settext("Start");
    } else {
      Settext("Stop");
    }
  };
  const reset = () => {
    deter.current = false
    Settext("Stop")
    setTime(59)
    setMin(5)

  };
  return (
    <div className="App">
      <div
        className="container text-center mt-5 "
        style={{ backgroundColor: "black" }}
      >
        <div style={{ borderBottom: " 1px solid #FFFFFF" }}>
          <h4 style={{ color: "white" }}>Stopwatch</h4>
        </div>
        <div
        className="mt-3 mb-3"
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: " 1px solid #FFFFFF"
          }}
        >
          {" "}
          <h1>{hour}</h1>&nbsp;<p>h</p> &nbsp;&nbsp;&nbsp;<h1>{min}</h1>&nbsp;<p>m</p> &nbsp;&nbsp;&nbsp; <h1>{time}</h1>&nbsp;
          <p>s</p>
        </div>
        <div>
          <button
            className="btn m-3"
            style={{ backgroundColor: "white" }}
            onClick={() => starter()}
          >
            {texti}
          </button>
          <button
            className="btn m-3"
            style={{ backgroundColor: "white" }}
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
