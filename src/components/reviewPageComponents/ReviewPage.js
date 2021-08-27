import SectionTitle from "../sectionComponents/SectionTitle";
import BillBody from "./BillBody";
import OrderButtonsContainer from "./OrderButtonsContainer";

export default function ReviewPage(props) {
    console.log(props.selectedOptions);
    
    return (
        <div className="content">
            <SectionTitle title={"Revise seu pedido"} />
            {/* <BillBody items={items} /> */}
            <OrderButtonsContainer redirectTo={props.redirectTo} />
        </div>
    )
}



