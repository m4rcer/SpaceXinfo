import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../routes';
import Container from '../../UI/Container/Container';

export interface IProfilePageProps {};

const ProfilePage: React.FunctionComponent<IProfilePageProps> = props => {

    useEffect(() => {
        document.title = "Profile - SpaceXinfo";
    }, []);

    return (
    <div className="user">
        <Container>
            <div className="user__launches">
                <div className="user__buttons">
                    <div className="user__settings">
                        <i className="fa-solid fa-gear"></i>
                    </div>
                    <Link to={AppRoutes.Signout} className="user__logout">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </Link>
                </div>

                <div className="user__launches__title">My Launches</div>

                <div className="launches__content">
                    <div className="launches__column launches__column--left">
                        <div className="launches__column__title">
                            <i className="fa-regular fa-clock"></i> Upcoming
                        </div>

                        <div className="launches__list">
                            <div className="launches__item">
                                <div className="launches__item__column">
                                    <div className="launches__item__info">F-NR 178</div>
                                    <div className="launches__item__title">Starlink 4-26 (v1.5)</div>
                                    <div className="launches__item__date">06.08.2022</div>
                                </div>
                                <div className="launches__item__column launches__item__column--right">
                                    <div className="launches__item__info">Block</div>
                                    <div className="launches__item__title">5</div>
                                    <div className="launches__item__icons">
                                        <div className="launches__item__icon launches__item__icon--calendar">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="launches__item__icon launches__item__icon--favourite
                                        active">
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="launches__item">
                                <div className="launches__item__column">
                                    <div className="launches__item__info">F-NR 178</div>
                                    <div className="launches__item__title">Starlink 4-26 (v1.5)</div>
                                    <div className="launches__item__date">06.08.2022</div>
                                </div>
                                <div className="launches__item__column launches__item__column--right">
                                    <div className="launches__item__info">Block</div>
                                    <div className="launches__item__title">5</div>
                                    <div className="launches__item__icons">
                                        <div className="launches__item__icon launches__item__icon--calendar">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="launches__item__icon launches__item__icon--favourite
                                        active">
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="launches__item">
                                <div className="launches__item__column">
                                    <div className="launches__item__info">F-NR 178</div>
                                    <div className="launches__item__title">Starlink 4-26 (v1.5)</div>
                                    <div className="launches__item__date">06.08.2022</div>
                                </div>
                                <div className="launches__item__column launches__item__column--right">
                                    <div className="launches__item__info">Block</div>
                                    <div className="launches__item__title">5</div>
                                    <div className="launches__item__icons">
                                        <div className="launches__item__icon launches__item__icon--calendar">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="launches__item__icon launches__item__icon--favourite
                                        active">
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="launches__content__divider"></div>

                    <div className="launches__column launches__column--right">
                        <div className="launches__column__title">
                            <i className="fa-regular fa-circle-check"></i> Completed
                        </div>

                        <div className="launches__list">
                            <div className="launches__item">
                                <div className="launches__item__column">
                                    <div className="launches__item__info">F-NR 178</div>
                                    <div className="launches__item__title">Starlink 4-26 (v1.5)</div>
                                    <div className="launches__item__date">06.08.2022</div>
                                </div>
                                <div className="launches__item__column launches__item__column--right">
                                    <div className="launches__item__info">Block</div>
                                    <div className="launches__item__title">5</div>
                                    <div className="launches__item__icons">
                                        <div className="launches__item__icon launches__item__icon--calendar">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="launches__item__icon launches__item__icon--favourite
                                        active">
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="launches__item">
                                <div className="launches__item__column">
                                    <div className="launches__item__info">F-NR 178</div>
                                    <div className="launches__item__title">Starlink 4-26 (v1.5)</div>
                                    <div className="launches__item__date">06.08.2022</div>
                                </div>
                                <div className="launches__item__column launches__item__column--right">
                                    <div className="launches__item__info">Block</div>
                                    <div className="launches__item__title">5</div>
                                    <div className="launches__item__icons">
                                        <div className="launches__item__icon launches__item__icon--calendar">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="launches__item__icon launches__item__icon--favourite
                                        active">
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>)
}
export default ProfilePage;