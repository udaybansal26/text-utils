import React, {useState} from "react";


export default function Navbar(params) {
    const handleUpCLick=()=>{
        console.log("uppercase");
        let newText=text.toUpperCase();
        setText(newText); 
        params.showAlert("Converted to Uppercase","success");
    }

    const handleDownCLick=()=>{
        console.log("lowercase ");
        let newText=text.toLowerCase();
        setText(newText); 
        params.showAlert("Converted to Lowercase","success");
    }
    
    const handleClear=()=>{
        console.log("clear");
        // let newText=text.toLowerCase();
        setText(""); 
        params.showAlert("Text is Cleared","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy=()=>{
        console.log('copy');
        let newText=document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges(); 
        params.showAlert("Text is Coppied","success");
    }

    const handleSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        params.showAlert("Extra spaces are deleted","success");
    }

    const [text, setText] = useState("");
    return(
        <>
        <div className="container" style={{color:params.mode==='light'?'black':'white'}}>
            <h1>{params.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:params.mode==='light'?'white':'grey' ,  color:params.mode==='light'?'black':'white'} } id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-1" onClick={handleUpCLick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleDownCLick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleSpaces}>Remove extra spaces</button>
            
            <button className="btn btn-danger" onClick={handleClear}>Clear</button>
        </div>

        <div className="container my-2 " style={{color:params.mode==='light'?'black':'white'}}>
             <h2>Your text summary</h2>
             <p> {text.split(' ').filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008 * text.split(' ').filter((ele)=>{return ele.length!==0}).length} Minutes read </p>
             <h2>Preview</h2>
             <p>{text.lenght>0?text:"Nothing to preview"}</ p>
        </div>
        </>
    )
};