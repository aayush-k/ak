import React, { Component } from 'react';
import logo from './img/logo.png';
import yIcon from './img/yIcon.png';
import gIcon from './img/grail2.png';
import aIcon from './img/amzn.png';
import gtLogo from './img/gtlogo.png';
import belo from './img/belo.png';
import rpmIcon from './img/rpm.png';
import cvIcon from './img/cv.png';
import fhIcon from './img/frameHuntBlack.png';
import fIcon from './img/fb.png';
import ptIcon from './img/DPTree.png';
// import faceIcon from './img/face-detect.svg';

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
        <Header />
        <Container>
          <div className='main_content' >
            <Section title='Experience'>
              <div className='grouping_row'>
                <InfoBlock
                  icon={gIcon}
                  title='Grail Bio'
                  subheader='Senior Fullstack Software Engineer'
                  setting='Menlo Park, CA ● July 2020 - Present'
                  description="Built lab software foundational to the commercial launch of Galleri, GRAIL's Multi Cancer early detection test"
                  listItemsA={[
                    'Designed & built a GraphQL Schema Registry Service',
                    'Coordinated a team of 3 Staff/Senior Frontend engineers',
                    'Led biweekly crossfunctional company-wide UI/UX meetings,',
                  ]}
                  listItemsB={[
                    ' to facilitate API development & improve uptime of Apollo Federation across all GraphQL enabled microservices',
                    ' in developing the Lab UI used by lab operators to manage Galleri orders',
                    ' driving discussions of frontend infrastructure best practices, typescript type safety, reusable form libraries & data flow patterns',
                  ]}
                  link={'https://grail.com/our-products/'}
                />

                <InfoBlock
                  icon={belo}
                  title='Airbnb PDP'
                  subheader='Fullstack Software Engineer'
                  setting='San Francisco, CA ● July 2019 - July 2020'
                  description='Optimized UX of Listing Product Detail Page (PDP) to increase bookings on Airbnb via feature-driven A/B Testing & maintenance'
                  // TODO: add languages in descriptions
                  listItemsA={[
                    'Increased bookings by 1.3% globally',
                    'Coordinated PDP Team\'s Covid-19 Response',
                    'Refactored/redesigned various reusable PDP components,',

                  ]}
                  listItemsB={[
                    ' by surfacing dynamic messages tailored to user-inputed trip details & improved the ranking mechanism of such messages to support nontrivial product specs',
                    // by designing & implementing a new feature, dynamically informative messaging tailored to user-inputted trip details, across multiple backend services & web clients,
                    // dynamically featured content tailored to user-inputted trip details
                    // coordinating a tailored feature,
                    // architecting improved ranking logic
                    // verified by an A / B experimentation
                    ' and led cross platform projects across 3 eng teams to address evolving features',
                    ' such as a module for booking mechanisms & a cross-browser compatible carousel component, to be more performant, maintainable, & robust',
                  ]}
                  link={'https://next.airbnb.com/rooms/2736358?force_bingo=treatment'}
                />


              </div>
              <div className='grouping_row'>
                <InfoBlock
                  icon={fIcon}
                  title='Facebook Messenger'
                  subheader='ML Engineering Intern '
                  setting={'Seattle, WA ● May 2018 - Aug 2018'}
                  description={'Messenger Assistant Natural Language Generation Team'}
                  listItemsA={[
                    'Deployed e2e Neural Natural Language Generation pipeline',
                    'Developed heuristic-automated data collection scripts',
                  ]}
                  listItemsB={[
                    ' into the assistant stack using context-aware decoder LSTMs',
                    ' & establishing guidelines for remote human-annotation teams',
                  ]}
                  link={'https://developers.facebook.com/videos/f8-2018/using-natural-language-processing-to-enhance-your-messenger-conversations/'}
                />
                <InfoBlock
                  icon={aIcon}
                  title='Amazon Alexa'
                  subheader='Backend Engineering Intern'
                  setting='Cambridge, MA ● Aug 2018 - Dec 2018'
                  description='Alexa Entity Resolution & Search/Accuracy Team'
                  listItemsA={[
                    'Automated management of entity resolution configs',
                    'Leveraged DynamoDB & Distributed Job Scheduling'
                  ]}
                  listItemsB={[
                    ' using realtime accuracy & latency metrics to revert faulty changes',
                    ' to regularly monitor metrics for executing or suggesting rollbacks as needed'
                  ]}
                  link={'https://developer.amazon.com/blogs/alexa/post/5de2b24d-d932-4c6f-950d-d09d8ffdf4d4/entity-resolution-and-slot-validation'}
                />
              </div>
              <div className='grouping_row'>

                <InfoBlock
                  icon={yIcon}
                  title='Yahoo Tripod'
                  subheader='Frontend Engineering Intern'
                  setting={'San Francisco, CA ● May 2017 - Aug 2017'}
                  description={'Tripod: Yahoo\'s platform for commoditized photo & video storage, serving, enrichment, aggregation, & search'}
                  listItemsA={[
                    'Built Tripod Map/Image Viewer UI',
                    'Improved image search parsing accuracy',
                  ]}
                  listItemsB={[
                    ' with ReactJS & Mapbox Supercluster to visualize EXIF-metadata/geodata for user photos',
                    ' by implementing search metrics & analyzing query processing algorithm',
                  ]}
                  link={'https://yahooeng.tumblr.com/post/157200523046/introducing-tripod-flickrs-backend-refactored'}
                />
                <InfoBlock
                  icon={gtLogo}
                  title={'E-Textile Hacking'}
                  subheader='iOS Software Engineer'
                  setting='Atlanta, GA ● Jan 2019 - May 2019'
                  description={'Repurposing, expanding, & exposing a public API for the Levi’s/Google Jacquard Collaboration'}
                  listItemsA={[
                    // 'Developed iOS cocoapods toolkit', // building a developer friendly iOS toolkit for easily interfacing with the Jacquard technology
                    'Introduced new gestures using CoreML',
                    'First author on publication in the London ISWC’19 Conference'
                  ]}
                  listItemsB={[
                    // ' for developers to easily interface with Google Jacquard technology and customize user input behavior',
                    ' that leverage the ability to discern variable applied pressure as a second dimension for user input',
                    ' that outlines the accuracy/intuitiveness of existing & novel Jacquard e-textile gestures (https://dl.acm.org/doi/10.1145/3341163.3347721)'
                  ]}
                  link={'https://medium.com/e-textile-hacking/visualizing-augmenting-jacquards-gesture-catalog-ff0ef4484048'}
                />
              </div>
            </Section>

            <Divider />


            <Section title='Personal Projects'>
              <div className='grouping_row'>
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
                <InfoBlock
                  icon={ptIcon}
                  title='Dependency Parsing'
                  subheader='Natural Language Jupyter Notebooks'
                  setting='Mar 2018 - Apr 2018'
                  description='Created a deep transition dependency parser in PyTorch with 93.6% (English) & 94.8% (Norwegian) dev accuracies'
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
                {/* <InfoBlock
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
                /> */}
              </div>
              <div className='grouping_row'>
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
          </div>
          <div className='vertical_divider' />
          <div className='sidebar' >
            <Section title='Skills'>
              <InfoList
                title='Languages'
                listItemsB={[
                  'Typescript/JavaScript',
                  'Java',
                  'Python',
                  'Golang',
                  'Thrift',
                  'Matlab',
                  'Hack/PHP',
                ]}
              />
              <InfoList
                title='Libraries'
                listItemsB={[
                  'ReactJS/Redux',
                  'GraphQL/Apollo Tooling',
                  'StorybookJS/Happo',
                  'PyTorch',
                  // 'Tensorflow',
                  // 'SKLearn/OpenCV',
                  'Formik',
                  'iOS/Android SDK (Limited Working Proficiency)',
                ]}
              />
              <InfoList
                title='Dev Tools'
                listItemsB={[
                  'Git/Github Integrations',
                  'Buildkite',
                  'Phabricator',
                  'Jira',
                  'Datadog/Splunk',
                  'Terraform',
                  'Linux/RHEL',
                  'Designs/Mockups (Figma, Sketch)',
                ]}
              />

            </Section>
            <Divider />
            <Section title='Education'>
              <InfoBlock
                sidebar
                title='Georgia Institute of Technology'
                subheader='BS Computer Science, 3.8 GPA'
                setting='Atlanta, GA ● Class of 2019'
                description={'Relevant Coursework:'}
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
                fullWidth
              />
            </Section>
            <Divider />
            <Section title='Volunteering'>
              <InfoBlock
                sidebar
                title='Microsoft Teals'
                subheader='Intro to Python Teacher'
                setting="San Francisco, CA ● Spring 2020"
                description={'Taught introductory programming concepts in python to 61 students at El Camino High School'}
                fullWidth
              />
            </Section>
            <div className='footer'>
              <div className='footer_content'>

                <img src={logo} className='footer_icon' />
                <span className='footer_text'>Made With ReactJS</span>
              </div>
            </div>


          </div>
        </Container>

      </div>
    );
  }
}

export default App;
