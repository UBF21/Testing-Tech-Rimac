import { Checkbox, Divider, FormControlLabel, FormHelperText, Link, MenuItem, Select, TextField, type SelectChangeEvent } from "@mui/material";
import { initialQuotation, type Quotation } from "../domain/Quotation.entity";
import { ValiValid, type FormErrors } from "vali-valid";
import { useEffect, useState, type ChangeEvent } from "react";
import { QuotationValidations } from "../../../shared/validations/quotation.validation";
import { useQuotationStore } from "../../../shared/stores/quotationStore";
import { useNavigate } from "react-router-dom";
import imagePrincipal from "../../../../assets/images/image-principal.png";


export const QuotationView = () => {

    const [formQuotation, setFormQuotation] = useState<Quotation>(initialQuotation);
    const [errors, setErrors] = useState<FormErrors<Quotation>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const setQuotation = useQuotationStore((state) => state.setQuotation);
    const navigate = useNavigate();


    const managerValidation = new ValiValid<Quotation>(setIsFormValid, QuotationValidations);

    const handleChange = (field: keyof Quotation, value: any): void => {
        managerValidation.handleChange(field, value, setFormQuotation, setErrors);
    };

    const onSubmit = () => {
        setQuotation(formQuotation);
        navigate("/plans");
    }

    useEffect(() => {
        const errors = managerValidation.validate(formQuotation);
        setErrors(errors);
    }, [])

    return (

        <div className="container d-flex justify-content-center align-items-center mt-5 mb-3">
            <div className="row p-2 p-md-0">
                <div className="col-lg-6 col-5 order-2">
                    <img src={imagePrincipal} className="img-fluid anim-in" />
                </div>
                <div className="col-lg-6 col-7 mt-4 mt-md-0 d-lg-none d-md-none order-1">
                    <span className="chip font-weight-bold text-xs anim-in">Seguro Salud Flexible</span>
                    <h1 className="font-weight-bold text-xxxxl line-height-md anim-in">Creado para ti y tu familia</h1>
                </div>
                <div className="col-12 d-lg-none mt-3 mb-3 d-md-none order-3">
                    <Divider className="bg-gray-400 mt-2 mb-2" />
                </div>
                <div className="col-12 d-lg-none mt-3 d-md-none order-3">
                    <p className="font-weight-bold text-lg">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                </div>
                <div className="col-lg-6 mt-4 mt-md-0 order-4 anim-in">
                    <div className="row ml-md-5 ml-lg-5 ml-xl-5 ml-xxl-5">
                        <div className="col-12 d-none d-md-block">
                            <span className="chip">Seguro Salud Flexible</span>
                            <h1 className="font-weight-semibold">Creado para ti y tu familia</h1>
                            <p className="font-weight-semibold text-lg">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                        </div>
                        <div className="col-4 mb-3 mr-0 pr-0">
                            <Select
                                value={formQuotation.typeDocument || "DNI"}
                                label="Age"
                                variant="outlined"
                                className="w-100"
                                id="demo-simple-select"
                                onChange={(event: SelectChangeEvent) => handleChange('typeDocument', event.target.value)}
                            >
                                <MenuItem value={'DNI'}>DNI</MenuItem>
                                <MenuItem value={'CE'}>CE</MenuItem>
                            </Select>
                            <FormHelperText className="text-danger-dark">{errors && errors.typeDocument}</FormHelperText>
                        </div>
                        <div className="col-8 mb-3 ml-0 pl-0">
                            <TextField
                                id="outlined-error"
                                label="Nro. de documento"
                                className="w-100"
                                value={formQuotation.nroDocument}
                                required={true}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange('nroDocument', event.target.value)}
                            />
                            <FormHelperText className="text-danger-dark">{errors && errors.nroDocument}</FormHelperText>
                        </div>
                        <div className="col-12 mb-3">
                            <TextField
                                id="outlined-celular"
                                label="Celular"
                                value={formQuotation.phone}
                                className="w-100"
                                required={true}
                                placeholder="99-999-999"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange('phone', event.target.value)}
                            />
                            <FormHelperText className="text-danger-dark">{errors && errors.phone}</FormHelperText>
                        </div>
                        <div className="col-12">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formQuotation.privacyPolicy}
                                        className="text-dark"
                                    />
                                }
                                required={true}
                                onChange={(_, checked: boolean) => handleChange("privacyPolicy", checked)}
                                label="Acepto lo Política de Privacidad"
                                className="mt-0 mb-0"
                            />
                            <FormHelperText className="text-danger-dark">{errors && errors.privacyPolicy}</FormHelperText>
                        </div>
                        <div className="col-12 mb-3">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formQuotation.commercialCommunicationsPolicy}
                                        className="text-dark"
                                    />
                                }
                                required={true}
                                onChange={(_, checked: boolean) => handleChange("commercialCommunicationsPolicy", checked)}
                                label="Acepto la Política Comunicaciones Comerciales"
                                className="mt-0 mb-0"
                            />
                            <FormHelperText className="text-danger-dark">{errors && errors.commercialCommunicationsPolicy}</FormHelperText>
                        </div>
                        <div className="col-12 mb-3">
                            <Link href="#" underline="always" className="text-dark">
                                <span className="font-weight-semibold text-sm">Aplican Términos y Condiciones.</span>
                            </Link>
                        </div>
                        <div className="col-12">
                            <button onClick={onSubmit} className="btn-dark btn  btn-lg hvr-push d-none d-sm-none d-md-block rounded-xxxl font-weight-semibold mt-4" disabled={!isFormValid}>Cotizar Aqui</button>
                            <button onClick={onSubmit} className="btn-dark btn w-100  hvr-push btn-lg  d-block d-sm-block d-md-none rounded-xxxl font-weight-semibold mt-4" disabled={!isFormValid}>Cotizar Aqui</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
