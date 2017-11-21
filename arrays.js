var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var returnArray = [element, ...array]
  return returnArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return [element, ...array]
}


function addElementToBeginningOfArray(array, element) {
  var returnArray = [element, ...array]
  return returnArray
}