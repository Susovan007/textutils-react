import React, {useState} from 'react';



export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText );
        props.showAlert("success","converted to uppercase")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText );
        props.showAlert("success","converted to lowercase")

    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText );
        props.showAlert("success","text cleared")

    }
    const handlereverseClick = ()=>{
        let newText = '';
        for(let i=text.length -1; i>=0; i--){
            newText += text[i];
        }
        setText(newText );
        props.showAlert("success","text is reversed")

    }

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("success","text copied")

    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success","extra spaces removed")


    }
   
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const [text,setText] = useState('');

    return(
        <>

            <div className="container"style={{backgroundColor: props.mode==='dark'?'#1d1946':'white',color: props.mode==='dark'?'white':'black'}}>
                <div className='container' >
                    <h2>{props.heading} </h2>
                    <div className="mb-3">
                        <textarea className ="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'#673591d6':'white',color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0}className="btn btn-primary" onClick = {handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleLowClick}>Convert to lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handlereverseClick}>Reverse text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleCopyClick}>Copy text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleClearClick}>Clear text</button>
                </div>

                <div className="container my-3 " >
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to read</p>
                    <h3>Preview</h3>
                    <p>{text.length>0 ? text : "Nothing to preview"}</p>  
                    
                </div>

            </div>
        </>
    )
   

}