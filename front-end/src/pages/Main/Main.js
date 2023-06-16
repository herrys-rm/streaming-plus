import React from "react";
import { BsPlayFill } from "react-icons/bs";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          {/* SEDANG TAYANG */}
          <div className="col-md-8">
            <div className="p-3 rounded-3 mb-3" id="card-container">
              <div>
                <div class="d-inline p-2">
                  <BsPlayFill className="play-button m-1 fs-5 " />
                </div>

                <div class="d-inline title">SEDANG TAYANG</div>
              </div>
              <hr className="text-white" />

              <div class="row g-2">
                <div class="col-6 col-lg-3 mb-3">
                  <div class="p-1">
                    <div class="card border-0">
                      <img src="https://wisudha.com/public/storage/thumbnails/f3d4a14415d01164aa17478093110d39.jpg" class="card-img-top" alt="..." />
                      <div class="card-body p-0">
                        <p class="card-title mb-4">Episode 22</p>
                        <p class="card-text mt-2">Battle for Happiness</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-3">
                  <div class="p-1">
                    <div class="card border-0">
                      <img src="https://wisudha.com/public/storage/thumbnails/d73f8323723373ff0688717b50bfce89.jpg" class="card-img-top" alt="..." />
                      <div class="card-body p-0">
                        <p class="card-title mb-4">Episode 22</p>
                        <p class="card-text mt-2">Battle for Happiness</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-3">
                  <div class="p-1">
                    <div class="card border-0">
                      <img src="https://wisudha.com/public/storage/thumbnails/04ad5faaa7ecb323070e62990ce5f890.jpg" class="card-img-top" alt="..." />
                      <div class="card-body p-0">
                        <p class="card-title mb-4">Episode 22</p>
                        <p class="card-text mt-2">Battle for Happiness</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-3">
                  <div class="p-1">
                    <div class="card border-0">
                      <img src="https://wisudha.com/public/storage/thumbnails/c638eba76828e9bc62d38336098286fd.jpg" class="card-img-top" alt="..." />
                      <div class="card-body p-0">
                        <p class="card-title mb-4">Episode 22</p>
                        <p class="card-text mt-2">Battle for Happiness</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TOP DRAMA */}
          <div className="col-md-4 ">
            <div className="p-3 rounded-3 " id="card-container">
              <div class="d-inline p-2">
                <BsPlayFill className="play-button m-1 fs-5 " />
              </div>

              <div class="d-inline title">TOP DRAMA</div>
              <hr className="text-white" />
              <div class="container" id="top-drama">
                <img src="https://wisudha.com/public/storage/thumbnails/7762bde2a3efae9c3fe160633343db49.jpg" alt="card-img-top" />
                <p className="title d-block">Reborn Rich</p>
                <span className="d-block">Melodrama Fantasi Romantis</span>
                <span className="d-block">Eps: 16</span>
              </div>
              <hr className="text-white" />

              <div class="container" id="top-drama">
                <img src="https://wisudha.com/public/storage/thumbnails/7762bde2a3efae9c3fe160633343db49.jpg" alt="card-img-top" />
                <p className="title d-block">Reborn Rich</p>
                <span className="d-block">Melodrama Fantasi Romantis</span>
                <span className="d-block">Eps: 16</span>
              </div>
              <hr className="text-white" />

              <div class="container" id="top-drama">
                <img src="https://wisudha.com/public/storage/thumbnails/7762bde2a3efae9c3fe160633343db49.jpg" alt="card-img-top" />
                <p className="title d-block">Reborn Rich</p>
                <span className="d-block">Melodrama Fantasi Romantis</span>
                <span className="d-block">Eps: 16</span>
              </div>
              <hr className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
