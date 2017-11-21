var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var returnArray = [element, ...array]
  return returnArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return [element, ...array]
}


function addElementToEndOfArray(array, element) {
  var returnArray = [...array, element]
  return returnArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return [...array, element]
}

function accessElementInArray(array, index) {
  return array[index]
}