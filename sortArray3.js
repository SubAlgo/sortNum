const ascArr = (x) => {
    let setMin = []
    let setMax = []
    let max
    let min
    let ind

    //if len = 1
    console.log(x)

    max = Math.max(...x)
    min = Math.min(...x)
    console.log(min)
    console.log(max)

    setMin = [...setMin, min]
    setMax = [max , ...setMax]

    console.log(setMin)
    console.log(setMax)

   
    x = x.filter(e => e !== max)
    x = x.filter(e => e !== min)
    console.log(x)
    
    //----------------------------------
    console.log("---------------------------")
    max = Math.max(...x)
    min = Math.min(...x)
    console.log(min)
    console.log(max)

    setMin = [...setMin, min]
    setMax = [max , ...setMax]

    console.log(setMin)
    console.log(setMax)

   
    x = x.filter(e => e !== max)
    x = x.filter(e => e !== min)
    console.log(x)

    //----------------------------------
    console.log("---------------------------")
    max = Math.max(...x)
    min = Math.min(...x)
    console.log(min)
    console.log(max)

    setMin = [...setMin, min]
    setMax = [max , ...setMax]

    console.log(setMin)
    console.log(setMax)

   
    x = x.filter(e => e !== max)
    x = x.filter(e => e !== min)
    console.log(x)

    //----------------------------------
    console.log("---------------------------")
    max = Math.max(...x)
    min = Math.min(...x)
    console.log(min)
    console.log(max)

    setMin = [...setMin, min]
    setMax = [max , ...setMax]

    console.log(setMin)
    console.log(setMax)

   
    x = x.filter(e => e !== max)
    x = x.filter(e => e !== min)
    console.log(x)

    //----------------------------------
    console.log("---------------------------")
    max = Math.max(...x)
    min = Math.min(...x)
    console.log(min)
    console.log(max)

    setMin = [...setMin, min]
    setMax = [max , ...setMax]

    console.log(setMin)
    console.log(setMax)

   
    x = x.filter(e => e !== max)
    x = x.filter(e => e !== min)
    console.log(x)

    //----------------------------------
    console.log("---------------------------")
    max = Math.max(...x)
    min = Math.min(...x)
    console.log(min)
    console.log(max)

    setMin = [...setMin, min]
    setMax = [max , ...setMax]

    console.log(setMin)
    console.log(setMax)

   
    x = x.filter(e => e !== max)
    x = x.filter(e => e !== min)
    console.log(x)

    //----------------------------------
    
    const result = setMin.concat(setMax)

    console.log("Result : " + result)
}



ascArr([90, 81, 30, 45, 35, 56, 15, 2, 7, 23, 11])
//ascArr([90,81,56,45,35,33,30,23,15,11,7,2])