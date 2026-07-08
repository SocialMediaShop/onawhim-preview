'use client';

import { useEffect } from 'react';

interface PackageInteractionsProps {
  packageName: string;
}

export default function PackageInteractions({ packageName }: PackageInteractionsProps) {
  useEffect(() => {
    // 1. Navigation scroll state
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Mobile menu toggle
    const toggleBtn = document.getElementById('navtoggle');
    const navLinks = document.getElementById('navlinks');
    
    const handleToggle = () => {
      if (navLinks) {
        navLinks.classList.toggle('open');
      }
    };
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', handleToggle);
    }

    const handleLinkClick = () => {
      if (navLinks) {
        navLinks.classList.remove('open');
      }
    };

    const links = document.querySelectorAll('#navlinks a');
    links.forEach(a => a.addEventListener('click', handleLinkClick));

    // 3. Reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // 4. Enquiry -> Netlify Forms AJAX
    const form = document.getElementById('enquiryForm') as HTMLFormElement | null;
    const formNote = document.getElementById('formNote');
    
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      if (!form) return;
      
      const fname = (form.querySelector('#fname') as HTMLInputElement | null)?.value || '';
      const country = (form.querySelector('#country') as HTMLInputElement | null)?.value || '';
      const email = (form.querySelector('#email') as HTMLInputElement | null)?.value || '';
      const guests = (form.querySelector('#guests') as HTMLSelectElement | null)?.value || '';
      const dates = (form.querySelector('#dates') as HTMLInputElement | null)?.value || '';
      const msg = (form.querySelector('#msg') as HTMLTextAreaElement | null)?.value || '';

      if (!fname.trim()) {
        if (formNote) {
          formNote.textContent = 'Please enter your full name.';
          formNote.style.color = '#ff6b6b';
        }
        return;
      }
      if (!email.trim() || !email.includes('@') || !email.includes('.')) {
        if (formNote) {
          formNote.textContent = 'Please enter a valid email address.';
          formNote.style.color = '#ff6b6b';
        }
        return;
      }

      if (formNote) {
        formNote.textContent = 'Sending your enquiry...';
        formNote.style.color = 'var(--taupe)';
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "enquiry",
          fname,
          country,
          email,
          guests,
          dates,
          msg: `Selected Package: ${packageName}\n\n${msg}`
        }).toString()
      })
      .then(() => {
        // Facebook Lead Event
        const w = window as any;
        if (w.fbq) w.fbq('track', 'Lead');
        
        // Replace form content with success card
        form.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; background: rgba(201, 147, 42, 0.08); border: 1px solid var(--ochre); border-radius: 3px; max-width: 500px; margin: 0 auto;">
            <h3 style="font-family: var(--serif); font-size: 24px; color: var(--ochre); margin-bottom: 12px;">Enquiry Sent</h3>
            <p style="color: var(--warm-grey); font-size: 15px; line-height: 1.6; margin: 0;">
              Thank you, <strong>${fname}</strong>! Your enquiry for the <strong>${packageName}</strong> package has been sent successfully. A dedicated travel expert will respond to you within 24 hours.
            </p>
          </div>
        `;
      })
      .catch(error => {
        console.error("Form submission error:", error);
        if (formNote) {
          formNote.textContent = 'Submission failed. Please email info@onawhim.co.za directly.';
          formNote.style.color = '#ff6b6b';
        }
      });
    };

    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (toggleBtn) toggleBtn.removeEventListener('click', handleToggle);
      links.forEach(a => a.removeEventListener('click', handleLinkClick));
      if (form) form.removeEventListener('submit', handleFormSubmit);
      io.disconnect();
    };
  }, [packageName]);

  return null;
}
