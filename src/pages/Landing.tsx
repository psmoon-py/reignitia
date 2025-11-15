import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Users, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '2B+', label: 'Students Worldwide', icon: Users },
  { value: '60%', label: 'Face Financial Barriers', icon: Globe },
  { value: '0', label: 'Talent Should Be Wasted', icon: Sparkles },
];

const features = [
  {
    title: '6 Rings of Life',
    description: 'Learning, Money, Food, Health, Opportunities, and Curiosity—all in one constellation',
    color: 'from-accent-cyan to-accent-violet',
  },
  {
    title: 'Free Resources Only',
    description: 'Curated from Khan Academy, edX, OpenStax, TopUniversities, and more',
    color: 'from-accent-gold to-accent-orange',
  },
  {
    title: 'Your Bandwidth, Your Pace',
    description: 'Personalized missions based on your device, data, time, and goals',
    color: 'from-accent-magenta to-accent-violet',
  },
];

export const Landing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div ref={containerRef} className="bg-space-dark">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Re<span className="text-accent-cyan">I</span>gnitia
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Power Your Potential
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Turn every part of student life—learning, money, food, health, opportunities, and curiosity—into a personalized constellation of missions, powered only by free resources.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/launch">
                <Button variant="primary" size="xl" className="group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Launch Your Universe
                </Button>
              </Link>
              <Link to="/universe">
                <Button variant="outline" size="xl">
                  Explore as Guest
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border-accent-cyan/20">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-10 h-10 mx-auto mb-4 text-accent-cyan" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* The Reality Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-space-dark to-space-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Reality</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Billions of students face fragmented resources, financial barriers, overwhelming information, and zero personalized guidance. The digital divide isn't just about access—it's about having a system that meets you where you are.
            </p>
            <p className="text-xl text-accent-cyan font-semibold">
              No talent should be wasted because of where you're born or what device you have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How ReIgnitia Works</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Answer a few questions. Get a personalized 3D universe. Start missions that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-none">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-4`} />
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-space-dark to-space-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to ignite your journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join students worldwide who are taking control of their futures, one mission at a time.
            </p>
            <Link to="/launch">
              <Button variant="primary" size="xl" className="group">
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Start Now—It's Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};