import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addDevice} from "../views/Home/actions";

export default function AddController({showAdd, setShowAdd, showEdit, setShowEdit, devicesData}) {
  const dispatch = useDispatch();
  const config = useSelector(state => state.homeReducer.config);

  const addNewDevice = (event) => {
    event.preventDefault();
    const deviceName = event.target.elements.deviceName.value
    if (devicesData.length < config?.maxDevices) {
      dispatch(addDevice(deviceName));
    }else {
      alert("You have reached maximum device count")
    }
    setShowAdd(!showAdd);
  }

  return (
    <>
      <div className="container mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0">
        <div className="row">
          {
            !showAdd &&(
              <>
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 pl-0">
                  <button onClick={() => setShowAdd(!showAdd)} className="btn btn-outline-primary w-100">
                    Add
                  </button>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 pl-0">
                  <button onClick={() => setShowEdit(!showEdit)} className="btn btn-outline-warning w-100">
                    {showEdit ? "Cancel" : "Edit"}
                  </button>
                </div>
              </>
            )
          }
          {
            showAdd && (
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 pl-0">
                <form onSubmit={addNewDevice}>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
                      <div className="form-group mb-0">
                        <input type="text" className="form-control" name="deviceName" id="device-name" placeholder="Enter device name"/>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0">
                      <button type="submit" className="btn btn-primary w-100">Save</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0">
                      <button onClick={() => setShowAdd(!showAdd)} type="button" className="btn btn-danger w-100">
                        Close
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}