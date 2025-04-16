import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/message.model';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { SplitterModule } from 'primeng/splitter';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, InputTextModule, InputTextareaModule, InputGroupModule, InputGroupAddonModule, SplitterModule, ConfirmDialogModule, ToastModule, ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ContactFormComponent {

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };

  onSubmit(): void {
    console.log(this.newMessage);
  }

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm1(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Es-tu sûr(e) de vouloir continuer ?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: "none",
        rejectIcon: "none",
        rejectButtonStyleClass: "p-button-text",
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmé', detail: 'Tu as confirmé' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejeté', detail: 'Tu as annulé', life: 3000 });
        }
    });
}

confirm2(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Souhaites-tu vraiment supprimer cet enregistrement ?',
        header: 'Confirmation de suppression',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass: "p-button-danger p-button-text",
        rejectButtonStyleClass: "p-button-text p-button-text",
        acceptIcon: "none",
        rejectIcon: "none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Supprimé', detail: 'Enregistrement supprimé' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Annulé', detail: 'Suppression annulée' });
        }
    });
}

}
