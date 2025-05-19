import { type BuilderValidationConfig, ValidationType } from "vali-valid";

import type { Quotation } from "../../features/quotation/domain/Quotation.entity";

export const QuotationValidations: BuilderValidationConfig<Quotation> = [
    {
        field: "typeDocument",
        validations: [
            { type: ValidationType.Required, message: "El campo tipo de documento es requerido *" }
        ]
    },
    {
        field: "nroDocument",
        validations: [
            { type: ValidationType.Required, message: "El campo nro de documento es requerido *" },
            {
                type: ValidationType.MaxLength,
                value: 8,
                message: "El campo nro de documento debe ser de 8 digitos"
            },
            {
                type: ValidationType.DigitsOnly,
                message: "El campo nro de documento debe ser de solo numeros"
            }
        ]
    },
    {
        field: "phone",
        validations: [
            { type: ValidationType.Required, message: " El campo telefono es requerido *" },
            {
                type: ValidationType.MaxLength,
                value: 9,
                message: "El campo telefono debe ser de 9 digitos"
            },
            {
                type: ValidationType.DigitsOnly,
                message: "El campo telefono debe ser de solo numeros"
            }
        ]
    },
    {
        field: "privacyPolicy",
        validations: [
            { type: ValidationType.Required, message: " El campo acepta terminos y condiciones es requerido *" }
        ]
    },
    {
        field: "commercialCommunicationsPolicy",
        validations: [
            { type: ValidationType.Required, message: "El campo política Comunicaciones Comerciales es requerido *"}
        ]
    }
]