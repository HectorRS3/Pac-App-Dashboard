import React from "react"

function Tabs(props) {
  return (
    <div>
      <ul className={`nav nav-${props.variant} nav-fill mb-3`} id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="pills-activities-tab" data-toggle="pill" href="#pills-activities" role="tab" aria-controls="pills-activities" aria-selected="true">Activities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-education-tab" data-toggle="pill" href="#pills-education" role="tab" aria-controls="pills-education" aria-selected="false">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-resources-tab" data-toggle="pill" href="#pills-resources" role="tab" aria-controls="pills-resources" aria-selected="false">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-help-tab" data-toggle="pill" href="#pills-help" role="tab" aria-controls="pills-help" aria-selected="false">Help</a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade" id="pills-activities" role="tabpanel" aria-labelledby="pills-activities-tab">
          {props.activitiesView}
        </div>
        <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
          {props.educationView}
        </div>
        <div className="tab-pane fade" id="pills-resources" role="tabpanel" aria-labelledby="pills-resources-tab">
          {props.resourcesView}
        </div>
        <div className="tab-pane fade" id="pills-help" role="tabpanel" aria-labelledby="pills-help-tab">
          {props.helpView}
        </div>
      </div>
    </div>
  );
}

export default Tabs;