import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projects',
  template: `
    <p>
      projects works!
    </p>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  // TODO: Turn the project into a model?
  project: { id: number; name: string };
  routeParamSubscription: Subscription;

  // activatedRoute fetches the route parameters
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: Maybe get it from a service instead using a helper?
    // snapshot is only good for initial loading bc data change will not update
    // if already on component.
    this.project = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // subscribes to params changes to update the project view
    this.routeParamSubscription = this.route.params.subscribe(params => {
      this.project.id = params['id'];
      this.project.name = params['name'];
    });
  }

  ngOnDestroy() {
    // Angular handles this for route.params, but good reminder to do this for other subscriptions.
    this.routeParamSubscription.unsubscribe();
  }
}
