import Header from "./Header";
import Section from "./Section";

const menu = {
    meal: {
        id: "meal",
        options: [
            { name: "a", price: "1", img: "a" }
        ]
    },
    drink: {
        id: "drink",
        options: [
            { name: "a", price: "1", img: "a" }
        ]
    },
    dessert: {
        id: "dessert",
        options: [
            { name: "a", price: "1", img: "a" }
        ]
    },
}

export default function App() {
    return (
        <>
            <Header />
            <Section id={menu.meal.id} />
            <Section id={menu.drink.id} />
            <Section id={menu.dessert.id} />
        </>
    )
}