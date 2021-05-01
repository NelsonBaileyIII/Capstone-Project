import React from "react";
import { useSelector } from "react-redux";
import ColorsList from "./ColorsList";
import ImageMain from "./ImageMain";
import ImageSelection from "./ImageSelection";
import ColorPicker from "./ColorPicker";
import ColorInfo from "./ColorInfo";
import Regenerate from "./Regenerate";
import SavePalette from "./SavePalette";
import {
  Container,
  Grid,
  Popup,
  Button,
  Icon,
  Header
} from "semantic-ui-react";

const Generate = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const savepaletteRender = () => {
    if (isAuthenticated) {
      return <SavePalette />;
    } else {
      return (
        <Popup
          trigger={
            <Button className="save-pallette">
              <Icon name="save" /> Save Palette
            </Button>
          }
          content="Log In required for this feature"
          position="bottom right"
          size="large"
          basic
        />
      );
    }
  }
  return (
    <div className="HomePage">
      <Container textAlign="center">
        <Header as="h1" className="generate-header">
          Choose a picture and analyze
        </Header>
        <Grid celled>
          <Grid.Row>
            <ImageSelection />
            <ImageMain />
          </Grid.Row>
          <Grid.Row>
            <ColorsList />
          </Grid.Row>
          <Grid.Row>
            <ColorPicker />
            <Grid.Column mobile={16} tablet={7} computer={6}>
              <ColorInfo />
              <div className="regen-save-buttons">
                <Regenerate />
                {savepaletteRender()}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Generate;
