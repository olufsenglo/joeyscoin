import React from 'react'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'

import mainNft from '../../assets/images/main-nft.jpg';
import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.jpg';
import creator1 from '../../assets/images/creator1.jpg';
import creator2 from '../../assets/images/creator2.jpg';
import creator3 from '../../assets/images/creator3.jpg';
import creator4 from '../../assets/images/creator4.jpg';
import activity1 from '../../assets/images/activity-1.jpg';
import activity2 from '../../assets/images/activity-2.jpg';
import activity3 from '../../assets/images/activity-3.jpg';
import nft1 from '../../assets/images/nft-1.jpg';
import nft2 from '../../assets/images/nft-2.jpg';
import nft3 from '../../assets/images/nft-3.jpg';
import nft4 from '../../assets/images/nft-4.jpg';
import nft5 from '../../assets/images/nft-5.jpg';
import nft6 from '../../assets/images/nft-6.jpg';

export const Dashboard = () => {
  return (


    <div className="dashboard-wrapper">

      <nav className="our-nav flex-div">
        <div className="nav-icon">
        <MdExplore size={25} />
        </div>
        <div className="nav-left flex-div">
          <div className="search-box flex-div">
            <MdExplore size={25} />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav-middle flex-div">
          <div className="amount-eth flex-div">
          <MdExplore size={25} />
            <p>134,78 ETH</p>
          </div>
          <div className="notif flex-div">
            <MdExplore size={25} />
          </div>
        </div>
        <div className="nav-right flex-div">
          <div className="profil flex-div">
            <p>Welcome John Fisher</p>
            <img src={profile} alt="My Profile" />
          </div>
        </div>
      </nav>


      <div className="side-bar">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="shorcut-links">
          <Link to="/"><MdExplore size={25} /></Link>
        </div>
      </div>

      <div className="dashboard-container">

        <div className="large-container">
          <div className="main-container">
            <div className="nft">
              <img src={mainNft} alt="NFT-1" />
            </div>
            <div className="nft-text">
              <div className="creator creator-1 flex-div">
                <img src={creator1} />
                <p>Gigs Pieter</p>
              </div>
              <h1 className="title-nft">Organism Life Art</h1>
              <div className="detail-nft flex-div">
                <div className="current-bid">
                  <p>Current Bid</p>
                  <h1>3,55 ETH</h1>
                  <p>47587,93 USD</p>
                </div>
                <div className="sale-detail">
                  <p>Sale Endings In</p>
                  <h1>67 : 45 : 39</h1>
                  <span>
                    <p>Hours</p>
                    <p>Mins</p>
                    <p>Sec</p>
                  </span>
                </div>
              </div>
              <div className="option-nft flex-div">
                <a href="#"><MdExplore size={25} /></a>
                <div className="button-1">
                  <button>View Art</button>
                </div>
                <div className="button-2">
                  <button>Place a Bid</button>
                </div>
              </div>
            </div>
          </div>
          <div className="list-container">
            <div className="nft-list">
              <div>
                <img src={nft1} className="thumbnail" alt="NFT Trend 1" />
              </div>
              <div className="nft-list-detail">
                <div className="creator creator-2 flex-div">
                  <img src={creator2} />
                  <p>Steven Dominic</p>
                </div>
                <h1 className="list-detail-title">Diamond Mine</h1>
                <div className="more-detail flex-div">
                  <div className="more-detail-price">
                    <p>Place Bid</p>
                    <h1>12,6 ETH</h1>
                  </div>
                  <div className="more-detail-hours">
                    <p>Sale Endings In</p>
                    <h1>45h : 35m : 22s</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft-list">
              <div>
                <img src={nft2} className="thumbnail" alt="NFT Trend 2" />
              </div>
              <div className="nft-list-detail">
                <div className="creator creator-2 flex-div">
                  <img src={creator3} />
                  <p>Michael Urban</p>
                </div>
                <h1 className="list-detail-title">Paint Dream</h1>
                <div className="more-detail flex-div">
                  <div className="more-detail-price">
                    <p>Place Bid</p>
                    <h1>07,6 ETH</h1>
                  </div>
                  <div className="more-detail-hours">
                    <p>Sale Endings In</p>
                    <h1>32h : 16m : 22s</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft-list">
              <div>
                <img src={nft3} className="thumbnail" alt="NFT Trend 3" />
              </div>
              <div className="nft-list-detail">
                <div className="creator creator-2 flex-div">
                  <img src={creator1} />
                  <p>Gigs Phieter</p>
                </div>
                <h1 className="list-detail-title">Texture Solid Art</h1>
                <div className="more-detail flex-div">
                  <div className="more-detail-price">
                    <p>Place Bid</p>
                    <h1>12,6 ETH</h1>
                  </div>
                  <div className="more-detail-hours">
                    <p>Sale Endings In</p>
                    <h1>45h : 35m : 22s</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft-list">
              <div>
                <img src={nft4} className="thumbnail" alt="NFT Trend 4" />
              </div>
              <div className="nft-list-detail">
                <div className="creator creator-2 flex-div">
                  <img src={creator2} />
                  <p>Steven Dominic</p>
                </div>
                <h1 className="list-detail-title">Liquid Flow Art</h1>
                <div className="more-detail flex-div">
                  <div className="more-detail-price">
                    <p>Place Bid</p>
                    <h1>12,6 ETH</h1>
                  </div>
                  <div className="more-detail-hours">
                    <p>Sale Endings In</p>
                    <h1>45h : 35m : 22s</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft-list">
              <div>
                <img src={nft5} className="thumbnail" alt="NFT Trend 5" />
              </div>
              <div className="nft-list-detail">
                <div className="creator creator-2 flex-div">
                  <img src={creator4} />
                  <p>Antonie Hogs</p>
                </div>
                <h1 className="list-detail-title">Color Human Art</h1>
                <div className="more-detail flex-div">
                  <div className="more-detail-price">
                    <p>Place Bid</p>
                    <h1>12,6 ETH</h1>
                  </div>
                  <div className="more-detail-hours">
                    <p>Sale Endings In</p>
                    <h1>45h : 35m : 22s</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft-list">
              <div>
                <img src={nft6} className="thumbnail" alt="NFT Trend 6" />
              </div>
              <div className="nft-list-detail">
                <div className="creator creator-2 flex-div">
                  <img src={creator3} />
                  <p>Michael Urban</p>
                </div>
                <h1 className="list-detail-title">City On Canvas</h1>
                <div className="more-detail flex-div">
                  <div className="more-detail-price">
                    <p>Place Bid</p>
                    <h1>12,6 ETH</h1>
                  </div>
                  <div className="more-detail-hours">
                    <p>Sale Endings In</p>
                    <h1>45h : 35m : 22s</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="show-list flex-div">
              <button>Show More 
                <MdExplore className="show-list-icon" size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="side-container">
          <div className="activity">
            <div className="activity-title flex-div">
              <h1>Recent Activity</h1>
              <div className="day flex-div">
                <p>Today</p>
                <a href="#"><MdExplore size={25} /></a>
              </div>
            </div>
            <div className="activity-items">
              <div className="items flex-div">
                <a href="#">
                  <img src={activity1} className="activity-thumbnail"
                    alt="NFT Activity 1" />
                </a>
                <div className="items-detail">
                  <div className="flex-div">
                    <h2>Clardian</h2>
                    <p>5m ago</p>
                  </div>
                  <p>Purchased 2,55 ETH/37542,78 USD</p>
                </div>
              </div>
            </div>
            <div className="activity-items">
              <div className="items flex-div">
                <a href="#">
                  <img src={activity2} className="activity-thumbnail"
                    alt="NFT Activity 2" />
                </a>
                <div className="items-detail">
                  <div className="flex-div">
                    <h2>Rooster</h2>
                    <p>5d ago</p>
                  </div>
                  <p>Purchased 7,55 ETH/89542,78 USD</p>
                </div>
              </div>
            </div>
            <div className="activity-items">
              <div className="items flex-div">
                <a href="#">
                  <img src={activity3} className="activity-thumbnail"
                    alt="NFT Activity 3" />
                </a>
                <div className="items-detail">
                  <div className="flex-div">
                    <h2>Shoe Calk</h2>
                    <p>6d ago</p>
                  </div>
                  <p>Purchased 1,79 ETH/12542,78 USD</p>
                </div>
              </div>
            </div>
            <div className="activity-button flex-div">
              <button>Show All</button>
            </div>
          </div>
          <div className="top-creators">
            <div className="top-title flex-div">
              <h1>Top Creators</h1>
              <div className="see-all flex-div">
                <p>See All</p>
                <a href="#">
                <MdExplore size={25} />  
                </a>
              </div>
            </div>
            <div className="top-items">
              <div className="items-creator flex-div">
                <div className="items-thumbnail flex-div">
                  <img src={creator3} alt="Creator-3" />
                    <div>
                      <h2>Michael Urban</h2>
                      <p>120 Content</p>
                    </div>
                </div>
                <div className="thumbnail-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>
            <div className="top-items">
              <div className="items-creator flex-div">
                <div className="items-thumbnail flex-div">
                  <img src={creator2} alt="Creator-2" />
                    <div>
                      <h2>Steven Dominic</h2>
                      <p>124 Content</p>
                    </div>
                </div>
                <div className="thumbnail-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>
            <div className="top-items">
              <div className="items-creator flex-div">
                <div className="items-thumbnail flex-div">
                  <img src={creator1} alt="Creator-1" />
                    <div>
                      <h2>Gigs Pieter</h2>
                      <p>95 Content</p>
                    </div>
                </div>
                <div className="thumbnail-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>
            <div className="top-items">
              <div className="items-creator flex-div">
                <div className="items-thumbnail flex-div">
                  <img src={creator4} alt="Creator-1" />
                    <div>
                      <h2>Antonie Hogs</h2>
                      <p>84 Content</p>
                    </div>
                </div>
                <div className="thumbnail-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="copyright">
        <p>Copyright &copy; 2024 <span>TraderJoey</span></p>
      </div>

    </div>
  )
}
