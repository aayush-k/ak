import React, { Component } from 'react';
import logo from './img/logo.png';
import yIcon from './img/yIcon.png';
import gtIcon from './img/gtseal.png';
import aIcon from './img/amzn.png';
import gtLogo from './img/gtlogo.png';
import belo from './img/belo.png';
import rpmIcon from './img/rpm.png';
import cvIcon from './img/cv.png';
import fhIcon from './img/frameHuntBlack.png';
import fIcon from './img/fb.png';
import ptIcon from './img/DPTree.png';
import faceIcon from './img/face-detect.svg';

import './App.css';

import {
  Header,
  Container,
  Divider,
  Section,
  InfoBlock,
  InfoList
} from './Components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <div className='main_content' >

            {/* <Section title='Education'>
              <InfoBlock
                icon={gtIcon}
                title='Georgia Institute of Technology'
                subheader='B.S. in Computer Science: Intelligence & HCI Threads - 3.8 GPA'
                setting='Atlanta, GA ● Graduated May 2019'
              />
            </Section>
            <Divider /> */}
            <Section title='Experience'>
              <div style={{ width: '50%' }}>
                {/* <InfoBlock
                  icon={fIcon}
                  title='GT E-Textiles'
                  subheader='Technical Lead'
                  setting={'Seattle, WA ● May 2018 - Aug 2018'}
                  description={'Messenger Assistant Natural Language Generation Team'}
                  listItemsA={[
                    'Worked under Dr. Thad Starner',
                    'Developed data collection scripts',
                  ]}
                  listItemsB={[
                    ' into the assistant stack using context-aware decoder LSTMs',
                    ' with heuristic-based automated annotations along with establishing guidelines & best practices for remote human-annotation teams',
                  ]}
                  link={'https://developers.facebook.com/videos/f8-2018/using-natural-language-processing-to-enhance-your-messenger-conversations/'}
                /> */}
                <InfoBlock
                  icon={belo}
                  title='Airbnb'
                  subheader='Fullstack Software Engineer'
                  setting='San Francisco, CA ● July 2019 - Present'
                  description='Guest Store PDP Team: Optimized UX of Listing Product Detail Page (PDP) to increase bookings on Airbnb via feature-driven development, A/B Testing, & quality maintanence'
                  listItemsA={[
                    'Increased bookings by 1.3% globally',
                    'Refactored/redesigned various reusable PDP components,',

                  ]}
                  listItemsB={[
                    ' by surfacing dynamically updated cancellation info tailored to user-inputed dates & improved the ranking mechanism of such info to support nontrivial product specs',
                    ' such as a module for booking mechanisms & a cross-browser compatible carousel component, to be more performant, maintainable, & robust',
                  ]}
                  link={'https://next.airbnb.com/rooms/2736358?force_bingo=treatment'}
                />

                <InfoBlock
                  icon={fIcon}
                  title='Facebook Messenger'
                  subheader='Software Engineering Intern'
                  setting={'Seattle, WA ● May 2018 - Aug 2018'}
                  description={'Messenger Assistant Natural Language Generation Team'}
                  listItemsA={[
                    'Deployed e2e Neural Natural Language Generation pipeline',
                    'Developed data collection scripts',
                  ]}
                  listItemsB={[
                    ' into the assistant stack using context-aware decoder LSTMs',
                    ' with heuristic-based automated annotations along with establishing guidelines & best practices for remote human-annotation teams',
                  ]}
                  link={'https://developers.facebook.com/videos/f8-2018/using-natural-language-processing-to-enhance-your-messenger-conversations/'}
                />

                <InfoBlock
                  icon={fhIcon}
                  title='FrameHunt'
                  subheader='1st at HackGT 2017 (185 submissions)'
                  setting='Atlanta, GA ● Oct 2017 - Dec 2017'
                  description={'The Ctrl-F for Videos: A tool that helps users quickly search & skip to parts of a video based on visual content with Node.js'}
                  listItemsA={[
                    'Integrated Clarifai API ',
                    'Built data flow, state management & oversaw design',
                  ]}
                  listItemsB={[
                    ' & optimized video processing/search indexing pipelines for faster, more helpful searches',
                    ' of ReactJS WebApp backed by Amazon EC2 server & ExpressJS',
                  ]}
                  link={'https://devpost.com/software/framehunt-ai4o96'}
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
                  icon={gtLogo}
                  title={'E-Textile Hacking'}
                  subheader='Core Software Engineer'
                  setting='Jan 2019 - May 2019'
                  description={'Repurposing, Expanding, and Exposing a Public API for the Levi’s and Google Jacquard Collaboration'}
                  listItemsA={[
                    'Developed iOS cocoapod toolkit', // building a developer friendly iOS toolkit for easily interfacing with the Jacquard technology
                    'Introduced new Jacquard gestures',
                    'Published a paper as first author in ISWC’19'
                  ]}
                  listItemsB={[
                    ' for developers to easily interface with Google Jacquard technology and customize user input behavior',
                    ' that leverage the ability to discern variable applied pressure as a second dimension for user input',
                    ' Proceedings of the 23rd International Symposium on Wearable Computers (https://dl.acm.org/doi/10.1145/3341163.3347721)'
                  ]}
                  link={'https://medium.com/e-textile-hacking/visualizing-augmenting-jacquards-gesture-catalog-ff0ef4484048'}
                />

                <InfoBlock
                  icon={aIcon}
                  title='Amazon Alexa'
                  subheader='Software Engineering Intern'
                  setting='Cambridge, MA ● Aug 2018 - Dec 2018'
                  description='Alexa Entity Resolution & Search/Accuracy Team'
                  listItemsA={[
                    'Automated management of entity resolution configs',
                    'Leveraged DynamoDB & Distributed Job Scheduling'
                  ]}
                  listItemsB={[
                    ' using realtime accuracy & latency metrics to revert faulty changes',
                    ' to store automated management settings per config & periodically monitor metrics for executing/suggesting rollbacks as needed'
                  ]}
                  link={'https://developer.amazon.com/blogs/alexa/post/5de2b24d-d932-4c6f-950d-d09d8ffdf4d4/entity-resolution-and-slot-validation'}
                />
                <InfoBlock
                  icon={yIcon}
                  title='Yahoo Tripod'
                  subheader='Software Engineering Intern'
                  setting={'San Francisco, CA ● May 2017 - Aug 2017'}
                  description={'Tripod: Yahoo\'s platform for commoditized photo & video storage, serving, enrichment, aggregation, & search'}
                  listItemsA={[
                    'Built Tripod Map/Image Viewer UI',
                    'Improved image search parsing accuracy',
                  ]}
                  listItemsB={[
                    ' with React.js & Mapbox Supercluster to visualize EXIF-metadata/geodata for user photos',
                    ' by implementing search metrics & analyzing query processing algorithm',
                  ]}
                  link={'https://yahooeng.tumblr.com/post/157200523046/introducing-tripod-flickrs-backend-refactored'}
                />

                {/* <InfoBlock
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
                /> */}
                {/* <InfoBlock
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
                /> */}

                </div>
            </Section>

            <Divider />


            <Section title='Personal Projects'>
              <div style={{ width: '50%' }}>
                {/* <InfoBlock
                  icon={gtLogo}
                  title={'E-Textile Hacking'}
                  subheader='Core Software Engineer'
                  setting='Jan 2019 - May 2019'
                  description={'Repurposing, Expanding, and Exposing a Public API for the Levi’s and Google Jacquard Collaboration'}
                  listItemsA={[
                    'Developed iOS cocoapod toolkit', // building a developer friendly iOS toolkit for easily interfacing with the Jacquard technology
                    'Introduced new Jacquard gestures',
                    'Published a paper as first author in ISWC’19'
                  ]}
                  listItemsB={[
                    ' for developers to easily interface with Google Jacquard technology and customize user input behavior',
                    ' that leverage the ability to discern variable applied pressure as a second dimension for user input',
                    ' Proceedings of the 23rd International Symposium on Wearable Computers (https://dl.acm.org/doi/10.1145/3341163.3347721)'
                  ]}
                  link={'https://medium.com/e-textile-hacking/visualizing-augmenting-jacquards-gesture-catalog-ff0ef4484048'}
                /> */}

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
                    ' for choosing actions & combining stack elements'
                  ]}

                  link={'https://github.com/aayush-k/NLP_Projects/blob/master/DependencyParsing.ipynb'}
                />

                <InfoBlock
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
                />

              </div>
              <div style={{width: '50%'}}>

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

                <InfoBlock
                  icon={cvIcon}
                  title='Scene Recognition'
                  subheader='Computer Vision Project'
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

            </Section>

            <br />

            {/* <div className='footer'>
              <img src={logo} className='footer_icon' />
              <span>Made With ReactJS</span>
            </div> */}

          </div>
          <div className='vertical_divider'/>
          <div className='sidebar' >
          <Section title='Skills'>
            <InfoList
                title='Languages'
                listItemsB={[

                  'Typescript/JavaScript',
                  'Java',
                  'Python',
                  'Thrift',
                  'Hack/PHP',
                  'Matlab',
                  'Ruby on Rails',
                  // 'HTML/SASS/CSS',
                ]}
                />
              <InfoList
                title='Libraries'
                listItemsB={[
                  'ReactJS',
                  'GraphQL',
                  'StorybookJS/Happo',
                  'PyTorch',
                  'Tensorflow',
                  'SKLearn/OpenCV',
                  'Redux/ImmutableJS',
                  'Android SDK',
                ]}
              />
              <InfoList
                title='Dev Tools'
                listItemsB={[
                  'Git/Github Integrations',
                  'Mercurial',
                  'Splunk',
                  'Jira Issue Tracking',
                  'Linux/RHEL (SSH)',
                  'Designs/Mockups (Figma, Sketch)',
                  // 'Enterprise Slack/Hipchat',
                ]}
              />

            </Section>
          <Divider />
          <Section title='Education'>
              {/* <InfoList
                title="Georgia Tech, Class of '19"
                listItemsA={[
                  'B.S. in Computer Science:',
                  'Faculty Honors',
                  'Dean\'s List',
                ]}
                listItemsB={[
                  ' Intelligence & HCI Threads',
                  ' maintain a GPA average of 3.0 or above',
                ]}
                sidebar
              /> */}
              <InfoBlock
                sidebar
                title='Georgia Institute of Technology'
                subheader='BS Computer Science, 3.8 GPA'
                setting='Atlanta, GA ● Class of 2019'
                // icon={cvIcon}
                // title='Scene Recognition'
                // subheader='Computer Vision MATLAB Project'
                // setting='Oct 2017 - Dec 2017'
                description={'Relevant Coursework:'}
                // listItemsA={[
                //   'Designed Deep Neural Network ',
                //   'Trained 15 one-vs-all Linear SVMs '
                // ]}
                // listItemsB={[
                //   'B.S. Computer Science, 3.8 GPA',
                //   'Atlanta, GA ● Class of 2019'
                // ]}
                listItemsB={[
                  'Natural Language Processing',
                  'Computer Vision',
                  'Knowledge-Based AI',
                  'Intro to AI',
                  'Robotics & Perception',
                  'Algorithm Design/Analysis',
                  'Info Visualization',
                  'User Interface Design',
                ]}
              />

              {/* <InfoList
                title='Relevant Courses'
                listItemsB={[
                  'Natural Language Processing',
                  'Computer Vision',
                  'Knowledge-Based AI',
                  'Intro to AI',
                  'Robotics & Perception',
                  'Algorithm Design/Analysis',
                  'Info Visualization',
                  'User Interface Design',
                ]}
              /> */}
              {/* <InfoList
                title='Awards'
                listItemsA={[
                  'Faculty Honors',
                  'Dean\'s List',
                ]}
                listItemsB={[
                  ' 4.0 GPA in Fall 2015 & Spring 2016',
                  ' maintain a GPA average of 3.0 or above',
                ]}
                sidebar
              /> */}

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
            <div className='footer'>
              <div className='footer_content'>

              <img src={logo} className='footer_icon' />
              <span>Made With ReactJS</span>
              </div>
            </div>


          </div>
        </Container>

      </div>
    );
  }
}

export default App;
