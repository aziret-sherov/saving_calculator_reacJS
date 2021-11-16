import React, {useState} from 'react';
import Head from "./components/Head/Head";
import Switcher from "./components/Switch/Switcher";
import Content from "./components/Content/Content";
import Content2 from "./components/Content2/Content2";
import './App.css'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const App = () => {

    const [radio, setRadio] = useState(false);

    const [totalAmount, setTotalAmount] = useState(0)
    const [monthlyAmount, setMonthlyAmount] = useState(0)

    const [amountMonth, setAmountMonth] = useState(0)

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear())

    const click = () => {
        if (radio === true) {
            const a = parseInt(totalAmount)
            const b = parseInt(amountMonth)
            setMonthlyAmount(Math.round(a / b));
        } else {
            const a = parseInt(monthlyAmount)
            const b = parseInt(amountMonth)
            setTotalAmount(Math.round(a * b))
        }
    }

    return (
        <>
            <Head><title>Head</title></Head>
            <div className={"container"}>
                <Switcher
                    radio={radio}
                    setRadio={setRadio}
                />
                <Content
                    radio={radio}
                    setAmountMonth={setAmountMonth}
                    amountMonth={amountMonth}
                    total={totalAmount}
                    setTotal={setTotalAmount}
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear}
                    monthNames={monthNames}
                    monthlyAmount={monthlyAmount}
                    setMonthlyAmount={setMonthlyAmount}
                />
                <Content2 radio={radio}
                          total={totalAmount}
                          monthly={monthlyAmount}
                          date={amountMonth}
                          month={month}
                          monthNames={monthNames}
                          year={year}
                />

                <button className={"button"} onClick={click}>Finish</button>

            </div>
        </>
    );
};

export default App;
