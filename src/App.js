import React, { Component } from 'react';
import logo from './logo.svg';
import yIcon from './img/yIcon.png';
import gtIcon from './img/gtseal.png';
import rIcon from './img/resurgens_iot.png';
import iIcon from './img/iTrans.png';
import adlIcon from './img/ADL.png';
import hIcon from './img/hackathon.png';
import vipIcon from './img/vip.png';
import rpmIcon from './img/rpm.png';
import cvIcon from './img/cv.png';
import fhIcon from './img/frameHuntBlack.png';

import './App.css';

import {
  Header,
  Container,
  Divider,
  Section,
  InfoBlock,
  InfoList
} from './Components';

const fillerIcon = (<div style={{ backgroundColor: 'red', width: '50px', height: '50px' }} />);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <div style={{width: '100%', borderRight: '#dedede solid 0.07rem'}}>

            <Section title='Education'>
              <InfoBlock
                icon={gtIcon}
                title='Georgia Institute of Technology'
                subheader='B.S. in Computer Science: Intelligence & HCI Threads - 3.83 GPA'
                setting='Atlanta, GA ● Graduating Dec 2018'
              />
            </Section>
            <Divider />
            <Section title='Experience'>
            <div style={{width: '50%'}}>
                <InfoBlock
                  icon={yIcon}
                  title='Yahoo: Tripod Project'
                  subheader='Tripod Engineering Intern'
                  setting={'San Francisco, CA ● May 2017 - Aug 2017'}
                  description={'Yahoo\'s platform for commoditized photo & video storage, serving, enrichment, aggregation, & search'}
                  listItemsA={[
                    'Improved image search parsing accuracy',
                    'Built Tripod Map/Image Viewer UI'
                  ]}
                  listItemsB={[
                    ' by broadening search metrics & testing query processing algorithm',
                    ' in React.js to visualize EXIF-metadata/geodata for individual users'
                  ]}
                  link={'https://yahooeng.tumblr.com/post/157200523046/introducing-tripod-flickrs-backend-refactored'}
                />
                <InfoBlock
                  icon={adlIcon}
                  title='Aron Developers'
                  subheader='Full Stack Rails Developer Intern'
                  setting='Los Altos, CA ● May 2016 - Aug 2016'
                  description='Real estate developer which focuses on building smart, luxury homes in San Francisco Bay Area'
                  listItemsB={[
                    ' being paid for mortgages on all unsold properties/construction sites',
                    ' for Loans database to support realtime ruby on rails data visualization dashboard',
                  ]}
                  listItemsA={[
                    'Effectively visualized net interest',
                    'Designed & Implemented SQL Tables'
                  ]}
                  link={'https://www.arondevelopers.com/'}
                />
              </div>
              <div style={{width: '50%'}}>

                <InfoBlock
                  icon={vipIcon}
                  title='Smart City Infrastructure'
                  subheader='Computer Vision Engineer'
                  setting='Atlanta, GA ● Aug 2017 - present'
                  description='Working under Dr. James Tsai , Dr. Tony Yezzi to develop city infrastructure monitoring/diagnosis with modern technologies'
                  listItemsA={[
                    'Developing vehicle detection, categorization & tracking',
                    'Using YOLO Real-time object system'
                  ]}
                  listItemsB={[
                    ' system to gather data about traffic flow/behavior patterns',
                    ' backed by Tensorflow implementation of darknet & trained on Udacity\'s Autti dataset'
                  ]}
                  link={'http://www.vip.gatech.edu/teams/smart-city-infrastructure'}
                />
                <InfoBlock
                  icon={rIcon}
                  title='Project Resurgens'
                  subheader='AHNA AI/IOT Developer'
                  setting='Atlanta, GA ● May 2016 - Aug 2017'
                  description={'Georgia Tech’s Smart Solar Home & Internet of Things project emphasizing self-sustenance/net zero energy/carbon footprint'}
                  listItemsB={[
                    ' using outlet reading data to optimize energy consumption',
                    ' that helps users track electricity & water savings/consumption over time',
                  ]}
                  listItemsA={[
                    'Training a classification model of electricity consumption',
                    'Building cross-platform React Native App'
                  ]}
                  link={'http://www.resurgenshome.com/'}
                />
                </div>
            </Section>

            <Divider />


            <Section title='Projects'>
            <div style={{width: '50%'}}>
              <InfoBlock
                    icon={rpmIcon}
                    title={'Raven\'s Matrix Solver'}
                    subheader='Knowledge Based AI Project'
                    setting='Aug 2017 - present'
                    description={'Designed a Python Agent that solves Raven\'s Progressive Matrices, a credible measure of intelligence via visual analogies'}
                    listItemsB={[
                      ' to capture knowledge representation, backed by Numpy adjacency matrices and object oriented design',
                      ' methodology to determine basic image transformation rules and improve complex visual pattern recognition'
                    ]}
                    listItemsA={[
                      'Built Semantic Networks',
                      'Leveraged Generate and Test'
                    ]}
                    link={'https://github.com/aayush-k/RavensAgent'}
                />

                <InfoBlock
                    icon={cvIcon}
                    title='Local Feature Matching'
                    subheader='Computer Vision Project'
                    setting='Aug 2017 - present'
                    description={'Wrote a Matlab algorithm for matching points between multiple views of the same physical scene'}
                    listItemsB={[
                      ' to identify reproducable and salient interest points within corresponding images',
                      ' to describe each interest point optimally for improved point matching correspondence'
                    ]}
                    listItemsA={[
                      'Implemented Harris Corner Detector ',
                      'Created SIFT Pipeline'
                    ]}
                    link={'https://github.com/aayush-k/Local-Feature-Matching'}
                />
              </div>
              <div style={{width: '50%'}}>
                <InfoBlock
                    icon={fhIcon}
                    title='FrameHunt'
                    subheader='First Place at HackGT'
                    setting='Oct 2017 - present'
                    description={'The Ctrl-F for Videos: A tool that helps users quickly search and skip to parts of a video based on visual content'}
                    listItemsA={[
                      'Worked on Clarifai API Integration',
                      'Built data flow, state management and oversaw design',
                    ]}
                    listItemsB={[
                      ' and optimized video processing and search indexing for faster, more helpful searches',
                      ' of ReactJS WebApp backed by Amazon EC2 server and ExpressJS',
                    ]}
                    link={'https://devpost.com/software/framehunt-ai4o96'}
                />
              </div>

            </Section>

            <div className='footer'>
              <img src={logo} className='footer_icon' />
              Made with React
            </div>
          </div>
          <div style={{ width: '25.75%', margin: '0.5rem', marginLeft: '1rem' }}>
            <h3>Skills</h3>
            <InfoList
                title='Languages'
                listItemsB={[
                  'Java',
                  'Python',
                  'JavaScript',
                  'Matlab',
                  'HTML/SASS/CSS',
                  'Ruby on Rails',
                ]}
              sidebar
              />
              <InfoList
                title='Libraries'
                listItemsB={[
                  'SKLearn',
                  'OpenCV/PIL',
                  'React/Redux',
                  'ImmutableJS',
                  'LeafletJS',
                  'Android SDK',
                ]}
              sidebar
              />
              <InfoList
                title='Dev Tools'
                listItemsB={[
                  'Jira',
                  'Designs/Mockups (Sketch)',
                  'Splunk',
                  'Git/GitHub Workflow',
                  'Linux/RHL (SSH)',
                  'Enterprise Slack/Hipchat',
                ]}
              sidebar
              />
              <InfoList
                title='Relevant Courses'
                listItemsB={[
                  'Knowledge-Based AI',
                  'Computer Vision',
                  'Intro to AI',
                  'Robotics & Perception',
                  'User Interface Design',
                  'Algorithm Design/Analysis'
                ]}
              sidebar
            />
              <InfoList
                title='Awards'
                listItemsA={[
                  'Faculty Honors 2015, 2016',
                  '2nd',
                  '1st'
                ]}
                listItemsB={[
                  ' 4.0 GPA in most recent semester',
                  ' Cal Berkeley National Speech Invitational (117 competitors)',
                  ' University of Pacific Jon Schamber Speech Invitational'
                ]}
              sidebar
              />
            <InfoList
                title='Activities'
                listItemsA={[
                  'GT Qurbani',
                  'Recreational',

                ]}
                listItemsB={[
                  ' All-Male Nationally Competitive Collegiate Bollywood Fusion Dance Team',
                  ' USTA Men\'s Singles Circuit, Collegiate Intramurral Ultimate Frisbee, Hiking, Rock Climbing, Camping',
                ]}
              sidebar
              />
          </div>
        </Container>

      </div>
    );
  }
}

export default App;
