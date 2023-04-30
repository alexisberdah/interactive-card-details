document.getElementById("number").innerHTML = formattedNumber()

function checkFieldsValidity() {
    const nameInput = document.getElementById("nameInput").value
    const numberInput = document.getElementById("numberInput").value
    const monthInput = document.getElementById("monthInput").value
    const yearInput = document.getElementById("yearInput").value
    const cvcInput = document.getElementById("cvcInput").value

    const regex = /^([a-zA-Z]+\s)+[a-zA-Z]+$/
    console.log('Alex debug 77', nameInput)
    const isNameOK = regex.test(nameInput)
    const isNumberOK = numberInput.length == 16
    const isMonthOK = monthInput < 13 && monthInput > 0
    const isYearOK = yearInput.length == 2
    const isCvcOK = cvcInput.length == 3

    const isAllOK = isNameOK && isNumberOK && isMonthOK && isYearOK && isCvcOK

    if (isAllOK) {
        console.log('Alex debug next step then')
        document.getElementById('personFormContainer').style.display = 'none'
        document.getElementById('validationScreen').style.display = ''
    } else {
        if (!isNameOK) {
            console.log('Alex debug name not OK', document.getElementById("nameInput"))
            document.getElementById("nameInput").classList.add("errorInput")
            document.getElementById("nameSpan").classList.add("active")
        }

        if (!isNumberOK) {
            document.getElementById("numberInput").classList.add("errorInput")
            document.getElementById("numberSpan").classList.add("active")
        }

        if (!isMonthOK) {
            document.getElementById("monthInput").classList.add("errorInput")
            document.getElementById("monthSpan").classList.add("active")
        }

        if (!isYearOK) {
            document.getElementById("yearInput").classList.add("errorInput")
            document.getElementById("yearSpan").classList.add("active")
        }

        if (!isCvcOK) {
            document.getElementById("cvcInput").classList.add("errorInput")
            document.getElementById("cvcSpan").classList.add("active")
        }
    }
    console.log('Alex debug isNameOK', isNameOK)
}

function resetErrors() {
    var activeElements = document.querySelectorAll('.active')
    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove('active')
    }

    var errors = document.querySelectorAll('.errorInput')
    for (let i = 0; i < errors.length; i++) {
        errors[i].classList.remove('errorInput')
    }
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
    console.log('Alex debug type', type)
    resetErrors()
    switch (type) {
        case 'name':
            event.target.value = value.toUpperCase()
            console.log('Alex debug 66')
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
            str = '00';
            if (value.length > 2) {
                value = value.substring(0, value.length - 1);
                event.target.value = value;
            }
            newStr = str.substring(0, str.length - value.length) + value;
            document.getElementById("month").innerHTML = newStr;
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
