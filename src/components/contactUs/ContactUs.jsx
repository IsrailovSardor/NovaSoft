import React from 'react';
import './contactUs.scss';
import TextareaAutosize from 'react-textarea-autosize';
import FadeInSection from "../../hoc/fade/Fade";

const ContactUs = () => {
    return (
        <section className={'contactUs'}>
            <div className={'container'}>
                <FadeInSection>
                    <h1>
                        Let’s move forward
                    </h1>
                </FadeInSection>
                <FadeInSection>
                    <p>
                        Fill in this form or send us an e-mail
                    </p>
                </FadeInSection>
                <form>
                    <label className={'input-label'}>
                        <FadeInSection>
                            <input placeholder={'Name*'}/>
                        </FadeInSection>
                    </label>
                    <label className={'input-label'}>
                        <FadeInSection>
                            <input placeholder={'E-mail*'}/>
                        </FadeInSection>
                    </label>
                    <FadeInSection>
                        <TextareaAutosize minRows={1}
                                          className={'textarea-label'}
                                          placeholder={'Project details*'}

                        />
                    </FadeInSection>
                    <FadeInSection>
                        <button type={'submit'} onClick={e => {
                            e.preventDefault()
                        }}>
                            Contact Us
                        </button>
                    </FadeInSection>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;