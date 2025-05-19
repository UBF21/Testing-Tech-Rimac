export interface Quotation {
    typeDocument: string;
    nroDocument: string;
    phone: string;
    privacyPolicy:boolean;
    commercialCommunicationsPolicy:boolean; 
}

export const initialQuotation: Quotation = {
    typeDocument: 'DNI',
    nroDocument: "",
    phone: "",
    privacyPolicy: true,
    commercialCommunicationsPolicy: true
}