import './App.css';
import VideoList from './ui/videoList';
import NewVideoForm from './ui/newVideoForm';
import VideoPlayer from './ui/videoPlayer';
import {VideoContext} from './data/video/videoContext';

function App() {
  return (
    <div className="App">
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
