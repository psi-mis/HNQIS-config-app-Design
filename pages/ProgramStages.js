import React from 'react';
import BarSlctr from '../../components/BarSlctr';
import SubNav from '../../components/SubNav';
import Fab from '../../components/Fab';

class prgStagetages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 0,
                    "title": "SOPs, Guidelines, Policies and Job Aid",
                    "contains": 0
                },
                {
                    "id": 1,
                    "title": "Direct Observation of items",
                    "contains": 23
                },
                {
                    "id": 2,
                    "title": "SIMS: Compliance with National Testing Algorithm and Strategy",
                    "contains": 24
                },
                {
                    "id": 3,
                    "title": "SIMS: Service Referral and Linkage System",
                    "contains": 25
                },
                {
                    "id": 4,
                    "title": "Facilities, Supplies & Equipment",
                    "contains": 24
                },
                {
                    "id": 5,
                    "title": "Patient and Client Flow",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "Medicines",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "Supplies and Equipment - SIMS: Injection Safety",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "Supplies and Equipment - SIMS: Condom Access and Availability at Point of Service",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "Supplies and Equipment - Other Supplies",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "Supplies and Equipment - Equipment Storage (Visually inspect the storage area)",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "Surgical Kits",
                    "contains": 24
                },
                {
                    "id": 6,
                    "title": "SIMS: Waste Management",
                    "contains": 24
                }
            ]
        }
    }

    render() {

        return (
            <div className="wrapper">
                <div class="layout_program_stages">
                    <div class="sub-bar-section">
                        <SubNav
                            Title="Path"
                        />
                    </div>
                    <div class="survey-section">survey-section</div>
                    <div class="list-section">
                        {this.state.data.map((prgStage) => {
                            return (
                                <BarSlctr
                                    key={prgStage.key}
                                    title={prgStage.title}
                                    contains={"(" + prgStage.contains + ")" + " data elements"} />
                            )
                        })}
                    </div>
                    <div class="fab-section">
                        <Fab />
                    </div>
                    <div class="cta-section">cta-section</div>
                </div>
            </div>
        )
    }
}
export default prgStagetages