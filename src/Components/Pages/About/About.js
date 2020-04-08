import React, { Fragment } from 'react';
import cx from 'clsx';
import Media from 'react-media';
import Zoom from 'react-reveal/Zoom';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import './About.scss';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '75%',
    minWdith: 304,
    margin: 'auto',
    backgroundColor: '#9e9e9e',
    marginTop: '3em',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

const PostCard = () => {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <div className="about">
      <Media queries={{
        small: '(min-width: 320px) and (max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1024px)',
        large: '(min-width: 1023px)',
      }}>
        {(matches) => (
          <Fragment>
                  {matches.small && <p className="aboutTitleMob"> jamiephillips<span className="spanMobile"> ~/about-me/</span><span2 className="span2Mobile"> (master):</span2></p>}
                  {matches.medium && <p className="aboutTitleTab"> jamiephillips<span className="spanTablet"> ~/about-me/</span><span2 className="span2Tablet"> (master):</span2></p>}
                  {matches.large && <p className="aboutTitle"> jamiephillips<span className="spanDesk"> ~/about-me/</span><span2> (master):</span2></p>}
          </Fragment>
        )}
      </Media>
      <Zoom cascade>
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={'https://github.com/phillipsja97/personal-site-react/blob/master/src/Assets/WorldName.jpg?raw=true'} />
      <Avatar className={cardStyles.avatar} src={'http://share-fastly.picmonkey.com/prod/photo_posts/7YekgmznLzr_21258830.jpg'} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={'About Me'}
          body={
            'In my career, I was always a problem solver who was looking for more challenges. I enjoy the challenge of taking a problem and breaking it down until you find the road map to the solution. This is why I was always intrigued with software development and why I was hooked the moment I started learning about it. The software development industry is ever-changing and I look forward to growing my skills to grow with it.'
          }
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
          <IconButton aria-label="github" onClick={() => window.open('https://github.com/phillipsja97')}>
            <GitHubIcon fontSize="large" style={ { fill: 'white' } }/>
          </IconButton>
          <IconButton aria-label="hostedUrl" onClick={() => window.open('https://www.linkedin.com/in/jamieaphillips/')}>
            <LinkedInIcon fontSize="large" style={ { fill: 'white' } }/>
          </IconButton>
      </Box>
    </Card>
    </Zoom>
    </div>
  );
};

export default PostCard;
