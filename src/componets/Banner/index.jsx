import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen ">
                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Welcome to meals free!!
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                        <Link to='/categories'>
                            <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring" >
                                Get started
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

    )
}

export default Banner