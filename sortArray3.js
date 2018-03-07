const ascArr = (x) => {
    let setMin = []
    let setMax = []
    let max
    let min
    let r = 0
    const member = x.length

    console.log("Array.length : " + member)
    console.log("member of array : " + x)

    while (x.length != 0) {
        if(x.length == 1) {
            min = Math.min(...x)

            setMin = [...setMin, min]
        } else {
            max = Math.max(...x)
            min = Math.min(...x)

            setMin = [...setMin, min]
            setMax = [max , ...setMax]
        }
        
        x = x.filter(e => e !== max)
        x = x.filter(e => e !== min)

        r++
    }

    //----------------------------------
    
    const result = setMin.concat(setMax)
    console.log("Setmin : " + setMin)
    console.log("Setmax : " + setMax)

    console.log("Result : " + result)
    console.log("Rount : " + r)
}


//ascArr([90, 81, 30, 45, 35, 56, 15, 2, 7, 23, 11])
ascArr([90,81,56,45,35,33,30,23,15,11,7,2])