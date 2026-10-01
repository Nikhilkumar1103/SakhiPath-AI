// e-Shram 5-Step Micro-Guidance Flow Data

export const eshramFlowData = [
  {
    id: 1,
    stepNumber: 1,
    totalSteps: 5,
    title: {
      'ta-IN': "உங்களிடம் ஆதார் கார்டு உள்ளதா?",
      'en-IN': "Do you have an Aadhaar Card?"
    },
    audioScript: {
      'ta-IN': "முதல் படி. உங்களிடம் ஆதார் கார்டு உள்ளதா? ஆம் என்றால் 'ஆம்' அழுத்தவும், தெரியவில்லை என்றால் 'எனக்கு தெரியாது' அழுத்தவும்.",
      'en-IN': "Step 1. Do you have an Aadhaar card with you? Tap YES or tap I DON'T KNOW."
    },
    idkExplanation: {
      'ta-IN': "ஆதார் கார்டு என்பது இந்திய அரசாங்கம் வழங்கிய 12 எண்கள் மற்றும் உங்கள் புகைப்படம் கொண்ட பிளாஸ்டிக் அல்லது பேப்பர் அட்டை.",
      'en-IN': "An Aadhaar Card is a card issued by the Government of India containing your photo and a 12-digit unique number."
    },
    idkExample: {
      'ta-IN': "உதாரணம்: உங்கள் பெயர், முகவரி மற்றும் 1234 5678 9012 என 12 எண்கள் எழுதப்பட்டிருக்கும் அட்டை.",
      'en-IN': "Example: A blue/red card showing your picture and 12 numbers like 1234 5678 9012."
    },
    visualType: "aadhaar",
    docName: {
      'ta-IN': "ஆதார் அட்டை (Aadhaar Card)",
      'en-IN': "Aadhaar Card"
    },
    adviceIfNo: {
      'ta-IN': "e-Shram பதிவு செய்ய ஆதார் கார்டு கட்டாயம் தேவை. அருகில் உள்ள இ-சேவை மையத்திற்குச் சென்று ஆதார் அட்டை பெற விண்ணப்பிக்கவும்.",
      'en-IN': "An Aadhaar Card is mandatory for e-Shram. Please visit your nearest e-Sevai / CSC centre to apply for an Aadhaar Card."
    }
  },
  {
    id: 2,
    stepNumber: 2,
    totalSteps: 5,
    title: {
      'ta-IN': "உங்கள் ஆதார் கார்டில் மொபைல் எண் இணைக்கப்பட்டுள்ளதா?",
      'en-IN': "Is your mobile number linked to your Aadhaar Card?"
    },
    audioScript: {
      'ta-IN': "இரண்டாம் படி. உங்கள் ஆதார் கார்டுடன் உங்கள் போன் நம்பர் இணைக்கப்பட்டுள்ளதா? உங்கள் போனுக்கு ரகசிய OTP எண் வருமா?",
      'en-IN': "Step 2. Is your phone number linked to your Aadhaar card? Do you receive OTP SMS codes on your phone?"
    },
    idkExplanation: {
      'ta-IN': "நீங்கள் ஆதார் கார்டு எடுத்தபோது கொடுத்த போன் நம்பருக்கு 6 இலக்க OTP ரகசிய குறுஞ்செய்தி (SMS) வருவதுதான் இணைக்கப்பட்ட போன் எண் ஆகும்.",
      'en-IN': "When you use your Aadhaar, a 6-digit OTP code sent as an SMS to your phone means your mobile number is linked."
    },
    idkExample: {
      'ta-IN': "உதாரணம்: வங்கியில் அல்லது கடையில் ஆதார் எண் கொடுத்தால் உங்கள் மொபைலுக்கு உடனே SMS வருகிறதா?",
      'en-IN': "Example: Do you get an instant SMS code on your phone when using Aadhaar services?"
    },
    visualType: "mobile_otp",
    docName: {
      'ta-IN': "இணைக்கப்பட்ட மொபைல் போன் (Mobile with OTP)",
      'en-IN': "Linked Mobile Phone with OTP"
    },
    adviceIfNo: {
      'ta-IN': "மொபைல் எண் இணைக்கப்படாவிட்டாலும் கவலைப்பட வேண்டாம்! அருகில் உள்ள பொது சேவை மையத்தில் (CSC) கைரேகை மூலம் பதிவு செய்யலாம்.",
      'en-IN': "Don't worry if your mobile is not linked! You can still register using biometric fingerprint scanning at any nearby CSC center."
    }
  },
  {
    id: 3,
    stepNumber: 3,
    totalSteps: 5,
    title: {
      'ta-IN': "உங்களிடம் வங்கி கணக்கு பாஸ்புக் உள்ளதா?",
      'en-IN': "Do you have a Bank Account Passbook?"
    },
    audioScript: {
      'ta-IN': "மூன்றாம் படி. உங்களிடம் வங்கி கணக்கு பாஸ்புக் உள்ளதா? அரசு நிதி உதவி நேரடியாக உங்கள் வங்கி கணக்கில் செலுத்தப்படும்.",
      'en-IN': "Step 3. Do you have a bank account passbook? Government benefits will be deposited directly into your bank account."
    },
    idkExplanation: {
      'ta-IN': "வங்கி கணக்கு பாஸ்புக் என்பது வங்கியில் பணத்தை சேமிக்க உங்களுக்கு வழங்கப்படும் கணக்கு எண் மற்றும் IFSC குறியீடு கொண்ட புத்தகம்.",
      'en-IN': "A Bank Passbook is a booklet provided by the bank showing your account number, branch name, and IFSC code."
    },
    idkExample: {
      'ta-IN': "உதாரணம்: இந்தியன் வங்கி, ஸ்டேட் பாங்க் அல்லது கூட்டுறவு வங்கியில் வழங்கப்படும் சிறிய கணக்கு புத்தகம்.",
      'en-IN': "Example: A small book given by Indian Bank, SBI, Canara Bank, or Post Office Bank."
    },
    visualType: "bank_passbook",
    docName: {
      'ta-IN': "வங்கி கணக்கு பாஸ்புக் (Bank Passbook)",
      'en-IN': "Bank Account Passbook"
    },
    adviceIfNo: {
      'ta-IN': "வங்கி கணக்கு இல்லையென்றால், உங்கள் கிராம அஞ்சலகத்தில் (Post Office) 5 நிமிடங்களில் இந்தியா போஸ்ட் பேமெண்ட்ஸ் வங்கி கணக்கு தொடங்கலாம்.",
      'en-IN': "If you don't have a bank account, you can open an India Post Payments Bank (IPPB) account in 5 minutes at your local Post Office."
    }
  },
  {
    id: 4,
    stepNumber: 4,
    totalSteps: 5,
    title: {
      'ta-IN': "உங்கள் வயது 16 முதல் 59 வயதிற்குள் உள்ளதா?",
      'en-IN': "Is your age between 16 and 59 years?"
    },
    audioScript: {
      'ta-IN': "நான்காம் படி. உங்கள் வயது 16 முதல் 59 வயதிற்குள் உள்ளதா? e-Shram திட்டத்திற்கு இந்த வயது வரம்பு அவசியம்.",
      'en-IN': "Step 4. Is your age between 16 and 59 years? This age criteria is required for e-Shram registration."
    },
    idkExplanation: {
      'ta-IN': "நீங்கள் 16 வயது பூர்த்தியடைந்தவராகவும், 60 வயது இன்னும் எட்டாதவராகவும் இருக்க வேண்டும்.",
      'en-IN': "You must be at least 16 years old and not yet completed 60 years of age."
    },
    idkExample: {
      'ta-IN': "உதாரணம்: உங்கள் ஆதார் கார்டில் உள்ள பிறந்த ஆண்டைப் பார்த்து உங்கள் வயதைக் கணக்கிடலாம்.",
      'en-IN': "Example: You can check your birth year printed on your Aadhaar card to find your age."
    },
    visualType: "age_check",
    docName: {
      'ta-IN': "வயது சான்று (16 - 59 வயது)",
      'en-IN': "Age Criteria (16 - 59 Years)"
    },
    adviceIfNo: {
      'ta-IN': "மன்னிக்கவும், e-Shram திட்டம் 16 முதல் 59 வயதுடைய தொழிலாளர்களுக்கு மட்டுமே பொருந்தும். 60 வயதுக்கு மேற்பட்டவர்கள் முதியோர் ஓய்வூதியத் திட்டத்திற்கு விண்ணப்பிக்கலாம்.",
      'en-IN': "e-Shram registration is specifically for workers aged 16 to 59. Individuals aged 60 and above can apply for Senior Pension Schemes."
    }
  },
  {
    id: 5,
    stepNumber: 5,
    totalSteps: 5,
    title: {
      'ta-IN': "நீங்கள் அமைப்பசாரா தொழிலாளரா? (கூலி, தையல், விவசாயம், வீட்டு வேலை)",
      'en-IN': "Are you an unorganized worker? (Daily wage, Tailor, Agriculture, Domestic worker)"
    },
    audioScript: {
      'ta-IN': "ஐந்தாம் படி. நீங்கள் மாதச் சம்பளம் பெறாத சுயதொழில் செய்பவரா? அல்லது கூலி வேலை செய்பவரா?",
      'en-IN': "Step 5. Do you work without a fixed monthly government salary, doing daily wage work, farming, tailoring, or domestic work?"
    },
    idkExplanation: {
      'ta-IN': "மாதாந்திர PF அல்லது ESI பிடித்தம் இல்லாத, சொந்தமாகவோ அல்லது நாள் கூலிக்கோ வேலை செய்யும் அத்தனை தொழிலாளர்களும் அமைப்பசாரா தொழிலாளர்கள்.",
      'en-IN': "Unorganized workers are individuals working without fixed government jobs or EPF/ESI benefits, earning through daily wages or small work."
    },
    idkExample: {
      'ta-IN': "உதாரணம்: தையல் தொழிலாளி, விவசாயக் கூலி, கட்டடத் தொழிலாளி, வீட்டு வேலை செய்பவர், தெருவோர வியாபாரி.",
      'en-IN': "Example: Tailors, agricultural workers, construction workers, domestic helpers, street vendors, and home-based artisans."
    },
    visualType: "unorganized_worker",
    docName: {
      'ta-IN': "தொழில் விவரம் (Unorganized Occupation)",
      'en-IN': "Unorganized Worker Status"
    },
    adviceIfNo: {
      'ta-IN': "உங்களுக்கு அரசால் PF மற்றும் ESI பிடித்தம் செய்யப்பட்டால் e-Shram அட்டை பெற முடியாது.",
      'en-IN': "If you are covered under EPF (Provident Fund) or ESI scheme, you are not eligible for e-Shram card registration."
    }
  }
];
