import React, { useState } from 'react';

const faqs = [
  {
    q: 'The expense windows adapted sir. Wrong widen drawn',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    q: 'Six curiosity day assurance bed necessary?',
    a: 'lorem23dfkjsfkds   djfskj'
  },
  {
    q: 'Produce say the ten moments parties?',
    a: 'Answer for ten moments parties.'
  },
  {
    q: 'Simple innate summer fat appear basket his desire joy?',
    a: 'Answer for simple innate summer.'
  },
  {
    q: 'Outward clothes promise at gravity do excited?',
    a: 'Answer for outward clothes promise.'
  },
];

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <section className="flex-1 w-full">
      <div className="rounded-2xl p-3 sm:p-5 shadow-lg">
        <div className="text-base sm:text-lg font-bold mb-2 text-yellow-50">FAQ</div>

        {faqs.map((faq, i) => (
          <div className="mb-2" key={i}>
            <button 
              className="bg-yellow-50 text-neutral-900 border-none rounded-lg px-3 py-3 sm:py-2 text-sm sm:text-base font-semibold w-full text-left cursor-pointer flex justify-between items-center"
              onClick={() => setFaqOpen(faqOpen === i ? null : i)}
            >
              <span className="text-xs sm:text-sm pr-2">{faq.q}</span> <span className="text-lg sm:text-xl flex-shrink-0">{faqOpen === i ? '-' : '+'}</span>
            </button>
            {faqOpen === i && (
              <div className="bg-neutral-700 text-yellow-200 rounded-lg px-3 py-3 sm:py-2 mt-1 text-xs sm:text-sm">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 