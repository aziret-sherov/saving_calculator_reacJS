import React from 'react';
import './Content2.css'

const Content2 = ({radio, total, monthly, date, monthNames, month, year}) => {
    return (
        <div className={"box3"}>
            <div className={"box3mainDiv"}>
                <p className={"box3mainDiv1"}>
                    {radio ? `Monthly amount` : `Total amount`}
                </p>
                <p className={"box3mainDiv2"}>
                    ${radio ? monthly : total}
                </p>
                <div className={"box3mainDiv3"}>
                    <p className={"box3mainDiv31"}>{
                        radio
                            ? `You are planning ${date} monthly deposits to reach your $ ${total} goal by ${monthNames[month]} ${year}.`
                            : `You are saving $ ${monthly} monthly to save $ ${total} by ${monthNames[month]} ${year}.`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content2;
