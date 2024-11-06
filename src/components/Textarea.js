import React, {useState} from 'react'

function Textarea(props) {
    
    const [text, setText] = useState('');
    const [cases, setCases] = useState("To Upper Case")
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");
    
    const swap = () => {
        let rtext = replaceText
        let ftext = findText;
        setFindText(replaceText)
        setReplaceText(ftext)
    }

    const Replace = () => {
        const regex = new RegExp(findText, 'gi');
        const newtext = text.replace(regex, replaceText)
        setText(newtext);
    }
      
    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + " ";
            }
        })
        setText(joinedWords);
    }
    const HandelCases= () => {
        if(cases == "To Upper Case"){
            let newText = text.toUpperCase();
            setText(newText);
            setCases("To Lower Case");
        } else {
            let newText = text.toLowerCase();
            setText(newText);
            setCases("To Upper Case")
        }
    }

    const capalalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + (el.slice(1)).toLowerCase()).join(" ");
        setText(newText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const clear = () => {
        setText("")
    }

    const findOnChange = (event) => {
        // console.log("Changed")
        setFindText(event.target.value);
    }
    const handelOnChange = (event) => {
        // console.log("Changed")
        setText(event.target.value);
    }
    const replaceOnChange = (event) => {
            // console.log("Changed")
            setReplaceText(event.target.value);
    }


  return (
    <>
    <div className="container">
        <h1 className={`my-2 text-${props.mode=="light"?"dark":"light"}`}>Enter Your Text Here</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value = {text} 
            onChange={handelOnChange} style={{backgroundColor : props.mode=="light"?"white":"#212529", 
            color:props.mode=="light"?"black":"white"}}></textarea>
        <button className = "btn btn-outline-primary mx-2 my-3" onClick={HandelCases}>{cases}</button>
        <button className = "btn btn-outline-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className = "btn btn-outline-primary mx-2 my-3" onClick={capalalize}>Capalalize</button>
        <button className = "btn btn-outline-primary mx-2 my-3" onClick={clear}>Clear</button>
        {/* <button className = "btn btn-outline-primary mx-2 my-3" onClick={handleFindReplace}>Find and Replace</button> */}
        <button className="btn btn-outline-warning mx-2 my-2" type="submit" onClick={speak}>Speak</button>
    </div>
    <div className = "d-flex container">
    <div style={{width: '100%'}}>
        <div className="container">
            <h2 className={`text-${props.mode=="light"?"dark":"light"}`}>Text Summary</h2>
            <div style={{display: "block"}}>
                
                <p className={`text-${props.mode=="light"?"dark":"light"}`}><b>word Count:</b> 
                {text.split(/\s+/).filter((element) => {return element.length !== 0}).length}<br/><b>Character Count: </b>{text.length}<br/>
                <b>Number of Sentances: </b>{text.split('.').length-1}</p>
            
            </div>
        </div>

        <div className='container'>
            <h3 className={`text-${props.mode=="light"?"dark":"light"}`}>Summary</h3>
            <p className={`text-${props.mode=="light"?"dark":"light"}`}>{text}</p>
            {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" columns="5" value={text}></textarea> */}
        </div>
    </div>
    <div className="w-25">
        <div className="conatiner"> 
                    <div className="mb-1">
                        <label className={`form-label text-${props.mode=="light"?"dark":"light"}`}><b>Find</b></label>
                        <textarea className="form-control"  placeholder="Find" rows="1" value={findText} 
                        onChange={findOnChange} style={{backgroundColor : props.mode=="light"?"white":"#212529", 
                        color:props.mode=="light"?"black":"white"}}></textarea>
                    </div>
                    <div className="mb-1">
                        <label className={`form-label text-${props.mode=="light"?"dark":"light"}`}><b>Replace</b></label>
                        <textarea className="form-control"  type="text" placeholder="Replace" rows="1" value={replaceText} 
                        onChange={replaceOnChange} style={{backgroundColor : props.mode=="light"?"white":"#212529", 
                        color:props.mode=="light"?"black":"white"}}></textarea>
                    </div>
                    <button className="btn btn-outline-primary mt-2 mx-2" onClick={Replace}>Replace</button>
                    <button className="btn btn-outline-primary mt-2 mx-2" onClick={swap}>swap</button>
        </div>
    </div>
        </div>
    </>
  )
  }
Textarea.propTypes = {}

export default Textarea
