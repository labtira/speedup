import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        cars: "Cars",
        about: "About",
        contact: "Contact",
        rentNow: "Rent Now"
      },
      hero: {
        badge: "Premium Car Rental in Morocco",
        title1: "DRIVE YOUR",
        title2: "DREAMS",
        title3: "TODAY",
        subtitle: "Experience unparalleled luxury and performance with our curated fleet of premium vehicles. We offer flexible rentals, competitive pricing, and 24/7 support across all major cities.",
        bookNow: "Book Now",
        contactUs: "Contact Us"
      },
      features: {
        title: "Why Choose Us",
        subtitle: "We provide the best car rental experience with a focus on luxury, comfort, and safety.",
        support: {
          title: "24/7 Support",
          desc: "Our dedicated team is always available to assist you anywhere in Morocco."
        },
        fleet: {
          title: "Premium Fleet",
          desc: "A curated selection of the world's most luxurious and powerful vehicles."
        },
        flexible: {
          title: "Flexible Rentals",
          desc: "Daily, weekly, or monthly rentals tailored to your specific needs."
        },
        price: {
          title: "Best Price",
          desc: "Premium experience at competitive rates with no hidden fees."
        }
      },
      home: {
        featured: {
          badge: "Top Selection",
          title: "Featured Vehicles",
          subtitle: "Explore our most popular premium vehicles available for immediate booking. Quality and performance guaranteed.",
          viewAll: "View All Cars"
        }
      },
      carDetails: {
        back: "Back to Cars",
        perDay: "per day",
        bookNow: "Book Now",
        contactUs: "Contact Us",
        specs: "Specifications",
        similarCars: "Similar Vehicles",
        description: "Experience the ultimate driving experience with the {{name}}. This vehicle combines power, elegance, and cutting-edge technology to provide you with an unforgettable journey across Morocco.",
        location: "Available in",
        transmission: "Transmission",
        fuel: "Fuel Type",
        capacity: "Capacity"
      },
      specs: {
        automatic: "Automatic",
        manual: "Manual",
        petrol: "Petrol",
        diesel: "Diesel",
        electric: "Electric",
        hybrid: "Hybrid",
        seats: "{{count}} Seats"
      },
      cities: {
        badge: "Explore Morocco",
        title: "Rent a car in your city",
        subtitle: "Find the perfect car in major cities across Morocco. We deliver to your doorstep or airport.",
        casablanca: "Casablanca",
        marrakech: "Marrakech",
        rabat: "Rabat",
        tangier: "Tangier"
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Don't just take our word for it. Here's what some of our valued clients have to say about their experience with us.",
        roles: {
          businessOwner: "Business Owner",
          tourist: "Tourist",
          freelancer: "Freelancer"
        },
        quotes: {
          omar: "SpeedUp provides the best premium car rental experience in Casablanca. The Mercedes G-Class I rented was in pristine condition, and the service was top-notch.",
          sarah: "Renting a Range Rover for our Marrakech trip was a dream. The delivery to the airport was on time, and the staff was extremely helpful. Highly recommended!",
          yassine: "Great selection of cars and very transparent pricing. No hidden fees. I've rented from them multiple times in Rabat and never had any issues."
        }
      },
      faqs: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our car rental process, policies, and services.",
        q1: {
          question: "What documents do I need to rent a car?",
          answer: "To rent a car, you'll typically need a valid driver's license (at least 2 years old), a passport or national ID card, and a credit card for the security deposit. International drivers may need an International Driving Permit depending on their home country."
        },
        q2: {
          question: "Is there an age limit for renting a premium vehicle?",
          answer: "Yes, for our premium and luxury fleet, the minimum age is usually 25 years old. Younger drivers (21-24) may be able to rent certain economy or mid-range models with an additional 'Young Driver' fee."
        },
        q3: {
          question: "Do you offer delivery to airports?",
          answer: "Absolutely! We provide free delivery and pickup services at major Moroccan airports including Casablanca (CMN), Marrakech (RAK), Rabat (RBA), and Tangier (TNG). Just let us know your flight details during booking."
        },
        q4: {
          question: "What is your fuel policy?",
          answer: "We operate on a 'Full to Full' policy. We provide the car with a full tank, and we ask that you return it full. This ensures you only pay for the fuel you actually use."
        },
        q5: {
          question: "Is insurance included in the price?",
          answer: "Basic insurance (Third Party Liability) is included in all rentals. We also offer comprehensive insurance (CDW - Collision Damage Waiver) with different levels of excess/deductible for your peace of mind."
        }
      },
      booking: {
        title: "Book Your {{car}}",
        subtitle: "Fill out the form below to complete your booking. We will contact you shortly to confirm.",
        carName: "Car Model",
        userName: "Full Name",
        phone: "Phone Number",
        pickupLocation: "Pickup Location",
        pickupDate: "Pickup Date",
        dropDate: "Drop-off Date",
        submit: "Complete Booking on WhatsApp",
        placeholders: {
          userName: "Enter your full name",
          phone: "Enter your phone number (+212...)",
          pickupLocation: "e.g. Casablanca Airport, Hotel..."
        }
      },
      footer: {
        made_by: "Made by"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        cars: "Voitures",
        about: "À propos",
        contact: "Contact",
        rentNow: "Réserver"
      },
      hero: {
        badge: "Location de voitures premium au Maroc",
        title1: "CONDUISEZ VOS",
        title2: "RÊVES",
        title3: "AUJOURD'HUI",
        subtitle: "Découvrez un luxe et des performances inégalés avec notre flotte sélectionnée de véhicules haut de gamme. Nous proposons des locations flexibles, des prix compétitifs et un support 24/7.",
        bookNow: "Réserver Maintenant",
        contactUs: "Contactez-nous"
      },
      features: {
        title: "Pourquoi Nous Choisir",
        subtitle: "Nous offrons la meilleure expérience de location avec un focus sur le luxe et le confort.",
        support: {
          title: "Support 24/7",
          desc: "Notre équipe dédiée est toujours disponible pour vous assistister partout au Maroc."
        },
        fleet: {
          title: "Flotte Premium",
          desc: "Une sélection rigoureuse des véhicules les plus luxueux et puissants au monde."
        },
        flexible: {
          title: "Location Flexible",
          desc: "Locations journalières, hebdomadaires ou mensuelles adaptées à vos besoins."
        },
        price: {
          title: "Meilleur Prix",
          desc: "Une expérience premium à des tarifs compétitifs sans frais cachés."
        }
      },
      home: {
        featured: {
          badge: "Meilleure Sélection",
          title: "Véحicules Vedettes",
          subtitle: "Explorez nos véhicules premium les plus populaires disponibles pour une réservation immédiate. Qualité et performance garanties.",
          viewAll: "Voir Toutes les Voitures"
        }
      },
      carDetails: {
        back: "Retour aux voitures",
        perDay: "par jour",
        bookNow: "Réserver Maintenant",
        contactUs: "Contactez-nous",
        specs: "Spécifications",
        similarCars: "Véhicules Similaires",
        description: "Découvrez l'expérience de conduite ultime avec la {{name}}. Ce véhicule allie puissance, élégance et technologie de pointe pour vous offrir un voyage inoubliable à travers le Maroc.",
        location: "Disponible à",
        transmission: "Transmission",
        fuel: "Carburant",
        capacity: "Capacité"
      },
      specs: {
        automatic: "Automatique",
        manual: "Manuelle",
        petrol: "Essence",
        diesel: "Diesel",
        electric: "Électrique",
        hybrid: "Hybride",
        seats: "{{count}} Sièges"
      },
      cities: {
        badge: "Explorez le Maroc",
        title: "Louez une voiture dans votre ville",
        subtitle: "Trouvez la voiture idéale dans les principales villes du Maroc. Nous livrons à votre porte ou à l'aéroport.",
        casablanca: "Casablanca",
        marrakech: "Marrakech",
        rabat: "Rabat",
        tangier: "Tanger"
      },
      testimonials: {
        title: "Ce Que Disent Nos Clients",
        subtitle: "Ne vous contentez pas de nous croire sur parole. Voici ce que certains de nos clients disent de leur expérience avec nous.",
        roles: {
          businessOwner: "Chef d'entreprise",
          tourist: "Touriste",
          freelancer: "Freelance"
        },
        quotes: {
          omar: "SpeedUp offre la meilleure expérience de location de voitures premium à Casablanca. La Mercedes G-Class que j'ai louée était impeccable.",
          sarah: "Louer un Range Rover pour notre voyage à Marrakech était un rêve. La livraison à l'aéroport était à l'heure.",
          yassine: "Excellent choix de voitures et prix très transparents. Pas de frais cachés. J'ai loué plusieurs fois à Rabat sans aucun problème."
        }
      },
      faqs: {
        title: "Questions Fréquemment Posées",
        subtitle: "Trouvez des réponses aux questions courantes sur notre processus de location, nos politiques et nos services.",
        q1: {
          question: "Quels documents dois-je fournir pour louer une voiture ?",
          answer: "Pour louer une voiture, vous aurez généralement besoin d'un permis de conduire valide (au moins 2 ans d'ancienneté), d'un passeport ou d'une carte d'identité nationale, et d'une carte de crédit pour le dépôt de garantie."
        },
        q2: {
          question: "Y a-t-il une limite d'âge pour louer un véhicule premium ?",
          answer: "Oui, pour notre flotte premium et de luxe, l'âge minimum est généralement de 25 ans. Les jeunes conducteurs (21-24 ans) peuvent louer certains modèles avec des frais supplémentaires."
        },
        q3: {
          question: "Proposez-vous la livraison aux aéroports ?",
          answer: "Absolument ! Nous proposons des services de livraison et de récupération gratuits dans les principaux aéroports marocains, notamment Casablanca (CMN), Marrakech (RAK), Rabat (RBA) et Tanger (TNG)."
        },
        q4: {
          question: "Quelle est votre politique de carburant ?",
          answer: "Nous appliquons une politique 'Plein à Plein'. Nous vous fournissons la voiture avec le plein, et nous vous demandons de la rendre avec le plein."
        },
        q5: {
          question: "L'assurance est-elle incluse dans le prix ?",
          answer: "L'assurance de base (responsabilité civile) est incluse dans toutes les locations. Nous proposons également une assurance tous risques (CDW) avec différents niveaux de franchise."
        }
      },
      booking: {
        title: "Réserver votre {{car}}",
        subtitle: "Remplissez le formulaire ci-dessous pour compléter votre réservation. Nous vous contacterons sous peu.",
        carName: "Modèle de voiture",
        userName: "Nom complet",
        phone: "Numéro de téléphone",
        pickupLocation: "Lieu de prise en charge",
        pickupDate: "Date de début",
        dropDate: "Date de fin",
        submit: "Compléter la réservation sur WhatsApp",
        placeholders: {
          userName: "Entrez votre nom complet",
          phone: "Entrez votre numéro (+212...)",
          pickupLocation: "ex: Aéroport de Casablanca, Hôtel..."
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        cars: "السيارات",
        about: "من نحن",
        contact: "اتصل بنا",
        rentNow: "احجز الآن"
      },
      hero: {
        badge: "تأجير سيارات فاخرة في المغرب",
        title1: "قد",
        title2: "أحلامك",
        title3: "اليوم",
        subtitle: "استمتع بفخامة وأداء لا مثيل لهما مع أسطولنا المختار من السيارات الفاخرة. نقدم تأجيراً مرناً، وأسعاراً تنافسية، ودعماً على مدار الساعة في جميع المدن الكبرى.",
        bookNow: "احجز الآن",
        contactUs: "اتصل بنا"
      },
      features: {
        title: "لماذا تختارنا",
        subtitle: "نحن نقدم أفضل تجربة لتأجير السيارات مع التركيز على الفخامة والراحة والأمان.",
        support: {
          title: "دعم 24/7",
          desc: "فريقنا المتخصص متاح دائماً لمساعدتك في أي مكان في المغرب."
        },
        fleet: {
          title: "أسطول فاخر",
          desc: "مجموعة مختارة من أفخم وأقوى السيارات في العالم."
        },
        flexible: {
          title: "تأجير مرن",
          desc: "تأجير يومي أو أسبوعي أو شهري مصمم خصيصاً لاحتياجاتك."
        },
        price: {
          title: "أفضل سعر",
          desc: "تجربة متميزة بأسعار تنافسية وبدون رسوم مخفية."
        }
      },
      home: {
        featured: {
          badge: "أفضل اختيار",
          title: "السيارات المميزة",
          subtitle: "استكشف سياراتنا الفاخرة الأكثر شهرة والمتاحة للحجز الفوري. الجودة والأداء مضمونان.",
          viewAll: "عرض جميع السيارات"
        }
      },
      carDetails: {
        back: "العودة للسيارات",
        perDay: "يومياً",
        bookNow: "احجز الآن",
        contactUs: "اتصل بنا",
        specs: "المواصفات",
        similarCars: "سيارات مماثلة",
        description: "استمتع بتجربة القيادة القصوى مع {{name}}. تجمع هذه السيارة بين القوة والأناقة والتكنولوجيا المتطورة لتمنحك رحلة لا تُنسى عبر المغرب.",
        location: "متوفرة في",
        transmission: "ناقل الحركة",
        fuel: "نوع الوقود",
        capacity: "السعة"
      },
      specs: {
        automatic: "أوتوماتيك",
        manual: "يدوي",
        petrol: "بنزين",
        diesel: "ديزل",
        electric: "كهربائية",
        hybrid: "هجين",
        seats: "{{count}} مقاعد"
      },
      cities: {
        badge: "استكشف المغرب",
        title: "استأجر سيارة في مدينتك",
        subtitle: "اعثر على السيارة المثالية في المدن الرئيسية عبر المغرب. نحن نسلمها إلى باب منزلك أو المطار.",
        casablanca: "الدار البيضاء",
        marrakech: "مراكش",
        rabat: "الرباط",
        tangier: "طنجة"
      },
      testimonials: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "لا تكتفِ بكلامنا فقط. إليك ما يقوله بعض عملائنا الكرام عن تجربتهم معنا.",
        roles: {
          businessOwner: "صاحب عمل",
          tourist: "سائح",
          freelancer: "مستقل"
        },
        quotes: {
          omar: "تقدم SpeedUp أفضل تجربة لتأجير السيارات الفاخرة في الدار البيضاء. كانت مرسيدس G-Class التي استأجرتها في حالة ممتازة.",
          sarah: "كان استئجار رينج روفر لرحلتنا إلى مراكش حلماً. كان التسليم في المطار في الوقت المحدد.",
          yassine: "مجموعة رائعة من السيارات وأسعار شفافة للغاية. لا توجد رسوم خفية. لقد استأجرت منهم عدة مرات في الرباط ولم أواجه أي مشاكل."
        }
      },
      faqs: {
        title: "الأسئلة الشائعة",
        subtitle: "اعثر على أجوبة للأسئلة الشائعة حول عملية تأجير السيارات وسياساتنا وخدماتنا.",
        q1: {
          question: "ما هي الوثائق التي أحتاجها لاستئجار سيارة؟",
          answer: "لاستئجار سيارة، ستحتاج عادةً إلى رخصة قيادة سارية المفعول (سنتين على الأقل)، وجواز سفر أو بطاقة تعريف وطنية، وبطاقة ائتمان لمبلغ الضمان."
        },
        q2: {
          question: "هل هناك حد أقصى للسن لاستئجار سيارة فاخرة؟",
          answer: "نعم، بالنسبة لأسطولنا المتميز والفاخر، فإن الحد الأدنى للسن هو عادةً 25 عاماً. يمكن للسائقين الشباب (21-24) استئجار بعض الطرز مقابل رسوم إضافية."
        },
        q3: {
          question: "هل توفرون خدمة التوصيل إلى المطارات؟",
          answer: "بالتأكيد! نحن نوفر خدمة التوصيل والاستلام مجاناً في المطارات المغربية الكبرى، بما في ذلك الدار البيضاء ومراكش والرباط وطنجة."
        },
        q4: {
          question: "ما هي سياستكم بخصوص الوقود؟",
          answer: "نحن نطبق سياسة 'من ممتلئ إلى ممتلئ'. نحن نسلمك السيارة بخزان وقود ممتلئ، ونطلب منك إعادتها ممتلئة."
        },
        q5: {
          question: "هل التأمين مشمول في السعر؟",
          answer: "التأمين الأساسي (المسؤولية تجاه الغير) مشمول في جميع الإيجارات. كما نقدم تأميناً شاملاً (CDW) مع مستويات مختلفة من مبلغ التحمل."
        }
      },
      booking: {
        title: "احجز سيارتك {{car}}",
        subtitle: "يرجى ملء النموذج أدناه لإكمال عملية الحجز. سنتصل بك قريباً للتأكيد.",
        carName: "نوع السيارة",
        userName: "الاسم الكامل",
        phone: "رقم الهاتف",
        pickupLocation: "مكان الاستلام",
        pickupDate: "تاريخ الاستلام",
        dropDate: "تاريخ التسليم",
        submit: "إكمال الحجز عبر واتساب",
        placeholders: {
          userName: "أدخل اسمك الكامل",
          phone: "أدخل رقم هاتفك (+212...)",
          pickupLocation: "مثال: مطار الدار البيضاء، فندق..."
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
