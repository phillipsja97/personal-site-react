import React, { Fragment } from 'react';
import cx from 'clsx';
import Media from 'react-media';
import { makeStyles } from '@material-ui/core/styles';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Zoom from 'react-reveal/Zoom';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import './Contact.scss';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1em',
  },
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    backgroundColor: 'rgba(19, 228, 228, .3)',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
    color: 'white',
  },
  subheader: {
    fontSize: 14,
    color: 'white',
    marginBottom: '0.875em',
  },
  textBox: {
    width: '100%',
    display: 'block',
    justifyContent: 'center',
    marginTop: '3em',
    marginBottom: '3em',
    color: 'white',
  },
  text: {
    color: 'white',
  },
}));

const ProfileCard = () => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  return (
    <React.Fragment>
    <Media queries={{
      small: '(min-width: 320px) and (max-width: 767px)',
      medium: '(min-width: 768px) and (max-width: 1024px)',
      large: '(min-width: 1023px)',
    }}>
      {(matches) => (
        <Fragment>
          {matches.small && <p className="techTitleMob"> jamiephillips<span className="spanMobile"> ~/contact-me/</span><span2 className="span2Mobile"> (master):</span2></p>}
          {matches.medium && <p className="techTitleTab"> jamiephillips<span className="spanTablet"> ~/contact-me/</span><span2 className="span2Tablet"> (master):</span2></p>}
          {matches.large && <p className="techTitle"> jamiephillips<span className="spanDesk"> ~/contact-me/</span><span2> (master):</span2></p>}
        </Fragment>
      )}
    </Media>
    <Zoom cascade>
    <div className="contact">
      <Card className={cx(styles.card, shadowStyles.root)}>
        <CardContent>
          <Avatar className={styles.avatar} src={'http://share-fastly.picmonkey.com/prod/photo_posts/7YekgmznLzr_21258830.jpg'} />
          <h3 className={styles.heading}>Jamie Phillips</h3>
          <span className={styles.subheader}>Nashville, TN</span>
        </CardContent>
        <Box className={styles.textBox}>
          <TextInfoContent
          color="white"
          heading={'Links Below'}
          body={
            'Thank you for visiting my portfolio site. Check out my Github and LinkedIn below or drop me a line through email!'
          }
          />
        </Box>
        <Divider light />
        <Box display={'flex'}>
          <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
            <IconButton aria-label="github" onClick={() => window.open('https://github.com/phillipsja97')}>
                <GitHubIcon fontSize="large" style={ { fill: 'white' } }/>
            </IconButton>
          </Box>
          <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <Button
                variant="contained"
                color="white"
                className={styles.button}
                onClick={() => window.open('mailto:phillipsja97@gmail.com?subject=Hi!')}
              >
                Say Hello
          </Button>
          </Box>
          <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
            <IconButton aria-label="hostedUrl" onClick={() => window.open('https://www.linkedin.com/in/jamieaphillips/')}>
                <LinkedInIcon fontSize="large" style={ { fill: 'white' } }/>
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
    </Zoom>
    </React.Fragment>
  );
};


export default ProfileCard;

// import React from 'react';
// import MediaQuery from 'react-responsive';
// import FadeIn from 'react-reveal/Fade';
// import { Button } from 'react-bootstrap';
// import { IconContext } from 'react-icons';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import './Contact.scss';

// class Contact extends React.Component {
//   render() {
//     return (
//       <React.Fragment className="fluid-container">
//         <div className="contactIcons">
//           <h1 class="title">jamiephillips <span>/contact-me/</span><span2> (master):</span2></h1>
//         <FadeIn>
//             <div className="box">
//               <div class="contactContainer">
//                 <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'githubContact' }}>
//                   <div>
//                     <a href='https://github.com/phillipsja97'><FaGithub /></a>
//                   </div>
//                 </IconContext.Provider>
//                 <Button variant="outline-light" href="mailto:phillipsja97@gmail.com?subject=Hi!">Say Hello</Button>
//                 <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'linkedInContact' }}>
//                   <div>
//                     <a href='https://www.linkedin.com/in/jamieaphillips/'><FaLinkedin /></a>
//                   </div>
//                 </IconContext.Provider>
//               </div>
//             </div>
//         </FadeIn>
//         </div>
//     </React.Fragment>
//     );
//   }
// }

// export default Contact;
