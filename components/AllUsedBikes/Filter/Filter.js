import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Select from 'react-select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BikeHubCheckBox from '../../Common/CheckBox'


export default function Filter() {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const selectOptions = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Chittagong', label: 'Chittagong' },
        { value: 'Rajshahi', label: 'Rajshahi' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Barishal', label: 'Barishal' },
        { value: 'Sylhet', label: 'Sylhet' },
    ]
    return (
        <div className="filter-container">
            <div className="filter-inner">
                <div className="select-container">
                    <Select options={selectOptions} />
                </div>

                <Accordion className="m-0" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography >
                            Budget
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>BDT 0 - 15000</div>
                        </div>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>BDT 0 - 25000</div>
                        </div>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>BDT 0 - 35000</div>
                        </div>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>BDT 0 - 45000</div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="m-0" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography >
                            Brand
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>SUZUKI</div>
                        </div>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>YAMAHA</div>
                        </div>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>HONDA</div>
                        </div>
                        <div className="checkbox-container d-flex align-items-center">
                            <BikeHubCheckBox />
                            <div>HERO</div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
