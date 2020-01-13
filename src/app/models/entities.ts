import {FormGroup} from '@angular/forms';
export class Topic {
    $key: string;
    Header: string;
    Description: string;
    TopicType: string;
    ModifiedDate: string;
    // tslint:disable-next-line:no-inferrable-types
    ShowContent?: boolean = false;
}
export class TopicType {
    $key: string;
    Type: string;
    postsCount : number;
    ModifiedDate: string;
}
export class FormEntity {
    formControls?: ControlEntity[];
    formActions?: ButtonEntity[];
    isSubmitBtn?: boolean;
    // tslint:disable-next-line:ban-types
    submitCallBack?: Function;
    title: string;
}
export class FormButtonEvent {
    popupDisp?: string;
    btnType?: string;
    btnName?: string;
    formGroup?: FormGroup;
}
export class ControlEntity {
    name: string;
    lableName: string;
    inputType: InputTypesEnum;
    order?: number;
    options?: any[];
    val?: any;
    rows?: number;
    required?: boolean;
}
export class ButtonEntity {
    name: string;
    displayName: string;
    // tslint:disable-next-line:ban-types
    callBackFunction?: Function;
}
export enum InputTypesEnum {
    text,
    number,
    dropdown,
    radio,
    textarea
}

export interface User {
    uid: number;
    email: string;
    photoURL?: string;
    displayName?: string;
    favoriteColor?: string;
  }