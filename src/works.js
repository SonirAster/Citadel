import p1_photo1 from '../src/assets/works/yarn store/1.png';
import p1_photo2 from '../src/assets/works/yarn store/2.png';
import p1_photo3 from '../src/assets/works/yarn store/3.png';
import p1_photo4 from '../src/assets/works/yarn store/4.png';

import p2_photo1 from '../src/assets/works/resume site/1.png';
import p2_photo2 from '../src/assets/works/resume site/2.png';

import p3_photo1 from '../src/assets/works/digital comet/1.png';
import p3_photo2 from '../src/assets/works/digital comet/2.png';
import p3_photo3 from '../src/assets/works/digital comet/3.png';
import p3_photo4 from '../src/assets/works/digital comet/4.png';
import p3_photo5 from '../src/assets/works/digital comet/5.png';
import p3_photo6 from '../src/assets/works/digital comet/6.png';
import p3_photo7 from '../src/assets/works/digital comet/7.png';

import p4_photo1 from '../src/assets/works/recipes site/1.png';
import p4_photo2 from '../src/assets/works/recipes site/2.png';
import p4_photo3 from '../src/assets/works/recipes site/3.png';
import p4_photo4 from '../src/assets/works/recipes site/4.png';
import p4_photo5 from '../src/assets/works/recipes site/5.png';
import p4_photo6 from '../src/assets/works/recipes site/6.png';
import p4_photo7 from '../src/assets/works/recipes site/7.png';
import p4_photo8 from '../src/assets/works/recipes site/8.png';

import p5_photo1 from '../src/assets/works/musical equipment store/1.png';
import p5_photo2 from '../src/assets/works/musical equipment store/2.png';
import p5_photo3 from '../src/assets/works/musical equipment store/3.png';
import p5_photo4 from '../src/assets/works/musical equipment store/4.png';

import p6_photo1 from '../src/assets/works/news_articles site/coming soon.jpg';
import p6_photo2 from '../src/assets/works/news_articles site/1.png';
import p6_photo3 from '../src/assets/works/news_articles site/2.png';
import p6_photo4 from '../src/assets/works/news_articles site/3.png';


const state = {
    portfolio: [
        {images: [p1_photo1, p1_photo2, p1_photo3, p1_photo4], title: 'Yarn Store', description: 'Do you want your product to become more popular? We are ready to take on this work. We are not afraid of any specifics of your product. You will be pleasantly surprised at how quickly and creatively we will demonstrate the advantages and benefits of your product on the market. And the site crafted by us will be of interest to a larger number of your potential clients.'},
        {images: [p2_photo1, p2_photo2,], title: 'Resume Page', description: 'Your personal page - is the best option for submitting your resume. You will not only distinguish yourself from the general list of candidates, but also demonstrate your progressive modern vision in your professional field, which will add a decisive advantage to the employer’s consideration of your resume, quickly and efficiently crafted by us.'},
        {images: [p3_photo1, p3_photo2, p3_photo3, p3_photo4, p3_photo5, p3_photo6, p3_photo7], title: 'Digital Comet', link: 'https://robertroberto.pythonanywhere.com/', description: "In this project we want to show you an interesting opportunity. Not wasting a precious minutes to start your business. There is no need for you to wait until your team will make the website of your IT company. Order your website from us and start working with your team without loosing any minute."},
        {images: [p4_photo1, p4_photo2, p4_photo3, p4_photo4, p4_photo5, p4_photo6, p4_photo7, p4_photo8], title: 'Sweet Recipes Book', description: 'The main concept we chose to create such sites is as follows: to show the variety of your products and their large quantity in such a way that each item does not lose its originality in a row with other equally interesting and attractive products.'},
        {images: [p5_photo1, p5_photo2, p5_photo3, p5_photo4], title: 'Deep Sound', description: "We took part in the creation of this project. Here you can see our teamwork skills. We provide 'Fast-help' services in completing any project."},
        {images: [p6_photo1, p6_photo2, p6_photo3, p6_photo4], title: 'Coming Soon', description: "We are always on the move and we do not stand still. We are developing a concept for a news website. Only we can catch the style of your news site because we are oriented on the working accroding to the priciple 'Time - is money'. We understand better than others the specifics  of a news site, which must first of all be undestandable, so that each visitor to your news site stays with you and forever remembers the style we created specially for you."},
    ],
    services: [
        {'title': 'Logo',  'description': 'Recognisable exclusive logo to pass through the centuries.'}, 
        {'title': 'Branding',  'description': 'No templates for you. Only your unique, recognizable style.'},
        {'title': 'Design',  'description': 'We will create unforgettable impression that will remain in the memory of your clients.'},
        {'title': 'Localization',  'description': 'Do not limit your opportunities. Order this service from us and extend zone of your influence.'},
        {'title': 'Outstaffing',  'description': 'Hire our warriors for saving time and money. We are always ready to give a hand.'},
        {'title': 'Copywriting',  'description': 'Words and texts, either created by us or neated by us will find your audithory.'}, 
        {'title': 'Concept Idea',  'description': 'The universe was started with an Idea. We will develop for you optimal concept idea, different to others.'}, 
        {'title': 'WebSite',  'description': 'We create simple and complex websites for any business and audithory.'},     
    ],
};


export default state;