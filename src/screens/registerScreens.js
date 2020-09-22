import registerComponent from '../utils/componentRegistrationHelper';
// Import components before registering
import App from '../../App';
import Home from './home/home';
import Login from './auth/login';
import Article from './learning/article';
import LessonList from './lesson-list/lessonList';
import Learning from './learning/learning';
import Projects from './projects/projects';
import ProjectDetails from './projects/projectDetails';

// Register Imported components as screens
registerComponent('initialize', App);
registerComponent('home', Home);
registerComponent('login', Login);
registerComponent('article', Article);
registerComponent('lessonList', LessonList);
registerComponent('learning', Learning);
registerComponent('projects', Projects);
registerComponent('projectDetails', ProjectDetails);
