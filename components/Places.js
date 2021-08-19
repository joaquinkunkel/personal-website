import { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import Place from './Place';
import { ArrowLine, ArrowTip } from './icons/Icons';

// Visualization of movings around
const Places = withTheme(({orientation, theme}) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(timer);
    };
  }, [])

  const currentPlaceSubtitle = (
    <>
      <Typography
        variant="body2"
        noWrap
        color="textSecondary"
      >
        Now
      </Typography>
      <Typography variant="body2">
        Freelancer
      </Typography>
      {/* <Typography
        variant="body2"
        noWrap
        color="textSecondary"
        style={{color: theme.palette.text.disabled}}
      >
        {date.toDateString()}
      </Typography>
      <Typography
        variant="body2"
        noWrap
        color="textSecondary"
        style={{color: theme.palette.text.disabled}}
      >
        {date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 6)} {date.toLocaleTimeString().substring(date.toLocaleTimeString().length - 2, date.toLocaleTimeString().length)}
      </Typography> */}
    </>
  );
  
  const arrowContainer = (
    <Box
      paddingY={1}
      paddingX={4}
      width="100%"
      display="flex"
      alignItems="center"
    >
      <ArrowLine width="100%"/>
      <Box position="relative" left="-3px">
        <ArrowTip />
      </Box>
    </Box>
  )
  return (
    <div
      style={{display: orientation === 'horizontal' && 'flex', alignItems: 'flex-start', width: '100%'}}
    >
      <Place
        text="Abu Dhabi, UAE"
        style={{marginRight: 'auto'}}
        subtitle={
          <>
            <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
              2015-2018
            </Typography>
            <Typography noWrap variant="body2">
              CS & VisArts
              {orientation === 'horizontal' ? <br /> : ' '}
              @ NYU
            </Typography>
          </>
        }
      />
      {orientation === 'horizontal'
        ?  arrowContainer
        : <br />
      }
      <Place
        text="New York, NY"
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        // strikeThrough
        subtitle={
          <>
            <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
              2018-2019
            </Typography>
            <Typography noWrap variant="body2">
              UI Design
              {orientation === 'horizontal' ? <br /> : ' '}
              @ Coursedog
            </Typography>
          </>
        }
      />
      {orientation === 'horizontal'
        ?  arrowContainer
        : <br />
      }
      <Place
        text="San Francisco, CA"
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        // strikeThrough
        subtitle={
          <>
            <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
              2019-2020
            </Typography>
            <Typography noWrap variant="body2">
              Product Design
              {orientation === 'horizontal' ? <br /> : ' '}
              @ Cambly
            </Typography>
          </>
        }
      />
      {orientation === 'horizontal'
        ?  arrowContainer
        : <br /> 
      }
      <Place
        text="Mexico City, MX"
        style={{marginLeft: 'auto'}}
        subtitle={currentPlaceSubtitle}
        highlight
      />
    </div>
  );
});

Places.defaultProps = {
  orientation: 'horizontal',
};

export default Places;
