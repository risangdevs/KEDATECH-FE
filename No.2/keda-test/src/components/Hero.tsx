// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'

import { Button } from "./Button";
import { Container } from "./Container";

import backgroundImage from "../images/background.jpg";
import pic1 from"../images/pic1.svg"

export function Hero() {
  return (
    <div className="relative sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <img
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <div className=" ml-96 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque
              voluptatum sequi ratione. Voluptatibus fuga quia eum ullam illo,
              velit nisi a? Dolore iste, asperiores laudantium velit pariatur
              ducimus maiores?
            </p>
          </div>
          <h1 className=" mt-6 font-display text-xl font-bold tracking-tighter text-blue-600 sm:text-xl">
            "Excepteur sint occaecat cupidatat non proident"
          </h1>
          <img className="mt-2 w-80" src={pic1}/>
        </div>
      </Container>
    </div>
  );
}
