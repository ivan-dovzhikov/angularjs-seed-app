import { IScope } from 'angular';
import { FeaturesModule } from './features.module';
import template from './features.component.html';
import './features.component.scss';
import es6Img from 'assets/es6Img.jpg';
import tsImg from 'assets/tsImg.jpg';
import sassImg from 'assets/sassImg.jpg';

interface Feature {
  name: string;
  description: string;
  img: string;
}

interface FeaturesScope extends IScope {
  features: Feature[];
}

class FeaturesController {
  constructor($scope: FeaturesScope) {
    $scope.features = [
      {
        name: 'EcmaScript 6+',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut praesentium dolores est atque maiores obcaecati molestias eligendi explicabo, accusamus quidem soluta suscipit autem excepturi, necessitatibus veritatis ab ipsum facilis.',
        img: es6Img,
      },
      {
        name: 'TypeScript',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae error ipsa sed quam ab quia libero! Eius harum nam facere ut, facilis perferendis consequuntur autem molestiae, deleniti ea officia veritatis.',
        img: tsImg,
      },
      {
        name: 'SASS',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione cupiditate maiores ex libero dignissimos accusamus rem corrupti esse vitae eaque temporibus est et exercitationem, provident sapiente numquam architecto officia vero!',
        img: sassImg,
      },
    ];
  }
}

export const FeaturesComponent = FeaturesModule.component('features', {
  template,
  controller: FeaturesController,
});
