import SectionTitle from './SectionTitle'
import Option from '../optionComponents/Option'

export default function Section(props) {
    return (
        <section id={props.id} className="section">
            <SectionTitle title={props.title}/>
            <ul>
                {props.options.map((option, key) => (<Option optionInfos = {option} key={key}/>))}
            </ul>
        </section>
    )
}