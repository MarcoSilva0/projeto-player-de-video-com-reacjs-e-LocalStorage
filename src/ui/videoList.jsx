import React, {useContext} from 'react';
import Video from './video';
import { videoStore } from '../data/video/videoContext';

export default function VideoList(){
    const [videoState, videoDispatch] = useContext(videoStore);
    
    function onClick(video){
        videoDispatch({
            type: 'select',
            value: video
        })
    }

    return (
        <ul className='list'>
            {videoState.videos.map(item => (
                <Video key={item.url} onClick={onClick} video={item} />
            ))}
        </ul>
    );
}