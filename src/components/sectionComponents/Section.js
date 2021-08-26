import SectionTitle from './SectionTitle'
import Option from '../optionComponents/Option'

export default function Section(props) {
    let activeChilds = [];

    const childActivationHandler = (child) => {
        const isNewChild = activeChilds.filter(element => element.id === child.id).length === 0;
        if (isNewChild) {
            activeChilds.push(child);
            props.parentRecordChanger(props.id, activeChilds);
            return;
        }
        if (child.itemQuantity === 0) {
            activeChilds = activeChilds.filter(element => element.id !== child.id);
            props.parentRecordChanger(props.id, activeChilds);
            return;
        }
        activeChilds.forEach((element, index, thisArray) => {
            if (element.id === child.id) {
                thisArray[index] = child;
            }
        })
        props.parentRecordChanger(props.id, activeChilds);
    };

    return (
        <section id={props.id} className="section">
            <SectionTitle title={props.title} />
            <ul>
                {props.options.map((option, key) => (
                    <Option
                        optionInfos={option}
                        parentActivationHandler={childActivationHandler}
                        id={key}
                        key={key}
                    />
                ))}
            </ul>
        </section>
    )
}
