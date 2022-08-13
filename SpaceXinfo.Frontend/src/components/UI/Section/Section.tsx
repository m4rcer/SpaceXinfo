import React, { Children, ReactNode } from 'react';
import Container from '../Container/Container';

export interface ISectionProps {
    title: string,
    children: ReactNode;
};

const Section: React.FunctionComponent<ISectionProps> = ({
    title,
    children
}) => {
    return (
    <section className='section'>
        <Container>

            <div className="section__title">{title}</div>
            
            {children}
        </Container>
    </section>)
}
export default Section;