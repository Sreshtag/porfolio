import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import converterimage from '@salesforce/resourceUrl/convert'
export default class Currencyconverter extends LightningElement {
    convertimg= converterimage
    countryList=countryCodeList
    countryForm="USD"
    countryTo = "AUD"
    handleChange (event){
        const {name,value}=event.target
        console.log("name ",name)
        console.log("value ",value)
    }
}