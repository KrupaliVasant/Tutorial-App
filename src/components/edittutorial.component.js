import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

function EditTutorial(props) {
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <h3 className="text-center">Edit Tutorial</h3>
        <Form>
          <div>
            <div className="form-group">
              <label htmlFor="tutorial_id">Tutorial Id</label>
              <Input
                type="text"
                className="form-control"
                id="tutorial_id"
                name="tutorial_id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tutorial_name">Tutorial Name</label>
              <Input
                type="text"
                className="form-control"
                id="tutorial_name"
                name="tutorial_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorial_desc">Tutorial Description</label>
              <Input
                type="text"
                className="form-control"
                id="tutorial_desc"
                name="tutorial_desc"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorial_status">Status</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tutorial_status"
                  id="status_published"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="status_published">
                  Published
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tutorial_status"
                  id="status_unpublished"
                  value="option2"
                />
                <label className="form-check-label" for="status_unpublished">
                  UnPublished
                </label>
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">Add</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default EditTutorial;
