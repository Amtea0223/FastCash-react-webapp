import './homeSection.css';
import { HashLink } from 'react-router-hash-link';
import big_gold_text from '../images/home/home_big_gold_text.png';
import btn_credit from '../images/home/home_creditcard.png';
import btn_houseloan from '../images/home/home_houseloan.png';
import btn_personloan from '../images/home/home_personloan.png';
import btn_upgrade from '../images/home/home_upgrade.png';
import home_bg_mob from '../images/home/home_bg_mob.png';
import { useMediaQuery } from 'react-responsive';
import video_testing from '../videos/Sample.mp4';
import React, { useState, useRef } from 'react';

const HomeSection1 = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

  return (
    <div>
      {!isMobile && (
        <div className="home-section1 ">
          <div className="home-banner1">
            <img src={big_gold_text} alt="" className="big-gold-text" />
          </div>

          <div className="home-btn-service">
            <HashLink smooth to="/privateLending">
              <img src={btn_personloan} alt="" />
            </HashLink>
            <HashLink smooth to="/creditcard">
              <img src={btn_credit} alt="" />
            </HashLink>
            <HashLink smooth to="/mortgage">
              <img src={btn_houseloan} alt="" />
            </HashLink>
            <HashLink smooth to="/mortgage">
              <img src={btn_upgrade} alt="" />
            </HashLink>
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
