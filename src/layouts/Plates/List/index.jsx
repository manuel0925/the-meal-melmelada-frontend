import React from 'react';
import { Card } from '@/componets';

const List = () => {
  return (
    <section>
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      <div>
        <span className="inline-block w-12 h-1 bg-red-700"></span>

        <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
          Available Meals
        </h2>
      </div>

      <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  </section>
  )
}

export default List