export interface InitialStateProps {
    // lang: string;
    loading: boolean;
    userData: userDataProps | null;
    lateArrivals: lateArrivalDataProps[] | [];
    employees: userDataProps[] | [];
    tasks: taskDataProps[] | [];
    departments: departmentDataProps[] | [];
    attendances: attendanceDataProps[] | [];

    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface userDataProps extends defaultKeys{
    name: string;
    birth_date: string; // Assuming the date is stored in ISO format
    media: mediaDataProps | null;
    role: string;
    position: string;
    department: departmentDataProps;
    salt: string | null;
    hash: string | null;
}

export interface taskDataProps extends defaultKeys{
    user: userDataProps;
    department: departmentDataProps;
    task_number: string;
    deadline: string; // Assuming the timestamp is stored in ISO format
    status: string;
    type: 'regular' | 'permanent';
    media: mediaDataProps | null;
}

export interface departmentDataProps extends defaultKeys{
    name: string;
    region: string;
}

export interface lateArrivalDataProps extends defaultKeys{
    user: userDataProps;
    late_duration: number;
}

export interface attendanceDataProps extends defaultKeys {
    user: userDataProps | null;
    arrival_time: string; // Assuming the timestamp is stored in ISO format
}

export interface mediaDataProps extends defaultKeys {
    user: userDataProps;
    name: string;
    path: string;
    type: string;
}

export interface defaultKeys {
    id: number;
    created_at: string; // Assuming the timestamp is stored in ISO format
    updated_at: string; // Assuming the timestamp is stored in ISO format
}