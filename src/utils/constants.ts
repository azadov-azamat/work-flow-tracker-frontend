import {
    ArrivalStatusController,
    BirthdaysController,
    DashboardController,
    ExecutionPeriodController, ExecutionStatusController, LearningStatusController,
    ReportsController
} from '../app/index';


export const routes = [
    {
        id: 1,
        name: 'dashboard',
        path: '/dashboard',
        component: DashboardController
    },
    {
        id: 2,
        name: 'arrival-status-controller',
        path: '/arrival-status',
        component: ArrivalStatusController
    },
    {
        id: 3,
        name: 'birthdays-controller',
        path: '/birthdays',
        component: BirthdaysController
    },
    {
        id: 4,
        name: 'execution-period-controller',
        path: '/execution-period',
        component: ExecutionPeriodController
    },
    {
        id: 5,
        name: 'execution-status-controller',
        path: '/execution-status',
        component: ExecutionStatusController
    },
    {
        id: 6,
        name: 'learning-status-controller',
        path: '/learning-status',
        component: LearningStatusController
    },
    {
        id: 7,
        name: 'reports-controller',
        path: '/reports',
        component: ReportsController
    }
]