// import React from 'react';

import {TableColumn} from "react-data-table-component";
import {lateArrivalDataProps} from "../../interface/redux/variable.interface.ts";
import {useAppSelector} from "../../redux/hooks.ts";
import TableComponent from "../../components/table";

export default function ArrivalStatusController() {

    const {
        lateArrivals,
        currentPage,
        pageCount,
        limit,
        totalCount,
        loading
    } = useAppSelector(state => state.variables);
    
    const basicColumns: TableColumn<any>[] = [
        {
            name: 'F.I.O',
            width: '120px',
            wrap: true,
            selector: (row: lateArrivalDataProps) => row.user.name
        },
        {
            name: "Bo'lim",
            width: '200px',
            wrap: true,
            selector: (row: lateArrivalDataProps) => row.user.department.name
        },
        {
            name: 'Kech qolgan muddati',
            width: '100px',
            wrap: true,
            selector: (row: lateArrivalDataProps) => row.late_duration
        },
    ]

    return (
        <div>
            <TableComponent
                data={lateArrivals}
                size={lateArrivals.length}
                limit={limit}
                columns={basicColumns}
                progressPending={loading}
                totalPages={pageCount}
                currentPage={currentPage}
                totalCount={totalCount}
                />
        </div>
    );
}