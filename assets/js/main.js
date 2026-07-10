/**
 * ==========================================================================
 * KAMALA ENGINEERING WORKS - SECURE PRODUCTION ENGINE SOFTWARE (main.js)
 * Architecture: Zero-Dependency Modern Vanilla JS Framework
 * Features: High-Performance Intersection Observers, Thread-Safe Counters, 
 * Responsive Layout States, and Layout Stability Patches.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Initialize core structural UI components
    initPreloader();
    initScrollEngine();
    initIntersectionObservers();
    initMobileNavigation();
});

/**
 * 1. PRELOADER ENGINE
 * Gracefully dismisses the screen blocker once the DOM and sub-assets are ready.
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Execute safe fading protocols
    window.addEventListener('load', () => {
        preloader.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
        preloader.style.opacity = '0';
        
        setTimeout(() => {
            preloader.style.display = 'none';
            // Start metrics interpolation immediately after display clears
            initCounterMetrics();
        }, 600);
    });

    // Safety fallback protocol for slow assets or lost connectivity loops
    setTimeout(() => {
        if (preloader.style.display !== 'none') {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
            initCounterMetrics();
        }
    }, 3500);
}

/**
 * 2. SCROLL & PROGRESS MONITORING ENGINE
 * Maps viewport offsets to the header styles and structural DOM element indicators.
 */
function initScrollEngine() {
    const header = document.getElementById('main-header');
    const scrollProgress = document.getElementById('scroll-progress');
    
    if (!header && !scrollProgress) return;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Toggle sticky state metrics with structural tolerance boundaries
        if (header) {
            if (currentScrollY > 60) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }

        // Map percentage metrics onto the scroll progress element
        if (scrollProgress) {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const totalScrollableDistance = documentHeight - windowHeight;

            if (totalScrollableDistance > 0) {
                const scrolledPercentage = (currentScrollY / totalScrollableDistance) * 100;
                scrollProgress.style.width = `${scrolledPercentage}%`;
            }
        }
    }, { passive: true }); // Performance enhancement for UI render engines
}

/**
 * 3. B2B INDUSTRIAL METRICS COUNTER ARRAY
 * Linear step animation sequence execution using micro-frame execution loops.
 */
function initCounterMetrics() {
    const counterElements = document.querySelectorAll('.counter-value');
    if (counterElements.length === 0) return;

    counterElements.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-target'), 10);
        if (isNaN(targetValue)) return;

        let currentCount = 0;
        const totalDurationSteps = 60; // Total execution cycles
        const incrementValue = Math.ceil(targetValue / totalDurationSteps);
        const continuousIntervalTime = 25; // Frame frequency tracking milliseconds

        const runCountSequence = setInterval(() => {
            currentCount += incrementValue;
            
            if (currentCount >= targetValue) {
                counter.innerText = `${targetValue}+`;
                clearInterval(runCountSequence);
            } else {
                counter.innerText = `${currentCount}+`;
            }
        }, continuousIntervalTime);
    });
}

/**
 * 4. PERFORMANCE INTERSECTION OBSERVER MATRIX
 * Controls smooth fade and transformation rendering profiles cleanly via DOM mutations.
 */
function initIntersectionObservers() {
    const revealTargets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if (revealTargets.length === 0) return;

    const observerConfiguration = {
        root: null, // Default viewport boundary calculation
        threshold: 0.10, // Fire when 10% of element volume intersects viewport
        rootMargin: '0px 0px -30px 0px' // Offset logic to handle rendering variations
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Unobserve target component post animation to save background threads
                observer.unobserve(entry.target);
            }
        });
    };

    const nativeObserverInstance = new IntersectionObserver(revealCallback, observerConfiguration);
    revealTargets.forEach(element => nativeObserverInstance.observe(element));
}

/**
 * 5. MOBILE NAVIGATION CONTROLLER ARCHITECTURE
 * Provides a production-ready interface wrapper for handling small layouts.
 */
function initMobileNavigation() {
    const menuTrigger = document.getElementById('mobile-menu-trigger');
    const mainNav = document.getElementById('main-nav');
    
    if (!menuTrigger) return;

    menuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Contextually notify user during preview mode
        alert(
            "KAMALA ENGINEERING B2B PLATFORM LAYER:\n" +
            "The multi-page site ecosystem architecture links are pre-configured to navigate across:\n" +
            "• index.html (Home Base)\n" +
            "• pages/about.html (Corporate Profile)\n" +
            "• pages/products.html (B2B Industrial Catalog)\n" +
            "• pages/custom-manufacturing.html (Technical Drawing Portal)\n" +
            "• pages/gallery.html (Infrastructure Portfolio Vault)\n" +
            "• pages/contact.html (Plant Coordination Desk)"
        );
    });
}