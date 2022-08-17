import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { fetchNextLaunch } from '../../../api/spacexdata/launches';
import { AppRoutes } from '../../../routes';
import { LaunchType } from '../../../types/Launches';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass } from '../../../utils/classes';
import Button from '../../UI/Button/Button';
import { ButtonVariants } from '../../UI/Button/ButtonVariants';
import Container from '../../UI/Container/Container';

export interface IMainPageProps {};

const MainPage: React.FunctionComponent<IMainPageProps> = props => {

    const [nextLaunch, setNextLaunch] = useState<LaunchType | null>(null);

    async function getNextLaunch() {
        const nextLaunch = await fetchNextLaunch();
        setNextLaunch(nextLaunch);
    }

    useEffect(() => {
        document.title = "SpaceXinfo"
        addBodyClass(bodyClasses.Background);
    }, [])

    useEffect(() => {
        getNextLaunch();
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
                    <Link to={AppRoutes.Launches}>
                        <Button variants={[ButtonVariants.Big]}>
                            View Launches
                        </Button>
                    </Link>
                </div>
                <div className="intro__right">
                    <h1 className="intro__title">Next Launch In</h1>

                    {nextLaunch ? 
                    <Countdown date={nextLaunch?.date_utc}
                    className="intro__timer"/> 
                    : 
                    <time className="intro__timer">00:00:00:00</time>}

                    <div className="intro__launch">
                        <div className="intro__launch__item">
                            <div className="intro__launch__info">F-NR {nextLaunch?.flight_number}</div>
                        </div>

                        <div className="intro__launch__item">
                            <div className="intro__launch__name">{nextLaunch?.name}</div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    </div>
}
export default MainPage;

{/* <div className="intro__launch__item">
                            <div className="intro__launch__info__item">CCSFS SLC 40</div>
                            <div className="intro__launch__info__item">F-NR</div>
                        </div>

                        <div className="intro__launch__name">
                            <div className="intro__launch__name__item">{nextLaunch?.name}</div>
                            <div className="intro__launch__name__item">{nextLaunch?.flight_number}</div>
                        </div> */}