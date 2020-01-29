import { Component, Input, Output, EventEmitter, SimpleChanges, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormEntity, ButtonEntity, ControlEntity, InputTypesEnum } from '../../models/entities';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'popup',
    templateUrl: './popup-mdl.component.html'
})
export class PopupModelComponent {
    //#region private and constructor
    @Input() dataContext: { formEntity: FormEntity, popupDisplay: string };
    @Output() popupDisplay = new EventEmitter<string>();
    popDisplay: string = 'none';
    display: string;
    formEntity: FormEntity;
    cform: FormGroup;

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.onPopupCloseButton();
    }

    constructor() { }
    //endregion
    ngOnInit() {
        this.popDisplay = this.dataContext.popupDisplay;
        console.log(this.dataContext.formEntity);
        this.formEntity = this.dataContext.formEntity;
        const fcGroup: any = {};
        this.formEntity.formControls.forEach(p => {
            fcGroup[p.name] = new FormControl(p.val, p.required ? Validators.required : null);
        }
        );
        this.cform = new FormGroup(fcGroup);
    }
    onFormSubmit() {
        this.dataContext.formEntity.formControls.forEach(cntrl => {
            cntrl.val = this.cform.get(cntrl.name).value;
        });
        this.formEntity.submitCallBack(this.dataContext.formEntity);
        this.popupDisplay.emit("none");
    }
    onExternalBtnClick(btnName: string) {
        const btnProperty = this.formEntity.formActions.find(p => p.name == btnName);
        btnProperty.callBackFunction(this.cform);
    }
    onPopupCloseButton() {        
        this.popupDisplay.emit("none");        
    }

    // onKeydown(event: any){
    //     console.log('eventkeydown',event);
    // }
}