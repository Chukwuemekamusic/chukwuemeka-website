'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SiInstagram, SiTiktok, SiFacebook, SiSpotify, SiApplemusic, SiAmazonmusic } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import socialLinksData from '@/lib/data/social-links.json';

export function Connect() {
  const { socialLinks, streamingPlatforms } = socialLinksData;
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <SiInstagram className="w-5 h-5" />;
      case 'tiktok': return <SiTiktok className="w-5 h-5" />;
      case 'facebook': return <SiFacebook className="w-5 h-5" />;
      default: return <div className="w-5 h-5 bg-stone-400 rounded" />;
    }
  };

  const getStreamingIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'spotify': return <SiSpotify className="w-5 h-5" />;
      case 'apple music': return <SiApplemusic className="w-5 h-5" />;
      case 'amazon music': return <SiAmazonmusic className="w-5 h-5" />;
      default: return <div className="w-5 h-5 bg-stone-400 rounded" />;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables not properly configured');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error details:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="py-24 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-stone-900 mb-6 font-serif">Connect</h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              Get in touch for bookings, collaborations, or just to share how
              the music has touched your heart.
            </p>
          </div>

          {/* Social Media & Streaming */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-16">
            {/* Social Media */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-light text-stone-900 font-serif mb-6">Social</h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center hover:bg-stone-200 transition-colors group"
                    title={`Follow on ${link.platform}`}
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>
            </div>

            {/* Streaming Platforms */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-light text-stone-900 font-serif mb-6">Music</h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                {streamingPlatforms.map((platform) => (
                  <a
                    key={platform.platform}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center hover:bg-stone-200 transition-colors group"
                    title={`Listen on ${platform.platform}`}
                  >
                    {getStreamingIcon(platform.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-light text-stone-900 font-serif mb-8">Get in Touch</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">There was an error sending your message. Please try again or email directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-stone-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="from_email" className="block text-sm font-medium text-stone-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Event Booking">Event Booking</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="General Question">General Question</option>
                    <option value="Testimony">Share a Testimony</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
      </Container>
    </section>
  );
}