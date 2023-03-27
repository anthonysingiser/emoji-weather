

function ComfortLevels(temp) {
    return temp < 50
    ? 'Really Cold'
    : temp >= 50 && temp < 61
    ? 'Chilly'
    : temp >= 61 && temp < 80
    ? 'Ideal'
    : temp >= 80 && temp < 89
    ? 'Warm'
    : 'Really Hot'     
}