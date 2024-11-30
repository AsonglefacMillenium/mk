export interface Subdivision  {
    id: number;
    name: string;
  } 
  
  export interface Entity  {
    id: number;
    name: string;
  };
  
export interface Employee {
    id: number;
    functional_block: any | null;
    subdivision_1: Subdivision;
    subdivision_2: Subdivision;
    subdivision_3: Subdivision;
    subdivision_4: Subdivision;
    position: Entity;
    role: Entity;
    city: Entity;
    name: string;
    surname: string;
    phone: string;
    address: string;
    email: string | null;
    on_sick: boolean;
    on_leave: boolean;
    missing_until: string | null;
    senior_employee: Employee | null;
  };
  