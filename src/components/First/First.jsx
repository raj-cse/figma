import React from 'react'
import './First.css'
export default function First() {
    return (
        <div className='f-container'>
            <div className='b-box'>
                <h1>Features of Eco Connect Hub</h1>
                <p>Explore the tools and resources that empower collaboration</p>
            </div>
            <div className='s-box'>
                <div className='heading'>
                    <h1>KEY FEATURES :</h1>
                    <h5>Brief overview of what Eco Connect Hub offers</h5>
                </div>
                <div className='i-box'>
                    <div className='dibas'>
                        <div className='diba'><span>Resource sharing</span></div>
                        <div className='diba'><span>Project Management</span></div>
                        <div className='diba'><span>Community Building</span></div>
                    </div>
                    <div className='box'>
                        <div className='diba'><span>Communication Tools</span></div>
                        <div className='diba'><span>Analytics & Reporting</span></div>
                    </div>
                </div>

            </div>

        </div>
    )
}
