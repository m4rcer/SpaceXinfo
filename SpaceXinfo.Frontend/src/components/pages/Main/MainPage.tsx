import React, { useEffect } from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AppRoutes } from '../../../routes';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass, removeBodyClass } from '../../../utils/classes';
import Button from '../../UI/Button/Button';
import { ButtonVariants } from '../../UI/Button/ButtonVariants';
import Container from '../../UI/Container/Container';

export interface IMainPageProps {};

const MainPage: React.FunctionComponent<IMainPageProps> = props => {

    const {nextLaunch} = useTypedSelector(state => state.nextLaunch);
    const {fetchNextLaunch} = useActions();

    const {company} = useTypedSelector(state => state.company);
    const {fetchCompany} = useActions();

    useEffect(() => {
        document.title = "SpaceXinfo"
        addBodyClass(bodyClasses.Background);

        return function () {
            removeBodyClass(bodyClasses.Background);
        }
    }, [])

    useEffect(() => {
        fetchNextLaunch();
        fetchCompany();
    }, [])

    return (
    <div className="intro">
        <Container>
            <div className="intro__inner">

                <div className="intro__left">
                    <h1 className="intro__title">SpaceX</h1>
                    <div className="intro__text">
                        {company?.summary}
                    </div>
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
    </div>)
}
export default MainPage;
