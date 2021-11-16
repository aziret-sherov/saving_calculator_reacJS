import React from 'react';
import './Content.css'
import {faArrowLeft, faArrowRight,faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Content = ({
                     monthNames,
                     radio,
                     setAmountMonth,
                     amountMonth,
                     setTotal,
                     total,
                     month,
                     setMonth,
                     year,
                     setYear,
                     monthlyAmount,
                     setMonthlyAmount
                 }) => {
    const prevMonth = () => {
        if (amountMonth <= 0) {

        } else {
            if (month > 11) {
                setMonth(0)
                setYear(year + 1)

            } else if (month < 1) {
                setMonth(11)
                setYear(year - 1)
            } else {
                setMonth(month - 1)
            }
            setAmountMonth(amountMonth - 1)
        }
    }
    const nextMonth = () => {
        if (month > 10) {
            setMonth(0)
            setYear(year + 1)
        } else if (month < 0) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month + 1)
        }
        setAmountMonth(amountMonth + 1)
    }

    return (
        <>
            <p className={"box2P"}>{radio ? `Total amount` : `Calculate by monthly saving`}</p>
            <div className={"box2Input"}>

                <FontAwesomeIcon color={"#828282"} icon={faDollarSign} />
                <input
                    className={"Input"}
                    type="number"
                    value={radio ? total : monthlyAmount}
                    onChange={radio ? (number => setTotal(number)) : (number => setMonthlyAmount(number))}
                />
            </div>
            <p className={"box2P"}>{radio ? `Reach goal by` : `Save until`}</p>
            <div className={"box2Input"}>
                <div onClick={prevMonth}><FontAwesomeIcon className={"Arrows"} color={"#828282"} icon={faArrowLeft} /></div>
                <p className={"InputText"}>{`${monthNames[month]}, ${year}`}</p>
                <div onClick={nextMonth}><FontAwesomeIcon className={"Arrows"} color={"#828282"} icon={faArrowRight} /></div>
            </div>
        </>
    );
};

export default Content;
