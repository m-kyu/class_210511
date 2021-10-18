import {useState,useEffect, useRef} from "react";
import '../App.css';

export default function Item({works}){
    const [isDone,setIsDone] = useState(true);
    const [work,setWork] = useState(works);
   
    function visible(){
        setIsDone(!isDone)
        // isDone == "checked=" ? setIsDone('') : setIsDone('checked');
    }

    function dataProcess(){       
        fetch(`./work/${works.id}`,{
            method:"put",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({...work, "isDone":`${isDone}`})
        })
        .then(res => res.json())
        .then(data => {
            setWork(data);
        });  
    }

    return (
        <>
        {work && 
            <tr className={work.isDone}>
                <td><img src={work.thum} /></td>
                <td>
                    {work.name} ({work.tel} / {work.email})
                    <p>포트폴리오 - {work.pUrl}</p>
                    <div>{work.summarize}</div>
                </td>
                <td>
                    <input type="checkbox" checked={isDone} onChange={visible} />
                    <button onClick={dataProcess}>적용</button>
                </td>            
            </tr>
        }
        </>
    );
}