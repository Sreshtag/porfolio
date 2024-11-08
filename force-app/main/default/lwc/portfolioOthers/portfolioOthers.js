import { LightningElement } from 'lwc';
import plushieResources from '@salesforce/resourceUrl/Plushies';
import Projectpics from '@salesforce/resourceUrl/Projectpics';

export default class PortfolioOthers extends LightningElement {
    appResources = {
		frogSilhouette: `${plushieResources}/frog.jpg`,
        bunnySilhouette: `${plushieResources}/pinkbunny.jpg`,
        rainbowSilhouette: `${plushieResources}/rainbowbunny.jpg`,
        pompomSilhouette: `${plushieResources}/pompom.jpg`,
        yodaSilhouette: `${plushieResources}/yoda.jpg`,
        teddySilhouette: `${plushieResources}/teddy.jpg`,
        pilliSilhouette: `${plushieResources}/pilli.jpg`,
        octopusSilhouette: `${plushieResources}/octopus.jpg`,
        turtleSilhouette: `${plushieResources}/turtle.jpg`,
	};
  beauty = `${Projectpics}/Projectpics/beauty.png`
  beauty1 = `${Projectpics}/Projectpics/beauty1.png`
  beauty2 = `${Projectpics}/Projectpics/beauty2.png`
  saree = `${Projectpics}/Projectpics/saree.png`
}