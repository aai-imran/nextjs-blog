import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home> 
    <head>
        <title>Mohd Imran Zafar</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="shortcut icon" href="https://profiles.uplers.com/frontend/template1/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="https://profiles.uplers.com/frontend/template1/images/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
        <!--css styles starts-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="https://profiles.uplers.com/frontend/template5/style.css">
        <link rel="stylesheet" type="text/css" href="https://profiles.uplers.com/frontend/common.css">
        <!--css styles ends-->
    </head>
    <body>
        <div class="wrapper">
            <div class="profileTalent-pg">
                <!-- Banner START -->
                <section class="banner">
                    <div class="banner-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="userPhoto">
                                        <figure>
                                                                                        <img  src="https://profiles.uplers.com/img/portfolio-profile/Y5W4YD7Xaj4Kt55wEcWWsnCnitMrM7hzfENtAONP.jpg" class="">
                                        </figure>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="userInfo">
                                        <h1>Mohd Imran Zafar</h1>
                                        <h2 style="color:white"><span>&#9993;</span> izafar22@gmail.com</h2>
                                        <h3 style="color:white"><span>&#9990;</span>  7982237681</h3>
                                        <div class="post">Senior Software Developer (Full Stack)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            </div>
                    <div class="banner-bottom">
                        <div class="container">
                            <div class="userSub-info">
                                <ul>
                                                                            <li>Origin <strong>India</strong></li>
                                                                                                                <li>Experience <strong>9+ Years</strong></li>
                                                                                                                <li>Availability <strong>Full-Time</strong></li>
                                    
                                    
                                </ul>
                            </div>
                        </div> 
                    </div>
                </section>
                <!-- Banner START -->

                <!-- Expertise START -->
                <section class="app-tools dark-mob-bg">
                    <div class="container">
                        <div class="row">
                                                        <div class="col-sm-4 leftPart mob-Mode interests animated-highlight" id="interests">
                                <div class="mob-title">
                                    <h3 class="left-title">Interests</h3>
                                </div>
                                <div class="mob-content">
                                                                            <div class="cer-iconBox intBox">
                                            <figure><?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="58.8px" height="56px" viewBox="0 0 58.8 56" style="enable-background:new 0 0 58.8 56;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#7A7A7A;stroke-width:1.2;stroke-miterlimit:10;}
</style>
<g id="XMLID_6576_">
	<circle id="XMLID_6584_" class="st0" cx="25.1" cy="24.7" r="23.5"/>
	<circle id="XMLID_6583_" class="st0" cx="25.1" cy="9.9" r="4.9"/>
	<circle id="XMLID_6582_" class="st0" cx="10.2" cy="22.3" r="4.9"/>
	<circle id="XMLID_6581_" class="st0" cx="39.9" cy="22.3" r="4.9"/>
	<circle id="XMLID_6580_" class="st0" cx="33.7" cy="37.1" r="4.9"/>
	<circle id="XMLID_6579_" class="st0" cx="16.4" cy="37.1" r="4.9"/>
	<circle id="XMLID_6578_" class="st0" cx="25.1" cy="24.7" r="2.5"/>
	<path id="XMLID_6577_" class="st0" d="M25.1,1.2h8.7c13,0,23.5,10.5,23.5,23.5S46.7,48.3,33.7,48.3h-8.7c0,0,11.4-0.2,16.1,2.5
		c4.7,2.7,9.5,4.9,16.1,3.7"/>
</g>
</svg></figure>
                                            <h5>Watching Movies</h5>
                                        </div>
                                                                            <div class="cer-iconBox intBox">
                                            <figure><?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="82.9px" height="54.4px" viewBox="0 0 82.9 54.4" style="enable-background:new 0 0 82.9 54.4;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#7A7A7A;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#7A7A7A;stroke-miterlimit:10;}
</style>
<g>
	<rect x="0.5" y="0.5" class="st0" width="81.9" height="48"/>
	<path class="st1" d="M19.4,34.3c8.5-9.8-8.7-9.5,1.8-19.6"/>
	<path class="st1" d="M29.2,34.3c8.5-9.8-8.7-9.5,1.8-19.6"/>
	<path class="st1" d="M39,34.3c8.5-9.8-8.7-9.5,1.8-19.6"/>
	<circle class="st1" cx="69.9" cy="34.3" r="5.3"/>
	<circle class="st1" cx="69.9" cy="16.5" r="5.3"/>
	<line class="st1" x1="2.3" y1="53.9" x2="14.7" y2="53.9"/>
	<line class="st1" x1="68.1" y1="53.9" x2="80.6" y2="53.9"/>
	<line class="st1" x1="57.4" y1="0.5" x2="57.4" y2="48.5"/>
