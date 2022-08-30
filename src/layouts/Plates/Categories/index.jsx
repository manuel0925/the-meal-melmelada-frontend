import React from "react";
import { CategoyCard } from "@/componets";
import { useQuery } from 'react-query';
import { fetchCategories } from '@/apis/categories'

const Categories = () => {

  const { isLoading, error, data } = useQuery('getCategories',  () =>  fetchCategories());


  if (isLoading) return <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
    Loading!!!
  </h1>
  if (error) return <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
    Error loading the meals!!
  </h1>
  return <>{JSON.stringify(data)}</>
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-12 bg-gray-50 md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <div className="mt-12">
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-4">
                      <CategoyCard />
                    </li>
                    <li className="flex items-center justify-between py-4">
                      <CategoyCard />
                    </li>
                    <li className="flex items-center justify-between py-4">
                      <CategoyCard />
                    </li>
                    <li className="flex items-center justify-between py-4">
                      <CategoyCard />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 bg-white md:py-24 ">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Description
            </h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                nobis officia nam! Consequatur harum possimus repellendus
                pariatur iste laborum! Earum, ex eaque. Neque voluptas quas
                molestias eum ipsum totam itaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
