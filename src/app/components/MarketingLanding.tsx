import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useAuth } from '../../lib/auth';
import {
  ArrowRight, Check, Star, Users, Building2,
  Shield, Zap, Heart, TrendingUp, Award, Clock,
  Video, FileText, CreditCard, Lock, Globe,
  Sparkles, CheckCircle2, Quote, ChevronRight,
  Stethoscope, BrainCircuit, Activity, HeartPulse,
  Wallet, Bot, CalendarClock, ShieldCheck,
  Eye, User
} from 'lucide-react';
import { Button, Card, Badge } from './UI';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SharedHeader, SharedFooter } from './Layout';

export const MarketingLanding = ({
  onStart,
  onLoginRequest,
  onStartOnboarding,
  onDoctorLoginRequest,
  onAdminLoginRequest,
  onGoToDashboard,
}: {
  onStart: () => void,
  onLoginRequest: () => void,
  onStartOnboarding: () => void,
  onDoctorLoginRequest?: () => void,
  onAdminLoginRequest?: () => void,
  onGoToDashboard?: () => void,
}) => {
  const auth = useAuth();
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <SharedHeader
        onLoginRequest={onLoginRequest}
        onDoctorLoginRequest={onDoctorLoginRequest}
        onStart={onStart}
      />

      {/* Logged-in welcome bar */}
      {auth.user && onGoToDashboard && (
        <div className="bg-[#5B8DEF]/5 border-b border-[#5B8DEF]/15 px-4 py-2.5 flex items-center justify-between gap-3">
          <p className="text-sm text-gray-700">
            Welcome back, <span className="font-medium text-gray-900">{auth.profile?.name || auth.user.email}</span>
          </p>
          <button
            onClick={onGoToDashboard}
            className="text-sm font-medium text-[#5B8DEF] hover:text-blue-700 transition-colors flex items-center gap-1.5"
          >
            Go to Dashboard
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Hero Section - Modern Split Layout */}
      <section className="relative pt-14 pb-16 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Subtle Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#5B8DEF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#5B8DEF]" />
                <span className="text-sm font-medium text-gray-700">
                  AI-Powered Healthcare Platform
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-6 text-gray-900">
                Consult a doctor.{' '}
                <span className="text-[#5B8DEF]">Finance your care.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 font-normal">
                Patients and doctors rely on BEXORA for secure video consultations and instant 0% EMI financing — quality care with zero financial stress.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  onClick={onLoginRequest}
                  className="bg-[#5B8DEF] text-white font-medium px-8 h-13 sm:h-14 text-base rounded-full hover:bg-[#4A7DD9] shadow-lg shadow-blue-200/50 transition-all"
                >
                  Patient Login
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onDoctorLoginRequest}
                  className="border-2 border-[#5B8DEF] text-[#5B8DEF] font-medium px-8 h-13 sm:h-14 text-base rounded-full hover:bg-blue-50 transition-colors"
                >
                  Doctor Login
                </Button>
              </div>

              {/* Google Sign-In Notice */}
              <p className="text-xs text-gray-500 -mt-6 mb-6 font-normal">
                Sign in with Google. We request your <strong>name, email, and profile photo</strong> to create your account.{' '}
                <Link to="/privacy-policy" className="text-[#5B8DEF] underline underline-offset-2 hover:text-blue-700">Privacy Policy</Link>
              </p>

              {/* Trust Indicators */}
              {/* pr-16 on mobile keeps "99.8% approval" clear of the fixed WhatsApp widget in the bottom-right corner */}
              <div className="flex flex-wrap items-center gap-4 md:gap-8 pr-16 sm:pr-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">2-hour approval</p>
                    <p className="text-xs text-gray-500">Average turnaround</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">99.8% approval</p>
                    <p className="text-xs text-gray-500">Success rate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">50,000+</p>
                    <p className="text-xs text-gray-500">Patients served</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              {/* Main Dashboard Mockup */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 sm:p-8 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Health Dashboard</h3>
                      <p className="text-sm text-gray-500">Welcome back, Sarah</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9] flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Video className="w-4 h-4 text-gray-600" />
                        <p className="text-xs text-gray-600 font-medium">Next Consultation</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">Today, 3:00 PM</p>
                      <p className="text-xs text-gray-500 mt-1">Dr. Mehta • Cardiology</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-4 h-4 text-gray-600" />
                        <p className="text-xs text-gray-600 font-medium">EMI Status</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">₹7,083</p>
                      <p className="text-xs text-gray-500 mt-1">Due: Apr 15, 2026</p>
                    </div>
                  </div>

                  {/* EMI Card with Gradient */}
                  <div className="relative bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9] rounded-2xl p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <div className="relative">
                      <p className="text-sm opacity-90 mb-2">Available Credit</p>
                      <p className="text-3xl font-bold mb-4">₹2,50,000</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-white rounded-full" />
                        </div>
                        <span className="text-xs opacity-90">33% used</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Success Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-4 left-4 sm:-bottom-4 sm:-left-4 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Loan Approved</p>
                      <p className="text-sm font-bold text-gray-900">₹85,000</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Doctor Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute top-4 right-4 sm:-top-4 sm:-right-4 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9]" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Dr. Sarah Patel</p>
                      <p className="text-xs text-gray-600">Available Now</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-10 sm:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-normal text-gray-500 mb-10">
            Partnered with India's Leading Healthcare Networks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-60">
            {['IIT Mandi Catalyst Bionest Centre', 'Health ATM (via Dentifrice AI)', 'Max Healthcare', 'Manipal Hospitals'].map(name => (
              <span key={name} className="text-lg font-semibold text-gray-900">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-gray-900">
              Everything you need for{' '}
              <span className="text-[#5B8DEF]">accessible healthcare</span>
            </h2>
            <p className="text-xl text-gray-600 font-normal">
              Powered by AI and designed for simplicity. Get quality medical care with zero financial stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Video,
                title: 'Virtual Consultations',
                description: 'Connect with 1,200+ verified specialists via secure video calls.',
                mockup: 'video'
              },
              {
                icon: BrainCircuit,
                title: 'AI Diagnostics',
                description: 'Advanced AI analyzes your case for accurate preliminary assessments.',
                mockup: 'ai'
              },
              {
                icon: Wallet,
                title: '0% Interest EMI',
                description: 'Flexible payment plans with zero hidden fees or processing charges.',
                mockup: 'emi'
              },
              {
                icon: CalendarClock,
                title: 'Instant Approval',
                description: '2-hour average approval time with 99.8% success rate.',
                mockup: 'approval'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative p-6 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-[#5B8DEF]/20 hover:shadow-xl transition-all duration-500 h-full group cursor-pointer overflow-hidden">
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Header with icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-[#5B8DEF]/10 transition-all duration-500">
                          <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-[#5B8DEF] transition-colors duration-500" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-normal text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Large Visual Mockup */}
                    <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-md group-hover:shadow-lg transition-shadow duration-500">
                      {feature.mockup === 'video' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-6">
                          {/* Video interface */}
                          <div className="bg-gray-900 rounded-2xl h-full relative overflow-hidden shadow-xl">
                            {/* Video feed area */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-50" />

                            {/* Doctor card overlay */}
                            <div className="absolute top-4 left-4 right-4">
                              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9]" />
                                  <div className="flex-1">
                                    <div className="h-3 w-32 bg-gray-200 rounded mb-2" />
                                    <div className="h-2 w-24 bg-gray-100 rounded" />
                                  </div>
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-[#5B8DEF] animate-pulse" />
                                    <span className="text-xs font-medium text-gray-700">Live</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Control bar */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                  <Video className="w-5 h-5 text-gray-700" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                  <div className="w-5 h-5 bg-gray-700 rounded-sm" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                                  <div className="w-3 h-3 bg-white" />
                                </div>
                              </div>
                            </div>

                            {/* Center icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                                <Video className="w-10 h-10 text-white/60" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockup === 'ai' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-6">
                          <div className="space-y-4">
                            {/* AI Analysis Card 1 */}
                            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9] flex items-center justify-center">
                                  <BrainCircuit className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 mb-1">AI Medical Analysis</h4>
                                  <p className="text-xs text-gray-500">Processing patient data...</p>
                                </div>
                                <div className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                                  Active
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-gray-600">Diagnostic Accuracy</span>
                                  <span className="font-semibold text-[#5B8DEF]">98.3%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <div className="h-full w-[98%] bg-gradient-to-r from-[#5B8DEF] to-[#4A7DD9] rounded-full" />
                                </div>
                              </div>
                            </div>

                            {/* AI Analysis Card 2 */}
                            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200">
                              <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center">
                                  <Activity className="w-7 h-7 text-gray-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 mb-1">Risk Assessment</h4>
                                  <p className="text-xs text-gray-500">Real-time monitoring</p>
                                </div>
                                <div className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                                  Low Risk
                                </div>
                              </div>
                            </div>

                            {/* Progress indicators */}
                            <div className="flex items-center gap-3 px-4">
                              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-[#5B8DEF] rounded-full animate-pulse" />
                              </div>
                              <span className="text-xs font-medium text-gray-600">67%</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockup === 'emi' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-6">
                          {/* Invoice Card */}
                          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full p-6 relative overflow-hidden">
                            {/* Header with status */}
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#5B8DEF]" />
                                <span className="text-sm font-medium text-gray-900">Invoice Processed</span>
                              </div>
                              <div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                                Approved
                              </div>
                            </div>

                            {/* Hospital info */}
                            <div className="mb-6 pb-6 border-b border-gray-100">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
                                  <div className="w-6 h-6 bg-gray-700 rounded" />
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-900">IIT Mandi Catalyst Bionest Centre</p>
                                  <p className="text-xs text-gray-500">Invoice #2024-3847</p>
                                </div>
                              </div>
                            </div>

                            {/* Amount breakdown */}
                            <div className="space-y-4 mb-6">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Procedure Cost</span>
                                <span className="font-semibold text-gray-900">₹85,000</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Processing Fee</span>
                                <span className="font-semibold text-gray-700">₹0</span>
                              </div>
                              <div className="h-px bg-gray-200" />
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500 uppercase">Total Amount</span>
                                <span className="text-3xl font-bold text-gray-900">₹85,000</span>
                              </div>
                            </div>

                            {/* EMI Option */}
                            <div className="relative bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9] rounded-2xl p-6 text-white shadow-lg overflow-hidden">
                              {/* Subtle decorative circles */}
                              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />

                              <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                  <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                                  </svg>
                                  <div className="text-sm font-medium tracking-wide opacity-95">Next Payment Due</div>
                                </div>
                                <div className="text-5xl font-normal mb-2 tracking-tight">₹7,083</div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                  <div className="text-sm font-medium">April 15, 2026</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockup === 'approval' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-6">
                          <div className="bg-white rounded-2xl shadow-lg h-full p-6 relative overflow-hidden border border-gray-200">
                            {/* Success badge */}
                            <div className="absolute top-4 right-4">
                              <div className="w-12 h-12 rounded-full bg-[#5B8DEF] flex items-center justify-center shadow-md">
                                <CheckCircle2 className="w-7 h-7 text-white" />
                              </div>
                            </div>

                            {/* Main content */}
                            <div className="mb-6">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Application Status</p>
                              <h4 className="text-3xl font-bold text-gray-900 mb-1">Approved!</h4>
                              <p className="text-sm text-gray-600">Your financing has been approved</p>
                            </div>

                            {/* Loan details cards */}
                            <div className="space-y-3 mb-6">
                              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium text-gray-600">Loan Amount</span>
                                  <span className="text-xl font-bold text-gray-900">₹85,000</span>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-200">
                                  <p className="text-xs text-gray-500 mb-1">Tenure</p>
                                  <p className="text-lg font-semibold text-gray-900">12 mo</p>
                                </div>
                                <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-200">
                                  <p className="text-xs text-gray-500 mb-1">Interest</p>
                                  <p className="text-lg font-semibold text-gray-900">0%</p>
                                </div>
                              </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#5B8DEF]" />
                                <span className="text-xs text-gray-600">Application received</span>
                                <span className="text-xs text-gray-400 ml-auto">9:30 AM</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#5B8DEF]" />
                                <span className="text-xs text-gray-600">AI analysis completed</span>
                                <span className="text-xs text-gray-400 ml-auto">10:15 AM</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#5B8DEF] animate-pulse" />
                                <span className="text-xs font-medium text-gray-900">Approved</span>
                                <span className="text-xs text-gray-400 ml-auto">11:20 AM</span>
                              </div>
                            </div>

                            {/* Decorative gradient bar at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B8DEF] to-[#4A7DD9]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 md:py-32 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-sm font-normal text-gray-600">Simple Process</span>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-gray-900">
              Get started in{' '}
              <span className="text-[#5B8DEF]">3 simple steps</span>
            </h2>
          </div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-8">
                  {/* Mock Browser Window */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-500">
                        BEXORA.ai/book-consultation
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 bg-white">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Video className="w-6 h-6 text-[#5B8DEF]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Book Video Consultation</h4>
                          <p className="text-xs text-gray-500">Choose specialist & time slot</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {['Cardiology', 'Orthopedics', 'Dermatology'].map((specialty, i) => (
                          <div key={i} className="p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-blue-50 transition-colors cursor-pointer">
                            <span className="text-sm font-normal text-gray-700">{specialty}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#5B8DEF]/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#5B8DEF] text-white text-2xl font-normal mb-6">
                  1
                </div>
                <h3 className="text-2xl sm:text-4xl font-normal mb-4 sm:mb-6 text-gray-900">
                  Book Your Consultation
                </h3>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 font-normal">
                  Schedule a free teleconsult with a verified specialist in minutes. Browse 1,200+ doctors across 30+ specialties.
                </p>
                <div className="space-y-4">
                  {[
                    'Choose from 1,200+ verified specialists',
                    'Free initial consultation',
                    'Same-day appointments available',
                    'Secure video calling platform'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#5B8DEF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#5B8DEF] text-white text-2xl font-normal mb-6">
                  2
                </div>
                <h3 className="text-2xl sm:text-4xl font-normal mb-4 sm:mb-6 text-gray-900">
                  Get AI-Powered Treatment Plan
                </h3>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 font-normal">
                  Receive a personalized care plan with transparent pricing. Our AI analyzes your case for instant financing pre-approval.
                </p>
                <div className="space-y-4">
                  {[
                    'Transparent, itemized pricing',
                    'AI-powered diagnostic assistance',
                    'Instant financing pre-approval',
                    'Multiple treatment options compared'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#5B8DEF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50 p-8">
                  {/* Mock Dashboard */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B8DEF]/10 to-purple-100 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-[#5B8DEF]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Treatment Plan Ready</h4>
                          <p className="text-xs text-green-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Pre-approved for financing
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900">Procedure Cost</span>
                            <span className="text-lg font-semibold text-gray-900">₹85,000</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>Centre: Bionest</span>
                            <span>Dr. Sharma</span>
                          </div>
                        </div>

                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">Monthly EMI</span>
                            <span className="text-lg font-semibold text-green-700">₹7,083</span>
                          </div>
                          <div className="text-xs text-gray-600">12 months • 0% interest</div>
                        </div>

                        <button className="w-full py-3 bg-[#5B8DEF] text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
                          Approve & Continue
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5B8DEF]/10 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-blue-50 p-8">
                  {/* Mock Payment Dashboard */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                          <CheckCircle2 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Financing Approved!</h4>
                          <p className="text-xs text-gray-500">Funds disbursed in 24 hours</p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">Loan Amount</span>
                          <span className="font-semibold text-gray-900">₹85,000</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">Tenure</span>
                          <span className="font-semibold text-gray-900">12 months</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm text-gray-600">Interest Rate</span>
                          <span className="font-semibold text-green-700">0%</span>
                        </div>
                      </div>

                      <div className="relative bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9] rounded-2xl p-6 text-white shadow-lg overflow-hidden">
                        {/* Subtle decorative circles */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />

                        <div className="relative">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div className="text-sm font-medium tracking-wide opacity-95">Next Payment Due</div>
                          </div>
                          <div className="text-5xl font-normal mb-2 tracking-tight">₹7,083</div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            <div className="text-sm font-medium">April 15, 2026</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-400/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5B8DEF]/10 rounded-full blur-3xl" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#5B8DEF] text-white text-2xl font-normal mb-6">
                  3
                </div>
                <h3 className="text-2xl sm:text-4xl font-normal mb-4 sm:mb-6 text-gray-900">
                  Approve Your Financing
                </h3>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 font-normal">
                  Choose your 0% EMI plan and get instant approval. Hospital receives payment within 24 hours so you can start treatment immediately.
                </p>
                <div className="space-y-4">
                  {[
                    'Flexible 3-24 month payment plans',
                    'Zero hidden fees or charges',
                    '24-hour fund disbursement',
                    'Simple, paperless approval'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#5B8DEF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Patients */}
      <section id="for-patients" className="py-10 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">FOR PATIENTS</p>
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-gray-900">
                Healthcare without{' '}
                <span className="text-[#5B8DEF]">financial barriers</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 font-normal">
                No more delaying treatment due to costs. Get instant access to quality medical care with flexible, interest-free financing options.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  '0% interest on all medical procedures',
                  'Instant approval within 2 hours',
                  'Flexible repayment: 3-24 months',
                  'No hidden fees or charges'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#5B8DEF]" />
                    <p className="text-base sm:text-lg font-normal text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={onLoginRequest}
                className="bg-black text-white font-normal px-8 rounded-full hover:bg-gray-800"
              >
                Get Started as Patient
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Doctors */}
      <section id="for-doctors" className="py-10 md:py-32 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">FOR HEALTHCARE PROVIDERS</p>
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-gray-900">
                Focus on care,{' '}
                <span className="text-[#5B8DEF]">not payments</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 font-normal">
                Instant payment settlements, AI-powered diagnostics, and seamless teleconsultation platform. Let us handle the financial complexity.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  'Instant settlements within 24 hours',
                  'AI diagnostic assistance',
                  'Integrated teleconsultation platform',
                  'Automated patient financing'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#5B8DEF]" />
                    <p className="text-base sm:text-lg font-normal text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={onDoctorLoginRequest}
                  className="bg-black text-white font-normal px-8 rounded-full hover:bg-gray-800"
                >
                  Doctor Login
                </Button>
                <Button
                  variant="outline"
                  onClick={onStartOnboarding}
                  className="border-2 border-gray-300 text-gray-700 font-normal px-8 rounded-full hover:bg-gray-50"
                >
                  Join Our Network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 sm:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-24">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 text-gray-900 leading-tight">
              Building a healthier India,<br />one patient at a time
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
              Empowering clinical teams to work smarter, patients to stay informed and engaged,<br className="hidden lg:block" />
              and healthcare providers to deliver lasting outcomes—all at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                value: '50,000+',
                label: 'Patients served',
                sublabel: 'Across 120+ partner clinics & hospitals',
                color: 'from-blue-50 to-blue-50/30'
              },
              {
                value: '1,200+',
                label: 'Verified specialists',
                sublabel: 'Across 30+ medical specialties',
                color: 'from-purple-50 to-purple-50/30'
              },
              {
                value: '₹25Cr+',
                label: 'Medical financing disbursed',
                sublabel: '99.8% approval rate • 0% interest',
                color: 'from-green-50 to-green-50/30'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`relative text-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${stat.color} border border-gray-200/50 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300`}>
                  {/* Subtle decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative">
                    <div className="mb-6">
                      <p className="text-4xl sm:text-7xl font-normal text-gray-900 mb-2 sm:mb-3 tracking-tight">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-lg text-gray-900 font-medium mb-2 leading-snug">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-600 font-normal">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-32 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-sm font-normal text-gray-600">Patient Stories</span>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-gray-900">
              Trusted by thousands of{' '}
              <span className="text-[#5B8DEF]">happy patients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Knee Replacement Patient',
                location: '32, Bangalore',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
                quote: 'BEXORA made my knee surgery possible when I thought I\'d have to wait years. The 0% EMI option was a lifesaver, and the teleconsult with Dr. Verma was so convenient.',
                rating: 5
              },
              {
                name: 'Rajesh Kumar',
                role: 'Cardiac Procedure Patient',
                location: '45, Mumbai',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                quote: 'The approval process was incredibly fast. Within 2 hours, I had financing approved for my cardiac procedure. The team guided me through every step with compassion.',
                rating: 5
              },
              {
                name: 'Meera Reddy',
                role: 'Cataract Surgery Patient',
                location: '58, Hyderabad',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
                quote: 'As a retired teacher, I was worried about the cost. BEXORA\'s friendly support team and flexible payment options made everything stress-free. I can see clearly now!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-5 sm:p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#5B8DEF] text-[#5B8DEF]" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-8 font-normal text-base">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <ImageWithFallback src={testimonial.image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-normal text-lg text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 font-normal">{testimonial.location}</p>
                      <p className="text-xs text-gray-400 font-normal mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-10 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-20">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">ENTERPRISE-GRADE SECURITY</p>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-gray-900">
              Your data is{' '}
              <span className="text-[#5B8DEF]">completely secure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Bank-grade encryption with full HIPAA, PCI-DSS, and DPDP Act compliance. Your health data never leaves our secure infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'End-to-End Encryption',
                description: 'AES-256 encryption for all medical records, consultations, and financial transactions at rest and in transit.'
              },
              {
                icon: ShieldCheck,
                title: 'HIPAA Compliant',
                description: 'Full compliance with healthcare data protection standards. Regular third-party audits and penetration testing.'
              },
              {
                icon: CreditCard,
                title: 'PCI-DSS Level 1',
                description: 'Highest level of payment security certification. Tokenized card storage — we never see your card details.'
              },
              {
                icon: Globe,
                title: 'DPDP Act Ready',
                description: 'Compliant with India\'s Digital Personal Data Protection Act. Your data stays in India on certified infrastructure.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-5 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#5B8DEF]/20 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[#5B8DEF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges Row */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {[
              'SOC 2 Type II Certified',
              'ISO 27001 Compliant',
              'RBI Regulated NBFC Partner',
              '256-bit SSL Encryption'
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <Shield className="w-4 h-4 text-[#5B8DEF]" />
                <span className="text-sm font-medium text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Transparency Section */}
      <section className="py-10 md:py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Eye className="w-4 h-4 text-[#5B8DEF]" />
              <span className="text-sm font-medium text-gray-700">Transparency & Data Use</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-gray-900">
              What data we collect{' '}
              <span className="text-[#5B8DEF]">and why</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal mb-4">
              BEXORA (operated by Dentifrice Private Limited) is a healthcare fintech platform that connects patients with verified specialists for video consultations and provides 0% interest EMI financing for medical treatments.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto font-normal">
              We use <strong>Google Sign-In</strong> to authenticate users securely. When you sign in with Google, we request only your <strong>name, email address, and profile photo</strong> (basic profile scopes). Below is a full breakdown of every type of data we collect and exactly why.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: User,
                title: 'Name & Email',
                source: 'Google Sign-In',
                purpose: 'To create and identify your account, send appointment confirmations and important health notifications.'
              },
              {
                icon: Shield,
                title: 'Profile Picture',
                source: 'Google Sign-In',
                purpose: 'To personalise your dashboard and help doctors recognise you during teleconsultations.'
              },
              {
                icon: FileText,
                title: 'Health & Appointment Data',
                source: 'You provide directly',
                purpose: 'To match you with the right specialists, track appointments, and manage your medical financing.'
              },
              {
                icon: CreditCard,
                title: 'Payment & Financial Info',
                source: 'You provide directly',
                purpose: 'To process EMI applications and disbursals through our regulated NBFC financing partners.'
              },
              {
                icon: Lock,
                title: 'Device & Usage Data',
                source: 'Automatic (analytics)',
                purpose: 'To improve platform performance, detect fraud, and personalise your experience via cookies.'
              },
              {
                icon: Globe,
                title: 'KYC / Identity Verification',
                source: 'You provide directly',
                purpose: 'Required by financing partners for regulatory compliance and loan eligibility assessments.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#5B8DEF]/30 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-[#5B8DEF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                    <p className="text-xs text-[#5B8DEF] font-medium mb-2 bg-blue-50 inline-block px-2 py-0.5 rounded-full">{item.source}</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">
              We never sell your personal data. Full details on data handling, retention, and your rights are in our policies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B8DEF] text-white text-sm font-medium rounded-full hover:bg-[#4A7DD9] transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-[#5B8DEF] hover:text-[#5B8DEF] transition-colors"
              >
                <FileText className="w-4 h-4" />
                Terms of Service
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              Privacy Policy URL: <span className="font-mono text-gray-500">https://BEXORA.org/privacy-policy</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-32 bg-gradient-to-br from-[#5B8DEF] to-[#4A7DD9] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-normal tracking-tight mb-6 text-white">
              Don't let cost delay your care
            </h2>
            <p className="text-base sm:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto">
              Join 50,000+ patients who've accessed quality healthcare with zero financial stress. Get financing pre-approved in under 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
              <Button
                size="lg"
                onClick={onLoginRequest}
                className="bg-white text-[#5B8DEF] font-medium px-8 sm:px-10 h-13 sm:h-14 text-base rounded-full hover:bg-gray-100 shadow-xl transition-all"
              >
                Patient Login
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                onClick={onDoctorLoginRequest}
                className="bg-white/15 backdrop-blur-sm text-white font-medium px-8 sm:px-10 h-13 sm:h-14 text-base rounded-full border border-white/30 hover:bg-white/25 transition-all"
              >
                Doctor Login
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No credit check required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>0% interest guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <SharedFooter onAdminLoginRequest={onAdminLoginRequest} />
    </div>
  );
};