</g>
</svg>
</figure>
                                            <h5>Cooking</h5>
                                        </div>
                                                                            <div class="cer-iconBox intBox">
                                            <figure><?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="74.2px" height="47.1px" viewBox="0 0 74.2 47.1" style="enable-background:new 0 0 74.2 47.1;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#7A7A7A;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
<g>
	<path class="st0" d="M61.9,19l-23.5,9c-0.8,0.3-1.7,0.3-2.5,0L0.7,14.6c-0.2-0.1-0.2-0.4,0-0.5L35.9,0.7c0.8-0.3,1.7-0.3,2.5,0
		l35.2,13.4c0.2,0.1,0.2,0.3,0,0.4L69.9,16"/>
	<path class="st0" d="M37.8,12.3L65,16.6c1,0.2,1.8,1,1.8,2.1v8.6"/>
	<circle class="st0" cx="66.8" cy="30.8" r="3.3"/>
	<path class="st0" d="M63.6,36.2L62,42.8c-0.2,1,0.5,2,1.6,2H70c1,0,1.8-1,1.6-2l-1.6-6.6"/>
	<path class="st0" d="M16.4,20.6v15.6c0,0,1.1,10.4,20.7,10.4S58,36.2,58,36.2V20.6"/>
</g>
</svg>
</figure>
                                            <h5>Learning</h5>
                                        </div>
                                                                    </div>
                            </div>
                                                        <div class="col-sm-8 rightPart mob-Mode">
                                                                <div class="animated-highlight" id="proficiencies">
                                    <div class="mob-title">
                                        <h3 class="main-title">TECHNICAL PROFICIENCIES</h3>
                                    </div>
                                    <div class="mob-content">
                                        <div class="tools-lists">
                                            <ul>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/1623997778-react JS final.png"></figure>
                                                        <div class="tools-name">React JS</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/QXMH56FHPwYio6FTtfJtg6nYIewtlfyB6XwUQueo.png"></figure>
                                                        <div class="tools-name">HTML</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/1623997779-javascript.png"></figure>
                                                        <div class="tools-name">JavaScript</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/1623997779-node js.png"></figure>
                                                        <div class="tools-name">Node js</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/1623997779-angular.png"></figure>
                                                        <div class="tools-name">Angular</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/2WvfmsOMD493TjW5SNQw02hPyS7iiNWVZEZ2X3aV.png"></figure>
                                                        <div class="tools-name">MongoDB</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/WmxhdJRRK1bEIv28QJdpI2SPwbb7BmW7ya1oG4aI.png"></figure>
                                                        <div class="tools-name">PostgreSQL</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/VFaFfl1kULGK8pyvmbRuwf3STxOBG8fdwe6LaWRO.png"></figure>
                                                        <div class="tools-name">CSS</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/lPgdcL55CRDVJC0ReQO50030iibreGRc8ji6t9iw.png"></figure>
                                                        <div class="tools-name">Springboot</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/ydBtTjU4xGSQsYhevwERz2AwEs8I1VrgRNAUr1Tl.png"></figure>
                                                        <div class="tools-name">RabbitMQ</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/gfoDOmdnCrg5Z2lILFsqAiT4BlqWGawxAWlk5cKs.png"></figure>
                                                        <div class="tools-name">Next JS</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/Sma24PjmPHyWBcfos0QHfmckmG7PpG2j0BRtohux.png"></figure>
                                                        <div class="tools-name">Microservices</div>
                                                    </div>
                                                </li>
                                                                                                <li>
                                                    <div class="item">
                                                        <figure><img src="https://profiles.uplers.com/img/proficiency/SDS3mfETeC9TLFQA5t6CR3mOpWIkNgNCLLh0r4Sm.png"></figure>
                                                        <div class="tools-name">Nginx</div>
                                                    </div>
                                                </li>
                                                                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                                                                            </div>
                        </div>
                    </div>
                </section>
                                <!-- Expertise END -->

                <!-- About section START -->
                <section class="about">
                    <div class="container">
                        <div class="row">
                                                        <div class="col-sm-8 rightPart">
                                                                    <h3 class="main-title">SUMMARY</h3>
                                    <p>Hands-on experience working as a Senior Software Developer (Full Stack) for 9+ years.  Extensive experience in Analysis, Design, Development, Testing, Deployment using various JavaScript technologies.Proficient in application development using Object Oriented Analysis, Design and Programming (OOPS).Experience in documenting various phases of the project including technical, business and functional presentation.</p>
                                                                                                <!-- <div class="keys animated-highlight" id="qualities">
                                    <h4 class="sub-title">KEY QUALITIES</h4>
                                    <ul>
                                                                                    <li>Time Management</li>
                                                                                    <li>Attention to detail</li>
                                                                                    <li>Decision Making</li>
                                                                                    <li>Team Player</li>
                                                                                    <li>Leadership Skills</li>
                                                                                    <li>Commitment</li>
                                                                                    <li>Strong Communication Skills</li>
                                                                            </ul>
                                </div> -->
                                                            </div>
                        </div>
                    </div>
                </section>
                <!-- About section END -->

                <!-- Testimonials START -->
                                <!-- Testimonials END -->

                <!-- Experience section START -->
                <section class="experience">
                    <div class="container ">
                        <div class="row">
                                                        <div class="col-sm-4 leftPart mob-Mode animated-highlight" id="education">
                                <div class="mob-title">
                                    <h3 class="left-title">Education</h3>
                                </div>
                                <div class="mob-content">
                                                                        <div class="commonIcon-box">
                                        <figure><img src="https://profiles.uplers.com/frontend/template5/images/education-icon.svg" alt="Education"></figure>
                                        <h6>2012</h6>
                                        <h5>Bachelor In Computer Science</h5>
                                        <p>Visvesvaraya Technological University, Karnataka/India</p>
                                    </div>
                                                                    </div>
                            </div>
                                                                                    <div class="col-sm-8 rightPart animated-highlight" id="experience">
                                <h3 class="main-title">PROFESSIONAL EXPERIENCE</h3>
                                                                <div class="desc-proBox">
                                    <div class="top-sub-title">(November 2021 to Present)</div>
                                    <h5>Senior Software Engineer at <span class="">Alytsee Technologies</span></h5>
                                    <ul>
                                                                                    <li>At PARO we follow Agile Methodologies. <li>I was the owner of SOW builder
                                                                                        form, which is a scope of work form created by clients to hire experts.</li>
                                                                                        <li>I used react hook form to create this form and designed GraphQl queries in
                                                                                            the backend.</li><li>I worked on the project edit app</li><li> As an egineering task I was to fix the application perfomance.I established
                                                                                        the standard practice of working with react components to resolve the
                                                                                        bottlenecks accross the application.</li>
              <li>Technologies : nodejs,angular,nextjs,serverless,graphql,postgres</li>
                                                                            </ul>
                                </div>
                                                                <div class="desc-proBox">
                                    <div class="top-sub-title">(April 2020 to November 2021)</div>
                                    <h5>Software Engineer at <span class="">Optum Global Solutions</span></h5>
                                    <ul>
                                                                                    <li>Served as subject matter expert on MEAN stack for both clients and internal team members.</li>
