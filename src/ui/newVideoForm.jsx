import React, { useContext, useState } from "react";
import { videoStore } from "../data/video/videoContext";


export default function NewVideoForm(){
    const [, videoDispatch] = useContext(videoStore);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [url, setUrl] = useState('');
    const [cover, setCover] = useState('');

    function save(){
        const newVideo ={
            title,
            duration,
            url,
            cover,
        };
        videoDispatch({
            type: 'add',
            value: newVideo
        })
        reset();
    }

    function reset(){
        setTitle('');
        setDuration('');
        setUrl('');
        setCover('');
    }

    return (
        <div className="form">
            <label htmlFor="">Title:</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            
            <label htmlFor="">Duration:</label>
            <input type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />
            
            <label htmlFor="">Video:</label>
            <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
            
            <label htmlFor="">Cover:</label>
            <input type="text" value={cover} onChange={(event) => setCover(event.target.value)} />
        
            <button onClick={save}>Save</button>
        
        </div>
    )
}