import { LightningElement,wire,api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {
    @api recordId
    WorkExperienceList=[]
    @wire(getRelatedListRecords,{
        parentRecordId: '$recordId',
        relatedListId : 'WorkExperience__r',
        fields :['WorkExperience__c.EndDate__c',
            'WorkExperience__c.StartDate__c',
            'WorkExperience__c.CompanyName__c',
            'WorkExperience__c.isCurrent__c',
            'WorkExperience__c.WorkLocation__c',
            'WorkExperience__c.Role__c',
            'WorkExperience__c.Description__c'
        ]
    })workExperienceHandler({data,error}){
        if(data){
            console.log("Work Experience retrived from Org",JSON.stringify(data))
            this.formatExperience(data)
            
        }
        if(error){
            console.error(error)

        }
    }
    formatExperience(data){
        this.WorkExperienceList=[...data.records].reverse().map(item=>{
            let id =item.id
            const{EndDate__c,StartDate__c,CompanyName__c,isCurrent__c,WorkLocation__c,Role__c,Description__c}=item.fields
            let EndDate = this.getValue(EndDate__c)
            let StartDate = this.getValue(StartDate__c)
            let CompanyName = this.getValue(CompanyName__c)
            let IsCurrenct = this.getValue(isCurrent__c)
            let WorkLocation = this.getValue(WorkLocation__c)
            let Role = this.getValue(Role__c)
            let Description = this.getValue(Description__c)
            return ({id,StartDate,EndDate,CompanyName,IsCurrenct,WorkLocation,Role,Description})
        })

        console.log("WorkExperience List ",JSON.stringify(this.WorkExperienceList))
    }
    getValue(data){
        return data && (data.displayValue || data.value)
    }
}