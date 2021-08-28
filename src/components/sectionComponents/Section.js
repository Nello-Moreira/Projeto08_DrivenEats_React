import "./section.css";
import SectionTitle from './SectionTitle'
import Option from '../optionComponents/Option'

export default function Section({ sectionInfos, activeChilds, parentRecordChanger }) {
    const { sectionId, title, options } = sectionInfos;

    const childActivationHandler = (child) => {
        const isNewChild = activeChilds.filter(element => element.id === child.id).length === 0;

        if (isNewChild) {
            activeChilds.push(child);
            parentRecordChanger(sectionId, activeChilds);
            return;
        }
        if (child.itemQuantity === 0) {
            activeChilds = activeChilds.filter(element => element.id !== child.id);
            parentRecordChanger(sectionId, activeChilds);
            return;
        }
        activeChilds.forEach((element, index, thisArray) => {
            if (element.id === child.id && element.itemQuantity !== child.itemQuantity) {
                thisArray[index] = child;
                parentRecordChanger(sectionId, activeChilds);
            }
        })
    };

    return (
        <section id={sectionId} className="section">
            <SectionTitle title={title} />
            <ul>
                {options.map((option, index) => (
                    <Option
                        optionInfos={option}
                        parentActivationHandler={childActivationHandler}
                        activeChild={activeChilds.filter(obj => obj.id === index).length > 0}
                        id={index}
                        key={index}
                    />
                ))}
            </ul>
        </section>
    )
}
