
export interface ContactUs {
    name: string;
    email: string;
    phone: number
    message: string;
}

export class ContactUs implements ContactUs {
    constructor(init?: ContactUsFormValues) {
        Object.assign(this, init);
    }
}

export class ContactUsFormValues {
    name: string = "";
    email: string = "";
    phone: number = 0;
    message: string  = "";

    constructor(contactUs?: ContactUsFormValues){
        if (!contactUs) return;

        this.name = contactUs.name;
        this.email = contactUs.email;
        this.phone = contactUs.phone;
        this.message = contactUs.message;
    }
}