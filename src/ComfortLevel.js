
export default function ComfortLevel({ temp }){
    if(temp <= 50){
        console.log(temp)
        return <h1 style={{fontSize: '10rem'}}>🥶</h1>
    }   
    if(temp > 50 && temp <= 60){
        return <h1 style={{fontSize: '10rem'}}>😬</h1>
    }
    if(temp > 60 && temp <= 80){
        return  <h1 style={{fontSize: '10rem'}}>😊</h1>
    }
    if(temp > 80 && temp <= 89){
        return <h1 style={{fontSize: '10rem'}}>😅</h1>
    }
    else {
        return <h1 style={{fontSize: '10rem'}}>🥵</h1>
    }
}