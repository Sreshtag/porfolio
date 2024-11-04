import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECHNICALSKILLS_FIELD from '@salesforce/schema/Portfoilo__c.TechnicalSkills__c'
import SOFTWARE_FIELD from '@salesforce/schema/Portfoilo__c.SoftwareTools__c'
import SOFTSKILLS_FIELD from '@salesforce/schema/Portfoilo__c.SoftSkills__c'

export default class PortfolioSkills extends LightningElement {
    technicalSkills=[]
    softwareTools=[]
    softSkills=[]
    @api recordId 
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[TECHNICALSKILLS_FIELD,SOFTWARE_FIELD,SOFTSKILLS_FIELD]
    })skillHandler({data,error}){
        if(data){
            console.log("data-",JSON.stringify(data))
            this.formatskills(data)

        }
        if(error){
            console.log("error",error)
        }
    }
    formatskills(data){
        const{TechnicalSkills__c,SoftwareTools__c,SoftSkills__c}=data.fields
        this.technicalSkills = TechnicalSkills__c ? TechnicalSkills__c.value.split(','):[]
        this.softwareTools = SoftwareTools__c ? SoftwareTools__c.value.split(','):[]
        this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(','):[]

    }
}