import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProjectTask extends Component {
  onDeleteClick(backlog_id, pt_id) {
    this.props.deleteProjectTask(backlog_id, pt_id);
  }
  render() {
    const { project_task } = this.props;
    let priorityString;
    let priorityClass;

    if (project_task.priority === 1) {
      priorityClass = "bg-danger text-light";
      priorityString = "HIGH";
    }

    if (project_task.priority === 2) {
      priorityClass = "bg-warning text-light";
      priorityString = "MEDIUM";
    }

    if (project_task.priority === 3) {
      priorityClass = "bg-info text-light";
      priorityString = "LOW";
    }

/*    return (
      <div className="card mb-1 bg-light">
       {/!* <div className={`card-header text-primary ${priorityClass}`}>
          ID: {project_task.projectSequence} -- Priority: {priorityString}
        </div>*!/}
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <Link
            to={`/updateProjectTask/${project_task.projectIdentifier}/${
              project_task.projectSequence
            }`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button
            className="btn btn-danger ml-4"
            onClick={this.onDeleteClick.bind(
              this,
              project_task.projectIdentifier,
              project_task.projectSequence
            )}
          >
            Delete
          </button>
        </div>
      </div>
    );*/
      
      return (
          <div className="card mb-1 bg-light">
              <div className="card-body bg-light">
                  <div className="row">
                      <div className="col-lg-8">
                          <h5 className="card-title">{project_task.summary}</h5>
                          <p className="card-text text-truncate">
                              {project_task.acceptanceCriteria}
                          </p>
                      </div>
                      <div className="col-lg-4 d-flex align-items-center justify-content-end">
                          <Link
                              to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`}
                              className="btn btn-primary mx-2"
                          >
                              View / Update
                          </Link>
                          <button
                              className="btn btn-danger mx-2"
                              onClick={this.onDeleteClick.bind(
                                  this,
                                  project_task.projectIdentifier,
                                  project_task.projectSequence
                              )}
                          >
                              Delete
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      );
      
      
  }
}

ProjectTask.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteProjectTask }
)(ProjectTask);
