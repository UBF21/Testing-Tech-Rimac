export interface Plan {
   list: PlanItem[];
}

export interface PlanItem {
    name: string;
    price: number;
    description: string[];
    age: number;
}