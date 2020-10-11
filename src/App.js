import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations'; 
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';

const App = () => {

    const [stack, setStack] = useState("");

    return (
        <main className="react-calculator">
            <Grid container>
                <Grid item xs={12} className="result">
                    <Result value={stack}/>
                </Grid>
                <Grid item xs={9} className="numbers">
                    <Numbers onClickNumber={ number => {
                        console.log(number)
                        setStack(`${stack}${number}`)
                    }} 
                    />
                </Grid>
                <Grid item xs={3} className="math-operations">
                    <MathOperations 
                    onClickOperation={operation => console.log("Operation: ",operation)}
                    onClickEqual={ equal => console.log("Equal:",equal)}
                    />
                </Grid>
                <Grid item xs={12} className="functions">
                    <Functions 
                        onContentClear={ () => console.log("Clear")}
                        onDelete={ () => console.log("Delete")}
                    />
                </Grid>
            </Grid>
        </main>
    );
}

export default App;