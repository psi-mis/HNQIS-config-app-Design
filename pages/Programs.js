import React from 'react'
import { useState, useEffect } from "react";
import BarSlctr from '../../components/BarSlctr';
import SubNav from '../../components/SubNav';
import Fab from '../../components/Fab';

class Programs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 0,
                    "title": "ZW HNQIS2 VMMC A&B",
                    "contains": 2
                },
                {
                    "id": 1,
                    "title": "ZW HNQIS2 VMMC C: Client Record Review",
                    "contains": 3
                },
                {
                    "id": 2,
                    "title": "ZW HNQIS2 VMMC D: Emergency Management",
                    "contains": 2
                },
                {
                    "id": 3,
                    "title": "ZW HNQIS2 VMMC DHE CQI TOOL",
                    "contains": 4
                },
                {
                    "id": 4,
                    "title": "ZW HNQIS2 VMMC E: Adequacy of Staffing",
                    "contains": 2
                },
                {
                    "id": 5,
                    "title": "ZW HNQIS2 VMMC F: Surgical Equipment and Procedures",
                    "contains": 2
                },
                {
                    "id": 6,
                    "title": "ZW HNQIS2 VMMC G: Communication to Clients",
                    "contains": 2
                }
            ]
        }
    }

    render() {

        return (
            <div className="wrapper">
                <div class="layout_programs">
                    <div class="fab-section">
                        <Fab />
                    </div>
                    <div class="list-section">{this.state.data.map((programs) => {
                        return (
                            <BarSlctr
                                key={programs.key}
                                title={programs.title}
                                contains={"(" + programs.contains + ") program stages"}
                            />
                        )
                    })}</div>
                    <div class="sub-bar-section">
                        <SubNav
                            Title="DHIS2 Config wizard"
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default Programs