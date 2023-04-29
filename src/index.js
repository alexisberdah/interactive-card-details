document.getElementById("number").innerHTML = formattedNumber()

function checkFieldsValidity() {
    const nameInput = document.getElementById("name").innerHTML
    const regex = /^([a-zA-Z]+\s)+[a-zA-Z]+$/
    let isNameOK = regex.test(nameInput)
    console.log('Alex debug isNameOK', isNameOK)
}

function handleSubmit(event) {
    console.log('Alex debug handleSubmit')
    checkFieldsValidity()
}

function handleInput(event) {
    const type = event.target.name
    let value = event.target.value
    let str
    let newStr
    switch (type) {
        case 'name':
            const regex = /^([a-zA-Z' '])+$/
            const isValid = regex.test(value);
            if (!isValid) {
                value = value.substring(0, value.length - 1)
                event.target.value = value
            } else {
                document.getElementById("name").innerHTML = value.toUpperCase()
            }
            if (value == '') {
                document.getElementById("name").innerHTML = 'JANE APPLESEED'
            }
            break
        case 'number':
            str = '0000000000000000'
            if (value.length > 16) {
                value = value.substring(0, value.length - 1)
                event.target.value = value
            }
            // let lastChar = str.charAt(str.length - value.length)
            newStr = value + str.substring(value.length)
            document.getElementById("number").innerHTML = newStr
            document.getElementById("number").innerHTML = formattedNumber()

            if (value == '') {
                document.getElementById("number").innerHTML = '0000 0000 0000 0000'
            }
            break
        case 'month':
            str = '00'
            if (value.length > 2) {
                value = value.substring(0, value.length - 1)
                event.target.value = value
            }
            newStr = value + str.substring(value.length)
            document.getElementById("month").innerHTML = newStr
            break
        case 'year':
            str = '00'
            if (value.length > 2) {
                value = value.substring(0, value.length - 1)
                event.target.value = value
            }
            newStr = value + str.substring(value.length)
            document.getElementById("year").innerHTML = newStr
            break
        case 'cvc':
            str = '000'
            if (value.length > 3) {
                value = value.substring(0, value.length - 1)
                event.target.value = value
            }
            newStr = value + str.substring(value.length)
            document.getElementById("cvc").innerHTML = newStr
            break
        default:
            break
    }
    console.log('Alex debug handle input', event.target.value)
}

function formattedNumber() {
    let str = document.getElementById("number").innerHTML
    let chunks = str.match(/.{1,4}/g)
    let formattedStr = chunks.join(' ')
    return formattedStr
}

// function unformattedNumber() {
//     return document.getElementById("number").innerHTML.replace(/\s+/g, '')
// }
