import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";

// const VideoCard = ({ videoUrls, videoTitles }) => {
//   return (
//     <div className="px-4 py-6 w-full h-auto">
//       <div className="text-center flex items-center w-auto ">
//         {videoUrls.map((videoUrl, index) => (
//           <Card key={index} className="video-card-item ml-1">
//             <CardContent>
//               <Typography variant="h6">{videoTitles[index]}</Typography>
//               <ReactPlayer
//                 url={videoUrl}
//                 controls
//                 width="600px" // Adjust the width as needed
//                 height="auto"
//                 className="react-player"
//               />
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoCard;
// VideoCard.js

const VideoCard = ({ videoUrl }) => {
  const videoUrls = [
    "https://youtu.be/XzhEdjsRzX8",
    "https://youtu.be/KT8TihwfFjc",
    "https://youtu.be/YEZrUOD-buA",
    "https://youtu.be/c2APT3f8O3c",
  ];
  const videoTitles = [
    "Become a Global Research Expert!!",
    "Become an External Advisor!",
    "College/University Chapter",
    "School Chapter",
  ];
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">dd</h5>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={videoUrls}
              //   title={title}
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
