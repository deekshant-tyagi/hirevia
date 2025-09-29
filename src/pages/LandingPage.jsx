import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../data/faq.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRef } from "react";
import SplitText from "@/components/SplitText";


const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* heading part */}
      <section className="text-center">
        {/* {" "}->to provide empty spaces */}
        <h1 className="flex flex-col justify-center items-center gradient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4 text-gray-300">
          Find Your Dream Job{" "}
          <span className=" text-gray-50 flex items-center gap-2 sm:gap-6">
            and get
            <SplitText
              text="Hired."
              // className="text-2xl font-semibold text-center"
              delay={300}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
            {/* <img
              src="/logo.png"
              alt="hirrdLogo"
              className="h-14 sm:h-24 lg:h-32"
            /> */}
          </span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-xl sm:mt-4">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      {/* button part */}
      <div className="flex justify-center gap-6">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Job
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* moving carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10 px-8"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* banner */}
      <img
        src="./banner.jpeg"
        alt="bannerImage"
        className="w-full items-center px-8"
      />
      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 t gap-4 px-8 text-lg ">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent className="text-xl">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent className="text-xl">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
      {/* accordian */}
      <Accordion type="multiple" className="w-full px-8" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-xl">
              {" "}
              {faq.question}{" "}
            </AccordionTrigger>
            <AccordionContent className="text-md">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
