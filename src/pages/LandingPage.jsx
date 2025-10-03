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
import features from "../data/features.json";
import stats from "../data/stats.json";
import testimonials from "../data/testimonials.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Briefcase,
  Star,
} from "lucide-react";

const LandingPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* Hero Badge */}
      <div
        className="flex justify-center items-center py-4 relative text-center sm:mb-0 animate-fade-in"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-10 inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
        >
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-medium text-xs sm:text-sm">
            Get Hired Now !
          </span>
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
        </motion.div>
      </div>

      <main className="flex flex-col gap-16 sm:gap-24 py-10 sm:py-20">
        {/* ============ HERO SECTION ============ */}
        <section className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="flex flex-col justify-center items-center gradient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4 text-gray-300"
            >
              Find Your Dream Job{" "}
              <span className="text-gray-50 flex items-center gap-2 sm:gap-6">
                and get
                <SplitText
                  text="Hired."
                  delay={300}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-xs sm:text-xl sm:mt-4 max-w-2xl mx-auto"
            >
              Explore thousands of job listings or find the perfect candidate
            </motion.p>
          </motion.div>
        </section>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Link to="/jobs">
            <Button
              variant="blue"
              size="xl"
              className="group hover:scale-105 transition-transform"
            >
              Find Job
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/post-job">
            <Button
              variant="destructive"
              size="xl"
              className="group hover:scale-105 transition-transform"
            >
              Post a Job
              <Briefcase className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* ============ TRUSTED COMPANIES SECTION ============ */}
        <section className="w-full py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-gray-500 text-sm sm:text-2xl font-medium tracking-wider uppercase">
              Trusted by Leading Companies
            </p>
          </motion.div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full px-8"
          >
            <CarouselContent className="flex gap-5 sm:gap-20 items-center">
              {companies.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* ============ STATS SECTION ============ */}
        <section className="px-8 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text group-hover:scale-110 transition-transform inline-block">
                    {stat.number}
                  </h3>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <p className="text-gray-300 font-semibold text-lg sm:text-xl mt-2">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============ BANNER IMAGE ============ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="px-8 py-8"
        >
          <div className="relative group overflow-hidden rounded-3xl">
            {/* Gradient overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            <img
              src="./banner.jpeg"
              alt="HireVia Platform Preview"
              className="w-full h-auto rounded-3xl shadow-2xl border border-gray-800/50 group-hover:border-purple-500/30 transition-all duration-500 object-cover"
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />

            {/* Optional: Add a caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <p className="text-white text-sm sm:text-base font-medium">
                  ✨ Discover Your Next Career Opportunity
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ============ FEATURES SECTION ============ */}
        <section className="px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-3">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                HireVia
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Everything you need to find your dream job or hire top talent
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="group"
              >
                <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/20 to-gray-900/5 border border-gray-800/30 hover:border-purple-500/20 transition-all duration-500 hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-pink-900/5">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6 group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-gray-200 mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============ HOW IT WORKS SECTION ============ */}
        <section className="px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description:
                  "Sign up and build your professional profile in minutes",
                icon: "👤",
              },
              {
                step: "02",
                title: "Browse & Apply",
                description:
                  "Explore thousands of jobs and apply with one click",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Get Hired",
                description: "Connect with employers and land your dream job",
                icon: "🎉",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-gray-800/50 group-hover:text-purple-500/20 transition-colors">
                  {item.step}
                </div>
                <div className="relative pt-8">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============ USER TYPE CARDS ============ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-blue-400" />
                  <CardTitle className="text-2xl">For Job Seekers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-400 text-lg">
                  Search and apply for jobs, track applications, and more.
                </p>
                <ul className="space-y-2">
                  {[
                    "Browse thousands of opportunities",
                    "One-click applications",
                    "Track application status",
                    "Save jobs for later",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6 text-pink-400" />
                  <CardTitle className="text-2xl">For Employers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-400 text-lg">
                  Post jobs, manage applications, and find the best candidates.
                </p>
                <ul className="space-y-2">
                  {[
                    "Post unlimited job listings",
                    "Manage all applications",
                    "Find qualified candidates",
                    "Streamlined hiring process",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ============ TESTIMONIALS SECTION ============ */}
        <section className="px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Join thousands of satisfied job seekers and employers
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card className="h-full hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-200">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 italic">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="px-8 py-4 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to know about HireVia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="multiple" className="w-full" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-gray-800"
                >
                  <AccordionTrigger className="text-lg sm:text-xl text-gray-200 hover:text-purple-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        {/* ============ FINAL CTA SECTION ============ */}
        <section className="px-8 py-4 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 border border-purple-500/30 p-8 sm:p-12 text-center"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Join thousands of professionals who have found their dream jobs
                through HireVia
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/jobs">
                  <Button
                    size="lg"
                    variant="blue"
                    className="group hover:scale-105 transition-transform"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/post-job">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 transition-transform border-purple-500/50 hover:border-purple-500"
                  >
                    Post a Job
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