<li>we followed software development life cycle.</li>
<li>Writing business logic for the feature called PEP units , I worked on the transition stage of the PEP units.</li>
<li>Lead the defect resolving team to minimize the ever increasing backlogs.</li><li>Designed steps for testing plan to increase the test coverge accross the
    application.</li>
<li>Technologies : nodejs,springboot,rabbitmq,mongodb,angular,react;</li>
                                                                            </ul>
                                </div>
                                                                <div class="desc-proBox">
                                    <div class="top-sub-title">(January 2018 to March 2020)</div>
                                    <h5>Technical Consultant at <span class="">SSA Infosystems PVT Ltd</span></h5>
                                    <ul>
                                                                                    <li>Involved in requirements gathering, analysis, design, 
implementation and testing.
</li><li>Owned and designed the customer
    component for merger and acquisition</li>
                                                                            </ul>
                                </div>
                                                                <div class="desc-proBox">
                                    <div class="top-sub-title">(November 2016 to January 2018)</div>
                                    <h5>Software Engineer at <span class="">Vara United</span></h5>
                                    <ul>
                                                                                    <li>Working on individual modules and completing it in the designated timelines.</li>
                                                                            </ul>
                                </div>
                                                                <div class="desc-proBox">
                                    <div class="top-sub-title">(March 2016 to November 2016)</div>
                                    <h5>Software Engineer at <span class="">Infobool Technologies</span></h5>
                                    <ul>
                                                                                    <li>Gathered and defined customer requirements to develop clear 
