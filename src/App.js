import React, { Component } from 'react';
import logo from './img/logo.png';
import yIcon from './img/yIcon.png';
import gtIcon from './img/gtseal.png';
import rIcon from './img/resurgens_iot.png';
import iIcon from './img/iTrans2.png';
import adlIcon from './img/ADL.png';
import hIcon from './img/hackathon.png';
import vipIcon from './img/vip.png';
import rpmIcon from './img/rpm.png';
import cvIcon from './img/cv.png';
import fhIcon from './img/frameHuntBlack.png';
import faceIcon from './img/face-detect.svg';
import fIcon from './img/fb.png';
import ptIcon from './img/DPTree.png';

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
          <div style={{width: '100%', borderRight: '#dedede solid 0.07rem', paddingRight:'0.5rem'}}>

            <Section title='Education'>
              <InfoBlock
                icon={gtIcon}
                title='Georgia Institute of Technology'
                subheader='B.S. in Computer Science: Intelligence & HCI Threads - 3.83 GPA'
                setting='Atlanta, GA ● Graduating May 2019'
              />
            </Section>
            <Divider />
            <Section title='Experience'>
            <div style={{width: '50%'}}>
                {/* <InfoBlock
                  icon={fIcon}
                  title='Facebook'
                  subheader='[Incoming] Software Engineering Intern'
                  setting={'Seattle, WA ● May 2018 - Aug 2018'}
                  description={'Messenger Assistant Team'}
                /> */}
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
                    ' by implementing search metrics & analyzing query processing algorithm',
                    ' in React.js to visualize EXIF-metadata/geodata for individual users'
                  ]}
                  link={'https://yahooeng.tumblr.com/post/157200523046/introducing-tripod-flickrs-backend-refactored'}
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
              <div style={{width: '50%'}}>
                {/* <InfoBlock
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
                /> */}
                <InfoBlock
                  icon={vipIcon}
                  title='Smart City Infrastructure'
                  subheader='Computer Vision Engineer'
                  setting='Atlanta, GA ● Aug 2017 - Dec 2017'
                  description='Working under Dr. James Tsai & Dr. Tony Yezzi to develop city infrastructure monitoring/diagnosis with modern technologies'
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
                  icon={iIcon}
                  title='iTrans'
                  subheader='Android Developer'
                  setting='Atlanta, GA ● Jan 2016 - May 2016'
                  description='Faculty research on optimizing campus transportation systems & developing a forecasting, computation, & communication system to improve bus circulation'
                  listItemsB={[
                    '  of bus stops with realtime broadcasts of route changes, upcoming cancellations & weather forecasts with Android TextToSpeech engine',
                  ]}
                  listItemsA={[
                    'Implemented automated announcements '
                  ]}
                  link={'http://www.nextbuzz.gatech.edu/'}
                />
                </div>
            </Section>

            <Divider />


            <Section title='Projects'>
              <div style={{ width: '50%' }}>
                <InfoBlock
                  icon={ptIcon}
                  title='Dependency Parsing'
                  subheader='Natural Language Jupyter Notebooks'
                  setting='Mar 2018 - Apr 2018'
                  description='Created a deep transition dependency parser in PyTorch with 93.6% (English) and 94.8% (Norwegian) dev accuracies'
                  listItemsA={[
                    'Built arc-standard transition-based dependency parser ',
                    'Implemented neural network components '
                  ]}
                  listItemsB={[
                    ' using various methods of computing word embeddings',
                    ' for choosing actions and combining stack elements'
                  ]}

                  link={'https://github.com/aayush-k/NLP_Projects/blob/master/DependencyParsing.ipynb'}
                />

                <InfoBlock
                  icon={cvIcon}
                  title='Scene Recognition'
                  subheader='Computer Vision MATLAB Project'
                  setting='Oct 2017 - Dec 2017'
                  description={'Explored Deep Learning & Bag of Words/SVM approaches to Scene Recognition task - accuracies measured with test set:'}
                  listItemsA={[
                    'Designed Deep Neural Network ',
                    'Trained 15 one-vs-all Linear SVMs '
                  ]}
                  listItemsB={[
                    ' from scratch (54% accuracy) & fine-tuned the pre-trained VGG-F deep network (89% accuracy)',
                    ' fed with Bag of SIFT features (66.1% accuracy) & k nearest neighbors (42.3% accuracy)'
                  ]}

                  link={'https://github.com/aayush-k/Scene-Recognition-Deep-Learning'}
                />
              </div>
              <div style={{width: '50%'}}>
                <InfoBlock
                    icon={fhIcon}
                    title='FrameHunt'
                    subheader='1st at HackGT 2017 (185 submissions)'
                    setting='Oct 2017'
                    description={'The Ctrl-F for Videos: A tool that helps users quickly search & skip to parts of a video based on visual content with Node.js'}
                    listItemsA={[
                      'Integrated Clarifai API ',
                      'Built data flow, state management & oversaw design',
                    ]}
                    listItemsB={[
                      ' and optimized video processing/search indexing pipelines for faster, more helpful searches',
                      ' of ReactJS WebApp backed by Amazon EC2 server & ExpressJS',
                    ]}
                    link={'https://devpost.com/software/framehunt-ai4o96'}
                />
                <InfoBlock
                  icon={rpmIcon}
                  title={'Raven\'s Matrix Solver'}
                  subheader='Knowledge-Based AI Python Project'
                  setting='Aug 2017 - Dec 2017'
                  description={'Built an Agent to solve Raven\'s Progressive Matrices, visual analogies to assess IQ, with 83.7% train & 65.9% test accuracies'}
                  listItemsB={[
                    ' to capture knowledge representation using Numpy adjacency matrices & object oriented design',
                    ' methodology to determine affine image transformations & recognize complex visual patterns'
                  ]}
                  listItemsA={[
                    'Built Semantic Networks',
                    'Leveraged Generate & Test'
                  ]}
                  link={'https://github.com/aayush-k/RavensAgent'}
                />

                {/* <InfoBlock
                  icon={faceIcon}
                  title='Face Detection'
                  subheader='Computer Vision Project'
                  setting='Nov 2017'
                  description='Trained a classifier to detect faces using a sliding window classification, inspired by Dalal & Triggs 2005'
                  listItemsA={[
                    'Built HOG Descriptions ',
                    'Leveraged Hard Negative Mining '
                  ]}
                  listItemsB={[
                    '  (Histogram of Oriented Gradients) of postive & negative examples in Caltech Web Faces dataset',
                    ' to boost classifier accuracy & augmented positive example data with horizontally mirrored faces'
                  ]}

                  link={'https://github.com/aayush-k/Face-Detection'}
                /> */}

              </div>

            </Section>

            <br />

            <div className='footer'>
              <img src={logo} className='footer_icon' />
              <span>Made With ReactJS</span>
            </div>

          </div>

          <div style={{ width: '26.5%', marginLeft: '0.7rem' }}>
          <Section title='Skills'>
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
                  'PyTorch',
                  'Tensorflow',
                  'SKLearn/OpenCV',
                  'ReactJS/React Native',
                  // 'Redux/ImmutableJS',
                  'Android SDK',
                ]}
              sidebar
              />
              <InfoList
                title='Dev Tools'
                listItemsB={[
                  'Jira Issue Tracking',
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
                  'Natural Language Processing',
                  'Knowledge-Based AI',
                  'Computer Vision',
                  'Intro to AI',
                  'Robotics & Perception',
                  'Algorithm Design/Analysis',
                  'Info Visualization',
                  'User Interface Design',
                ]}
              sidebar
              />
            </Section>
          <Divider />
          <Section title='Awards'>
            <InfoList
                title='Academic'
                listItemsA={[
                  'Faculty Honors',
                  'Dean\'s List',
                ]}
                listItemsB={[
                  ' 4.0 GPA in Fall 2015 & Spring 2016',
                  ' maintain a GPA average of 3.0 or above',
                ]}
              sidebar
              />

                <InfoList
                  title='Speech & Debate'
                  listItemsA={[
                    '2nd',
                    '1st',
                    'VP of Speech',
                  ]}
                    listItemsB={[
                      ' Cal Berkeley National Invitational (117 entries)',
                      ' University of Pacific Jon Schamber Invitational',
                      ' Facilitated administrative tasks for Leland Speech & Debate Team of 300+ students'
                    ]}
                  sidebar
                />

            </Section>
          {/* <Section title='Interests'>

            <InfoList
                title='Activities'
                listItemsA={[
                  'GT Qurbani',
                  'Tennis',
                  'Recreational',
                  'Musician'
                ]}
                listItemsB={[
                  ' All-Male Nationally Competitive Collegiate Bollywood Fusion Dance Team',
                  ' Competed in the US Tennis Association Men\'s Singles Circuit',
                  ' Collegiate Intramurral Ultimate Frisbee, Hiking, Rock Climbing, Camping',
                  ' Played Piano for 8 Years and Recorded Covers'
                ]}
              sidebar
              />
            </Section> */}


          </div>
        </Container>

      </div>
    );
  }
}

export default App;
