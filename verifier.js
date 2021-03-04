function golTest(input) {
    const neighbour = 0;
    const msg = `you have ${neighbour} neighbours`
    if (neighbour <2){
        return "you die"
    }else {
        return msg;
    }        
}

export {golTest};