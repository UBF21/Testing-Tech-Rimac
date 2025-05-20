import { Card, Radio, Skeleton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import { planService } from "../services/plan.service";
import { useQuery } from "@tanstack/react-query";
import type { PlanItem } from "../domain/plan.entity";
import type { User } from "../domain/user.entiy";
import { userService } from "../services/user.service";
import { calculateAge, calculateDiscountedPrice } from "../../../shared/utils/utils";
import { useEffect, useState } from "react";
import { useUserStore } from "../../../shared/stores/userStore";
import { usePlanStore } from "../../../shared/stores/planStore";
import { useStepStore } from "../../../shared/stores/stepStore";
import { usePlanOptionStore } from "../../../shared/stores/PlanOptionStore";
import imageForMe from "../../../../assets/icons/para-mi.png";
import imageForSomeoneElse from "../../../../assets/icons/para-alguien-mas.png";
import PlanCasa from "../../../../assets/icons/plan-casa.png";

export interface PlanOption {
    id: string;
    value: 'for-me' | 'for-someone-else';
    title: string;
    description: string;
    icon: string;
}

const PlanOptions: PlanOption[] = [
    {
        id: 'for-me',
        value: 'for-me',
        title: 'Para mí',
        description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        icon: imageForMe, // Ajusta la ruta según sea necesario
    },
    {
        id: 'for-someone-else',
        value: 'for-someone-else',
        title: 'Para alguien más',
        description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
        icon: imageForSomeoneElse, // Ajusta la ruta según sea necesario
    },
];

export const PlanView = () => {

    const { data: plans = [] } = useQuery<PlanItem[]>({ queryKey: ['plans'], queryFn: planService.getPlans });
    const { data: user = { name: "", lastName: "", birthDay: "" }, isLoading } = useQuery<User>({ queryKey: ['user'], queryFn: userService.getUserInfo });
    const [selectedValue, setSelectedValue] = useState<'for-someone-else' | 'for-me' | ''>('');

    const setUser = useUserStore((state) => state.setUser);
    const setPlan = usePlanStore((state) => state.setPlan);
    const setStep = useStepStore((state) => state.setStep);
    const setPlanOption = usePlanOptionStore((state) => state.setPlanOption);

    const onSelectPlan = (plan: PlanItem) => {
        setPlan(plan);
        setStep(1);
    };

    const onClickSelectedOption = (planOption: PlanOption) => {
        if (selectedValue == planOption.value) return;
        setSelectedValue(planOption.value);
    };

    useEffect(() => { if (user) setUser(user) }, [user, setUser]);


    return (
        <div>
            <div className="container mt-5 mb-5">

                <div className="row mb-3 mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        {
                            isLoading ? (
                                <>
                                    <Skeleton width={500} height={100} animation="wave" />
                                    <Skeleton width={300} height={100} animation="wave" />
                                </>
                            ) : (
                                <h1 className="p-2 p-md-0 anim-in">{user && user.name} ¿Para quién deseas cotizar?</h1>
                            )
                        }
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        {
                            isLoading ? (
                                <>
                                    <Skeleton width={300} height={100} animation="wave" />
                                </>
                            ) : (
                                <p className="text-xl anim-in">Selecciona la opción que se ajuste más a tus necesidades.</p>
                            )
                        }
                    </div>
                </div>

                {/* Para Quien ese el plan */}

                <div className="row d-flex justify-content-center">

                    {
                        isLoading ? (
                            <>
                                <div className="col-lg-3 col-12 rounded-xxxl p-0 shadow-4 shadow-color-info-light">
                                    <Skeleton className="w-100 h-100 rounded-xxxl" animation="wave" variant="rectangular" />
                                </div>
                                <div className="col-lg-3 col-12 rounded-xxxl p-0 shadow-4 shadow-color-info-light">
                                    <Skeleton className="w-100 h-100 rounded-xxxl" animation="wave" variant="rectangular" />
                                </div>
                            </>
                        ) : (

                            PlanOptions.map((option) => (

                                <div className="col-lg-3 col-12 mb-3 mb-lg-0 d-flex justify-content-center" key={crypto.randomUUID()}>
                                    <a className="text-decoration-none w-md-75 w-lg-100 w-75" onClick={() => onClickSelectedOption(option)}
                                    >
                                        <Card className={`w-md-100 p-4 rounded-xxxl shadow-4 shadow-color-info-light hvr-push anim-in ${selectedValue === option.value ? 'border-solid border-1 border-dark' : ''}`}>
                                            <p className="text-end">
                                                <Radio
                                                    checked={selectedValue === option.value}
                                                    value={option.value}
                                                    name="radio-buttons"
                                                    color="success"
                                                    size="medium"
                                                    id={option.id}
                                                    onChange={(_) => {
                                                        setSelectedValue(option.value);
                                                        setPlanOption(option);
                                                    }}
                                                    checkedIcon={<CheckCircleIcon fontSize="large" />}
                                                />
                                            </p>
                                            <img src={option.icon} width={50} alt={option.title} />
                                            <h2 className="text-xxl">{option.title}</h2>
                                            <p className="p-0 m-0">{option.description}</p>
                                        </Card>
                                    </a>
                                </div>
                            ))

                        )
                    }
                </div>

                {/* Visualizar Planes */}

                <div className="row d-flex justify-content-center mt-4">

                    {selectedValue !== '' && plans && plans.filter(item => item.age <= calculateAge(user.birthDay)).map((plan: PlanItem) => (

                        <div className="col-lg-3 col-9 mb-3 mt-2 mb-md-0" key={crypto.randomUUID()}>
                            <Card className="w-100 h-100 p-4 rounded-xxxl d-flex flex-column hvr-push anim-in">
                                <div className="row d-flex justify-content-between align-items-center">
                                    {
                                        plan.name === 'Plan en Casa + Bienestar' && (
                                            <div className="col-12">
                                                <span className="chip-suggestion text-dark mb-0 font-weight-bold text-xs">Plan recomendado</span>
                                            </div>
                                        )
                                    }
                                    <div className="col-8">
                                        <h2 className="text-xxl text-lg">{plan.name}</h2>
                                    </div>
                                    <div className="col-4 text-end">
                                        <img src={PlanCasa} width={50} alt="para mi" />
                                    </div>
                                </div>
                                <p className="text-xs p-0 mb-0 mb-1 font-weight-semibold text-Neutrals">COSTO DEL PLAN</p>
                                {selectedValue === 'for-someone-else' && (
                                    <p className="text-xs p-0 mb-0 mb-1 font-weight-semibold text-Neutrals text-decoration-line-through mt-1 mb-1">${plan.price} antes</p>
                                )}
                                <p className="text-md p-0 mb-0 font-weight-bold">${selectedValue === 'for-someone-else' ? calculateDiscountedPrice(plan.price) : plan.price} al mes</p>

                                {/* CONTENIDO DE PLANES  */}
                                <div className="w-100 mt-4">
                                    {
                                        plan.description.map((descripcion: string) => (
                                            <div className="d-flex justify-content-center" key={crypto.randomUUID()}>
                                                <div className="mr-2">
                                                    <CircleIcon className="text-xs mt-1" />
                                                </div>
                                                <div>
                                                    <p className="text-sm">{descripcion}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="mt-auto">
                                    <button onClick={() => onSelectPlan(plan)} className="btn btn-block btn-lg bg-red-500 text-light mt-4 rounded-xxxl p-1 font-weight-semibold">Seleccionar</button>
                                </div>
                            </Card>
                        </div>

                    ))}
                </div>



            </div>
        </div>
    );
}