import Header from "./Header";
import Section from "./Section";

const menu = [
    {
        id: "meal",
        options: [
            { name: "Vai no certo", description: "Macarronada tradicional com molho sugo", price: "20", img: "https://imgr.search.brave.com/NQTqE55F_o-w1wtZ0Zpp-OltK7lBbxe0McnMZmQ8jL4/fit/711/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/SVdTNDRhODJtbU5H/V3c3emMtclBBSGFF/OCZwaWQ9QXBp" },
            { name: "Perna de grilo", description: "Espetinho de frango", price: "8", img: "https://imgr.search.brave.com/IhwpEBcMtJN--rYJ99OOY1RHq04a3lYVCzlC_PfBCFQ/fit/713/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/WWdYUE9kSzRETjZx/SXhHdlVhQ29nSGFF/NyZwaWQ9QXBp" },
            { name: "Falta nada", description: "Arroz, feijão, bife, ovo, batata frita e salada", price: "13", img: "https://imgr.search.brave.com/CvJ2qbC6jng4e3xVCYP9sAfGNSqQoqi5RzCqFYN65Rk/fit/791/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/VGZtdnktR2F5ODhm/Q04xZ01va2dnSGFF/YyZwaWQ9QXBp" },
            { name: "Bate-entope", description: "Macarrão com farofa", price: "8,50", img: "https://pbs.twimg.com/media/EW-lGN6XgAECoF8.png" },
            { name: "Segunda-feira", description: "Dia de começar a dieta com uma saladinha", price: "6,7", img: "https://imgr.search.brave.com/GlKZfiQJI6fpR5tWd7nPyqXp0drdgqxmDN3gJGFd5Us/fit/711/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/VndyS1l4VUFfR1Bz/bm1oV0xHLWJnSGFF/OCZwaWQ9QXBp" },
            { name: "Pizza", description: "Não pode faltar", price: "42", img: "https://imgr.search.brave.com/B4CMLWD-kO7XetjUSezBlsAkNWZd-KcDfshOEiRi4AE/fit/711/225/no/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/SGY0dmR0VFRxY21h/SHJSaVZlcUxRSGFF/OCZwaWQ9QXBp" },
            { name: "O Glorioso", description: "Hamburgão com duas carnes, queijo cheddar e muito molho", price: "17,50", img: "https://imgr.search.brave.com/Fie4tPvMD4L3xywWKuEWwBhcgo9yoHrpZnCI9L4GC_s/fit/844/225/no/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/RjVnV2hLaUhXTXFt/VFlNSW1rYmFnSGFF/SyZwaWQ9QXBp" },
            { name: "Japa", description: "Um monte de coisa boa", price: "999,99", img: "https://imgr.search.brave.com/BV3f28QUi51Xi7m4hlWCD2kAZVRo91KIq2wxwnUtXgE/fit/711/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/VVN4Y2dqVjMtVHR4/SDRtNFhudmdnSGFF/OCZwaWQ9QXBp" },
            { name: "Trem bão", description: "a", price: "12", img: "https://imgr.search.brave.com/bEqe4E5jqM8-OVwj4ZX8dFjGtkfmHdxJTFh808eLlDs/fit/711/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/VXYwTm9YNDM0M21Q/RVUxRWNXNldRSGFF/OCZwaWQ9QXBp" }
        ]
    },
    {
        id: "drink",
        options: [
            { name: "Água", description: "Água!", price: "3", img: "https://imgr.search.brave.com/kxcq2Izgr3gthKw0VgD61Wd5XuutoB-h7mrU83NZw9I/fit/451/225/no/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/VERZY1ozYzZfUENF/bld0R19RN1lBSGFI/eSZwaWQ9QXBp" },
            { name: "Suco de uva", description: "Uva espremida com água", price: "5", img: "https://imgr.search.brave.com/23GernQ7y7owBI1gDuqr7oaYjibe_uGe00uASZpUWsM/fit/355/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/UkJqdHppbFlhSmdr/QTY0dkZyTDF3SGFK/NCZwaWQ9QXBp" },
            { name: "Refrigerante de cola", description: "Não faremos propaganda de graça", price: "4,5", img: "https://imgr.search.brave.com/42bypfSsDpJrNJJUUbnEOaBwO1xqwJV6WD5mU5g0kI4/fit/791/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/bW1DNWE3RWh4UFR1/T2lRZXdRcUxBSGFF/YyZwaWQ9QXBp" },
            { name: "Guaraná", description: "Só Jesus na causa", price: "4", img: "https://imgr.search.brave.com/qHgUkIitbjcKAokE9iSyPKryHtCTI7Xau9Z_s8tGSRA/fit/474/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/eWFtaHNMeU02MzF4/Uk41OGNtMldnSGFI/YSZwaWQ9QXBp" },
            { name: "Cerveja", description: "Dá pra fingir que é guaraná", price: "6", img: "https://imgr.search.brave.com/xSKJ2u7PjUY9loZGKYBIAQQB855tTDzWMpk-92UFAKc/fit/713/225/no/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/c2dOM3hMLVEyVy1u/NEZJNXduZUhnSGFF/NyZwaWQ9QXBp" },
            { name: "Suco de uva (fermentado)", description: "Vinho", price: "25", img: "https://imgr.search.brave.com/WJMChfGJ1YiB5AJt7lzZLTaSDw8MCFBIhT6O20vRK3g/fit/711/225/no/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/WVhDLVQ4ZWc2UDZ6/TWdibVZUWVZ3SGFF/OCZwaWQ9QXBp" },
            { name: "Aguardente", description: "Cachaça", price: "5", img: "https://imgr.search.brave.com/Pf0Y5hH-GSquNbW0tupYerumsLgFhBaIyklIIqIACPo/fit/713/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/SUxrUk5sS19scVY5/NU1yOTlabDZnSGFF/NyZwaWQ9QXBp" },
            { name: "Não beba isso", description: "Sério!", price: "3", img: "https://imgr.search.brave.com/GspgK8XLXG2EHGwq4z8v-ZgmYz8WnUm16FKhXsTz-D0/fit/470/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/Z0h0R2FYWUtETnh1/U2N2NldsWGRRSGFI/ZSZwaWQ9QXBp" },
            { name: "Cura ressaca", description: "Depois do álcool, vem a salvação", price: "5", img: "https://imgr.search.brave.com/YC0XwyPRRe8vsHUrfHyi2aiw4GLYka14dM8VRwg-QZA/fit/632/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/VUxOaTVzRV9BdUxE/UnBnbUdPaWxRSGFG/aiZwaWQ9QXBp" },
        ]
    },
    {
        id: "dessert",
        options: [
            { name: "Pudim", description: "Pudim", price: "4", img: "https://imgr.search.brave.com/8cWPZQ6xkOipZLJNHjf2jVfmdwdUEiPA2au_nYDhhlc/fit/844/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/czFMUlJYRTdhdF9s/Y2ZTU0t1dTRBSGFF/SyZwaWQ9QXBp" },
            { name: "Bolo", description: "Companheiro do café", price: "6", img: "https://imgr.search.brave.com/whzY8n-0RjDvegRNTm705ybgHxfpYKR1Vhu_tFDYWDc/fit/711/225/no/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/TW1VM1hDd0VUUGVv/YTFNUWhyRUlBSGFF/OCZwaWQ9QXBp" },
            { name: "Coração de gelo", description: "Sorvetinho com calda", price: "10", img: "https://imgr.search.brave.com/-rG8qfSfY824ZOw4n_uaRDrMsoOaKcq5dlprEw60mEs/fit/474/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/VDlCZWlzVWE4a1JC/V0U1VlpDWkxnSGFI/YSZwaWQ9QXBp" },
            { name: "O astro", description: "Brigadeiro", price: "2", img: "https://imgr.search.brave.com/0gKz-ammGOHKNYN0FhRtMSilFDsa3lNVw7gjIo2ViYg/fit/632/225/no/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/bkNnTHFLY0piS3M1/UjgwN3N0dF93SGFG/aiZwaWQ9QXBp" },
            { name: "Bixcoito", description: "Não é bolacha!", price: "4", img: "https://imgr.search.brave.com/tXOZc4O2W59V-3_2vvSjNxPTayd8MBBmGQOimNn_knE/fit/844/225/no/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/S0pCOUJCdmtFS0x0/eFYxSG9nVVJnSGFF/SyZwaWQ9QXBp" },
            { name: "Pavê", description: "Ou pacumê?", price: "7", img: "https://imgr.search.brave.com/FEztCTmCRr2OPP-ujDextIGkeuiZYT2xAjqWy9CG9rY/fit/711/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/R0NNWDVhc0h0andP/RDFLeUluZW13SGFF/OCZwaWQ9QXBp" },
            { name: "Churros", description: "De doce de leite, óbvio", price: "3,5", img: "https://imgr.search.brave.com/qjOZeD_vuk_RV5DIXKzXDSOy1Y7XAyGceHTLJ_fJrMk/fit/777/225/no/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/OVlPa2dacl9BQ1cw/WnBUakNaLXNBSGFF/aCZwaWQ9QXBp" },
            { name: "Bolinho de chuva", description: "Água na boca", price: "8", img: "https://imgr.search.brave.com/nxAv4ZFQ0P30LT0py2bAsmW5Kgt2D_6D7ykf7lOs3Es/fit/632/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/NGZ0bGNucDhvN1Vt/bUNWVDN0WmpBSGFG/aiZwaWQ9QXBp" },
        ]
    }
]

export default function App() {
    return (
        <>
            <Header />
            { menu.map((section, key)=>(<Section id={section.id} options={section.options} key={key}/>)) }
           
        </>
    )
}