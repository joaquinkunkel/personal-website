import NavBar from '../components/NavBar';
import { Typography } from '@material-ui/core';
import Block from '../components/Block';

const Art = () => {
  return (
    <>
    <NavBar fixed alwaysShowName />
    <Block highlight>
      <Typography>Visual art compliation coming soon!</Typography>
    </Block>
    </>
  );
};

export default Art;
