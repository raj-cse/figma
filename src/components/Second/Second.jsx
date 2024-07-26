import React, { useState } from 'react';
import './Second.css';

export default function Second() {
  const [selectedContent, setSelectedContent] = useState('Resource Sharing');

  const contentMap = {
    'Resource Sharing': {
      title: 'Resource Sharing',
      subtitle: 'Explanation of resource sharing capabilities',
      items: [
        'Document storage and management',
        'Secure file sharing',
        'Access control'
      ]
    },
    'Project Management': {
      title: 'Project Management',
      subtitle: 'Explanation of project management features',
      items: [
        'Task assignment',
        'Progress tracking',
        'Collaboration boards'
      ]
    },
    'Community Building': {
      title: 'Community Building',
      subtitle: 'Explanation of community building features',
      items: [
        'Member directories',
        'Group creation',
        'Event planning'
      ]
    },
    'Communication Tools': {
      title: 'Communication Tools',
      subtitle: 'Explanation of communication tools',
      items: [
        'Real-time messaging',
        'Video conferencing',
        'Discussion forums'
      ]
    },
    'Analytics & Reporting': {
      title: 'Analytics & Reporting',
      subtitle: 'Explanation of analytics and reporting tools',
      items: [
        'Data visualization',
        'Performance metrics',
        'Custom reports'
      ]
    }
  };

  return (
    <div className='parent'>
      <div className='s-container'>
        <div className='two'>
          {Object.keys(contentMap).map((key) => (
            <button key={key} onClick={() => setSelectedContent(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className='three'>
          <div className='head'>
            <h1>{contentMap[selectedContent].title}</h1>
            <h5>{contentMap[selectedContent].subtitle}</h5>
          </div>
          <div className='bold'>
            <ul>
              {contentMap[selectedContent].items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
