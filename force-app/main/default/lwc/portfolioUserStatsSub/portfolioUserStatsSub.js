import { LightningElement,api } from 'lwc';
import 	PortfoiloAssets from '@salesforce/resourceUrl/PortfoiloAssets'

export default class PortfolioUserStatsSub extends LightningElement {
    trialheadrankimg 
    @api badges 
    @api points 
    @api trials 
    @api rank 

    renderedCallback(){
        if(this.rank){
            let url = `${PortfoiloAssets}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trialheadrankimg =url
        }
    }
}