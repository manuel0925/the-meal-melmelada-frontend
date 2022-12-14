import React from 'react'

const Card = () => {
  return (
    <a href="" class="block">
      <div class="flex justify-center">
        <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
      </div>

      <img
        alt="Trainer Product"
        src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
        class="object-cover w-full -mt-3 h-96"
      />

      <h5 class="mt-4 text-sm text-black/90">
        Limited Edition Sports Trainer
      </h5>

      <div class="flex items-center justify-between mt-4 font-bold">
        <p class="text-lg">
          $189.99
        </p>

        <p class="text-xs tracking-wide uppercase">
          6 Colors
        </p>
      </div>
    </a>
  )
}

export default Card;