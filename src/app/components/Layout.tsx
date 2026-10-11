import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from './UI';
import { Stethoscope, ShieldCheck, Menu, X } from 'lucide-react';

export const SharedHeader = ({
    onLoginRequest,
    onDoctorLoginRequest,
    onStart
}: {
    onLoginRequest?: () => void,
    onDoctorLoginRequest?: () => void,
    onStart?: () => void
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isActive = (href: string) => {
        if (href.startsWith('/#')) return false;
        return location.pathname === href || location.pathname.startsWith(href + '/');
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <a href="/" className="flex items-center gap-2">
                            <img src="/bexora_logo.jpeg" alt="BEXORA" className="w-8 h-8 rounded-lg object-cover" />
                            <span className="text-xl sm:text-2xl font-normal tracking-tight text-gray-900">
                                BEXORA
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {[
                            { href: '/#for-patients', label: 'For Patients' },
                            { href: '/#for-doctors', label: 'For Doctors' },
                            { href: '/#how-it-works', label: 'Financing' },
                        ].map(({ href, label }) => (
                            <a key={href} href={href} className={`text-sm font-normal transition-colors relative ${
                                isActive(href)
                                    ? 'text-[#5B8DEF] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#5B8DEF] after:rounded-full'
                                    : 'text-gray-700 hover:text-gray-900'
                            }`}>{label}</a>
                        ))}
                        <a href="/yellow-page" className={`text-sm font-normal transition-colors flex items-center gap-1 relative ${
                            isActive('/yellow-page')
                                ? 'text-amber-700 font-medium after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:rounded-full'
                                : 'text-amber-600 hover:text-amber-800'
                        }`}>
                            <Stethoscope className="w-3.5 h-3.5" />
                            Find Doctors
                        </a>
                    </div>

                    {/* CTA Buttons + Mobile Hamburger */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Button
                            variant="ghost"
                            onClick={onLoginRequest || (() => window.location.href = '/')}
                            className="hidden sm:flex text-gray-700 hover:text-gray-900 font-normal"
                        >
                            Patient Login
                        </Button>
                        <div className="hidden sm:block h-6 w-px bg-gray-200" />
                        <Button
                            variant="ghost"
                            onClick={onDoctorLoginRequest || (() => window.location.href = '/')}
                            className="hidden sm:flex text-[#5B8DEF] hover:text-blue-700 font-normal"
                        >
                            Doctor Login
                        </Button>
                        <Button
                            onClick={onStart || (() => window.location.href = '/')}
                            className="hidden sm:flex bg-black text-white font-normal px-5 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Get Started
                        </Button>
                        {/* Mobile hamburger */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
                    <div className="px-4 py-3 space-y-1">
                        {[
                            { href: '/#for-patients', label: 'For Patients' },
                            { href: '/#for-doctors', label: 'For Doctors' },
                            { href: '/#how-it-works', label: 'Financing' },
                        ].map(({ href, label }) => (
                            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 text-sm font-normal rounded-lg transition-colors ${
                                    isActive(href) ? 'bg-blue-50 text-[#5B8DEF] font-medium' : 'text-gray-700 hover:bg-gray-50'
                                }`}>{label}</a>
                        ))}
                        <a href="/yellow-page" onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-2 px-4 py-3 text-sm font-normal rounded-lg transition-colors ${
                            isActive('/yellow-page') ? 'bg-amber-50 text-amber-700 font-medium' : 'text-amber-600 hover:bg-amber-50'
                        }`}>
                            <Stethoscope className="w-4 h-4" /> Find Doctors
                        </a>
                        <div className="border-t border-gray-100 pt-3 pb-1 space-y-2">
                            <Button
                                variant="ghost"
                                onClick={() => { setMobileMenuOpen(false); (onLoginRequest || (() => {}))(); }}
                                className="w-full justify-start text-gray-700 font-normal"
                            >
                                Patient Login
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => { setMobileMenuOpen(false); (onDoctorLoginRequest || (() => {}))(); }}
                                className="w-full justify-start text-[#5B8DEF] font-normal"
                            >
                                Doctor Login
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export const SharedFooter = ({ onAdminLoginRequest }: { onAdminLoginRequest?: () => void }) => {
    return (
        <footer className="bg-black text-white">
            {/* Main footer grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand + company identity */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/bexora_logo.jpeg" alt="BEXORA" className="w-8 h-8 rounded-lg object-cover" />
                            <span className="text-xl font-normal tracking-tight">BEXORA</span>
                        </div>
                        <p className="text-gray-400 text-sm font-normal leading-relaxed mb-4">
                            Making quality healthcare accessible to everyone through smart financing solutions.
                        </p>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Operated by{' '}
                            <a href="https://dentifrice.in" target="_blank" rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#5B8DEF] transition-colors underline underline-offset-2">
                                Dentifrice Private Limited
                            </a>
                        </p>
                    </div>

                    {/* Platform links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">PLATFORM</h4>
                        <ul className="space-y-3 text-sm font-normal text-gray-300">
                            <li><a href="/#for-patients" className="hover:text-[#5B8DEF] transition-colors">For Patients</a></li>
                            <li><a href="/#for-doctors" className="hover:text-[#5B8DEF] transition-colors">For Doctors</a></li>
                            <li><a href="/#how-it-works" className="hover:text-[#5B8DEF] transition-colors">How It Works</a></li>
                            <li><a href="/yellow-page" className="hover:text-[#5B8DEF] transition-colors">Find Doctors</a></li>
                            <li><a href="/sitemap" className="hover:text-[#5B8DEF] transition-colors">Sitemap</a></li>
                        </ul>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">COMPANY</h4>
                        <ul className="space-y-3 text-sm font-normal text-gray-300">
                            <li><Link to="/about" className="hover:text-[#5B8DEF] transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-[#5B8DEF] transition-colors">Contact</Link></li>
                            <li>
                                <a href="https://dentifrice.in" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-[#5B8DEF] transition-colors">
                                    Dentifrice.in ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">LEGAL</h4>
                        <ul className="space-y-3 text-sm font-normal text-gray-300">
                            <li><Link to="/privacy-policy" className="hover:text-[#5B8DEF] transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-[#5B8DEF] transition-colors">Terms of Service</Link></li>
                            <li><Link to="/branding" className="hover:text-[#5B8DEF] transition-colors">Branding Guidelines</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Company identity block */}
                <div className="border-t border-gray-800 pt-8 pb-6 space-y-2">
                    <p className="text-sm font-medium text-gray-300">Dentifrice Private Limited</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        L-2/7, 3rd Floor, Shiksha Apartment, Sector-6, Vasundhara, Ghaziabad, Uttar Pradesh 201012, India
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-400">
                        <a href="mailto:Info@BEXORA.org" className="hover:text-[#5B8DEF] transition-colors">
                            Info@BEXORA.org
                        </a>
                        <a href="tel:+919319447636" className="hover:text-[#5B8DEF] transition-colors">
                            +91 9319447636
                        </a>
                        <a href="https://dentifrice.in" target="_blank" rel="noopener noreferrer"
                            className="hover:text-[#5B8DEF] transition-colors">
                            dentifrice.in ↗
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
                    <p>© 2026 BEXORA. All rights reserved. Operated by Dentifrice Private Limited.</p>
                    <Button
                        variant="ghost"
                        onClick={onAdminLoginRequest || (() => window.location.href = '/')}
                        className="flex items-center gap-2 text-gray-600 hover:text-white font-normal text-xs transition-colors"
                    >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Admin Portal
                    </Button>
                </div>
            </div>
        </footer>
    );
};