specifications for project plans.</li>
                                                                            </ul>
                                </div>
                                                                <div class="desc-proBox">
                                    <div class="top-sub-title">(April 2013 to March 2016)</div>
                                    <h5>Analyst at <span class="">HCL Technologies</span></h5>
                                    <ul>
                                                                                    <li>Displaying PBX details on the internal website.</li>
                                                                            </ul>
                                </div>
                                                            </div>
                                                    </div>
                    </div>
                </section>
                <!-- Experience section END -->

                <!-- Major Projects START -->
                                <!-- <section class="majorProjects full">
                                    <div class="container">
                        <div class="row">
                            
                                                                                            <div class="col-sm-12 mob-Mode animated-highlight" id="major_projects">
                                                                    <div class="mob-title">
                                        <h3 class="main-title">MAJOR PROJECTS</h3>
                                    </div>
                                    <div class="mob-content">
                                                                                <div class="desc-proBox">
                                            <div class="top-sub-title">(November 2021 to Present)</div>
                                            <h5>Paro.io</h5>
                                            <ul>
                                                                                                    <li>It is a platform like UPWORK to hire legal associates. I was a third-party contract member part of the internal Engineering Team at Paro. Day to day task was to sit in the design discussion with the engineering manager, Product feature development with the product manager and task updates with scrum master.</li>
                                                                                                    <li>We were assigned work through JIRA with proper feature discussion In the sprint planning phase and after feature estimates were assigned task.</li>
                                                                                                    <li>With team collaboration and peer to peer programming and mostly individual contributions were able to deliver the assigned work.</li>
                                                                                                    <li>A final Demo of our work we had to present it to the stakeholders on the last day of the sprint i.e. the sprint review.</li>
                                                                                                                                                <li><strong>Major skills:</strong> Angular App, NextJS app, graphql API, Microservices, distributed sytems and Serverless, Mongodb and PostgreSQL databases.</li>
                                                                                            </ul>
                                        </div>
                                                                                <div class="desc-proBox">
                                            <div class="top-sub-title">(April 2020 to November 2021)</div>
                                            <h5>PEP(Provider Enrollment Portal)</h5>
                                            <ul>
                                                                                                    <li>This is a Provider enrollment portal created as a wrapper over the PNRM salesforce application to enroll the Providers for state medic aid.</li>
                                                                                                    <li>Initially I started working in the feature development team, where I had to develop new features for the PEP portal based on a detailed design draft available from the product manager.</li>
                                                                                                    <li>I implemented the PEP units, which was like a state capture of the form in different phases of the PEP lifecycle.</li>
                                                                                                    <li>Then was leading the defect management team, to solve the defect backlog and distribute the work to reduce the backlog tickets.</li>
                                                                                                    <li>Was introduced back to the core team to develop new features. And to ship ad to hoc features as well which were stuck with team. </li>
                                                                                                    <li>Wrote the test cases for the application to bring the code coverage to 90% . gave test trainings to peers.</li>
                                                                                                    <li>Being part of the Defect Resolver Team which was given a task of fixing 45 defects in a month just before the production release, heavily contributed in fixing the defects, working day and night and was rewarded heftily with accolades, bonuses and amazon vouchers (which I mostly got every month from my architect).</li>
                                                                                                                                                <li><strong>Major skills:</strong> Angular, Node.js ,Java Springboot, Mongodb, PostgreSQL, Spring cloud config, RabbitmQ, React JS, distributed systems.</li>
                                                                                            </ul>
                                        </div>
                                                                            </div>
                                </div>
                                                    </div>
                    </div>
                </section> -->
                <!-- Major Projects END -->

                <!-- App&Tools section START -->
                
                <!-- App&Tools section END -->

                <!-- Footer START -->
                <section class="uplers-talent-logo">
                    <div class="container">
                    </div>
                </section>
                <!-- Footer END -->

            </div>
        </div>
    </body> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        jQuery(document).ready(function(){
            if (jQuery(window).width() < 576){
                jQuery(".mob-Mode .mob-title").click(function(){
                    jQuery(this).toggleClass('open');
                    jQuery(this).next(".mob-content").slideToggle(300);
                });
            }
        });
        $( window ).resize(function() {
          if (jQuery(window).width() < 576){
                jQuery(".mob-Mode .mob-title").click(function(){
                    jQuery(this).toggleClass('open');
                    jQuery(this).next(".mob-content").slideToggle(300);
                });
            }
        });
    </script>
    <script>
        $(document).ready(function() {
            let hashParam = "n_a";
            console.log(hashParam)
            if (hashParam != 'n_a') {
                let element = $("#" + hashParam);
                if (element.length > 0) {
                    let elementOffset = element.offset().top;
                    $('html, body').animate({
                        scrollTop: elementOffset
                    }, 1000, () => {
                        element.addClass('pulsate')
                        setTimeout(() => {
                            element.removeClass('pulsate')
                        }, 5000);
                    });
                }

            }
        })
    </script>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
