(function(){
    let timeUnits = parseInt(prompt('How much to count?'))
    let interval = parseInt(prompt("log after how much interval?"))
    
    //calls the handleCall function after every interval
    //seconds (passed as millis)
    let iid = setInterval(handleCalls,interval*1000)
    //return an id used to stop calling via clearInterval

    handleCalls.orgTU = timeUnits
    //above is same as orgTu = timeunits and then 
    //change the code in if loop also

    function handleCalls(){
        console.log(timeUnits + "  left")
        timeUnits -= interval

        if(timeUnits <=0){
            clearInterval(iid)
            alert(handleCalls.orgTU + "  has been counted")
        }
    }
})()


//IIFE - immediately function execution