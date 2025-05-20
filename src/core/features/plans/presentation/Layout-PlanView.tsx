import { Step, StepButton, Stepper } from "@mui/material";
import { PlanView } from "./PlanView";
import { SummaryView } from "../../summary/SummaryView";
import { useStepStore } from "../../../shared/stores/stepStore";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../shared/stores/userStore";
import { usePlanStore } from "../../../shared/stores/planStore";
import { usePlanOptionStore } from "../../../shared/stores/PlanOptionStore";


const steps = [
    'Planes y coberturas',
    'Resumen'
];

export const LayoutPlanView = () => {

    const step = useStepStore((state) => state.step);
    const clearUser = useUserStore((state) => state.clearUser);
    const clearPlan = usePlanStore((state) => state.clearPlan);
    const clearPlanOption = usePlanOptionStore((state) => state.clearPlanOption);
    const navigate = useNavigate();

    const changePrevius = () => {
        if (step === 0) {
            navigate("/");
            clearUser;
            clearPlan;
            clearPlanOption;
            useStepStore.setState({ step: 0 })
        } else {
            useStepStore.setState({ step: step - 1 });
        }
    }

    return (
        <div className="bg-light">
            <div className="container-fluid d-flex justify-content-center align-items-center bg-Neutrals-200 p-0">
                <div className="w-75 mt-4 d-block  d-md-none">
                    <Stepper nonLinear activeStep={step} alternativeLabel>
                        <Step key={crypto.randomUUID()}>
                            <StepButton onClick={changePrevius} color="inherit" icon={<ArrowCircleLeftOutlinedIcon fontSize="large" className="text-primary-dark" />}></StepButton>
                        </Step>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepButton color="inherit">
                                    <span className="font-weight-semibold text-dark">{label}</span>
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className="w-75 mt-4 d-none d-md-block">
                    <Stepper nonLinear activeStep={step} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} >
                                <StepButton color="inherit">
                                    <span className="font-weight-semibold text-dark">{label}</span>
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>

            <main>
                <div className="container d-none d-md-block mt-4">
                    <a className="text-decoration-none cursor-pointer">
                        <div className="d-flex align-items-center justify-content-start" onClick={changePrevius}>
                            <div>
                                <ArrowCircleLeftOutlinedIcon fontSize="large" className="text-blue-berry" />
                            </div>
                            <div>
                                <span className="font-weight-bold text-xl text-blue-berry">Volver</span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="bg-light">
                    {step === 0 ? <PlanView /> : <SummaryView />}
                </div>
            </main>
        </div>
    );
};