import SectionTitle from "../sectionComponents/SectionTitle";
import BillBody from "./BillBody";
import OrderButtonsContainer from "./OrderButtonsContainer";

export default function ReviewPage(props) {    
    return (
        <div className="content">
            <SectionTitle title={"Revise seu pedido"} />
            <BillBody allSections={props.selectedOptions} />
            <OrderButtonsContainer redirectTo={props.redirectTo} allSections={props.selectedOptions}/>
        </div>
    )
}
