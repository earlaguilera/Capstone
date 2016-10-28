import { Component, OnInit } from '@angular/core';

import { ChallengeSummaryComponent } from '../../modals';
import { ModalService } from '../../../services';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.onComplete();
  }

  private onComplete(): void {
    this.modalService.openModal({
      content: ChallengeSummaryComponent,
      options: {
        modalClass: 'modal-md',
        title: 'Exploration Summary',
        submitButtonLabel: 'Continue',
        hideCloseButton: true,
        closeOnEscape: false,
        closeOnOutsideClick: false
      }
    });
  }
}
