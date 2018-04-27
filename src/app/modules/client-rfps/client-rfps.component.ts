import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-client-rfps",
  templateUrl: "./client-rfps.component.html",
  styleUrls: ["./client-rfps.component.css"]
})
export class ClientRfpsComponent implements OnInit {
  private clientName: string;
  rfps: any[] = [
    {
      line_of_coverage: "Medical",
      carrier: "BCBSIL",
      sent_date: "1/1/2018",
      due_date: "2/1/2018",
      received_date: "",
      status: "New",
      notes: ""
    },
    {
      line_of_coverage: "Dental",
      carrier: "BCBSIL",
      sent_date: "1/1/2018",
      due_date: "2/1/2018",
      received_date: "",
      status: "New",
      notes: ""
    },
    {
      line_of_coverage: "-Life",
      carrier: "BCBSIL",
      sent_date: "1/1/2018",
      due_date: "2/1/2018",
      received_date: "",
      status: "New",
      notes: ""
    },
    {
      line_of_coverage: "Life",
      carrier: "BCBSIL",
      sent_date: "1/1/2018",
      due_date: "2/1/2018",
      received_date: "",
      status: "New",
      notes: ""
    },
    {
      line_of_coverage: "Medical",
      carrier: "BCBSIL",
      sent_date: "1/1/2018",
      due_date: "2/1/2018",
      received_date: "",
      status: "New",
      notes: ""
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clientName = this.route.snapshot.params["id"];
    console.log(this.clientName);
  }
}
