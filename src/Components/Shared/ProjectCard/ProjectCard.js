import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import LanguageIcon from '@material-ui/icons/Language';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 304,
    margin: '2em',
    backgroundColor: '#9e9e9e',
    boxShadow: '0 3px 5px 2px black',
  },
  title: {
    marginBottom: 0,
    color: 'rgb(19, 228, 228)',
  },
  content: {
    position: 'relative',
    padding: 24,
    margin: '-24% 16px 2px',
    backgroundColor: '#343a40',
    borderRadius: 4,
  },
  subHeading: {
    marginTop: 8,
    color: 'rgb(19, 228, 228)',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
}));

const ProjCard = (props) => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });
  return (
    <Card elevation={0} className={styles.root}>
      <CardMedia
        classes={mediaStyles}
        image={props.project.screenshot}
      />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <h3 className={styles.title}>{props.project.title}</h3>
        <Box
          display={'flex'}
          alignItems={'center'}
          mb={1}
          className={gutterStyles.parent}
        >
        </Box>
        <Typography className={styles.text} variant={'body2'}>
          {props.project.description}
        </Typography>
        <h6 className={styles.subHeading}>Technologies Used:</h6>
        <Typography className={styles.text} variant={'body2'}>
          {props.project.technologiesUsed}
        </Typography>
        <Box
          mt={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            className={gutterStyles.parent}
          >
            <IconButton aria-label="github" onClick={() => window.open(props.project.githubUrl)}>
              <GitHubIcon fontSize="large" style={ { fill: 'rgb(19, 228, 228)' } }/>
            </IconButton>
           <IconButton aria-label="hostedUrl" onClick={() => window.open(props.project.url)}>
              <LanguageIcon fontSize="large" style={ { fill: 'rgb(19, 228, 228)' } }/>
           </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};


export default ProjCard;
