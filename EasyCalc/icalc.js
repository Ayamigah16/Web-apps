class Calculator{
    constructor( previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    // DEFINING FUNCTIONS 
    // a fuction to the clear the screen
    clear(){
        this.previousOperand = ""
        this.currentOperand = ""
        this.operation = undefined
    }

    // a function to delete inputs
    delete(){

    }

    // a function to input values
    appendNumber(number){
        // adding only one single period
        if (number == '.' && this.currentOperand.includes('.')) return

        //appending values
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    // a function to select operation 
    chooseOperation(operation) {
        if (this.currentOperand === '') return

        if (this.previousOperand !== ''){
            this.compute()
        } 

        this.operation = this.operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    // a function to compute values
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return

        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '/':
                computation = prev / current
                break
            case '*':
                computation = prev * current
                break    
            default:
                break     
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    // a function to update the screen
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allclearButtons = document.querySelector('[data-allclear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


