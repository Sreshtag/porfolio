import { LightningElement,api } from 'lwc';

export default class PortfolioUserStats extends LightningElement {
    @api recordId 
    @api objectName 
    @api rank
    @api badges
    @api points
    @api trials
    @api resumelink

}