import { LightningElement } from 'lwc';

export default class Bmicomp extends LightningElement {
    height =""
    weight =""
    bmiValue=""
    result=""
    inputhandler(event){
        const{name,value}=event.target
        if(name=="height"){
            this.height = value
        }
        if(name=="weight"){
            this.weight = value
        }
    }
    submithandler(event){
        event.preventDefault()
        console.log("height",this.height)
        console.log("weight",this.weight)
        this.calculate()
    }
    calculate(){
        let height=Number(this.height)/100
        let bmi=Number(this.weight)/(height*height)
        console.log("bmi value is "+bmi)
        this.bmiValue=Number(bmi.toFixed(2))

        if(this.bmiValue<18.5){
            this.result = "Under weight"
        }
        else if(this.bmiValue>18.5 && this.bmiValue<24.9){
            this.result = "Healthy"
        }
        else if(this.bmiValue>25 && this.bmiValue<30){
            this.result = "Over weight"
        }
        else if(this.bmiValue>=30){
            this.result = "Obese"
        }

        console.log(this.result)
    }
    recalculate(){
    this.height =""
    this.weight =""
    this.bmiValue=""
    this.result=""
    }
    
 
}