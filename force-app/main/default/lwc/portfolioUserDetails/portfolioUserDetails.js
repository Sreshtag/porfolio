import { LightningElement,api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectName
    downloaResume(){
        console.log("details from parent comp",this.recordId,this.objectName)
    }
}