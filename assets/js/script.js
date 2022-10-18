class Calculator {

    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.rest = 0;
        this.existDot = false;
    }

    startCalc() {
        this.btnClick();
    }


    clearValues() {
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

    returnLastDigito() {
        let display = this.resultValue.innerText;
        return display.slice(-1);
    }

    exceuteExpression() {
        let result = this.resultValue.textContent;
        try {
            result = eval(result);
            if(!result) {
                alert('Ação inválida');
                return true;
            }
            this.upperValue.textContent = this.resultValue.textContent + " =";
            this.resultValue.textContent = result;
            
        } catch (e) {
            alert('Ação inválida');
            return;
        }
    }

    addValue(btnValue, upperValue) {
        let reg = new RegExp('^\\d+$');
        if(btnValue == '.' && !this.existDot && !isNaN(upperValue.slice(-1, 1))){
            console.log('Ok');
            this.existDot = true;
            return true
        }

        if(reg.test(btnValue)) {
            return true
        }

    }

    btnClick() {
        document.addEventListener('click', e => {
            const el = e.target;
            const dig = /\+|\-|\*|\//;

            if (el.classList.contains('btn-num')) {
                this.btnToUpperValue(el.innerText);
                return;
            }

            if (el.innerText == 'AC') {
                this.clearValues();
                this.existDot = false;
            }

            if (el.innerText == '=') {
                this.exceuteExpression();
            }

            if (dig.test(el.innerText)) {
                if (!isNaN(this.returnLastDigito())) {
                    this.upperValue.innerText = this.resultValue.innerText;
                    this.resultValue.innerText += el.innerText;
                    this.existDot = false;
                }else {
                    this.this.resultValue.innerText = this.this.resultValue.innerText.slice(0, -1) + el.innerText
                }
            }

        });
    }



    btnToUpperValue(valor) {
        let display = this.resultValue.innerText;
        

        if (this.addValue(valor, display)) {
            
            if(display == '0' && !(valor == '.')) {
                display = valor;
                this.resultValue.innerText = display;
                return;
            }
            
            display += valor;
            
        }
    
        this.resultValue.innerText = display;

    }

}


const calc = new Calculator;
calc.startCalc();

