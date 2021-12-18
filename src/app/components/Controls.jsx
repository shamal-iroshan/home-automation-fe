import React, {useState} from "react";
import "../../assets/switch.css";
import AddController from "./AddController";
import {useDispatch} from "react-redux";
import {deleteDevice, saveData, updateDevice, updateState} from "../views/Home/actions";
import {Icon} from "@iconify/react";

export default function Controls({devicesData}) {
  const dispatch = useDispatch();
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  function onChangeSwitch(id, name) {
    let tempArray = [...devicesData];
    let device = tempArray.find(el => el._id === id);
    let index = tempArray.findIndex(el => el._id === id);
    if (device?.state === 1) {
      device.state = 0;
    } else {
      device.state = 1;
    }
    tempArray.splice(index, 1, device);

    const updateData = {
      deviceId: device._id,
      state: device.state,
      name: name,
    }
    dispatch(saveData(tempArray));
    dispatch(updateState(updateData));
  }

  const onEditDevice = (event, id) => {
    if (event.key === 'Enter') {
      const updateData = {
        deviceId: id,
        name: event.target.value
      }
      dispatch(updateDevice(updateData));
      setShowEdit(false);
    }
  }

  const onRemoveDevice = (id) => {
    let confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      dispatch(deleteDevice(id));
    }
  }

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{minHeight: '100vh'}}
      >
        <AddController
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          devicesData={devicesData}
        />
        <div className="row mb-5">
          {
            devicesData.map((item) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4" key={item._id}>
                <div className="card" style={{width: '100%'}}>
                  <div className="card-body">
                      {
                        showEdit ?
                          <div>
                            <input
                              type="text"
                              defaultValue={item.device}
                              onKeyPress={
                                (event) => onEditDevice(event, item._id)
                              } />
                            <Icon
                              icon="ant-design:close-circle-filled"
                              color="#f30"
                              width="20"
                              height="20"
                              className="mb-1 ml-1 mouse-hover"
                              onClick={() => onRemoveDevice(item._id)}
                            />
                          </div>
                          :
                          <h5 className="card-title">{item.device}</h5>
                      }
                    <p className="card-text">This device will turn {item.state === 1 ? "off" : "on"} automatically by
                      system.</p>
                    <hr/>
                    <label className="switch">
                      <input type="checkbox" checked={item.state === 1} onChange={() => onChangeSwitch(item._id, item.device)}/>
                      <span className="slider round"/>
                    </label>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}