
import useFetch from './useFetch';
import { useEffect, useState, useRef } from 'react';


import '../App.css';



const AddStudent = () => {
    
    const summarize = useRef();
    const temple = {name:'',tel:'',email:'',pUrl:'',summarize:'', isDone:'true'}
    const [addData, setAddData] = useState(temple);

    const handleChange = (e)=>{
        let {name,value} = e.target;
        setAddData({...addData, [name]:value,});        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();   
        dataProcess('post',addData);
    }
    const dataProcess = (type,data)=>{
        fetch(`http://localhost:3001/work/`,{
            method:type,
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });  
        alert('등록되었습니다.');
        setAddData(temple);
        summarize.current.value = '';

        
        // const formData = new FormData();
        // formData.append("thum", selectedFile, selectedFile.name);
        // setTimeout(()=>{console.log("thum", selectedFile, selectedFile.name)},2000);
        // fetch(`./`,{
        //     method:type,
        //     headers:{"Content-Type":"multipart/form-data"},
        //     body:formData
        // });

    }
    

    return (
        <article className="add">
            
            <h1>수강생 등록</h1>
            <form  onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>이름{addData.name}</label>
                    <input type="text" name="name" value={addData.name} onChange={handleChange}/>
                </li>
                <li>
                    <label>연락처</label>
                    <input type="text" name="tel" value={addData.tel}  onChange={handleChange}/>
                </li>
                <li>
                    <label>이메일</label>
                    <input type="text" name="email" value={addData.email}  onChange={handleChange}/>
                </li>
                <li>
                    <label>포폴URL</label>
                    <input type="text" name="pUrl" value={addData.pUrl}  onChange={handleChange}/>
                </li>
                {/* <li>
                    <label>썸네일</label>
                    <input type="file" name="thum" multiple  onChange={handleChange}/>
                </li>
                <li>
                    <label>이력서</label>
                    <input type="file" name="resume" onChange={handleChange}/>
                </li> */}
                <li>
                    <label>강사의견</label>
                    <textarea ref={summarize} name="summarize" onChange={handleChange}></textarea>
                </li>
                <li>
                    <div className="btn_parent">
                        <input type="submit" value="저장하기"/>
                    </div>
                </li>
            </ul>
            </form>
        </article>
    );
};

export default AddStudent;
