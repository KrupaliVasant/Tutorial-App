import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditTutorial(props) {
  const url = "http://localhost:3000/tutorial";
  const [tId, setTid] = useState();
  const [tName, setTname] = useState();
  const [tDesc, setTdesc] = useState();
  const [tStatus, setTstatus] = useState();
  const params = useParams();
  console.log(params.id);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const loadData = () => {
    let id = params.id;
    // axios.get(`url/${id}`).then((res) => {
    axios.get(url + "/" + 1).then((res) => {
      let tutorial = res.data;
      setTid(tutorial.id);
      setTname(tutorial.tName);
      setTdesc(tutorial.tDesc);
      setTstatus(tutorial.tStatus);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const tid = document.getElementById("tutorial_id").value;
    const tname = document.getElementById("tutorial_name").value;
    const tdesc = document.getElementById("tutorial_desc").value;
    const tstatus = document.getElementById("tutorial_status").value;
    setTid(tid);
    setTname(tname);
    setTdesc(tdesc);
    setTstatus(tstatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = props.match.parama.id;
    console.log("update clicked");
    axios
      .put(url + "/" + id, {
        tName: tName,
        tDesc: tDesc,
        tStatus: tStatus,
      })
      .then((res) => {
        alert("Update Tutorial");
      });
  };

  return (
    <>
      <div className="col-md-12">
        <div className="card card-container">
          <h3 className="text-center">Edit Tutorial</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tutorial_id">Tutorial Id</label>
              <input
                type="text"
                className="form-control"
                id="tutorial_id"
                name="tutorial_id"
                value={tId}
                onChange={handleChange}
                placeholder="Id"
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorial_name">Tutorial Name</label>
              <input
                type="text"
                className="form-control"
                id="tutorial_name"
                name="tutorial_name"
                value={tName}
                onChange={handleChange}
                placeholder="Tutorial Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorial_desc">Tutorial Description</label>
              <input
                type="text"
                className="form-control"
                id="tutorial_desc"
                name="tutorial_desc"
                value={tDesc}
                onChange={handleChange}
                placeholder="Tutorial Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorial_status">Status</label>
              <select id="tutorial_status" className="form-select form-control">
                <option value={tStatus} onChange={handleChange}>
                  Published
                </option>
                <option value={tStatus} onChange={handleChange}>
                  UnPublished
                </option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default EditTutorial;
