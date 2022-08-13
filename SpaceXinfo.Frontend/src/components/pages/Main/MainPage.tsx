import React, { useEffect } from 'react';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass } from '../../../utils/classes';
import Button from '../../UI/Button/Button';
import { ButtonVariants } from '../../UI/Button/ButtonVariants';
import Container from '../../UI/Container/Container';

export interface IMainPageProps {};

const MainPage: React.FunctionComponent<IMainPageProps> = props => {

    useEffect(() => {
        document.title = "SpaceXinfo"
        addBodyClass(bodyClasses.Background);
    }, [])

    return <div className="intro">
        <Container>
            <div className="intro__inner">

                <div className="intro__left">
                    <h1 className="intro__title">SpaceX</h1>
                    <div className="intro__text"><b>SpaceX</b> designs, manufactures and launches 
                    advanced rockets and spacecraft. The company was founded in <b>2002</b> to 
                    revolutionize space technology, with the ultimate goal of enabling 
                    people to live on other planets.</div>
                    <Button variants={[ButtonVariants.Big]}>View Launches</Button>
                </div>
                <div className="intro__right">
                    <h1 className="intro__title">Next Launch In</h1>
                    <time className="intro__timer">01:23:50:11</time>
                    <div className="intro__launch">
                        <div className="intro__launch__info">
                            <div className="intro__launch__info__item">CCSFS SLC 40</div>
                            <div className="intro__launch__info__item">F-NR</div>
                        </div>

                        <div className="intro__launch__name">
                            <div className="intro__launch__name__item">KPLO</div>
                            <div className="intro__launch__name__item">177</div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    </div>
}
export default MainPage;