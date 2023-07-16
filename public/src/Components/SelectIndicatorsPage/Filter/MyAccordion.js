import {ExpandMore} from "@material-ui/icons";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";

function MyAccordion(props) {
    return (
        <Accordion className="sub-containers" id="accordion">
            <AccordionSummary className="accordion-filters-summary"
                              expandIcon={<ExpandMore />}>
                <div className="name-counter-button">
                    <div className="name-counter">
                        <p className="name" id="name">
                            {props.accordionName}
                        </p>
                        <p className="counter" id="counter">
                            Selected filters({props.counter}
                            {props.counter === 1 ? " filter" : " filters"})
                        </p>
                    </div>
                    {props.button}
                </div>
            </AccordionSummary>
            <AccordionDetails className="accordion-filters-details">
                {props.accordionDetails}
            </AccordionDetails>
        </Accordion>
    );
}

export default MyAccordion;