import React,  { useState, useEffect } from 'react';
import { Api } from '../../utils/Api';
import Flicking from "@egjs/react-flicking";
import Card2 from '../../reuseables/Card2';
import Loader from "react-loader-spinner";


const Upcoming = (props, ref) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await Api.get('/movie/upcoming');
            setData(data.results);
        }catch (error) {
            const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
            console.error({ errorMessage });
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {isLoading ?
                <Loader type="Oval" color="#F3353E" height={90} width={90}  className="loader"/> :   
                <Flicking
                    align="prev"
                    ref={ref}
                    bound
                    moveType="freeScroll"
                    className="card2__category"
                >   
                    {data?.map((card2, index) => (
                            <Card2
                                key={card2.id}
                                index={index}
                                image={`https://image.tmdb.org/t/p/original${card2.poster_path}`}
                            />
                        ))}
                </Flicking>
            }
        </>
    )
}

export default React.forwardRef(Upcoming);