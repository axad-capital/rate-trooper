import React from 'react';
import './homeComp.css';
import BlueCar from './blue-car.png'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DifferenceIcon from '@mui/icons-material/Difference';
import ChatIcon from '@mui/icons-material/Chat';
import WhoCar from './how-it-work.png'

const HomeComp = () => {

    function handleFormSubmit() {
        let zip = document.getElementById('trooper-id').value
        console.log(zip);
    }

    return (
        <div>
            <div className="header-container">
                <div className='header-info'>
                    <h1>Get A Quote And Cut Down Your Auto Insurance Rates</h1>
                    <p>Start requesting your personalized car insurance quotes in just minutes. We will match you with insurers that best fit your needs and budget.</p>
                    <div className='trooper-input-container'>
                        <label htmlFor="trooper-zip">Enter Your Zipcode</label>
                        <input id='trooper-zip' name='trooper-zip' type="text" placeholder='Zipcode' />
                        <button className='form-btn' onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
                <div className='header-img'>
                    <img className='blue-car' src={BlueCar} alt="blue car" />
                </div>
            </div>

            <div className='get-your-quote'>
                <div className='line'></div>
                <br />
                <h1>Get Your Auto Quote Today</h1>
                <p>Join with over hundreds of customers in your area who already saved big</p>
                <br />
                <div className='line'></div>
            </div>

            <div id="how-it-works-container">
                <h1 className='how-it-works-title'>How It Works</h1>
                <br />
                <div className='how-it-works-info'>
                    <div>
                        <DirectionsCarIcon className='bigger' />
                        <h2>Construct Your Profile</h2>
                        <p>Build your profile by telling us a little about yourself and your car.</p>
                    </div>
                    <div>
                        <DifferenceIcon className='bigger' />
                        <h2>Compare Insurance Providers</h2>
                        <p>While not all insurers show prices, we filter down to the most relevant options based on your profile.</p>
                    </div>
                    <div>
                        <ChatIcon className='bigger' />
                        <h2>Connect With Licensed Agents</h2>
                        <p>Either connect online or over the phone to compare quotes and maximize your savings.</p>
                    </div>
                </div>
            </div>

            <div id="about-us">
                <div className='about-us-container'>
                    <div>
                        <h1>Who We Are</h1>
                        <br />
                        <h3>We help people understand their options when it comes to auto insurance and find the right coverage for them. Insurance policies are confusing, so our team of experts has worked with carriers and agencies in order to better inform consumers about what they need. Whether you are looking for full coverage, collision only protection or state minimums - we can help find the right policy for you in no time!</h3>
                        <br />
                        <div className='trooper-input-container'>
                            <label htmlFor="trooper-zip">Enter Your Zipcode</label>
                            <input id='trooper-zip' name='trooper-zip' type="text" placeholder='Zipcode' />
                            <button className='form-btn' onClick={handleFormSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className='who-car-container'>
                        <img className='who-car' src={WhoCar} alt="who-car" />
                    </div>
                </div>
            </div>

            <div className="why-choose-us">
                <div className="why-choose-us-title">
                    <h1>Why Choose Us</h1>
                    <p>Multiple reasons why you should choose us over other online providers</p>
                </div>
                <div className='why-choose-us-container'>
                    <div>
                        <h3>We're Autonomous</h3>
                        <p>As we are not affiliated with any of the insurance carriers we present, our only mission is to provide you with an unbiased selection of the most relevant and affordable options.</p>
                    </div>
                    <div>
                        <h3>We're Efficient</h3>
                        <p>Forget about the time-wasting ordeals of the past, with long forms and endless questions. Getting insurance through the Pretected system is faster than you can get yourself into trouble.</p>
                    </div>
                </div>
                <div className='why-choose-us-container'>
                    <div>
                        <h3>We're Secure</h3>
                        <p>We go to great lengths to make sure that all the information you provide us is safe and private behind the most sophisticated encryption software. Because your privacy is our concern.</p>
                    </div>
                    <div>
                        <h3>We're Experienced</h3>
                        <p>Connecting thousands of Americans to their right policies on a daily basis. That is all we do. We give you the right information to help you make the right choices. It works.</p>
                    </div>
                </div>
            </div>

            <div className="learn">
                <h2>Learn How Much You Can Save</h2>
                <p>Join with over hundreds of customers in your area who already saved big</p>
            </div>

            <div className='rate-foot'>
                <h1>Rate Trooper</h1>
                <p>When you submit your details you will be shown links from insurance providers. We do not offer advice or offer or sell any insurance products shown on this site. We are not liable for any dealings you may have or advice you may or may not receive from these third parties, for their products or for information on their websites.</p>
            </div>

        </div>
    )
}

export default HomeComp