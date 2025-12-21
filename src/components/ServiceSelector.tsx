import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryHeading } from "./CategoryHeading";
import { ServiceItem } from "./ServiceItem";
import { TotalBar } from "./TotalBar";
import { ClientInfo } from "./ClientInfo";
import { categories, getServicesByCategory, ServiceItem as ServiceItemType } from "@/data/servicesData";

export const ServiceSelector = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [customPrices, setCustomPrices] = useState<Record<string, number>>({});
  const contentRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  const handleScroll = useCallback(() => {
    // Skip updating active category during programmatic scroll
    if (isScrollingRef.current) return;
    if (!contentRef.current) return;

    const container = contentRef.current;
    const containerTop = container.scrollTop;

    // Anchor a bit below the top padding so the active category feels stable.
    const anchor = containerTop + 96; // Increased anchor to match scroll-pt-24

    let closestCategory = 0;
    let closestDistance = Infinity;

    categoryRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const distance = Math.abs(ref.offsetTop - anchor);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCategory = index;
      }
    });

    setActiveCategory(closestCategory);
  }, []);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToCategory = (index: number) => {
    const ref = categoryRefs.current[index];
    if (!ref) return;

    // Immediately mark active and block scroll handler during animation
    setActiveCategory(index);
    isScrollingRef.current = true;

    ref.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Re-enable scroll handler after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800); // Increased timeout for potentially longer scrolls
  };

  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setCustomPrices(prevPrices => {
          const newPrices = { ...prevPrices };
          delete newPrices[id];
          return newPrices;
        });
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCustomPriceChange = (id: string, price: number) => {
    setCustomPrices(prev => ({ ...prev, [id]: price }));
  };

  const getCategorySelectionState = (category: string) => {
    const services = getServicesByCategory(category);
    const selectedCount = services.filter(s => selectedServices.has(s.id)).length;
    
    if (selectedCount === 0) {
      return { checked: false, indeterminate: false };
    } else if (selectedCount === services.length) {
      return { checked: true, indeterminate: false };
    } else {
      return { checked: false, indeterminate: true };
    }
  };

  const toggleCategory = (category: string) => {
    const services = getServicesByCategory(category);
    const { checked, indeterminate } = getCategorySelectionState(category);
    
    setSelectedServices(prev => {
      const next = new Set(prev);
      
      if (checked) {
        // If all selected, deselect all
        services.forEach(service => next.delete(service.id));
      } else {
        // If none or some selected, select all
        services.forEach(service => next.add(service.id));
      }
      
      return next;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    categories.forEach(category => {
      getServicesByCategory(category).forEach(service => {
        if (selectedServices.has(service.id)) {
          total += customPrices[service.id] ?? service.price;
        }
      });
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left Side: Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Company Logo" className="h-8 w-8" />
            <span className="font-bold text-foreground text-lg">
              Mayur & Company Chartered Accountants
            </span>
          </div>

          {/* Right Side: App Name */}
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              Service Proposal Maker
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Left Panel - Categories */}
        <aside className="w-72 lg:w-80 shrink-0 sticky top-20 h-[calc(100vh-120px)] hidden md:flex flex-col justify-center -ml-4 pl-0 pr-4 py-4 overflow-hidden">
          <nav className="space-y-2">
            {categories.map((category, index) => {
              const selectionState = getCategorySelectionState(category);
              return (
                <CategoryHeading
                  key={category}
                  category={category}
                  isActive={index === activeCategory}
                  distance={Math.abs(index - activeCategory)}
                  onClick={() => scrollToCategory(index)}
                  checked={selectionState.checked}
                  indeterminate={selectionState.indeterminate}
                  onCheckboxChange={(e) => {
                    e.stopPropagation();
                    toggleCategory(category);
                  }}
                />
              );
            })}
          </nav>
        </aside>

        {/* Middle & Right Panel - Services with Prices */}
        <main 
          ref={contentRef}
          className="flex-1 overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide px-6 lg:px-12 py-8 scroll-pt-24 pb-[70vh]"
        >
          {/* Client Information Section */}
          <ClientInfo />

          {categories.map((category, categoryIndex) => {
            const services = getServicesByCategory(category);
            
            return (
              <div
                key={category}
                ref={el => categoryRefs.current[categoryIndex] = el}
                className="mb-16"
              >
                {/* Mobile category header */}
                <motion.h2 
                  className="md:hidden text-2xl font-bold text-foreground mb-6 sticky top-0 bg-background/95 backdrop-blur-sm py-3 -mx-6 px-6 border-b border-border"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.h2>

                {/* Services list */}
                <div className="divide-y divide-border/50">
                  <AnimatePresence mode="popLayout">
                    {services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: serviceIndex * 0.05 }}
                      >
                        <ServiceItem
                          id={service.id}
                          service={service.service}
                          price={customPrices[service.id] ?? service.price}
                          originalPrice={service.price}
                          billingCycle={service.billingCycle}
                          isSelected={selectedServices.has(service.id)}
                          onToggle={() => toggleService(service.id)}
                          onCustomPriceChange={(newPrice) => handleCustomPriceChange(service.id, newPrice)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </main>
      </div>

      {/* Total Bar */}
      <TotalBar 
        total={calculateTotal()} 
        selectedCount={selectedServices.size}
      />
    </div>
  );
};