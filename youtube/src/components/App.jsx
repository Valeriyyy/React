import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos';

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };
//   componentDidMount() {
//     this.onTermSubmit("schmee150");
//   }
//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };
//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Pink Yesterday');

  useEffect(() => {
    setSelectedVideo(videos[0]);
    
  }, [videos]);
  
   

  return (
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={(video) => setSelectedVideo(video)}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
