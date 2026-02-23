import { Routes } from '@angular/router';
import { HomePage } from './application/page-modules/Home/home-page/home-page';
import { Contact} from './application/page-modules/contact/contact';
import { Skill } from './application/page-modules/Skill/skill/skill';
import { Education } from './application/page-modules/education/education/education';
import { Experience } from './application/page-modules/experience/experience';
import { Projects } from './application/page-modules/Projects/projects/projects';
import { About } from './application/page-modules/About/about/about';


export const routes: Routes = [
  { path: '', component: HomePage, 
    title: 'Dhiraj Kumar - Frontend Developer | Portfolio',
    
  },

  {
    path: 'about',
    component: About,
    title: 'About Me - Dhiraj Kumar',
  },
  {
    path:'contact',
    component: Contact,
    title: 'Contact Me - Dhiraj Kumar', 
  },

  {
    path: 'skills',
    component: Skill,
    title: 'Skills - Dhiraj Kumar',
  },

  {
    path: 'education',
    component: Education,
    title: 'Education - Dhiraj Kumar',
  },

  {
    path: 'experience',
    component: Experience,
    title: 'Experience - Dhiraj Kumar',
  },

  {
    path: 'projects',
    component: Projects,
    title: 'Projects - Dhiraj Kumar',
  }
  

];
