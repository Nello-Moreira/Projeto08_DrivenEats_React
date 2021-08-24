import Option from './Option'

export default function Section(props) {
    return (
        <section id={props.id} className="section">
            <SectionTitle id={props.id}/>
            <ul>
                {props.options.map((option, key) => (<Option optionInfos = {option} key={key}/>))}
            </ul>
        </section>
    )
}

function SectionTitle(props) {
    let title = "Primeiro, seu prato";

    if (props.id === "drink") {
        title = "Agora, sua bebida"
    } else if (props.id === "dessert") {
        title = "Por fim, sua sobremesa"
    }

    return (
        <p className="section-name">{title}</p>
    )
}