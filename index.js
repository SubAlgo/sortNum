const ascArr =(x = []) => {
    const len = x.length
    let buff
    let round = 1

    const max = Math.max(...x)
    const min = Math.min(...x)

    for(ii = 0; ii <= len; ii++) {
        for(i = 0; i <= len; i++) {
            if(x[i] > x[i+1]) {
                buff = x[i]
                x[i] = x[i+1]
                x[i+1] = buff
            }
            console.log("Round : " + round + " => " +x)
            round++
        }
    }

    round = round -1

    console.log("Member of array : " + len)
    console.log("Max : " + max)
    console.log("Min : " + min)
    console.log("Round : " + round)
}

ascArr([90, 81, 30, 45, 35, 56, 15, 2, 7, 23, 11, 33])
//รอบ = 169
//จำนวนรอบในการทำงาน = (n+1)^2