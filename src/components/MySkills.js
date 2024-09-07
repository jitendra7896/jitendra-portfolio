import React from 'react';
import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import ChildComponent from './react-bubble';
import { technicalSkills } from '../constants/workdata';

const MySkillsPage = () => {
  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 5,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5
  };

  const children = technicalSkills.map((data, i) => (
    <ChildComponent data={data} className="child" key={i} />
  ));

  return (
    <BubbleUI options={options} className="myBubbleUI">
      {children}
    </BubbleUI>
  );
};

export default MySkillsPage;
