import { Routes } from '@angular/router';
import { HomePage } from './application/page-modules/Home/home-page/home-page';
import { Contact} from './application/page-modules/contact/contact';
import { Skill } from './application/page-modules/Skill/skill/skill';
import { Education } from './application/page-modules/education/education/education';
import { Experience } from './application/page-modules/experience/experience';
import { Projects } from './application/page-modules/Projects/projects/projects';
import { About } from './application/page-modules/About/about/about';


export const routes: Routes = [
  { path: '', component: HomePage },

  {
    path: 'about',
    component: About,
  },
  {
    path:'contact',
    component: Contact,
  },

  {
    path: 'skills',
    component: Skill,
  },

  {
    path: 'education',
    component: Education,
  },

  {
    path: 'experience',
    component: Experience,
  },

  {
    path: 'projects',
    component: Projects,
  }
  

];
