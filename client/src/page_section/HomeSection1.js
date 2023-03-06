import './homeSection.css';
import { HashLink } from 'react-router-hash-link';
import big_gold_text from '../images/home/home_big_gold_text.png';
import btn_credit from '../images/home/home_creditcard.png';
import btn_houseloan from '../images/home/home_houseloan.png';
import btn_personloan from '../images/home/home_personloan.png';
import btn_upgrade from '../images/home/home_upgrade.png';
import home_bg_mob from '../images/home/home_bg_mob.png';
import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';

import video from '../videos/banner_video.mp4';
import { Player, ControlBar } from 'video-react';
// import ControlBar from "video-react/lib/components/control-bar/ControlBar"
import 'video-react/dist/video-react.css';

const HomeSection1 = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

  // const [isPlaying, setIsPlaying] = useState(true);
  // const videoRef = useRef(null);

  // const handleClick = () => {
  //   if (isPlaying) {
  //     videoRef.current.pause();
  //   } else {
  //     videoRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div>
      {!isMobile && (
        <div className="home-section1">
          <div className="home-banner1">
            <Player
              // ref={playerRef}
              playsInline
              autoPlay
              loop={true}
              volume={0}
              muted={true}
              src={video}
            >
              <ControlBar disableDefaultControls />
            </Player>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          <img className="home_banner_pic" src={home_bg_mob} alt="" />

          <div className="home-btn-service ">
            <div className="d-flex">
              <HashLink smooth to="/loanservices?#mortgage">
                <img src={btn_upgrade} alt="" />
              </HashLink>
              <HashLink smooth to="/loanservices?#creditcard">
                <img src={btn_credit} alt="" />
              </HashLink>
            </div>
            <div className="d-flex">
              <HashLink smooth to="/loanservices?#mortgage">
                <img src={btn_houseloan} alt="" />
              </HashLink>
              <HashLink smooth to="/loanservices?#privateLending">
                <img src={btn_personloan} alt="" />
              </HashLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSection1;
