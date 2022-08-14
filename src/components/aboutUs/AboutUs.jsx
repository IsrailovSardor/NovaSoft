import React from 'react';
import './aboutUs.scss'
import FadeInSection from "../../hoc/fade/Fade";

const AboutUs = () => {
    return (
        <section className={'aboutUs'}>
            <div className="container">
                <FadeInSection>
                    <h1>
                        NOVASOFT is -
                    </h1>
                </FadeInSection>
                <FadeInSection>
                    <p>
                        You do not choose your reputation.
                        To be loved and trusted is not easy, it takes years.
                        Building a brand isdeveloping a relationshipwith your customer.
                        That’s where we step in. We uncover your essence. We turn skeptics into customers,
                        customers into loyal fans.
                    </p>
                </FadeInSection>
                <FadeInSection>
                    <p>
                        We are a rapidly growing group of open-minded people,
                        sometimes a little crazy, perfectionists, who love white space and observe every detail.
                        We are designers, developers, product managersbut above all people who love what
                        they do and always give their best.
                    </p>
                </FadeInSection>
            </div>
        </section>
    );
};

export default AboutUs;