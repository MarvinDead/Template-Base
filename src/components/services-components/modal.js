import React, { Component } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default class ModalServices extends Component {
  render() {
    let modelStyle = {
      display: "block",
      background: "rgba(0,0,0,0.8)",
    };
    return (
      <div className="modal show fade modal-scroll" style={modelStyle}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-capitalize text-black">
                {this.props.name}
              </h3>
              <button
                type="button"
                className="close"
                onClick={this.props.hide}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <GrClose />
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img src={this.props.img} alt="model" />
              </div>
              <p className="pt-3 text-black">{this.props.description}</p>
            </div>
            <div className="modal-footer flex justify-content-between">
              <div className="tp-service-three-text-btn">
                <Link to="/contact" className="btn btn-base">
                  <i className="flaticon-enter"></i>FREE ESTIMATE{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}