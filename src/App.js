import React, { Component } from 'react';
import logo from './logo.svg';
import yIcon from './img/yIcon.png';
import gtIcon from './img/gt5.png';
import rIcon from './img/resurgens_iot.png';
import iIcon from './img/iTrans.png';
import adlIcon from './img/ADL.png';
import hIcon from './img/hackathon.png';

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
        <Header />
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
                description='Yahoos platform for commoditizes photo and video storage, serving, enrichment, aggregation, and search'
                listItemsB={[
                  ' to better validate search query parsing accuracy for improved image search',
                  ' in React.js to elegantly visualize variably provided EXIF-metadata/ geodata'
                ]}
                listItemsA={[
                  'Refined Tripod Gallery Search Metrics',
                  'Built Tripod Image Viewer UI'
                ]}
              />
              <InfoBlock
                icon={adlIcon}
                title='Aron Developers'
                subheader='Full Stack Rails Developer Intern'
                setting='Los Altos, CA ● May 2016 - August 2016'
                description='Real estate developer which focuses on building luxury homes in San Francisco Bay Area'
                listItemsB={[
                  ' of accumulated interest on mortgages taken for all unsold properties/ construction sites.',
                ]}
                listItemsA={[
                  'Built a realtime RoR data visualization'
                ]}
              />
              <InfoBlock
                icon={hIcon}
                title='Hackathons'
                subheader='Student Competitor'
                setting='PennApps 2015 ● HackGT 2014, 2015'
                listItemsB={[
                  ' of shopped goods by charging digital wallet upon leaving the store',
                  ' for flight attendants and passengers via React WebApp',
                ]}
                listItemsA={[
                  'Automated customer\'s purchase',
                  'Streamlined in-flight customer service'
                ]}
              />
            </div>
            <div style={{ width: '50%' }}>
              <InfoBlock
                icon={rIcon}
                title='Project Resurgens'
                subheader='AHNA AI/IOT Developer'
                setting='Atlanta, GA ● May 2016 - Present'
                description='Georgia Tech’s Smart Solar Home and Internet of Things project with focus on self-sustenance and net zero energy and carbon footprint'
                listItemsB={[
                  ' using outlet energy consumption data an artifcial neural network',
                  ' that helps users track electricity and water savings/consumption over time',
                ]}
                listItemsA={[
                  'Training a TensorFlow model of electricity consumption',
                  'Building cross-platform React Native App'
                ]}
              />
              <InfoBlock
                icon={iIcon}
                title='iTrans'
                subheader='Android Developer'
                setting='Atlanta, GA ● January 2016 - May 2016'
                description='Faculty research on optimizing campus transportation systems and developing a forecasting, computation, and communication system to improve bus circulation'
                listItemsB={[
                  ' to enable automatic announcements of bus stop names and broadcast useful information such as route changes, upcoming cancellations and weather forecasts',
                ]}
                listItemsA={[
                  'Utilized Android TextToSpeech engine'
                ]}
              />
            </div>
          </Section>
          <Divider />
          <Section title='Technical'>
            <InfoList
              title='Languages'
              listItemsB={[
                'Java',
                'Python',
                'JavaScript',
                'Ruby on Rails',
                'HTML/CSS'
              ]}
            />
            <InfoList
              title='Open Source'
              listItemsB={[
                'React',
                'OpenCV',
                'Android SDK',
                'JQuery',
                'SQL Databases'
              ]}
            />
            <InfoList
              title='Coursework'
              listItemsA={[
                'CS3600',
                'CS3630',
                'CS3750',
                'CS1332',
                'CS2340'
              ]}
              listItemsB={[
                ' - Intro to AI',
                ' - Robotics and Perception',
                ' - User Interface Design',
                ' - Data Struct/ Algorithms',
                ' - Objects and Design'
              ]}
            />
          </Section>
          <Divider />
          <Section title='Awards'>
            <InfoList
              title='Academic'
              listItemsA={[
                'Faculty Honors 2015, 2016',
                'Dean\'s List'
              ]}
              listItemsB={[' - 4.0 GPA in most recent semester',
                ' - GPA avg of 3.0 or higher',
              ]}
            />
            <InfoList
              title='Speech and Debate'
              listItemsA={[
                '2nd',
                '1st',
              ]}
              listItemsB={[
                ' - Cal Berkeley National Invitational (117 competitors)',
                ' - University of Pacific Jon Schamber Invitational',
              ]}
            />

            <InfoList
              title='_'
              listItemsA={[
                '3rd',
                '1st'
              ]}
              listItemsB={[
                ' - 3P National Tournament',
                ' - Santa Clara University Dempsey Cronin Invitational'
              ]}
            />

          </Section>
          <Divider />
          <Section title='Skills & Interests'>
            <InfoList
              title='Skills'
              listItemsB={[
                'Agile/Scrum Development',
                'Graphic Design',
                'Public Speaking',
                'Digital Art and Media'
              ]}
            />
            <InfoList
              title='Extracurriculars'
              listItemsA={[
                'GT Qurbani',
                'Tennis'
              ]}
              listItemsB={[
                ' - All-Male Competitive Bollywood Fusion Dance Team',
                ' - Competed in the USTA Men\'s Singles Circuit',
              ]}
            />
            <InfoList
              title='Hobbies'
              listItemsA={[
                'Recreational Activites',
                'Musician'
              ]}
              listItemsB={[
                ' - College Intramurral Ultimate Frisbee, Hiking, Rock Climbing, Camping',
                ' - Played Piano for 8 Years and Recorded Covers',
              ]}
            />

          </Section>
        </Container>

      </div>
    );
  }
}

export default App;
