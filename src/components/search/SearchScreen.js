import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find you Hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        ></input>

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 magnifyText"
                        > Search </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Result</h4>
                    <hr />

                    {(q === '') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {(q !== '' && heroesFilter.length === 0) &&
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }

                    <div>
                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}
