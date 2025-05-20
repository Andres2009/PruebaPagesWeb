import React from "react";

const VideoPublicitario =({Link}) =>{
    return(
        
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ratio ratio-16x9">
                    <iframe
                        src={Link}
                        title="YouTube video"
                        allow="autoplay"
                        allowFullScreen
                    ></iframe>
                </div>
                </div>
            </div>
      
    )
}

export default VideoPublicitario;