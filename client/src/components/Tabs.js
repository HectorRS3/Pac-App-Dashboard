import React from "react"

function Tabs(props) {
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="pills-users-tab" data-toggle="pill" href="#pills-users" role="tab" aria-controls="pills-users" aria-selected="true">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-activities-tab" data-toggle="pill" href="#pills-activities" role="tab" aria-controls="pills-activities" aria-selected="false">Activities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-education-tab" data-toggle="pill" href="#pills-education" role="tab" aria-controls="pills-education" aria-selected="false">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-resources-tab" data-toggle="pill" href="#pills-resources" role="tab" aria-controls="pills-resources" aria-selected="false">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-help-tab" data-toggle="pill" href="#pills-help" role="tab" aria-controls="pills-help" aria-selected="false">Help</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-users" role="tabpanel" aria-labelledby="pills-users-tab">
          {props.usersView}
        </div>
        <div class="tab-pane fade" id="pills-activities" role="tabpanel" aria-labelledby="pills-activities-tab">
          {props.activitiesView}
        </div>
        <div class="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
          {props.educationView}
        </div>
        <div class="tab-pane fade" id="pills-resources" role="tabpanel" aria-labelledby="pills-resources-tab">
          {props.resourcesView}
        </div>
        <div class="tab-pane fade" id="pills-help" role="tabpanel" aria-labelledby="pills-help-tab">
          {props.helpView}
        </div>
      </div>
    </div>
  );
}

export default Tabs;