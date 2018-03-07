const ascArr = (x) => {
    const len = x.length
    let buff
    let round = 1

    const max = Math.max(...x)
    const min = Math.min(...x)
    
    for(i = 0; check(x); i++) {
        if(x[i] > x[i+1]) {
            buff = x[i]
            x[i] = x[i+1]
            x[i+1] = buff
        }
        console.log("Round : " + round + " => " +x)
        round++
    }

    round = round -1

    console.log("Member of array : " + len)
    console.log("Max : " + max)
    console.log("Min : " + min)
    console.log("Round : " + round)
    
}

const check = (x) => {
    let RoundCheck = 1
    let len = x.length
    for(i = 0; i <= len; i++) {
        if(x[i] > x[i+1]) {
            console.log("r_Check : " + RoundCheck)
            return true
        }
        RoundCheck ++
    }
    RoundCheck = RoundCheck - 1
    console.log("r_Check : " + RoundCheck)
    return false
}

//รอบ 111 + 49 = 160


//ascArr([90, 81, 30, 45, 35, 56, 15, 2, 7, 23, 11, 33])
ascArr([90,81,56,45,35,33,30,23,15,11,7,2])
//2,7,11,15,23,30,33,35,45,56,81,90
