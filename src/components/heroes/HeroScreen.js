import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);


    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    const {
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters,
    } = hero

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../../../docs/assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
                    <li className="list-group-item"><b>Characters:</b> {characters}</li>
                    <hr></hr>
                </ul>

                {/* <button className="visibleBorderLeftRight" onClick={handleReturn}>Return</button> */}
                <p className="visibleBorderLeftRight" onClick={handleReturn} style={{cursor:"pointer"}}>Return</p>

            </div>
        </div>
    )
}
