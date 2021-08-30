import React from 'react'

export default function Banner() {
    return (
        <div className="banner-root">
            <div className="banner-overlay d-flex flex-row justify-content-center align-items-center">
              <div className="banner-overlay-inner">
                <div className="banner-overlay-text text-center">
                  <h1> Buy sell or Exchange your bike from Bike Express </h1>
                  <p> Browse the best bikes in your area. Doorstep delivery, used bike in your prefered area in reasonable price. Also buy new bike from anywhere in Bangladesh. So why so late? Let's jump in, and buy your dream bike. </p>
                </div>
                <div className="banner-overlay-search d-flex justify-content-center align-items-center">
                    <select>
                      <option>Select Division</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Rajshahi</option>
                      <option>Khulna</option>
                      <option>Barishal</option>
                      <option>Sylhet</option>
                      <option>Mymensing</option>
                    </select>
                    <select>
                      <option>Select District</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Rajshahi</option>
                      <option>Khulna</option>
                      <option>Barishal</option>
                      <option>Sylhet</option>
                      <option>Mymensing</option>
                    </select>
                    <button className="banner-search-button"> Search </button>
                </div>

              </div>
            </div>
        </div>
    )
}
