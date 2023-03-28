
export default function ComfortLevel(props){
    if(props.temp <= 50){
        return <h1 role='img'>🥶</h1>
    }   
    if(props.temp > 50 && props.temp <= 60){
        return <h1>😬</h1>
    }
    if(props.temp > 60 && props.temp <= 80){
        return <h1>😊</h1>
    }
    if(props.temp > 80 && props.temp <= 89){
        return <h1>😅</h1>
    }
    else {
        return <h1>🥵</h1>
    }
}