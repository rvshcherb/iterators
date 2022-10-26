import './styles/scss/main.scss';

import Team from './Team';

const team = new Team();

for (let element of team) {
  console.log(element);
}
