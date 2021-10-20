import React from "react";
import TestimonialImage from './../../images/sub-bnr-bg.jpg'
import { faHeart,faStethoscope,faUserMd ,faAmbulance} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div>
      <div className="container bg-light">
        <div className="row my-4 py-4">
         
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <h5 className=" fw-bold">Medical Counseling</h5>
                <p className="text-muted">
                  cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Best services</h5>
                <p className="text-muted">
                  cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold"> Service any time</h5>
                <p className="text-muted">
                  cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h5 className="fw-bold">Best Tecnology</h5>
                <p className="text-muted">
                  cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Top level doctors</h5>
                <p className="text-muted">
                  cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Best care</h5>
                <p className="text-muted">
                  cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
            <img className="img-fluid" src={TestimonialImage} alt="" />
        </div>

        <section>
            <div className="container-fluid">
                <div className="row mt-3 mb-4">
                    <div className="col-md-3  bg-testimonial">
                    <div className="text-center p-5">
                   <span className="icon"> <FontAwesomeIcon icon={faHeart} /></span>
                        <h2>Heart Rate</h2>
                        <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                    </div>
                    </div>
                    <div className="col-md-3 bg-testimonial-cng">
                    <div className="text-center  p-5">
                    <span className="icon"><FontAwesomeIcon icon={faStethoscope} /></span>
                        <h2>Medical Counseling</h2>
                        <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                    </div>
                    </div>
                    <div className="col-md-3 bg-testimonial">
                        <div className="text-center  p-5">
                        <span className="icon"><FontAwesomeIcon icon={faUserMd}/></span>
                        <h2>Qualified Doctors</h2>
                        <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                        </div>
                        
                    </div>
                    <div className="col-md-3 bg-testimonial-cng">
                        <div className="text-center  p-5">
                        <span className="icon"><FontAwesomeIcon icon={faAmbulance}/></span>
                        <h2>Emergency Services</h2>
                        <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>



      </div>
    </div>
  );
};

export default Testimonial;
