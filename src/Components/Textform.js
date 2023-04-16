import React, {useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("");
    const handle=()=>{ 
      console.log("botton was clicked " + text);
      let newtext=text.toUpperCase();
      setText(newtext);
    }
    const handleonchange=(event)=>{
        console.log("handled");
        // hjvhj
        setText(event.target.value);
    }
    const [isok,setisok] =useState(false);

    const speak=()=>{
      setisok(!isok);

      let msg=new SpeechSynthesisUtterance();
      msg.text=text;
      window.speechSynthesis.speak(msg);
    }
  return (
    <>
    <div className="container">
       
      {/* <div classname="mb-3">
  <label for="exampleFormControlInput1" classname="form-label">Email address</label>
  <input type="email" classname="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Example text area</label>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange}></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handle}>Convert to uppercase</button>
<button className="btn btn-primary" onClick={speak}>{isok?("Stop"):("Speak")}</button>
    </div>
    <div className="container my-3">
        <h1>
            Your text summary
        </h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} time to read</p>
        <h2>
            Preview
        </h2>
        <p>
            {text}
        </p>
    </div>
    </>
  )
}
