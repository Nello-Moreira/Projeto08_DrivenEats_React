import SectionTitle from "../sectionComponents/SectionTitle";
import BillBody from "./BillBody";
import OrderButtonsContainer from "./OrderButtonsContainer";

export default function ReviewPage({selectedOptions, redirectTo}) {    
    return (
        <div className="content">
            <SectionTitle title={"Revise seu pedido"} />
            <BillBody selectedOptions={selectedOptions} />
            <OrderButtonsContainer redirectTo={redirectTo} selectedOptions={selectedOptions}/>
        </div>
    )
}
