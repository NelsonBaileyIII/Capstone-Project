import React from "react";
import FujiExample from "../images/FujiExample.jpg";
import CameraExample from "../images/CameraExample.jpg";
import frontExample from "../images/example_14.jpg";
import MineralsExample from "../images/example_13.jpg";
import { Grid, Image } from "semantic-ui-react";

const renderOneColorSet = set => {
  let colorSet = set.map((color, index) => (
    <div className="color-square-container" key={color + index}>
      <div className="color-square" style={{ backgroundColor: color }} />
    </div>
  ));
  return colorSet;
};

const LandingPageExampleSets = () => {
  const exampleSets = [
    { FujiExample: ["#ECE3E0", "#252C32", "#6A707E", "#53262E", "#B81F34"] },
    { MineralsExample: ["#C0B9B4", "#84624D", "#BB7A61", "#B06C83", "#0E5F6C"] },
    { CameraExample: ["#26221A", "#3D464F", "#96BBDC", "#74AACB", "#867D80"] },
    { frontExample: ["#804C27", "#F7AC49", "#CD6622", "#7A2717", "#2C2022"]}
  ];

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column
          className="column-overide-left"
          computer={4}
          tablet={4}
          mobile={8}
        >
          <Image src={FujiExample} />
          {renderOneColorSet(exampleSets[0].FujiExample)}
        </Grid.Column>
        <Grid.Column
          className="column-overide-right"
          computer={4}
          tablet={4}
          mobile={8}
        >
          <Image src={MineralsExample} />
          {renderOneColorSet(exampleSets[1].MineralsExample)}
        </Grid.Column>
        <Grid.Column
          className="column-overide-left"
          computer={4}
          tablet={4}
          mobile={8}
        >
          <Image src={CameraExample} />
          {renderOneColorSet(exampleSets[2].CameraExample)}
        </Grid.Column>
        <Grid.Column
          className="column-overide-right"
          computer={4}
          tablet={4}
          mobile={8}
        >
          <Image src={frontExample} />
          {renderOneColorSet(exampleSets[3].frontExample)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LandingPageExampleSets;
