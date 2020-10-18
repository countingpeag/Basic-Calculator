/* eslint no-eval:0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import Grid from '@material-ui/core/Grid';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations'; 
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';

const App = () => {

    const [stack, setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g);
    const value = items.length > 0 ? items[items.length-1] : "0";

    return (
        <main className="react-calculator">
            <Grid container>
                <Grid item xs={12} className="result">
                    <Result value={value}/> 
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
                        onClickOperation={operation => {
                            console.log("Operation: ",operation)
                            setStack(`${stack}${operation}`)
                        }}
                        onClickEqual={ equal => {
                            console.log("Equal:",equal)
                            setStack(eval(stack).toString())
                        }}
                    />
                </Grid>
                <Grid item xs={12} className="functions">
                    <Functions 
                        onContentClear={ () => {
                            console.log("Clear")
                            setStack('');
                        }}
                        onDelete={ () => {
                            if(stack.length>0){
                                const newStack = stack.substring(0, stack.length-1)
                                console.log("Delete")
                                setStack(newStack);
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </main>
    );
}

export default App;