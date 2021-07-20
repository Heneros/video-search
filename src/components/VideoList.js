import { render } from '@testing-library/react';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) =>{
   const renderedList = videos.map((video) =>{
    return <VideoItem video={video} />
   });

    return ( <div>
        Length {videos.length}
         {renderedList}
         </div>
        )
 


};

export default VideoList;