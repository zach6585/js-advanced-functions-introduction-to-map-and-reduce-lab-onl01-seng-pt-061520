// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(function(el) {
        return el*(-1)
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(function(el) {
        return el
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(function(el) {
        return el*(2)
    })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(function(el) {
        return el**(2)
    })
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function(total, element) {
        return total + element 
    }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(total, element) {
        if (element) {
            return true
        }
        else {
            return false 
        }
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function(total, element) {
        if (element || total) {
            return true 
        } 
        else {
            return false 
        }
    })
}