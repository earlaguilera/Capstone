import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { getComponetClass } from '../../components/challenges';
import { Challenge } from '../../models';
import { ChallengeService, TitleService } from '../../services';

@Component({
  selector: 'app-challenge-app',
  templateUrl: './challenge-app.component.html',
  styleUrls: ['./challenge-app.component.css']
})
export class ChallengeAppComponent implements OnInit {
  @ViewChild('challengeDisplay', {read: ViewContainerRef})
  private challengeContainer: ViewContainerRef;
  private challengeId: string;
  private challengeReady: boolean = false;

  constructor(private route: ActivatedRoute,
              private challengeService: ChallengeService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private titleService: TitleService) { }

/*
 * OnInit: Get the current challenge by ID, then inject the correct
 *          component type into the container.
 */
  ngOnInit() {
    this.route.params.forEach((params: Params): void => {
      this.challengeService.setChallenge(params['id'])
      .subscribe((challenge: Challenge) => {
        const component = getComponetClass(challenge.type);
        if (component) {
          this.titleService.setTitle(challenge.title);
          this.challengeContainer.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(component)
          );
          this.challengeReady = true;
        } else {
          // TODO: Handle component class not found
          console.error('Challenge Component class not found: ', challenge.type);
        }
      }, (error: string) => {
        // TODO: handle challenge not found
        console.error('Challenge not found: ', this.challengeId);
      });
    });
  }

}
