import { useState } from "react";

const Child = (props) => {
    const [state , setState] = useState({
        x : Math.ceil(Math.random() * 100),
        y : Math.ceil(Math.random() * 100),
        answer : "",
        s : 0,
        cur:false,
        set: 0
    });
    const check = (e) => {
        setState({
            ...state,
            answer: e.target.value
        });
    }
    const submission = () => {
        if(state.answer.length > 0) {
            const result = parseInt(state.answer);
            if(props.operation === 1) {
                if(result === state.x + state.y) {
                    state.x =  Math.ceil(Math.random() * 100);
                    state.y =  Math.ceil(Math.random() * 100);
                    setState({
                        ...state,
                        answer:"",
                        s:state.s + 1,
                        cur:false
                    })
                } else {
                    setState({
                        ...state,
                        answer:"",
                        cur:false,
                        score: Math.max(0 , state.s - 1)
                    })
                }
            } else if(props.operation === 2) {
                if(result === state.x - state.y) {
                    state.x =  Math.ceil(Math.random() * 100);
                    state.y =  Math.ceil(Math.random() * 100);
                    setState({
                        ...state,
                        answer:"",
                        s:state.s + 1,
                        cur:false
                    })
                } else {
                    setState({
                        ...state,
                        answer:"",
                        score: Math.max(0 , state.s - 1),
                        cur:false
                    })
                }
            } else if(props.operation === 3) {
                if(result === state.x * state.y) {
                    state.x =  Math.ceil(Math.random() * 100);
                    state.y =  Math.ceil(Math.random() * 100);
                    setState({
                        ...state,
                        answer:"",
                        s:state.s + 1,
                        cur:false
                    })
                } else {
                    setState({
                        ...state,
                        answer:"",
                        score: Math.max(0 , state.s - 1),
                        cur:false
                    })
                }
            } else {
                if(result === Math.floor(state.x / state.y)) {
                    state.x =  Math.ceil(Math.random() * 100);
                    state.y =  Math.ceil(Math.random() * 100);
                    setState({
                        ...state,
                        answer:"",
                        s:state.s + 1,
                        cur:false
                    })
                } else {
                    setState({
                        ...state,
                        answer:"",
                        score: Math.max(0 , state.s - 1),
                        cur:false
                    })
                }
            }
        }
    }
    const getAns = () => {
        if(props.operation === 1) {
            state.set = state.x + state.y;
        } else if(props.operation === 2) {
            state.set = state.x - state.y
        } else if(props.operation === 3) {
            state.set = state.x * state.y
        } else {
            state.set = Math.floor(state.x/state.y)
        }
        setState({
            ...state,
            cur:true
        })
    }

    return(
        <div className="App">
            {
                (props.operation === 1 ? <div className="problem">{state.x} + {state.y}</div>
                    : props.operation === 2 ?  <div className="problem">{state.x} - {state.y}</div> :
                    props.operation === 3 ? <div className="problem" >{state.x} * {state.y}</div> :
                    <div className="problem"> {state.x} / {state.y} </div>)
            }
            <input autoFocus={true} onChange={check} value = {state.answer}/>
            <br></br>
            <br></br>
            <button onClick={submission}>Submit</button>
            <p>Score : {state.s} </p>
            <br></br>
            <button onClick={getAns}>Know ans</button>
            {
                state.cur ? <p className="xyz">Answer is {state.set}  please enter in the input field to genarate the new problem </p> : ""
            }
            <br></br>
            <br></br>
            <a href="/">Back</a>
        </div>
    );
}

export default Child;