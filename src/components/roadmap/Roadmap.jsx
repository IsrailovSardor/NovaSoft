import React, {useId, useState} from 'react';
import './roadmap.scss'
import RoadmapItem from "./roadmapItem/RoadmapItem";
import {Parallax} from "react-scroll-parallax";
import back from '../../images/roadmap/back1.png'

const items = [
    {
        title: 'Analise',
        description: 'Предоставленный ТЗ Заказчика анализируем и дополняем. Либо обсуждаем потребности Заказчика и пишем ТЗ для разработки, учитывая бизнес-процессы и технологии Заказчика и потребности пользователей.',
        image: 'analise.png'
    },
    {
        title: 'Prototyping',
        description: 'Прорабатываем пользовательские сценарии, проектируем логику веб приложения, скечируем основные экраны.',
        image: 'prototyping.png'
    },
    {
        title: 'Design',
        description: 'Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы.',
        image: 'design.png'
    },
    {
        title: 'Programming',
        description: 'Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.',
        image: 'programming.png'
    },
]

const Roadmap = () => {
    const id = useId()
    const [entered, setEntered] = useState(true)

    return (
        <section className={`roadmap ${entered ? 'dark' : ''}`}>
            <Parallax onExit={() => {
                            setEntered(true)
                      }}
                      onEnter={() => {
                          setEntered(false)
                      }}>
                <div className="container">
                    <div className={'back-wrapper right'}>
                        <Parallax speed={-100}
                        >
                            <img className={'back'} src={back} alt={"back"}/>
                        </Parallax>
                    </div>
                    <div className={'back-wrapper'}>
                        <Parallax speed={-100}>
                            <img className={'back'} src={back} alt={"back"}/>
                        </Parallax>
                    </div>
                    <Parallax speed={-60}
                              opacity={[1, 0]}
                    >
                        <h1>
                            Roadmap
                        </h1>
                    </Parallax>
                        {
                            items.map((item, index) =>
                                <div key={`${id}__${item.title}__${index}`}
                                     className={'roadmap__item'}
                                >
                                    <Parallax translateX={[-250, 100]}
                                              easing={'easeOutQuad'}
                                              speed={0}
                                    >
                                        <RoadmapItem title={item.title}
                                                     description={item.description}
                                                     image={require(`../../images/roadmap/${item.image}`)}
                                                     index={index+1}
                                        />
                                    </Parallax>
                                    {/*{*/}
                                    {/*    index+1 !== items.length &&*/}
                                    {/*    <Divider/>*/}
                                    {/*}*/}
                                </div>
                            )
                        }
                </div>
            </Parallax>
        </section>
    );
};

export default Roadmap;