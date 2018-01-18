import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  public modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }


}
