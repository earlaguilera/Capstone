import {
  Compiler,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { Modal } from 'ng2-modal';

import { ModalDescription, ModalOptions } from '../../../models';
import { ModalService } from '../../../services';

@Component({
  selector: 'app-generated-modal',
  templateUrl: './generated-modal.component.html',
  styleUrls: ['./generated-modal.component.css']
})
export class GeneratedModalComponent implements OnInit {
  @ViewChild('generatedModal')
  private generatedModal: Modal;

  @ViewChild('header', {read: ViewContainerRef})
  private modalHeader: ViewContainerRef;

  @ViewChild('content', {read: ViewContainerRef})
  private modalContent: ViewContainerRef;

  @ViewChild('footer', {read: ViewContainerRef})
  private modalFooter: ViewContainerRef;

  public modalOptions: ModalOptions;

  constructor(private compiler: Compiler,
              private componentFactoryResolver: ComponentFactoryResolver,
              private modalService: ModalService,
              private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.modalService.initModalComponent()
    .subscribe((modalDescription: ModalDescription) => {
      console.log(modalDescription);
      this.modalHeader.clear();
      this.modalContent.clear();
      this.modalFooter.clear();
      if (modalDescription) {
        this.modalOptions = modalDescription.options;
        this.modalOptions.onClose =
          this.modalOptions.onClose ? this.modalOptions.onClose :  () => {};
        this.modalOptions.onOpen =
          this.modalOptions.onOpen ? this.modalOptions.onOpen :  () => {};
        this.modalOptions.onSubmit =
          this.modalOptions.onSubmit ? this.modalOptions.onSubmit :  () => {
            this.generatedModal.close();
          };
        if (modalDescription.content) {
          this.modalContent.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(
              modalDescription.content
            )
          );
        }
        if (modalDescription.header) {
          this.modalHeader.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(
              modalDescription.header
            )
          );
        }
        if (modalDescription.footer) {
          this.modalFooter.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(
              modalDescription.footer
            )
          );
        }
        this.generatedModal.open();
      } else if (this.generatedModal.isOpened) {
        this.generatedModal.close();
      }
    });
  }
}
