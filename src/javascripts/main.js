import 'bootstrap';
import '../styles/main.scss';
import auth from '../components/Auth/auth';
import birfday from '../components/Birfday/birfday';

console.error('hi');


const init = () => {
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
