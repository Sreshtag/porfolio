import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SALESFORCECERT_FIELD from '@salesforce/schema/Portfoilo__c.Salesforce_Certifications__c'
import OTHERCERT_FIELD from '@salesforce/schema/Portfoilo__c.OtherCertifications__c'
import 	PortfoiloAssets from '@salesforce/resourceUrl/PortfoiloAssets'
export default class PortfolioCertifications extends LightningElement {
    salesforceCerts=[]
    otherCerts=[]
    certlogo =`${PortfoiloAssets}/PortfolioAssets/cert_logo.png`
    @api recordId
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SALESFORCECERT_FIELD,OTHERCERT_FIELD]
    })certHandler({data,error}){
        if(data){
            console.log(JSON.stringify(data))
            this.certdisplayhandler(data)
        }
        if(error){
            console.log("error occured",error)
        }
    }
    certdisplayhandler(data){
        const{Salesforce_Certifications__c,OtherCertifications__c}=data.fields
        this.salesforceCerts =Salesforce_Certifications__c? Salesforce_Certifications__c.value.split(';'):[]
        this.otherCerts =OtherCertifications__c ? OtherCertifications__c.value.split(','):[]
    }
}