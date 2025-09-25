// DOM Elements
const moduleCards = document.querySelectorAll('.module-card');
const modal = document.getElementById('moduleModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Module Details Data
const moduleDetails = {
    inventory: {
        title: 'إدارة المخزون والمنتجات',
        icon: 'fas fa-warehouse',
        description: 'قاعدة النظام الأساسية لتعريف وإدارة جميع المنتجات والمخزون',
        features: [
            {
                title: 'البحث المتقدم',
                description: 'إمكانية البحث عن المنتجات باستخدام الباركود، اسم المنتج، اللون، والحجم',
                icon: 'fas fa-search'
            },
            {
                title: 'معلومات المنتج الشاملة',
                description: 'رمز فريد (SKU/Barcode)، اسم المنتج، سعر البيع، الكمية المتاحة، والصور',
                icon: 'fas fa-info-circle'
            },
            {
                title: 'صور المنتجات',
                description: 'ربط كل منتج بصورة أو أكثر لتسهيل التعرف عليه من قبل الموظفين',
                icon: 'fas fa-image'
            },
            {
                title: 'المنتجات متعددة الخصائص',
                description: 'دعم المنتجات التي لها خيارات مختلفة مثل الألوان والأحجام',
                icon: 'fas fa-palette'
            },
            {
                title: 'تغذية البيانات عبر Excel',
                description: 'ملفات Excel منفصلة للمنتجات الأساسية، الكميات، الألوان والأحجام، والخصومات',
                icon: 'fas fa-file-excel'
            },
            {
                title: 'رفع الصور ',
                description: 'رفع الصور بشكل  مع ربط تلقائي باستخدام رمز المنتج (SKU)',
                icon: 'fas fa-upload'
            }
        ]
    },
    pos: {
        title: 'نقطة البيع (POS)',
        icon: 'fas fa-cash-register',
        description: 'الواجهة الرئيسية للتفاعل بين موظف المبيعات والكاشير',
        features: [
            {
                title: 'إنشاء سلة المبيعات',
                description: 'إضافة المنتجات للسلة عبر مسح الباركود أو البحث اليدوي',
                icon: 'fas fa-shopping-cart'
            },
            {
                title: 'إرسال السلة للكاشير',
                description: 'نظام إرسال إلكتروني للسلة إلى "طابور الموافقة" لدى الكاشير',
                icon: 'fas fa-paper-plane'
            },
            {
                title: 'شاشة الكاشير',
                description: 'عرض قائمة بسلات البيع المعلقة للموافقة مع إمكانية التعديل',
                icon: 'fas fa-desktop'
            },
            {
                title: 'صلاحية التعديل',
                description: 'إمكانية تعديل عدد القطع في السلة من قبل الكاشير',
                icon: 'fas fa-edit'
            },
            {
                title: 'تأكيد البيع',
                description: 'تأكيد العملية وخصم الكميات من المخزن وتسجيل الفاتورة',
                icon: 'fas fa-check-double'
            },
            {
                title: 'حاسبة الخصم المرن',
                description: 'أداة تطبيق خصم مرن (5%-10%) على منتجات محددة',
                icon: 'fas fa-calculator'
            }
        ]
    },
    users: {
        title: 'إدارة المستخدمين والصلاحيات',
        icon: 'fas fa-users-cog',
        description: 'نظام متكامل للتحكم في صلاحيات وأدوار المستخدمين',
        features: [
            {
                title: 'مدير النظام (Admin)',
                description: 'يمتلك جميع الصلاحيات وإمكانية إدارة النظام بالكامل',
                icon: 'fas fa-user-shield'
            },
            {
                title: 'موظف المبيعات (Salesperson)',
                description: 'مقتصر على إنشاء سلات البيع وإضافة العملاء',
                icon: 'fas fa-user-tie'
            },
            {
                title: 'الكاشير (Cashier)',
                description: 'مراجعة السلات، تعديل الكميات، تأكيد البيع، والمرتجعات',
                icon: 'fas fa-cash-register'
            },
            {
                title: 'الصلاحيات المحددة',
                description: 'تحكم دقيق في الوظائف المتاحة لكل دور',
                icon: 'fas fa-key'
            }
        ]
    },
    crm: {
        title: 'إدارة العملاء (CRM)',
        icon: 'fas fa-address-book',
        description: 'بناء قاعدة بيانات العملاء للاستفادة منها في التسويق',
        features: [
            {
                title: 'بيانات العميل',
                description: 'رقم الهاتف (معرف أساسي)، الاسم، تاريخ الميلاد، الجنس',
                icon: 'fas fa-user'
            },
            {
                title: 'ربط المبيعات بالعميل',
                description: 'ربط كل فاتورة بحساب العميل لتتبع تاريخ المشتريات',
                icon: 'fas fa-link'
            },
            {
                title: 'قاعدة بيانات مركزية',
                description: 'نظام مركزي لحفظ وإدارة بيانات العملاء',
                icon: 'fas fa-database'
            },
            {
                title: 'تقارير العملاء',
                description: 'تقارير تفصيلية عن أداء وسلوك العملاء',
                icon: 'fas fa-chart-pie'
            }
        ]
    },
    reports: {
        title: 'التقارير والتحليلات',
        icon: 'fas fa-chart-bar',
        description: 'توفير رؤية شاملة عن أداء العمل والمبيعات',
        features: [
            {
                title: 'تقارير المبيعات',
                description: 'إجمالي المبيعات والمنتجات الأكثر مبيعاً',
                icon: 'fas fa-chart-line'
            },
            {
                title: 'تقرير مبيعات الموظف',
                description: 'تتبع أداء كل موظف وإحصائيات مبيعاته',
                icon: 'fas fa-user-chart'
            },
            {
                title: 'تقارير المخزون',
                description: 'تقارير الجرد والمخزون الحالي في كل فرع',
                icon: 'fas fa-boxes'
            },
            {
                title: 'تقارير الخصومات',
                description: 'تقارير تفصيلية عن الخصومات المطبقة',
                icon: 'fas fa-percentage'
            }
        ]
    },
    returns: {
        title: 'إدارة المرتجعات',
        icon: 'fas fa-undo',
        description: 'نظام متكامل لإدارة عمليات إرجاع المنتجات',
        features: [
            {
                title: 'صلاحية الاسترجاع',
                description: 'الكاشير هو المسؤول الوحيد عن تنفيذ عمليات الإرجاع',
                icon: 'fas fa-user-check'
            },
            {
                title: 'البحث عن الفاتورة الأصلية',
                description: 'نظام بحث متطور للعثور على الفاتورة الأصلية',
                icon: 'fas fa-receipt'
            },
            {
                title: 'تحديد المنتج المُراد إرجاعه',
                description: 'اختيار دقيق للمنتجات المراد إرجاعها من الفاتورة',
                icon: 'fas fa-box-open'
            },
            {
                title: 'إعادة الكمية للمخزن',
                description: 'تحديث تلقائي للمخزون عند إتمام عملية الإرجاع',
                icon: 'fas fa-warehouse'
            },
            {
                title: 'تحديد البائع الأصلي',
                description: 'إمكانية تحديد اسم الموظف الذي باع القطعة',
                icon: 'fas fa-user-tag'
            }
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    if (mobileMenuBtn && mobileMenuOverlay) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close mobile menu
        const closeMobileMenu = () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileMenuClose?.addEventListener('click', closeMobileMenu);
        
        // Close when clicking on overlay
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeMobileMenu();
            }
        });

        // Close menu when clicking on navigation links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                closeMobileMenu();
                
                // Handle smooth scrolling for hash links
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        setTimeout(() => {
                            targetSection.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }, 300);
                    }
                }
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Smooth scrolling for internal navigation links only
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Module card click handlers with improved animation
    moduleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-10px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            }, 100);
            
            const moduleType = this.dataset.module;
            if (moduleDetails[moduleType]) {
                showModuleDetails(moduleDetails[moduleType]);
            }
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Modal close handlers
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Animation on scroll with staggered effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100); // Staggered animation
            }
        });
    }, observerOptions);

    // Observe elements for animation with different delays
    const moduleCards = document.querySelectorAll('.module-card');
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const featureCards = document.querySelectorAll('.feature-card');
    
    moduleCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    timelineSteps.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(' + (index % 2 === 0 ? '-50px' : '50px') + ') scale(0.95)';
        el.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => observer.observe(el), index * 50);
    });
    
    featureCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) rotateX(15deg)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Counter animation for statistics (if needed)
    animateCounters();

    // Add floating particles effect
    createFloatingParticles();
});

