import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-rfp",
  templateUrl: "./dashboard-rfp.component.html",
  styleUrls: ["./dashboard-rfp.component.css"]
})
export class DashboardRfpComponent implements OnInit {
  rfps: any[] = [
    {
      rfp_id : 123,
      name: "Douglas  Pace",
      submission_date: "1/1/2018",
      due_date: "2/1/2018",
      completed_date: "",
      status: "New"
    },
    {
      rfp_id : 123,
      name: "Mcleod  Mueller",
      submission_date: "1/1/2018",
      due_date: "2/1/2018",
      completed_date: "",
      status: "Awaiting Client Input"
    },
    {
      rfp_id : 123,
      name: "Day  Meyers",
      submission_date: "1/1/2018",
      due_date: "2/1/2018",
      completed_date: "",
      status: "Client Input Received"
    },
    {
      rfp_id : 123,
      name: "Aguirre  Ellis",
      submission_date: "1/1/2018",
      due_date: "2/1/2018",
      completed_date: "",
      status: "New"
    },
    {
      rfp_id : 123,
      name: "Cook  Tyson",
      submission_date: "1/1/2018",
      due_date: "2/1/2018",
      completed_date: "3/1/2018",
      status: "Completed"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
