import React, {useState} from 'react';
import Head from "./components/Head/Head";
import Switcher from "./components/Switch/Switcher";
import Content from "./components/Content/Content";
import './App.css'

const App = () => {
    const [radio, setRadio] = useState(false);

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
                />

            </div>
        </>
    );
};

export default App;