// Show module details in modal
function showModuleDetails(module) {
    const content = `
        <div class="modal-header">
            <i class="${module.icon}" style="font-size: 2rem; color: #667eea; margin-left: 15px;"></i>
            <h2 style="color: #2d3748; margin-bottom: 10px;">${module.title}</h2>
            <p style="color: #718096; margin-bottom: 30px;">${module.description}</p>
        </div>
        <div class="modal-features">
            ${module.features.map(feature => `
                <div class="modal-feature" style="padding: 20px; margin-bottom: 15px; background: #f7fafc; border-radius: 10px; border-right: 4px solid #667eea;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <i class="${feature.icon}" style="font-size: 1.2rem; color: #667eea; margin-left: 10px;"></i>
                        <h4 style="color: #2d3748; margin: 0;">${feature.title}</h4>
                    </div>
                    <p style="color: #4a5568; margin: 0; line-height: 1.6;">${feature.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

// Counter animation function
function animateCounters() {
    const counters = document.querySelectorAll('.stat');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('animate');
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Create floating particles effect
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s infinite linear;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .animate {
        animation: pulse 2s ease-in-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .modal-header {
        text-align: center;
        border-bottom: 2px solid #edf2f7;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    
    .modal-features {
        max-height: 400px;
        overflow-y: auto;
    }
    
    .modal-feature {
        transition: all 0.3s ease;
    }
    
    .modal-feature:hover {
        background: #edf2f7 !important;
        transform: translateX(5px);
    }
`;
document.head.appendChild(style);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Add loading states for future AJAX calls
function showLoading(element) {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.style.cssText = 'text-align: center; padding: 20px;';
    element.appendChild(loading);
}

function hideLoading(element) {
    const loading = element.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Export functions for potential future use
window.PosSystem = {
    showModuleDetails,
    showLoading,
    hideLoading
};