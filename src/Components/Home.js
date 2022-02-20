import React from 'react'
import './Home.css'
import Himg from '../Imgs/Videobg.png'
import VideoPlayer from 'react-video-js-player';
import Car from '../Videos/vdo.mp4'
import I1 from '../Imgs/s1.jpg'
import Arrow from '../Imgs/aro.png'
import si1 from '../Imgs/s1.jpg'
import si2 from '../Imgs/s2.jpg'
import si3 from '../Imgs/s3.jpg'
// import si4 from '../Imgs/s4.jpg'
// import si5 from '../Imgs/s5.jpg'



export default function Home() {


    // <!-- Initialize Swiper -->


    return (
        <>

            <div className='container-fluid homeFluid' >

                <div className=" container home ">

                    <VideoPlayer src={Car} poster={Himg} width='900px' className='vid '  >
                    </VideoPlayer>
                    <h1 className='text-center text-white display-3'>WELCOME TO THE DOGE POUND</h1>


                    <br /><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <p className='text-white '>The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you creative and commercial rights, as well as inclusion in the community.</p>
                            </div>
                            <div className="col-sm">





                             










                                {/* <img src={si2} className="img-fluid align-center " width='250px' alt="..."></img> */}
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    {/* <div className="container"> */}
                    <div className="row">
                        <div className="col">
                            <img src={I1} className="img-fluid  " width='250px' alt="..."></img>
                        </div>
                        <div className="col">
                            <p className='text-white '>The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you creative and commercial rights, as well as inclusion in the community.</p>
                        </div>
                    </div>
                    {/* </div> */}
                    <br /><br />

                    <div className='container'>
                        <h1 className='text-center text-white display-3'>ROADMAP</h1><br />
                        <p className='text-white' >The Doge Pound is a full time project for us now and it will continue to be after the public sale. Below is what we're working towards in the
                            <br /> short term. Each milestone unlocks when a certain % of doges have been minted. Future developments will be decided and voted upon by the <br />community.</p>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-2 Rcol-1">
                                <div className='rdmp'>
                                    <p className='mpc text-white' >20%</p>
                                    <image className='text-center' src={Arrow} ></image>
                                </div>
                            </div>
                            <div className="col-10 text-white border-bottom Rcol-2 ">
                                <p ><del>Some of Doge NFTs will be airdropped to our early adopters and fanbase <br />
                                    We ramp up our Discord and social media management, which will include a pack of community managers and moderators to bring our Doge community to the moon 🌙
                                </del></p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row     ">
                            <div className="col-2 Rcol-1">
                                <div className='rdmp'>
                                    <p className='mpc text-white' >50%</p>
                                    <image className='text-center' src={Arrow} ></image>
                                </div>
                            </div>
                            <div className="col-10 text-white border-bottom Rcol-2 ">
                                <p ><del>$20,000 donation fund will be established and with the help of the community we will decide on a charity who is a good partner for our project. With the project we want to bring together a community of doge and dog lovers 🐶</del></p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-2 Rcol-1">
                                <div className='rdmp'>
                                    <p className='mpc text-white' >70%</p>
                                    <image className='text-center' src={Arrow} ></image>
                                </div>
                            </div>
                            <div className="col-10 text-white border-bottom Rcol-2 ">
                                <p ><del>An exclusive The Doge Pound merch line will drop. This will be hats, Tshirts, and most importantly apparel for your dogs! We already have several designs done and ready to go!
                                </del></p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-2 Rcol-1">
                                <div className='rdmp'>
                                    <p className='mpc text-white' >90%</p>
                                    <image className='text-center' src={Arrow} ></image>
                                </div>
                            </div>
                            <div className="col-10 text-white border-bottom Rcol-2 ">
                                <p ><del>Community grant fund of $30,000 is launched. Create, design, develop, or build something that the community values (e.g. extra utility for the doges, additional art, memes, etc.) and receive funding from The Doge Pound team. In addition to this 2.5% of the OpenSea fees will go into the community grant forever! Building out the longevity and community is our #1 priority.
                                </del></p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-2 Rcol-1">
                                <div className='rdmp'>
                                    <p className='mpc text-white' >100%</p>
                                    <image className='text-center' src={Arrow} ></image>
                                </div>
                            </div>
                            <div className="col-10 text-white border-bottom Rcol-2 ">
                                <p >We will establish a liquidity pool and seed it in order to help stabilize the price of the doge NFTs/token. The plan is to launch this 2-3 days after launch and buy up a handful of doges at floor price.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-2 Rcol-1">
                                <div className='rdmp text-center'>
                                    <image className=' text-white h1  roc' ><i class="fas fa-rocket"></i></image>
                                    <image className='text-center' src={Arrow} ></image>
                                </div>
                            </div>
                            <div className="col-10 text-white border-bottom Rcol-2 ">
                                <p >🚀🚀 Already in the works 🚀🚀<br />
                                    We will make Doges ready for MetaVerse / 3D. (We will leak some previews of this as we’ve secretly been working on this for a while)</p><br />
                                <p><del>Companion NFT will be dropped. (Every doge lover that is holding a doge down the road will get a companion NFT for free)</del></p><br />
                                <p>The rest of the fate of this project will be determined by YOU, the community! Together, we plan to make this an ultra strong, fun loving, community! Let’s kick some butt! 🐶<br />
                                    Finally, there is a lot being discussed about potential partnerships and future developments of the project. Our focus for the time being is having a super smooth launch and delivering on everything listed above. We don’t think it is fair to over hype things for now that aren’t set in stone.</p>
                            </div>
                        </div>
                    </div>

                    <br /><br /><br />

                    <div className='container'>
                        <h1 className='text-center text-white display-3'>RANKING TOOL</h1><br /><br />
                        <p className='text-white' >Here are some helpful tools created by The Doge Pound community. Please note that these are unofficial in nature. Every assignment of an doge's overall value or rarity is inherently subjective.
                        </p>


                        <div className="container w-50">
                            <div className="row ">
                                <div className="col-sm">
                                    <button type="button" class="text-white btn btna font-weight-bold">Primary</button>
                                </div>
                                <div className="col-sm">
                                    <button type="button" class="text-white btn btna"> <strong>Primary</strong> </button>
                                </div>
                                <div className="col-sm">
                                    <button type="button" class="text-white btn btna">Primary</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

