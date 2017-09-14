import React, { Component } from 'react';
import logo from './logo.svg';
import yIcon from './img/yIcon.png';
import gtIcon from './img/gt5.png';
import rIcon from './img/resurgens_iot.png';
import iIcon from './img/iTrans.png';
import adlIcon from './img/ADL.png';
import hIcon from './img/hackathon.png';
import vipIcon from './img/vip.png';

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
        <Container flexCol>
          <Section title='Education'>
            <InfoBlock
              icon={gtIcon}
              title='Georgia Institute of Technology'
              subheader='B.S. in Computer Science: Intelligence & HCI Threads - 3.83 GPA'
              setting='Atlanta, GA ● Graduating December 2018'
              full
            />
          </Section>
          <Divider />
          <Section title='Experience'>
            <div style={{width: '50%'}}>
              <InfoBlock
                icon={yIcon}
                title='Yahoo: Tripod Project'
                subheader='Tripod Engineering Intern'
                setting='San Francisco, CA ● May 2017 - Present'
                description={'Yahoo\'s platform for commoditized photo & video storage, serving, enrichment, aggregation, & search'}
                listItemsA={[
                  'Improved image search parsing accuracy',
                  'Built Tripod Map & Image Viewer UI'
                ]}
                listItemsB={[
                  ' by broadening search metrics & testing query processing algorithm',
                  ' in React.js to help visualize EXIF-metadata/geodata & reusable React component internal library'
                ]}
                link={'https://yahooeng.tumblr.com/post/157200523046/introducing-tripod-flickrs-backend-refactored'}
              />
              <InfoBlock
                icon={adlIcon}
                title='Aron Developers'
                subheader='Full Stack Rails Developer Intern'
                setting='Los Altos, CA ● May 2016 - August 2016'
                description='Real estate developer which focuses on building smart, luxury homes in San Francisco Bay Area'
                listItemsB={[
                  ' of net interest on mortgages taken for all unsold properties/ construction sites.',
                  ' tables for Loans database',
                ]}
                listItemsA={[
                  'Built a realtime Ruby on Rails data visualization',
                  'Designed and Implemented SQL'
                ]}
                link={'https://www.arondevelopers.com/'}
              />
              <InfoBlock
                icon={hIcon}
                title='Coursework'
                subheader='College of Computing Student'
                setting='Atlanta, GA ● August 2015 - Present'
                listItemsB={[
                  ' - CS4635',
                  ' - CS4641',
                  ' - CS3600',
                  ' - CS3630',
                  ' - CS3750',
                  ' - CS3510',
                ]}
                listItemsA={[
                  'Knowledge-Based AI',
                  'Computer Vision',
                  'Intro to AI',
                  'Robotics & Perception',
                  'User Interface Design',
                  'Algorithm Design/Analysis'
                ]}
              />
              
            </div>
            <div style={{ width: '50%' }}>
              <InfoBlock
                icon={vipIcon}
                title='Smart City Infrastructure'
                subheader='Computer Vision Engineer'
                setting='Atlanta, GA ● August 2017 - present'
                description='Working under Dr. James Tsai , Dr. Tony Yezzi to develop smart city infrastructure health condition monitoring, detection and diagnosis with the use of emerging technologies'
                listItemsA={[
                  'Developing vehicle detection, categorization, and tracking',
                ]}
                listItemsB={[
                  ' system to gather data about traffic flow and behavior patterns using static and dashboard footage',
                ]}
                link={'http://www.vip.gatech.edu/teams/smart-city-infrastructure'}
              />
              <InfoBlock
                icon={rIcon}
                title='Project Resurgens'
                subheader='AHNA AI/IOT Developer'
                setting='Atlanta, GA ● May 2016 - August 2017'
                description='Georgia Tech’s Smart Solar Home & Internet of Things project emphasizing self-sustenance/net zero energy/carbon footprint'
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
              <InfoBlock
                icon={iIcon}
                title='iTrans'
                subheader='Android Developer'
                setting='Atlanta, GA ● January 2016 - May 2016'
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
            />
            <InfoList
              title='Libraries'
              listItemsB={[
                'SKLearn',
                'OpenCV',
                'React/Redux',
                'ImmutableJS',
                'LeafletJS',
                'Android SDK',
              ]}
            />
            <InfoList
              title='Dev Tools'
              listItemsB={[
                'Jira',
                'Designs & Mockups (Sketch)',
                'Splunk',
                'Git/GitHub Workflow',
                'Linux/RHL (SSH)',
                'Enterprise Slack/Hipchat',
              ]}
            />

            
            
            

          </Section>
          <Divider />
          <Section title='Interests'>
            
            <InfoList
              title='Activities'
              listItemsA={[
                'GT Qurbani',
                'Tennis',
                'Recreational',
                'Musician',
               
              ]}
              listItemsB={[
                ' - All-Male Nationally Competitive Collegiate Bollywood Fusion Dance Team',
                ' - Competed in the USTA Men\'s Singles Circuit',
                ' - Collegiate Intramurral Ultimate Frisbee, Hiking, Rock Climbing, Camping',
                ' - Played Piano for 8 Years & Recorded Covers',
              ]}
            />
            <InfoList
              title='Awards'
              listItemsA={[
                'Faculty Honors 2015, 2016',
                'Dean\'s List',
                '2nd',
                '1st',
              ]}
              listItemsB={[
                ' - 4.0 GPA in most recent semester',
                ' - GPA avg of 3.0 or higher',
                ' - Cal Berkeley National Speech Invitational (117 competitors)',
                ' - University of Pacific Jon Schamber Speech Invitational',
              ]}
            />
         
            

          </Section>
          <div className='footer'>
            <img src={logo} className='footer_icon' />
            Made with React
          </div>
        </Container>

      </div>
    );
  }
}

export default App;
