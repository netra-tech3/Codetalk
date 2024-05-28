import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {



    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)



    return (
        <div className='main'>
            <div className='nav'>
           
               <h2>  <img src={assets.user_icon} alt='' />Codex</h2>
                

            </div>

            <div className='main-container'>

                {!showResult
                    ? <>
                        <div className='greet'>
                            <p><span>Hello ,Dev</span></p>
                            <p>How can i help you today</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Briefly summarize this concept :cross-cumminication in software industry</p>
                                <img src={assets.compass_icon} alt='' />

                            </div>
                            <div className='card'>
                                <p>The future of cricket in the world</p>
                                <img  src={assets.bulb_icon} alt='' />

                            </div>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.message_icon} alt='' />

                            </div>
                            <div className='card'>
                                <p>Give me the code of a factorial of  number</p>
                                <img src={assets.code_icon} alt='' />

                            </div>
                        </div>


                    </>
                    : <div className='result'>
                        <div className='result-title'>

                            <img src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt='' />
                            {
                                loading ?
                                <div className='loader'>
                                      <hr />
                                      <hr />
                                      <hr />

                                </div>
                                :
                                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                          
                        </div>
                    </div>

                }

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>

                           

                            <img src={assets.mic_icon} alt='' />

                           {input? <img onClick={() => onSent()} src={assets.send_icon} alt='' />:null}
                        </div>


                    </div>
                    <p className='bottom-info'>
                        This gemini clone can display inaccurate information , so double check the response generated
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main
