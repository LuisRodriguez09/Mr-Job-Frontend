export interface IAssignation {
    idProcess: number;
    name: string;
}

export interface IAssignations {
    CANCELED: IAssignation[];
    DATA: IAssignation[];
    FINISHED: IAssignation[];
    WARRANTY: IAssignation[];
}