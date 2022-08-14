import React from 'react';
import './services.scss'
import ServicesItem from "./servicesItem/ServicesItem";

import design from '../../images/services/design.png'
import mobile from '../../images/services/mobile.png'
import website from '../../images/services/website.png'
import Fade from "../../hoc/fade/Fade";

const Services = () => {
    return (
        <section className={'services'}>
            <div className="container">
                <h1>
                    Our services
                </h1>
                <ul className={'services__list'}>
                    <Fade>
                        <ServicesItem title={"Design"}
                                      description={"Killer features all over the place"}
                                      image={design}
                        />
                    </Fade>
                    <Fade>
                        <ServicesItem title={"Mobile"}
                                      description={"Killer features all over the place"}
                                      image={mobile}
                        />
                    </Fade>
                    <Fade>
                        <ServicesItem title={"Website"}
                                      description={"Killer features all over the place"}
                                      image={website}
                        />
                    </Fade>
                </ul>
            </div>
        </section>
    );
};

export default Services;