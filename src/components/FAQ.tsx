
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "When will Enligne be available in my area?",
      answer: "We're rapidly expanding our service areas. During early access, we'll be launching in major metropolitan areas first. Sign up for early access to be notified when we arrive in your location."
    },
    {
      question: "How does the early access program work?",
      answer: "Early access members will be the first to use Enligne when we launch in their area. You'll receive exclusive perks."
    },
    {
      question: "What businesses are available on Enligne?",
      answer: "We're partnering with a wide variety of restaurants, supermarkets bakeries and many more local businesses. Our selection varies by location, but we're constantly adding new partners to provide you with the best dining and shoping options in your area."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "While some restaurants may set their own minimum order requirements, Enligne itself does not enforce a minimum order amount. However, orders below certain amounts may incur a small order fee to ensure our delivery service remains sustainable."
    },
    {
      question: "How do I become a delivery partner?",
      answer: "We're always looking for reliable delivery partners! You can apply directly through our website once we launch in your area. Delivery partners enjoy flexible scheduling, competitive pay, and performance-based bonuses."
    },
    {
      question: "How do I join as a seller or vendor?",
      answer: "We are currently application only to vendors but will soon expand our network."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-enligne-black">
          Frequently Asked <span className="text-enligne-red">Questions</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-enligne-black hover:text-enligne-red">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
