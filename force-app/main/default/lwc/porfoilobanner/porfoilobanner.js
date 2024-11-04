import {LightningElement ,wire,api } from 'lwc';
import 	PortfoiloAssets from '@salesforce/resourceUrl/PortfoiloAssets'
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfoilo__c.FullName__c'
import DESIGNATION from '@salesforce/schema/Portfoilo__c.Designation__c'
import COMPANY_NAME from '@salesforce/schema/Portfoilo__c.CompanyName__c'
import COMPANY_lOCATION from '@salesforce/schema/Portfoilo__c.CompanyLocation__c'


export default class Porfoilobanner extends LightningElement {
    @api recordId //='a0JdM0000006wfdUAA'
    @api linkedinurl//='www.linkedin.com/in/sreshta-gollapally-020535222'
    @api youtubeurl//='www.linkedin.com/in/sreshta-gollapally-020535222'
    @api githuburl//='www.linkedin.com/in/sreshta-gollapally-020535222'
    @api trialheadurl//='www.linkedin.com/in/sreshta-gollapally-020535222'
    @api twitterurl//='www.linkedin.com/in/sreshta-gollapally-020535222'
    @api bloggerurl//='www.linkedin.com/in/sreshta-gollapally-020535222'



    @api userPic = `${PortfoiloAssets}/PortfolioAssets/userPic.jpeg`
    @api linkedin = `${PortfoiloAssets}/PortfolioAssets/Social/linkedin.svg`
    @api youtube = `${PortfoiloAssets}/PortfolioAssets/Social/youtube.svg`
    @api github = `${PortfoiloAssets}/PortfolioAssets/Social/github.svg`
    @api trialhead = `${PortfoiloAssets}/PortfolioAssets/Social/trailhead1.svg`
    @api twitter = `${PortfoiloAssets}/PortfolioAssets/Social/twitter.svg`
    @api blogger = `${PortfoiloAssets}/PortfolioAssets/Social/blogger.svg`
  
    
    @wire(getRecord,{recordId :'$recordId',fields:[FULLNAME,DESIGNATION,COMPANY_NAME,COMPANY_lOCATION]})
    portfolioData
    // portfoiloHandler({data,error}){
    //     if(data){
    //         console.log("record data" , JSON.stringify(data));

    //     }
    //     if(error){
    //         console.error(error)
    //     }
        
    // }
    get fullName(){
        return getFieldValue(this.portfolioData.data,FULLNAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data,DESIGNATION)
    }
    get comapanyName(){
        return getFieldValue(this.portfolioData.data,COMPANY_NAME)
    }
    get comapanyLocation(){
        return getFieldValue(this.portfolioData.data,COMPANY_lOCATION)
    }
}