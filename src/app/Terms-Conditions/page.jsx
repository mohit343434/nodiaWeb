"use client";

import React from 'react'
import { Globe, ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Gavel, Clock } from 'lucide-react';

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Main Content */}
            <main className="container mx-auto px-6 py-5 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    {/* Title */}
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center mb-4">
                            <FileText className="w-12 h-12 text-blue-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Terms & Conditions</h1>
                        <p className="text-gray-600">Last updated: September 26, 2025</p>
                    </div>

                    {/* Terms Content */}
                    <div className="prose prose-gray max-w-none">

                        {/* Introduction */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <Scale className="w-5 h-5 mr-2 text-blue-600" />
                                Agreement to Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Welcome to Wellocia ("Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website and travel services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.
                            </p>
                        </section>

                        {/* Definitions */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Definitions</h2>
                            <div className="space-y-3 text-gray-700">
                                <p><strong>"Service"</strong> refers to the website and travel planning services provided by Wellocia.</p>
                                <p><strong>"User"</strong> refers to any individual who accesses or uses our Service.</p>
                                <p><strong>"Content"</strong> refers to all information, text, images, and other materials available through our Service.</p>
                                <p><strong>"Third-Party Services"</strong> refers to external services like hotels, airlines, and booking platforms we may link to or integrate with.</p>
                            </div>
                        </section>

                        {/* Use of Services */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                                Use of Our Services
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Permitted Use</h3>
                                    <p>You may use our services for:</p>
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li>Planning and booking travel arrangements</li>
                                        <li>Accessing travel information and recommendations</li>
                                        <li>Communicating with our support team</li>
                                        <li>Using our itinerary planning tools</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Prohibited Activities</h3>
                                    <p>You agree not to:</p>
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li>Use our services for any illegal or unauthorized purpose</li>
                                        <li>Interfere with or disrupt our services or servers</li>
                                        <li>Attempt to gain unauthorized access to our systems</li>
                                        <li>Use automated tools to access our services without permission</li>
                                        <li>Violate any applicable laws or regulations</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Account Registration */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Registration</h2>
                            <div className="space-y-3 text-gray-700">
                                <p>To access certain features of our Service, you may need to create an account. You agree to:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Provide accurate, current, and complete information</li>
                                    <li>Maintain and update your account information</li>
                                    <li>Keep your account credentials secure and confidential</li>
                                    <li>Accept responsibility for all activities under your account</li>
                                    <li>Notify us immediately of any unauthorized use</li>
                                </ul>
                            </div>
                        </section>

                        {/* Booking and Payments */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                                Booking and Payments
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Booking Process</h3>
                                    <p>When making bookings through our platform:</p>
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li>All bookings are subject to availability and confirmation</li>
                                        <li>Prices may change until booking is confirmed</li>
                                        <li>You are responsible for ensuring travel document validity</li>
                                        <li>Special requests are subject to third-party provider approval</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Payment Terms</h3>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Payment is due at the time of booking unless otherwise specified</li>
                                        <li>We accept major credit cards and other specified payment methods</li>
                                        <li>All prices are in the currency specified at booking</li>
                                        <li>Additional fees may apply for certain services or payment methods</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Cancellation and Refunds */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cancellation and Refunds</h2>
                            <div className="space-y-3 text-gray-700">
                                <p>Cancellation and refund policies vary depending on the service provider and booking type:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Each booking is subject to the cancellation policy of the respective service provider</li>
                                    <li>Cancellation fees may apply as per provider terms</li>
                                    <li>Refunds will be processed according to the original payment method</li>
                                    <li>Processing time for refunds may vary by payment method and provider</li>
                                    <li>Non-refundable bookings cannot be cancelled for a refund</li>
                                </ul>
                            </div>
                        </section>

                        {/* Third-Party Services */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our platform may integrate with or link to third-party services (hotels, airlines, booking platforms, etc.):
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                <li>We are not responsible for the availability, content, or services of third parties</li>
                                <li>Your use of third-party services is subject to their respective terms and conditions</li>
                                <li>We do not endorse or guarantee third-party services</li>
                                <li>Any disputes with third-party providers must be resolved directly with them</li>
                            </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property Rights</h2>
                            <div className="space-y-3 text-gray-700">
                                <p>The Service and its content are owned by Wellocia and protected by intellectual property laws:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>All content, features, and functionality are owned by us or our licensors</li>
                                    <li>You may not reproduce, distribute, or create derivative works without permission</li>
                                    <li>Trademarks and logos are property of their respective owners</li>
                                    <li>User-generated content remains your property, but you grant us a license to use it</li>
                                </ul>
                            </div>
                        </section>

                        {/* Disclaimers */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                                Disclaimers and Limitation of Liability
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Service Disclaimer</h3>
                                    <p>Our services are provided "as is" and "as available" without warranties of any kind. We do not guarantee:</p>
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li>Uninterrupted or error-free service</li>
                                        <li>Accuracy of all information provided</li>
                                        <li>Availability of third-party services</li>
                                        <li>Specific travel outcomes or experiences</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Limitation of Liability</h3>
                                    <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
                                </div>
                            </div>
                        </section>

                        {/* User Content */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">User-Generated Content</h2>
                            <div className="space-y-3 text-gray-700">
                                <p>If you submit content to our platform (reviews, photos, comments):</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>You retain ownership of your content</li>
                                    <li>You grant us a non-exclusive license to use, display, and distribute your content</li>
                                    <li>You represent that you have all necessary rights to submit the content</li>
                                    <li>Content must not violate any laws or third-party rights</li>
                                    <li>We reserve the right to remove content that violates these terms</li>
                                </ul>
                            </div>
                        </section>

                        {/* Privacy */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we handle your information.
                            </p>
                        </section>

                        {/* Indemnification */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Indemnification</h2>
                            <p className="text-gray-700 leading-relaxed">
                                You agree to indemnify, defend, and hold harmless Wellocia and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <Gavel className="w-5 h-5 mr-2 text-blue-600" />
                                Governing Law and Jurisdiction
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
                            </p>
                        </section>

                        {/* Termination */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Termination</h2>
                            <div className="space-y-3 text-gray-700">
                                <p>We may terminate or suspend your access to our services:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Immediately for violation of these Terms</li>
                                    <li>For suspected fraudulent or illegal activity</li>
                                    <li>At our discretion with reasonable notice</li>
                                    <li>Upon your request to close your account</li>
                                </ul>
                                <p>Upon termination, your right to use our services ceases immediately, but certain provisions of these Terms shall survive termination.</p>
                            </div>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                            </p>
                        </section>

                        {/* Severability */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Severability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the intent of the original provision.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700"><strong>Email:</strong> legal@wellocia.com</p>
                                <p className="text-gray-700"><strong>Phone:</strong> +91 XXX XXX XXXX</p>
                                <p className="text-gray-700"><strong>Address:</strong> [Your Business Address]</p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <Globe className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-600 text-sm">&copy; 2025 Wellocia. All rights reserved.</span>
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</a>
                            <a href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">Privacy Policy</a>
                            <a href="/contact" className="text-gray-500 hover:text-gray-700 transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default page