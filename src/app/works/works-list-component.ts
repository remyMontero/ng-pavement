import {Component} from "@angular/core"

@Component({
    selector: 'works-list',
    templateUrl: 'works-list-component.html',
})
export class WorksListComponent{
    workType = {
        id: 1,
        name: "Payment Analysis",
        shortDescription: "short description goes here",
        description: "blah blah blah",
        benefits: " benefits benefits",
        price: 0.0,
        images: ["http://pavemgmt.com/images/main1.jpg","http://pavemgmt.com/images/LAKE-HOUSE-JOSIE-BASILE-JOB-09-0221.jpg"]
    }
}