import { LightningElement } from 'lwc';
import Projectpics from '@salesforce/resourceUrl/Projectpics'

export default class PortfolioPersonalProjects extends LightningElement {
    BMIcalculator = `${Projectpics}/Projectpics/BMI.png`
    AlarmClock = `${Projectpics}/Projectpics/Clock.png`
    CurrencyConverter = `${Projectpics}/Projectpics/currency.png`
    weatherData = `${Projectpics}/Projectpics/weatherData.png`
    projects = [
        {
            "name": "BMI Calculator App",
            "img": this.BMIcalculator,
            "link": "https://sreshtag-dev-ed.trailblaze.my.site.com/Portfolios/bmi-calculator"
        },
        {
            "name": "Alarm Clock App",
            "img": this.AlarmClock,
            "link": "https://sreshtag-dev-ed.trailblaze.my.site.com/Portfolios/alarm"
        },
        {
            "name": "Currency Converter App",
            "img": this.CurrencyConverter,
            "link": "https://sreshtag-dev-ed.trailblaze.my.site.com/Portfolios/currecy-converter"
        },
        {
            "name": "Weather Data",
            "img": this.weatherData,
            "link": "https://sreshtag-dev-ed.trailblaze.my.site.com/Portfolios/weather"
        }
    ]
}